import React, { useContext, useState } from "react";
import "./testReportDetails.css"
import { getDurationInMinutes, getDurationInSeconds } from "../../utils/getDuration.";
import OrganizationContext from "../../context/OrgContext";
import { LuTimer } from "react-icons/lu";
import { FaCalendar } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { VscGitCommit } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { ImCodepen } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const TestReportDetails = () => {
  const { testReportsDetails } =
  useContext(OrganizationContext);

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredEndpoints, setFilteredEndpoints] = useState(testReportsDetails.endpoints)

  const [isFailed, setIsFailed] = useState(true)
  const [isSuccess, setIsSuccess] = useState(true)

  const handleSearch = (event:any) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    console.log(searchTerm);
    
    const filtered = testReportsDetails.endpoints.filter(endpoint =>
        endpoint.url.toLowerCase().includes(term)
    );
    console.log(filtered);
    
    setFilteredEndpoints(filtered);
};
  return (
    <div className="test_report_details">
      <div className="test_report_heading">
        <span>Test Report</span> <span>Execution {testReportsDetails.id}</span>
      </div>

      {/* test report details box */}
      <div className="test_report_details_box">
        <div className="duration_details">
          <span><LuTimer />Duration: {getDurationInMinutes(testReportsDetails.duration)}m</span> <span><FaCalendar />finished minutes ago</span>
        </div>
        <div className="git_detail">
          <span><IoIosGitBranch />{testReportsDetails.branch}</span>
          <span><VscGitCommit />{testReportsDetails.commit}</span>
          <span><FaGithub />{testReportsDetails.github_user}</span>
        </div>
        <div className="build_and_deploy">
        <ImCodepen />  <span>build-and-deploy({testReportsDetails.duration})</span>
        </div>
        <div className="environment_url">
        <BsBrowserChrome />{testReportsDetails.environment_url}
        </div>
      </div>
     
      {/*test report details list  */}
      <h3>Result</h3>
      <hr/>
      <div className="search_endpoints">
        <input type="text" placeholder="Filter by endpoints..." value={searchTerm} onInput={handleSearch}/>
      </div>
      <div className="test_report_detail">
        <div className="show_details" onClick={()=> setIsFailed(!isFailed)}>
         <span><FaChevronDown /></span> <span><RxCross2 /></span><span>Failed Tests({filteredEndpoints.filter((status) => status === "FAILURE").length}/{filteredEndpoints.length})</span>
        </div>
      {
        isFailed && filteredEndpoints.filter(({status})=> status==="FAILURE").map(({url,duration,status})=>(
          <div className="endpoints">
            <span style={{backgroundColor:"#d3455b"}}></span>
            <span>{url}</span>
            <span>{getDurationInSeconds(duration)}s</span>
          </div>
        ))
      }
      <div className="show_details" onClick={()=> setIsFailed(!isSuccess)}>
      <span><FaChevronDown /></span> <span><FaCheck /></span><span>Passed Tests({filteredEndpoints.filter((status) => status === "SUCCESS").length}/{filteredEndpoints.length})</span>
        </div>
      {
       isSuccess && filteredEndpoints.filter(({status})=> status==="SUCCESS").map(({url,duration,status})=>(
          <div className="endpoints">
            <span style={{backgroundColor:"#1aae9f"}}></span>
            <span>{url}</span>
            <span>{getDurationInSeconds(duration)}s</span>
          </div>
        ))
      }
      </div>
      
    </div>
  );
};

export default TestReportDetails;
