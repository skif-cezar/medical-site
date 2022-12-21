import React, {useState} from "react";
import clsx from "clsx";
import styles from "src/app/logic/testScreen/TestScreen.module.scss";
import {NavLink, useParams} from "react-router-dom";
import {MAIN_PAGE_PATH} from "src/app/logic/layout/Layout";
import CardSrc from "src/resources/cards-image.svg";
import {Button} from "src/app/components/button/Button";
import TestDTO from "src/app/Tests.json";

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
  const CLOSE_STYLES = clsx(styles.close);

  const [isStatus, setIsStatus] = useState(true);
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = () => {
    setIsStatus(false);
  };

  // eslint-disable-next-line @typescript-eslint/typedef
  const {id} = useParams();
  const index = Number(id) - 1;
  const testData = TestDTO[index];
  // eslint-disable-next-line no-console
  console.log(testData);

  const checkAnswer: () => void = () => {
    const isMoreQuestionsAvailable: boolean = currentRoundIndex < testData!.questions!.length - 1;

    if (isMoreQuestionsAvailable) {
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
            <div>
              {`${testData!.questions![currentRoundIndex]!.id} ${testData!.questions![currentRoundIndex]!.question}`}
            </div>
            <div>Кнопки</div>
            <button type="submit" onClick={checkAnswer}>Далее</button>
          </>
        )}
      </article>
    </section>
  );
};
