/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        Primary: '#FFE1E1',
        Green: '#90A17D',
        DarkGreen: '#829460',
        Gray: '#EEEEEE',
      },
      fontFamily: {
        courier: ["Courier Prime", 'monospace'],
      },
      backgroundImage: {
        'letter': "url('assets/images/paper.jpg')", // Define your custom image
        'flower': "url('assets/images/12689541_5044560.svg')", // Define your custom image
      },
    },
  },
  plugins: [],
}