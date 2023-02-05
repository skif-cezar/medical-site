import React, {useContext, useState} from "react";
import clsx from "clsx";
import styles from "src/app/logic/testScreen/TestScreen.module.scss";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {MAIN_PAGE_PATH} from "src/app/logic/layout/Layout";
import {TestContext, TestStoreInterface} from "src/app/logic/tests/TestStore";
import {BeforeTestScreen} from "src/app/logic/testScreen/BeforeTestScreen";
import {QuestionScreen} from "src/app/logic/testScreen/QuestionScreen";
import {AFTER_TEST_PAGE_PATH} from "src/app/logic/testScreen/AfterTestScreen";

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

  const navigation = useNavigate();

  const {
    data,
    currentRoundIndex,
    setCurrentRoundIndex,
    checkedAnswerValue,
    setCheckedAnswerValue,
    score,
    setScore,
    setMessage,
    chekedAnswerCheckBox,
    age,
  }: TestStoreInterface = useContext(TestContext);

  const [isStatus, setIsStatus] = useState<boolean>(true);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const resetCheckedAnswerId = () => {
    return setCheckedAnswerValue(null);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = () => {
    setCurrentRoundIndex(0);
    resetCheckedAnswerId();
    setIsStatus(false);
    setScore(0);
    setMessage({});
  };

  // eslint-disable-next-line @typescript-eslint/typedef
  const {id} = useParams();
  const index = Number(id) - 1;
  const testData = data[index];

  const checkAnswer: () => void = () => {
    if (checkedAnswerValue === null && index !== 2) {
      return;
    }

    if(index === 2 && chekedAnswerCheckBox === null) {
      return;
    }

    const isMoreQuestionsAvailable: boolean = currentRoundIndex < testData!.questions!.length - 1;

    if (index === 0) {
      setScore(score + checkedAnswerValue!);
    } else if (index === 1) {
      const isRightAnswer: boolean =
        checkedAnswerValue === testData!.questions[currentRoundIndex].userAnswer;

      if (isRightAnswer) {
        setScore(score + 1);
      }
    } else if (index === 2) {
      const maxAge = parseFloat(testData!.questions[currentRoundIndex].max);
      // eslint-disable-next-line no-console
      console.log("Max:", maxAge);
      // eslint-disable-next-line no-console
      console.log("AgeUser:", age);

      if(chekedAnswerCheckBox === "Нет" && age > maxAge) {
        // eslint-disable-next-line no-console
        console.log("Ошибка");
        setScore(score + 1);
      }
    }

    if (isMoreQuestionsAvailable) {
      resetCheckedAnswerId();
      setCurrentRoundIndex(currentRoundIndex + 1);
      // eslint-disable-next-line no-console
      console.log(score);
    } else {
      if (index === 0) {
        // check test №1
        if (score >= 0 && score <= 29) {
          setMessage(testData!.messages[0]);
        } else if (score >= 30 && score <= 36) {
          setMessage(testData!.messages[1]);
        } else if (score >= 37) {
          setMessage(testData!.messages[2]);
        }
      } else if (index === 1) {
        // check test №2
        if (score >= 0 && score <= 2) {
          setMessage(testData!.messages[0]);
        } else if (score >= 3 && score <= 7) {
          setMessage(testData!.messages[1]);
        } else if (score >= 8 && score <= 20) {
          setMessage(testData!.messages[2]);
        }
      } else if (index === 2) {
        setMessage(testData!.messages[0]);
      }
      navigation(AFTER_TEST_PAGE_PATH);
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
