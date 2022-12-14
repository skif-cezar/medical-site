import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Layout, MAIN_PAGE_PATH} from "src/app/logic/layout/Layout";
import {TestScreen, TEST_PAGE_PATH} from "src/app/logic/testScreen/TestScreen";

/**
 * The main component in app
 */
export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={TEST_PAGE_PATH} element={<TestScreen />} />
        <Route path={MAIN_PAGE_PATH} element={<Layout />} />
      </Routes>
    </Router>
  );
};
