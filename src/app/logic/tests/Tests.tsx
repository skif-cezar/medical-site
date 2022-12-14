import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/logic/tests/Tests.module.scss";
import {Card} from "src/app/components/card/Card";
import {TEST_PAGE_PATH} from "src/app/logic/testScreen/TestScreen";

/**
 * Tests section
 */
export const Tests: React.FC = () => {
  const TESTS_STYLES = clsx(styles.tests);
  const TITLE_STYLES = clsx(styles.tests__title);
  const CONTAINER_STYLES = clsx(styles.tests__container);

  return (
    <section className={TESTS_STYLES}>
      <h2 className={TITLE_STYLES}>Тесты</h2>
      <div className={CONTAINER_STYLES}>
        <NavLink to={TEST_PAGE_PATH}>
          <Card text="Скрининговый тест M-CHAT-R на аутизм у детей" />
        </NavLink>
        <NavLink to={TEST_PAGE_PATH}>
          <Card text="Денверский скрининг-тест нервно-психического развития (DDST)" />
        </NavLink>
        <NavLink to={TEST_PAGE_PATH}>
          <Card text="Рейтинговая шкала аутизма у детей CARS" />
        </NavLink>
      </div>
    </section>
  );
};
