'use client';

import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [accepted, setAccepted] = useState(false);
  const [ipAddress, setIpAddress] = useState('');
  const [pageUrl, setPageUrl] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let activityTimer;

    const resetActivityTimer = () => {
      clearTimeout(activityTimer);
      activityTimer = setTimeout(() => {
        setShowPopup(true); // Show the popup after 5 seconds of inactivity
      }, 1000); // Adjust this value as needed for the inactivity timeout
    };

    const handleActivity = () => {
      if (!accepted) {
        resetActivityTimer();
      }
    };

    // Reset activity timer on user interaction
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('mousedown', handleActivity);
    window.addEventListener('keypress', handleActivity);

    resetActivityTimer(); // Initial setup

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('mousedown', handleActivity);
      window.removeEventListener('keypress', handleActivity);
      clearTimeout(activityTimer);
    };
  }, [accepted]);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (response.ok) {
          const data = await response.json();
          setIpAddress(data.ip);
          console.log('IP Address fetched:', data.ip);
        } else {
          throw new Error('Failed to fetch IP address');
        }
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
    const currentPageUrl = window.location.href;
    setPageUrl(currentPageUrl);
    console.log('Page URL set:', currentPageUrl);
  }, []);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');

    if (hasConsented === 'accepted') {
      setAccepted(true);
    } else if (hasConsented === 'declined') {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = async () => {
    setAccepted(true);
    localStorage.setItem('cookieConsent', 'accepted');

    console.log('Sending data to API:', { ipAddress, pageUrl });

    try {
      const response = await fetch('/api/cookies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ipAddress, pageUrl }), // Include the page URL
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('API response:', responseData);

      console.log('User consent recorded successfully');
    } catch (error) {
      console.error('Error recording user consent:', error);
    }
  };

  const handleDecline = () => {
    setShowPopup(false); // Hide the popup if declined
    localStorage.setItem('cookieConsent', 'declined');
    // Optionally, you can handle additional logic for declined users here
  };

  if (accepted || !showPopup) return null; // Hide the component once accepted or if not showing

  return (
<div className="bg-white border fixed bottom-0 left-0 w-full z-50 px-6 py-2">
      <div className="bg-white shadow-5xl">
        <p className="mb-2 font-sans custom-h5">
          In order to provide complete functionality, this web site needs your
          explicit consent to store browser cookies. It is recommended that you
          allow all cookies.
        </p>
        <div className="flex gap-8 justify-end">
          <button
            className="underline font-sans font-medium py-2 px-4 rounded"
            onClick={handleDecline}
          >
            Decline
          </button>

          <button
            className="bg-blue font-sans text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
