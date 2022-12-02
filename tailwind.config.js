const theme = {};

const apply = (apply, styles) => ({
  ["@apply " + apply]: {},
  ...styles,
});

const goCashComponentsPlugin = ({ addComponents, theme }) => {
  const accounts = {
    ".accounts-container": apply(
      "w-full min-h-screen mx-auto flex flex-col bg-slate-200 gap-4 p-4 m-4"
    ),
    ".company-name": apply(
      "flex justify-start text-lg items-center font-extrabold text-blue-500"
    ),
    ".accounts-title": apply(
      "flex justify-center text-3xl items-center font-extrabold py-4"
    ),
    ".account-container": apply(
      "cursor-pointer flex flex-col w-full rounded-xl shadow-xl overflow-hidden"
    ),
    ".account-title": apply(
      "flex px-6 h-24 flex-row gap-2 text-center justify-between items-center"
    ),
    ".account-balance": apply("text-center text-4xl"),
  };
  addComponents(accounts);
  const transactions = {
    ".transaction-line": apply(
      "w-full h-16 flex bg-white flex-row justify-between px-4 items-center border-b-2"
    ),
    ".transaction-line-label": apply("flex flex-row items-center gap-8"),
    ".transaction-line-icon-container": apply(
      "w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center"
    ),
    ".transaction-line-icon": apply("w-10 h-10 rounded-full bg-slate-300"),
    ".transaction-date": apply("w-full leading-8 bg-slate-200 px-4"),
  };
  addComponents(transactions);
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme,
  variants: {
    extend: {},
  },
  plugins: [goCashComponentsPlugin],
};
