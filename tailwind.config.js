/** @type {import('tailwindcss').Config} */
module.exports = {
  // 启用深色模式
  darkMode: 'class',
  // 其他样式的深色模式
  // 默认情况下，dark 变体只对:
  // backgroundColor、borderColor、gradientColorStops、placeholderColor 和 textColor 启用 
  variants: {
    extend: {
      textOpacity: ['dark'],
    },
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        'half': "50%"
      },
      gap: {
        '5px': '0.31rem',
        '20px': '3.12rem'
      },
      height: {
        '25': '1.56rem',
        '50': '3.12rem'
      },
      width: {
        '25': '1.56rem',
        '50': '3.12rem'
      },
      padding: {
        "18": '1.12rem',
        "26": "1.62rem"
      },
      margin: {
        "10": '0.63rem',
        "25": "1.56rem"
      }
    },
  },
  plugins: [
  ],
}

