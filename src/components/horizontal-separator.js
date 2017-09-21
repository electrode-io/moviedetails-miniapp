import React from "react";
import { View } from "react-native";
import { bs } from "../components/base-styles";

const HorizontalSeparator = (props) => (
  <View style={[bs.horizontalLine, { marginTop: 20, marginBottom: 20 }]} {...props} />
);

export default HorizontalSeparator;
