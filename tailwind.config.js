/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem', // Adjust default padding here
          sm: '2rem',      // Padding for sm screens and up
          md: '2rem',
          lg:'2.75rem',
          "2xl":'3rem',      // Padding for md screens and up
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "768px", 
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        'h1-2xl': '4.5rem',  
        'h1-lg': '3rem', 
        'h1-md': '2.50rem', 
        'h1-sm': '2rem', 

        'h2-2xl': '2.75rem',  
        'h2-lg': '2.125rem', 
        'h2-md': '2rem', 
        'h2-sm': '1.75rem', 

        'h3-2xl': '2.25rem',  
        'h3-lg': '1.75rem', 
        'h3-md': '1.125rem', 
        'h3-sm': '1rem', 

        'h4-2xl': '1.25rem', 
        'h4-lg': '1.125rem', 
        'h4-md': '1rem', 
        'h4-sm': '.875', 

        'h5-2xl': '1.125rem', 
        'h5-lg': '1rem', 
        'h5-md': '.875', 
        'h5-sm': '.75',
        
        'h6-2xl': '1rem',  
        'h6-lg': '.875rem',
        'h6-md': '.75', 
        'h6-sm': '0.5', 


        'xs': '.75rem',     // Example custom font size
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      lineHeight: {
        'custom-36': '36px',
        'custom-28' : '28px',
      },
      maxHeight: {
        '0': '0',
        '1/10': '10%',
        '1/6': '40%',
        '1/5' : "20%",
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '40': '40%',
        '4/5': '80%',
        'full': '100%',
      },
      minHeight:{
        '200': '200px',
        '260' : '260px',
        '50': "50%",
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        pops: ['Poppins', 'sans-serif'],
        sans: ['Oswald', 'sans-serif'],
      },
      fontWeight: {
        'light' : '300',
        "regular" : "400",
        "medium" : "500",
        'semibold': '600',
        "bold" : "700"
      },
      spacing: {
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '7': '1.75rem',    // 28px
        '8': '2rem',       // 32px
        '9': '2.25rem',    // 36px
        '10': '2.5rem',    // 40px
        '11': '2.75rem',   // 44px
        '12': '3rem',      // 48px
        '14': '3.5rem',    // 56px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '28': '7rem',      // 112px
        '32': '8rem',      // 128px
        '36': '9rem',      // 144px
        '40': '10rem',     // 160px
        '44': '11rem',     // 176px
        '48': '12rem',     // 192px
        '52': '13rem',     // 208px
        '56': '14rem',     // 224px
        '60': '15rem',     // 240px
        '64': '16rem',     // 256px
        '72': '18rem',     // 288px
        '80': '20rem',     // 320px
        '96': '24rem',     // 384px
        'px': '1px',
        '0': '0',
        'auto': 'auto',
        'full': '100%',
        'screen': '100vw',
        '-px': '-1px',
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
        '-5': '-1.25rem',
        '-6': '-1.5rem',
        '-7': '-1.75rem',
        '-8': '-2rem',
        '-9': '-2.25rem',
        '-10': '-2.5rem',
        '-11': '-2.75rem',
        '-12': '-3rem',
        '-14': '-3.5rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-28': '-7rem',
        '-32': '-8rem',
        '-36': '-9rem',
        '-40': '-10rem',
        '-44': '-11rem',
        '-48': '-12rem',
        '-52': '-13rem',
        '-56': '-14rem',
        '-60': '-15rem',
        '-64': '-16rem',
        '-72': '-18rem',
        '-80': '-20rem',
        '-96': '-24rem',
        '1/5' : '20%',
        '15' : '15%',
        '1/11' : '5%',
        '1/6': '45%', 
        '1/10' :'10%',
      },
      height: {
        '50': '200px',
      },
      height:{
        '80' : '80px',
        '60': '60vh',
      },
      borderWidth: {
        '12': '12px',  // Add this line
      },
      letterSpacing: {
        'custom-wide': '2px',
      },
      colors:{
        black: "#000000",
        white: "#ffffff",
        green: "#4c7437",
        blue: "rgba(14, 74, 125, 1)",  
        gray: "#CCC", 
        darkgray : "#EFEFF0", 
        red: "#DC143C",
        lightgray: "#f9f9f9",
        grayS: "#C0C0C0",
        servicegray: "#003645",
      },
      translate: {
        '-1/2': '-50%',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }
    }   
      
    },
  },
  plugins: [],
};
