import React, {useContext, useState} from "react";
import clsx from "clsx";
import styles from "src/app/logic/testScreen/TestScreen.module.scss";
import {NavLink, useParams} from "react-router-dom";
import {MAIN_PAGE_PATH} from "src/app/logic/layout/Layout";
import CardSrc from "src/resources/cards-image.svg";
import {Button} from "src/app/components/button/Button";
import {TestContext, TestStoreInterface} from "src/app/logic/tests/TestStore";

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
  const TEST_DESCRIPTION_STYLES = clsx(styles.test__description);
  const PROGRESS_STYLES = clsx(styles.test__progress);
  const PROGRESS_PASSED_STYLES = clsx(styles.test__passed);
  const QUESTION_STYLES = clsx(styles.test__question);
  const ANSWERS_STYLES = clsx(styles.test__answers);
  const ANSWER_STYLES = clsx(styles.test__answer);
  const INPUT_STYLES = clsx(styles.test__input);
  const LABEL_STYLES = clsx(styles.test__label);
  const CLOSE_STYLES = clsx(styles.close);

  const {data}: TestStoreInterface = useContext(TestContext);
  const [isStatus, setIsStatus] = useState<boolean>(true);
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [checkedAnswerId, setCheckedAnswerId] = useState<string | null>(null);

  const resetCheckedAnswerId = (): void => {
    return setCheckedAnswerId(null);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = () => {
    setIsStatus(false);
  };

  // eslint-disable-next-line @typescript-eslint/typedef
  const {id} = useParams();
  const index = Number(id) - 1;
  const testData = data[index];
  // eslint-disable-next-line no-console
  console.log(testData);

  const checkAnswer: () => void = () => {
    if (checkedAnswerId === null) {
      return;
    }

    const isMoreQuestionsAvailable: boolean = currentRoundIndex < testData!.questions!.length - 1;

    if (isMoreQuestionsAvailable) {
      setCurrentRoundIndex(currentRoundIndex + 1);
      resetCheckedAnswerId();
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
          <>
            <img
              className={TEST_IMAGE_STYLES}
              src={CardSrc}
              alt={testData?.body}
              width="160"
              height="160"
            />
            <h1 className={TEST_TITLE_STYLES}>{testData?.title}</h1>
            <Button text="Начать тест" onClick={handleClick} />
            <div className={TEST_DESCRIPTION_STYLES}>
              <p>{testData?.body}</p>
            </div>
          </>
        ) : (
          <>
            <div className={PROGRESS_STYLES}>
              <span className={PROGRESS_PASSED_STYLES}>{testData!.questions![currentRoundIndex]!.id}</span>
              {`/${testData!.questions!.length}`}
            </div>
            <div className={QUESTION_STYLES}>
              {`${testData!.questions![currentRoundIndex]!.id}. ${testData!.questions![currentRoundIndex]!.question}`}
            </div>
            <ul className={ANSWERS_STYLES}>
              {testData &&
          testData!.questions![currentRoundIndex]["variants"]["map"]((variant: any) => {
            return (
              <li key={variant.id} className={ANSWER_STYLES}>
                <input
                  id={variant.id} type="radio"
                  name="answer"
                  className={INPUT_STYLES}
                  value={variant.answer}
                  onChange={() => {
                    return setCheckedAnswerId(variant.answer);
                  }}
                />
                <label htmlFor={variant.id} className={LABEL_STYLES}>
                  <span>{variant.answer}</span>
                </label>
              </li>
            );
          })}
            </ul>
            <Button text="Далее" onClick={checkAnswer} />
          </>
        )}
      </article>
    </section>
  );
};
