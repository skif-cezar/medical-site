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
  setData: Dispatch<SetStateAction<TestData>>
}

/**
 * Store for test store
 */
export const useTestStore = (): TestStoreInterface => {
  const [data, setData] = useState<TestData>(TestDTO);

  return {data, setData};
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
