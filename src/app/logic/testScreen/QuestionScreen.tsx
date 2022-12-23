import React, {useContext} from "react";
import clsx from "clsx";
import styles from "src/app/logic/testScreen/TestScreen.module.scss";
import {Button} from "src/app/components/button/Button";
import {TestContext, TestStoreInterface} from "src/app/logic/tests/TestStore";

/**
 * QuestionScreen props
 */
export interface QuestionScreenProps {
  data: any;

  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

/**
 * Before test screen
 */
export const QuestionScreen: React.FC<QuestionScreenProps> = (props: QuestionScreenProps) => {
  const PROGRESS_STYLES = clsx(styles.test__progress);
  const PROGRESS_PASSED_STYLES = clsx(styles.test__passed);
  const QUESTION_STYLES = clsx(styles.test__question);
  const ANSWERS_STYLES = clsx(styles.test__answers);
  const ANSWER_STYLES = clsx(styles.test__answer);
  const INPUT_STYLES = clsx(styles.test__input);
  const LABEL_STYLES = clsx(styles.test__label);

  const testData = props.data;
  const {currentRoundIndex, setCheckedAnswerId}: TestStoreInterface = useContext(TestContext);

  return (
    <>
      <div className={PROGRESS_STYLES}>
        <span className={PROGRESS_PASSED_STYLES}>
          {
            // Question number
            testData!.questions![currentRoundIndex]!.id
          }
        </span>
        {
          // Total number of questions
          `/${testData!.questions!.length}`
        }
      </div>
      <div className={QUESTION_STYLES}>
        {
          // Question number and question
          `${testData!.questions![currentRoundIndex]!.id}. ${
            testData!.questions![currentRoundIndex]!.question
          }`
        }
      </div>
      <ul className={ANSWERS_STYLES}>
        {testData &&
          // Render question with answers input
          testData!.questions![currentRoundIndex]["variants"]["map"]((variant: any) => {
            return (
              <li key={variant.id} className={ANSWER_STYLES}>
                <input
                  id={variant.id}
                  type="radio"
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
      <Button text="Далее" onClick={props.onClick} />
    </>
  );
};
