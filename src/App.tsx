import React from "react";
import "./App.css";
import OrgContextProvider from "./context/OrgContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OrganizationPicker from "./pages/organization/OrganizationPicker";
import TestReportsList from "./pages/testReport/TestReportsList";
import TestReportDetails from "./pages/testReportDetail/TestReportDetails";
import TestReportLayout from "./pages/testReportLayout.tsx/TestReportLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <OrganizationPicker />,
  },
  {
    path:"test-report",
    element:<TestReportLayout/>,
    children:[
      {
        path: "",
        element: <TestReportsList />,
      },
      {
        path: "test-report-details",
        element: <TestReportDetails />,
      },
    ]
  }
]);

export const App: React.FunctionComponent = () => {
  return (
    <OrgContextProvider>
      <div className="App">
          {/* <a
            className="App-link"
            href="https://doc.clickup.com/d/h/a0kg5-1183/8d71939ada06572"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the Exercise
          </a> */}
          <RouterProvider router={router} />
          {/* <OrganizationPicker /> */}
      </div>
    </OrgContextProvider>
  );
};

export default App;
