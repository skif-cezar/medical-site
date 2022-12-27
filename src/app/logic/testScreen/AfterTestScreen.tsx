import React, {useContext} from "react";
import {TestContext, TestStoreInterface} from "src/app/logic/tests/TestStore";
import clsx from "clsx";
import styles from "src/app/logic/testScreen/TestScreen.module.scss";
import {NavLink} from "react-router-dom";
import {MAIN_PAGE_PATH} from "src/app/logic/layout/Layout";

/**
 * Path after test page
 */
export const AFTER_TEST_PAGE_PATH = "/result";

/**
 * After test screen
 */
export const AfterTestScreen: React.FC = () => {
  const TEST_STYLES = clsx(styles.test);
  const TEST_CONTAINER_STYLES = clsx(styles.test__container);
  const CLOSE_STYLES = clsx(styles.close);
  const RESULT_TITLE_STYLES = clsx(styles.result__title);
  const RESULT_TEXT_STYLES = clsx(styles.result__text);

  const {message}: TestStoreInterface = useContext(TestContext);

  return (
    <section className={TEST_STYLES}>
      <NavLink to={MAIN_PAGE_PATH} className={CLOSE_STYLES} />
      <article className={TEST_CONTAINER_STYLES}>
        <div className={RESULT_TITLE_STYLES}>{message["message"].title}</div>
        <div className={RESULT_TEXT_STYLES}>{message["message"].body}</div>
      </article>
    </section>
  );
};
