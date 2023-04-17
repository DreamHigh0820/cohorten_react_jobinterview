/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingBg1': "url('assets/landing-1.png')",
        'login' : "url('assets/login/login_dashboard.png')",
        'resetPassDashboard': "url('assets/login/pass_reset_dashboard.png')",
      }
    },
  },
  plugins: [],
}