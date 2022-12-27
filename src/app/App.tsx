import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Layout, MAIN_PAGE_PATH} from "src/app/logic/layout/Layout";
import {TestScreen, TEST_PAGE_PATH} from "src/app/logic/testScreen/TestScreen";
import {TestProvider} from "src/app/logic/tests/TestStore";
import {AfterTestScreen, AFTER_TEST_PAGE_PATH} from "src/app/logic/testScreen/AfterTestScreen";

/**
 * The main component in app
 */
export const App: React.FC = () => {
  return (
    <TestProvider>
      <Router>
        <Routes>
          <Route path={MAIN_PAGE_PATH} element={<Layout />} />
          <Route path={`${TEST_PAGE_PATH}/:id`} element={<TestScreen />} />
          <Route path={AFTER_TEST_PAGE_PATH} element={<AfterTestScreen />} />
        </Routes>
      </Router>
    </TestProvider>
  );
};
