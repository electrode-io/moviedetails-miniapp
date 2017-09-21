import React, { Component, PropTypes } from "react";
import { bs } from "../components/base-styles";
import { Text, TouchableHighlight, View, Image } from "react-native";
import debounce from "lodash/debounce";

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false
    };

    //debounced version fix the issue where user tap quickly multiple times
    this.debouncedOnPress = debounce(this.debouncedOnPress.bind(this), 500, {
      leading: true,
      trailing: false
    });
  }

  debouncedOnPress() {
    return this.props.onPress();
  }

  render() {
    const { pressed } = this.state;
    const {
      children,
      border,
      disabled,
      text,
      style,
      textStyle,
      buttonStyles,
      imageSrc,
      ...rest
    } = this.props;
    const {
      backgroundColor,
      pressedBackgroundColor,
      textColor,
      pressedTextColor
    } = buttonStyles;
    const opacity = disabled ? 0.5 : 1;
    const finalOnPress = disabled ? () => null : this.debouncedOnPress;
    const buttonChange = pressed ? pressedBackgroundColor : backgroundColor;
    const textChange = pressed ? pressedTextColor : textColor;
    const btnStyle = imageSrc ? style : [{ flexGrow: 1, opacity }, buttonChange, border, style];
    const underlayColor = imageSrc ? "transparent" : pressedBackgroundColor.backgroundColor;

    return (
      <TouchableHighlight
        {...rest}
        style={btnStyle}
        underlayColor={underlayColor}
        disabled={disabled}
        onPress={finalOnPress}
        onHideUnderlay={() => this.setState({ pressed: false })}
        onShowUnderlay={() => this.setState({ pressed: true })}
      >
        {
          imageSrc &&
          (
            <Image
              source={imageSrc}
            />
          ) ||
          (
            <View
              style={[
                bs.flex1,
                { alignItems: "center", justifyContent: "center", paddingBottom: 2 }
              ]}
            >
              {children || <Text style={[textStyle, textChange]}>{text}</Text>}
            </View>
          )
        }
      </TouchableHighlight>
    );
  }
}

Button.defaultProps = {
  buttonStyles: {
    backgroundColor: { backgroundColor: "#fff" },
    pressedBackgroundColor: bs.blueBackground2,
    textColor: bs.blue,
    pressedTextColor: bs.white
  },
  border: bs.defaultBorder,
  disabled: false,
  onPress: () => null,
  style: {}
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node,
  backgroundColor: View.propTypes.style,
  borderColor: View.propTypes.style,
  textStyle: Text.propTypes.style,
  fontSize: Text.propTypes.style,
  style: View.propTypes.style
};
