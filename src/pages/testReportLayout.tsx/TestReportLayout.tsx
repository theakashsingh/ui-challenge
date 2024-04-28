import { useContext } from "react";
import "./testReportLayout.css";
import { Outlet } from "react-router-dom";
import OrganizationContext from "../../context/OrgContext";
import { IoCaretForward } from "react-icons/io5";

const TestReportLayout = () => {
  const {  organizationName } =
    useContext(OrganizationContext);
  return (
    <div className="test_report_layout">
      <div className="test_report_sidebar">
        <h1>Levo</h1>
        <p>Organization {organizationName}</p>
        <div className="test_report_title">
         <span><IoCaretForward /></span>  Test Report
        </div>
        </div> <Outlet />
    </div>
  );
};

export default TestReportLayout;
