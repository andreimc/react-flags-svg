import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Flag extends Component {
  static propTypes = {
    formFactor: PropTypes.oneOf(["square", "normal"]).isRequired,
    countryCode: PropTypes.string.isRequired,
    size: PropTypes.number
  };

  render() {
    const { formFactor, countryCode, size } = this.props;
    const flagFile = require(`../flags/${formFactor}/${countryCode}.svg`);
    const styles = {
      base: {
        backgroundSize: "contain",
        backgroundPosition: "50%",
        backgroundRepeast: "no-repeat",
        display: "inline-block",
        verticalAlign: "middle",
        width: size
      },
      square: {
        height: size
      },
      normal: {
        height: Math.round((size / 1.333333) * 1)
      },
      currentFlag: {
        backgroundImage: `url(${flagFile})`
      }
    };

    return (
      <span
        style={Object.assign(
          {},
          styles.base,
          styles[formFactor],
          styles.currentFlag
        )}
      />
    );
  }
}

Flag.defaultProps = {
  formFactor: "normal",
  size: 24
};
