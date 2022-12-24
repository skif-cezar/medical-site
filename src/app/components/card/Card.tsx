import React from "react";
import clsx from "clsx";
import styles from "src/app/components/card/Card.module.scss";
import CardSrc from "src/resources/cards-image.svg";

/**
 * Card props
 */
export interface CardProps {
  /**
   * Text
   */
  text: string;
}

/**
 * Card component
 */
export const Card: React.FC<CardProps> = (props: CardProps) => {
  const CARD_STYLES = clsx(styles.card);
  const CARD_CONTAINER_STYLES = clsx(styles.container);
  const CARD_IMAGE_STYLES = clsx(styles.card__image);
  const CARD_TEXT_STYLES = clsx(styles.card__text);

  return (
    <div className={CARD_STYLES}>
      <span className={CARD_CONTAINER_STYLES}>
        <img
          className={CARD_IMAGE_STYLES} src={CardSrc}
          alt={props.text} width="76"
          height="76"
        />
        <span className={CARD_TEXT_STYLES}>{props.text}</span>
      </span>
    </div>
  );
};
