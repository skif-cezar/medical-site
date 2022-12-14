import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/testScreen/TestScreen.module.scss";
import {NavLink} from "react-router-dom";
import {MAIN_PAGE_PATH} from "src/app/logic/layout/Layout";
import CardSrc from "src/resources/cards-image.svg";
import {Button} from "src/app/components/button/Button";

/**
 *  Path to test page
 */
export const TEST_PAGE_PATH = "/test";

/**
 * Test screen
 */
export const TestScreen: React.FC = () => {
  const TEST_STYLES = clsx(styles.test);
  const TEST_CONTAINER_STYLES = clsx(styles.test__container);
  const TEST_IMAGE_STYLES = clsx(styles.test__image);
  const TEST_TITLE_STYLES = clsx(styles.test__title);
  const CLOSE_STYLES = clsx(styles.close);

  return (
    <section className={TEST_STYLES}>
      <NavLink to={MAIN_PAGE_PATH} className={CLOSE_STYLES} />
      <article className={TEST_CONTAINER_STYLES}>
        <img
          className={TEST_IMAGE_STYLES}
          src={CardSrc} alt="Тест"
          width="160" height="160"
        />
        <h1 className={TEST_TITLE_STYLES}>Title</h1>
        <Button text="Начать тест" />
      </article>
    </section>
  );
};
