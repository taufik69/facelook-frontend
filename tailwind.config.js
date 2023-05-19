/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary_color: "var(--primary_color)",
      secondary_color: "var(--secondary_color)",
      third_color: "var(--third_color)",
      primary_text_color: "var(--primary_text_color)",
      secondary_text_color: "var(--secondary_text_color)",
      main_color: "var(--main_color)",
      rear_color: "var(--rear_color)",
      rear_black: "var(--rear_black)",
      normal_white_color: "var(--normal_white_color)",
      page_body_color: "var(--page_body_color)",
      error_color: "var(--error_color)",
      search_color: "var( --search_color)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
