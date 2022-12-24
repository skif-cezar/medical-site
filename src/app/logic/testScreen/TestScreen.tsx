import React, {useContext, useState} from "react";
import clsx from "clsx";
import styles from "src/app/logic/testScreen/TestScreen.module.scss";
import {NavLink, useParams} from "react-router-dom";
import {MAIN_PAGE_PATH} from "src/app/logic/layout/Layout";
import {TestContext, TestStoreInterface} from "src/app/logic/tests/TestStore";
import {BeforeTestScreen} from "src/app/logic/testScreen/BeforeTestScreen";
import {QuestionScreen} from "src/app/logic/testScreen/QuestionScreen";

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
  const CLOSE_STYLES = clsx(styles.close);

  const {
    data, currentRoundIndex, setCurrentRoundIndex,
    checkedAnswerId, setCheckedAnswerId,
  }: TestStoreInterface = useContext(TestContext);

  const [isStatus, setIsStatus] = useState<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const resetCheckedAnswerId = () => {
    return setCheckedAnswerId(null);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = () => {
    setCurrentRoundIndex(0);
    resetCheckedAnswerId();
    setIsStatus(false);
  };

  // eslint-disable-next-line @typescript-eslint/typedef
  const {id} = useParams();
  const index = Number(id) - 1;
  const testData = data[index];

  const checkAnswer: () => void = () => {
    // eslint-disable-next-line no-unreachable, no-console
    console.log(checkedAnswerId);
    if (checkedAnswerId === null) {
      return;
    }

    const isMoreQuestionsAvailable: boolean = currentRoundIndex < testData!.questions!.length - 1;

    if (isMoreQuestionsAvailable) {
      resetCheckedAnswerId();
      setCurrentRoundIndex(currentRoundIndex + 1);
    } else {
      // eslint-disable-next-line no-console
      console.log("Конец вопросов");
    }
  };

  return (
    <section className={TEST_STYLES}>
      <NavLink to={MAIN_PAGE_PATH} className={CLOSE_STYLES} />
      <article className={TEST_CONTAINER_STYLES}>
        {isStatus ? (
          <BeforeTestScreen data={testData} handleClick={handleClick} />
        ) : (
          <QuestionScreen data={testData} onClick={checkAnswer} />
        )}
      </article>
    </section>
  );
};
