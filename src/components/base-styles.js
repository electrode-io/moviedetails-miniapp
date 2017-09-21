/*eslint no-unused-vars: 0*/

// Colors
const black4 = { color: "#444444" }; // Black
const black2 = { color: "#222222" }; // Blacker
const darkGray = { color: "#707070" };
const blue = { color: "#007dc6" };
const lightBlue = { color: "#208BF4" };
const white = { color: "#ffffff" };
const blueBackground = { backgroundColor: "#f1f7fd" };
const blueBackground2 = { backgroundColor: "#007dc6" };
const radioBlueBackground = { backgroundColor: "#007dc6" };
const gray = { color: "#888888" };
const grayBorderColor = { borderColor: "#c2cfd6" };
const orange = { color: "#f47421" };
const orange2 = { color: "#FA6400" };
const green = { color: "#8cb945" };
const treeGreen = { color: "#088921" };
const red = { color: "#F63E39" };
const defaultBorderColor = { borderColor: "#c2cfd6" };
const focusedBorderColor = { borderColor: "#007dc6" };
const blueBorderColor = { borderColor: "#208BF4" };
const warningYellowBackground = { backgroundColor: "#fff6de" };
const warningYellowBorderColor = { borderColor: "#ffc120" };
const alertRedBackground = { backgroundColor: "#FFDEDE" };
const alertRedBorderColor = { borderColor: "#F42121" };
const orangeBackground = { backgroundColor: "#f69643" };
const orangeBackground2 = { backgroundColor: "#FA6400" };
const greenBackground = { backgroundColor: "#76c143" };
const orangeBorderColor = { borderColor: "#f69643" };
const successGreenBackground = { backgroundColor: "#edf4e3" };
const successGreenBorderColor = { borderColor: "#8cb945" };
const transparentBackground = { backgroundColor: "transparent" };
const grayBackground = { backgroundColor: "#949494" };
const whiteBackground = { backgroundColor: "#ffffff" };

// Font weights
const lightFontWeight = { fontWeight: "200" };
const regularFontWeight = { fontWeight: "400" };
const semiboldFontWeight = { fontWeight: "600" };
const boldFontWeight = { fontWeight: "700" };

// Fonts
const regularFont = { fontFamily: "System", ...black2, ...regularFontWeight };
const lightFont = { ...regularFont, ...lightFontWeight };
const semiboldFont = { ...regularFont, ...semiboldFontWeight };
const boldFont = { ...regularFont, ...boldFontWeight };

// Typography
const title1Text = { ...lightFont, fontSize: 28, letterSpacing: 0.13 };
const strongTitle1Text = { ...title1Text, ...boldFont };
const title2Text = { ...regularFont, fontSize: 22, letterSpacing: 0.16 };
const strongTitle2Text = { ...title2Text, ...boldFont };
const title3Text = { ...regularFont, fontSize: 20, letterSpacing: 0.19 };
const semiStrongTitle3Text = { ...title3Text, ...semiboldFont };
const strongTitle3Text = { ...title3Text, ...boldFont };
const title4Text = { ...regularFont, fontSize: 19, letterSpacing: -1 };
const semiStrongTitle4Text = { ...title4Text, ...semiboldFont };
const strongTitle4Text = { ...title4Text, ...boldFont };
const headlineText = { ...boldFont, fontSize: 17, letterSpacing: -0.24 };
const bodyText = { ...headlineText, ...regularFont };
const strongBodyText = { ...bodyText, ...semiboldFont };
const calloutText = { ...regularFont, fontSize: 16, letterSpacing: -0.2 };
const semiStrongCalloutText = { ...calloutText, ...semiboldFont };
const strongCalloutText = { ...calloutText, ...boldFont };
const subheaderText = { ...regularFont, fontSize: 15, letterSpacing: -0.16 };
const semiStrongSubheaderText = { ...subheaderText, ...boldFont };
const strongSubheaderText = { ...subheaderText, ...boldFont };
const footnoteText = { ...regularFont, fontSize: 14, letterSpacing: -0.06 };
const strongFootnoteText = { ...footnoteText, ...boldFont };
const caption1Text = { ...regularFont, fontSize: 13, letterSpacing: 0 };
const strongCaption1Text = { ...caption1Text, ...boldFont };
const caption2Text = { ...regularFont, fontSize: 12, letterSpacing: 0 };
const strongCaption2Text = { ...caption2Text, ...boldFont };
const caption3Text = { ...regularFont, fontSize: 11, letterSpacing: 0.06 };
const strongCaption3Text = { ...caption3Text, ...boldFont };

// UI components
const defaultBorder = {
  borderWidth: 1,
  borderRadius: 4,
  overflow: "hidden",
  ...defaultBorderColor,
};
const orangeBorder = { ...defaultBorder, ...orangeBorderColor };
const blueBorder = { ...defaultBorder, ...blueBorderColor };
const focusedBorder = { ...defaultBorder, ...focusedBorderColor };
const warningBorder = { ...defaultBorder, ...warningYellowBorderColor };
const errorBorder = { ...defaultBorder, ...alertRedBorderColor };
const grayBorder = { ...defaultBorder, ...grayBorderColor };

// Helper & convenience styles
const containerSideMargins = { marginLeft: 14, marginRight: 14 };
const flexRow = { flexDirection: "row" };
const centeredFlexRow = { flexDirection: "row", alignItems: "center" };
const flexColumn = { flexDirection: "column" };
const flex1 = { flexGrow: 1 };
const horizontalLine = { backgroundColor: "#e9e9e9", height: 1 };

export const bs = {
  // Colors
  black2,
  black4,
  gray,
  blue,
  lightBlue,
  white,
  orange,
  orange2,
  green,
  treeGreen,
  red,
  darkGray,

  // Helper & convenience styles
  flexRow,
  centeredFlexRow,
  flexColumn,
  flex1,
  containerSideMargins,
  horizontalLine,

  // Backgrounds colors and borders
  orangeBackground,
  orangeBackground2,
  grayBackground,
  greenBackground,
  orangeBorder,
  blueBorder,
  transparentBackground,
  whiteBackground,
  defaultBorder,
  focusedBorder,
  warningBorder,
  errorBorder,
  warningYellowBackground,
  warningYellowBorderColor,
  blueBackground,
  blueBackground2,
  radioBlueBackground,
  defaultBorderColor,
  focusedBorderColor,
  grayBorder,
  successGreenBorderColor,
  successGreenBackground,
  alertRedBackground,
  alertRedBorderColor,

  // Text styles
  title1Text,
  strongTitle1Text,
  title2Text,
  strongTitle2Text,
  title3Text,
  semiStrongTitle3Text,
  strongTitle3Text,
  title4Text,
  semiStrongTitle4Text,
  strongTitle4Text,
  headlineText,
  bodyText,
  strongBodyText,
  calloutText,
  semiStrongCalloutText,
  strongCalloutText,
  subheaderText,
  strongSubheaderText,
  semiStrongSubheaderText,
  footnoteText,
  strongFootnoteText,
  caption1Text,
  strongCaption1Text,
  caption2Text,
  strongCaption2Text,
  caption3Text,
  strongCaption3Text,
};
