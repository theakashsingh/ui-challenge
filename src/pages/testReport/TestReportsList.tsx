import axios from "axios"
import "./testReport.css"
import testReportJson from "./testReport.json"
import OrganizationContext from "../../context/OrgContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const TestReportsList = () => {
  const {  testReports, setTestReportsDetails } =
    useContext(OrganizationContext);
    const navigate = useNavigate();
  const getTestReportDetails = async(id:any) =>{
    try {
      const result = await axios.get(`https://my.api.mockaroo.com/organizations/{org_id/reports/${id}/details.json?key=2e435a20`)
      console.log(result.data)
      setTestReportsDetails(result.data)
      navigate("/test-report/test-report-details")
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='test_report'>
      <h3>Test Reports</h3>
      {testReports && testReports.map((test)=>(
        <div className="test_report_list" key={test.id} onClick={()=>getTestReportDetails(test.id)}>
          <div className="test_report_number_time">{`Execution #${test.id}`}</div>
          <div className="test_report_status">
            <span>{test.succeed_tests} passed</span>
            <span>{test.failed_tests} failed</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TestReportsList