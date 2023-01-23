import React from "react";
import clsx from "clsx";
import styles from "src/app/components/radio/Radio.module.scss";

/**
 * Button props
 */
export interface RadioProps {
  /**
   * Id
   */
  id: string;

  /**
   * Value
   */
  value: string;

  /**
   * Answer
   */
  answer: string;

  /**
   * Callback triggered on change
   */
  // eslint-disable-next-line react/require-default-props
  onChange?: () => void;
}

/**
 * Radio-input component
 */
export const Radio: React.FC<RadioProps> = (props: RadioProps) => {
  const INPUT_STYLES = clsx(styles.radio__input);
  const ANSWER_STYLES = clsx(styles.radio__answer);
  const LABEL_STYLES = clsx(styles.radio__label);
  return (
    <li key={props.id} className={ANSWER_STYLES}>
      <input
        id={props.id}
        type="radio"
        name="answer"
        className={INPUT_STYLES}
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className={LABEL_STYLES}>
        <span>{props.answer}</span>
      </label>
    </li>
  );
};
