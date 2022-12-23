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
  data: TestData,
  setData: Dispatch<SetStateAction<TestData>>,
  currentRoundIndex: number,
  setCurrentRoundIndex: Dispatch<SetStateAction<number>>,
  checkedAnswerId: string | null,
  setCheckedAnswerId: Dispatch<SetStateAction<string | null>>,
}

/**
 * Store for test store
 */
export const useTestStore = (): TestStoreInterface => {
  const [data, setData] = useState<TestData>(TestDTO);
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [checkedAnswerId, setCheckedAnswerId] = useState<string | null>(null);

  return {data, setData, currentRoundIndex, setCurrentRoundIndex, checkedAnswerId, setCheckedAnswerId};
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
