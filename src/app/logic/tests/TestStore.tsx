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
   * Current test id
   */
  currentTestId: string;

  /**
   * Set current test id
   */
  setCurrentTestId: Dispatch<SetStateAction<string>>;

  /**
   * Age
   */
  age: number | undefined;

  /**
     * Set age
     */
  setAge: Dispatch<SetStateAction<number | undefined>>;

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
   * User answer in checkbox
   */
  chekedAnswerCheckBox: string;

  /**
    * Set user answer in checkbox
    */
  setChekedAnswerCheckBox: Dispatch<SetStateAction<string>>;

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
  const [currentTestId, setCurrentTestId] = useState<string>("");
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [checkedAnswerValue, setCheckedAnswerValue] = useState<number | null>(null);
  const [chekedAnswerCheckBox, setChekedAnswerCheckBox] = useState<string>("");
  const [age, setAge] = useState<number | undefined>(0);
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
    age,
    setAge,
    chekedAnswerCheckBox,
    setChekedAnswerCheckBox,
    currentTestId,
    setCurrentTestId,
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
