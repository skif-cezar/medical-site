import React, {useContext} from "react";
import clsx from "clsx";
import styles from "src/app/logic/testScreen/TestScreen.module.scss";
import {Button} from "src/app/components/button/Button";
import {TestContext, TestStoreInterface} from "src/app/logic/tests/TestStore";
import {Radio} from "src/app/components/radio/Radio";

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
  const GROUP_STYLES = clsx(styles.group);
  const INPUT_STYLES = clsx(styles.input);
  const LABEL_STYLES = clsx(styles.label);

  const testData = props.data;
  const {currentRoundIndex, setCheckedAnswerValue, checkedAnswerValue}: TestStoreInterface =
    useContext(TestContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const userValue = parseInt(e.currentTarget.value, 10);
    setCheckedAnswerValue(userValue);
  };

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
        <span>
          {
            // Question number and question
            `${testData!.questions![currentRoundIndex]!.id}. ${
              testData!.questions![currentRoundIndex]!.question
            }`
          }
        </span>
      </div>
      <ul className={ANSWERS_STYLES}>
        {testData.id === 3 ? (
          // Render question with answers input
          <li className={GROUP_STYLES}>
            <input
              className={INPUT_STYLES}
              type="number"
              name="answer"
              onChange={handleChange}
              placeholder="answer"
              value={checkedAnswerValue?.toString()}
            />
            <label htmlFor="answer" className={LABEL_STYLES}>
              Answer
            </label>
          </li>
        ) : (
          // Render question with answers radio-input
          testData!.questions![currentRoundIndex]["variants"]["map"]((variant: any) => {
            return (
              <Radio
                id={variant.id}
                value={variant.score}
                answer={variant.answer}
                onChange={() => {
                  setCheckedAnswerValue(variant.score);
                }}
              />
            );
          })
        )}
      </ul>
      <Button text="Далее" onClick={props.onClick} />
    </>
  );
};
