import React from "react";
import PropTypes from "prop-types";

export const Button = ({ color, size, ...rest }) => {
  return (
    <button
      style={{
        fontSize: size === "large" ? 20 : 16,
        backgroundColor: color === "primary" ? "blue" : "white",
        color: color === "primary" ? "white" : "black",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        outline: "none",
      }}
      {...rest}
    />
  );
};

Button.propTypes = {
  /**
   * The size of the button
   * @default "small"
   * @type {string}
   * @memberof Button
   * @property {string} large
   * @property {string} small
   */
  fontSize: PropTypes.oneOf(["small", "large", "default"]),

  /**
   * The background color of the button
   */
  backgroundColor: PropTypes.string,

  /**
   * The color of the button
   */
  color: PropTypes.oneOf(["primary", "secondary"]),

  /**
   * The border of the button
   * @type {string}
   * @memberof Button
   * @property {string} none
   * @property {string} solid
   * @property {string} dashed
   */
  border: PropTypes.string,

  /**
   *  The padding of the button
   * @type {string}
   * @memberof Button
   * @property {string} none
   * @property {string} small
   */
  padding: PropTypes.string,

  /**
   * The border radius of the button
   * @type {string}
   * @memberof Button
   * @property {string} none
   * @property {string} small
   */
  borderRadius: PropTypes.string,

  /**
   * The cursor of the button
   * @type {string}
   */
  cursor: PropTypes.string,

  /**
   * The outline of the button
   * @type {string}
   */
  outline: PropTypes.string,
};
