import React from "react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import styles from "src/app/logic/tests/Tests.module.scss";
import {Card} from "src/app/components/card/Card";
import {TEST_PAGE_PATH} from "src/app/logic/testScreen/TestScreen";
import TestDTO from "src/app/Tests.json";

/**
 * TestDTO interface
 */
export interface TestDTOInterface {
  id: number;
  title: string;
  body: string;
}

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
        {TestDTO &&
          TestDTO.map((test: TestDTOInterface) => {
            return (
              <NavLink key={test.id} to={`${TEST_PAGE_PATH}/${test.id}`}>
                <Card text={test.title} />
              </NavLink>
            );
          })}
      </div>
    </section>
  );
};
