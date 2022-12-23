import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/testScreen/TestScreen.module.scss";
import CardSrc from "src/resources/cards-image.svg";
import {Button} from "src/app/components/button/Button";

/**
 * BeforeTestScreen props
 */
export interface BeforeTestScreenProps {
  data: any;

  // eslint-disable-next-line react/require-default-props
  handleClick?: () => void;
}

/**
 * Before test screen
 */
export const BeforeTestScreen: React.FC<BeforeTestScreenProps> = (props: BeforeTestScreenProps) => {
  const TEST_IMAGE_STYLES = clsx(styles.test__image);
  const TEST_TITLE_STYLES = clsx(styles.test__title);
  const TEST_DESCRIPTION_STYLES = clsx(styles.test__description);

  return (
    <>
      <img
        className={TEST_IMAGE_STYLES}
        src={CardSrc}
        alt={props.data?.body}
        width="160"
        height="160"
      />
      <h1 className={TEST_TITLE_STYLES}>{props.data?.title}</h1>
      <Button text="Начать тест" onClick={props.handleClick} />
      <div className={TEST_DESCRIPTION_STYLES}>
        <p>{props.data?.body}</p>
      </div>
    </>
  );
};
