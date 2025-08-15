/** @type {import('tailwindcss').Config} /
module.exports = {
content: ["./app/**/.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
theme: {
extend: {
colors: {
brand: {
50: "#f5f7ff",
100: "#e8edff",
200: "#cdd8ff",
300: "#aabaff",
400: "#7f93ff",
500: "#566aff",
600: "#3d49e6",
700: "#3139b3",
800: "#2a3191",
900: "#252a78"
}
}
}
},
plugins: [require("@tailwindcss/typography")]
};
