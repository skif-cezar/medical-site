import React from "react";
import clsx from "clsx";
import styles from "src/app/logic/tests/Tests.module.scss";
import {Card} from "src/app/components/card/Card";

/**
 * Tests section
 */
export const Tests: React.FC = () => {
  const TESTS_STYLES = clsx(styles.tests);
  const TITLE_STYLES = clsx(styles.tests__title);
  const CONTAINER_STYLES = clsx(styles.tests__container);

  return (
    <section className={TESTS_STYLES} id="tests">
      <h2 className={TITLE_STYLES}>Тесты</h2>
      <div className={CONTAINER_STYLES}>
        <Card text="Скрининговый тест M-CHAT-R на аутизм у детей" />
        <Card text="Денверский скрининг-тест нервно-психического развития (DDST)" />
        <Card text="Рейтинговая шкала аутизма у детей CARS" />
      </div>
    </section>
  );
};
