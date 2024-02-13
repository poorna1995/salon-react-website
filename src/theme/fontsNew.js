import MontserratBold from "fonts/montserrat/Montserrat-Bold.ttf";

import MontserratMedium from "fonts/montserrat/Montserrat-Medium.ttf";
import MontserratRegular from "fonts/montserrat/Montserrat-Regular.ttf";

const InterRegular = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
      local('Montserrat'),
      local('Montserrat-Regular'),
      url(${MontserratRegular}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const InterMedium = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
      local('Montserrat'),
      local('Montserrat-Medium'),
      url(${MontserratMedium}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const InterBold = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
      local('Montserrat'),
      local('Montserrat-Bold'),
      url(${MontserratBold}) format('ttf')
    `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const fontfaces = [InterRegular, InterMedium, InterBold];

export default fontfaces;
