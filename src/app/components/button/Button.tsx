import React from "react";
import clsx from "clsx";
import styles from "src/app/components/button/Button.module.scss";

/**
 * Button props
 */
export interface ButtonProps {
  /**
   * Text
   */
  text: string;

  /**
   * Callback triggered on click
   */
  onClick: () => void;
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const BUTTON_STYLES = clsx(styles.button);
  return (
    <button
      className={BUTTON_STYLES}
      onClick={props.onClick}
      type="submit"
    >
      {props.text}
    </button>
  );
};
