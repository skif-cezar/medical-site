import {createContext, useState, FC, PropsWithChildren, Dispatch, SetStateAction} from "react";
import TestDTO from "src/app/Tests.json";

/**
 * Test data type
 */
export type TestData = {
  [key: string]: any;
};

/**
 * Test store interface
 */
export interface TestStoreInterface {
  /**
   * Data
   */
  data: TestData;

  /**
   * Set data
   */
  setData: Dispatch<SetStateAction<TestData>>;

  /**
   * Current round index
   */
  currentRoundIndex: number;

  /**
   * Set current round index
   */
  setCurrentRoundIndex: Dispatch<SetStateAction<number>>;

  /**
   * User answer
   */
  checkedAnswerValue: number | null;

  /**
   * Set user answer
   */
  setCheckedAnswerValue: Dispatch<SetStateAction<number | null>>;

  score: number;
  setScore: Dispatch<SetStateAction<number>>;

  /**
   * Final message on the test result
   */
  message: TestData;

  /**
   * Set final message on the test result
   */
  setMessage: Dispatch<SetStateAction<TestData>>;
}

/**
 * Store for test store
 */
export const useTestStore = (): TestStoreInterface => {
  const [data, setData] = useState<TestData>(TestDTO);
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [checkedAnswerValue, setCheckedAnswerValue] = useState<number | null>(null);
  const [message, setMessage] = useState<TestData>({});

  return {
    data,
    setData,
    currentRoundIndex,
    setCurrentRoundIndex,
    checkedAnswerValue,
    setCheckedAnswerValue,
    score,
    setScore,
    message,
    setMessage,
  };
};

/**
 * Provide access to TestStore
 */
export const TestContext = createContext({} as TestStoreInterface);

/**
 * Provider for test store
 */
export const TestProvider: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return <TestContext.Provider value={useTestStore()}>{props.children}</TestContext.Provider>;
};
