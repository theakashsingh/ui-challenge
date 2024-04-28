import React, { useContext, useEffect } from "react";
import "./organization.css";
import OrganizationContext, { orgContextType } from "../../context/OrgContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CgOrganisation } from "react-icons/cg";

const OrganizationPicker = () => {
  const { organizations, setOrganizations, testReports, setTestReports, setOrganizationName } =
    useContext(OrganizationContext);
  const navigate = useNavigate();
  const getOrganizations = async () => {
    try {
      const result = await axios.get(
        "https://my.api.mockaroo.com/organizations.json?key=2e435a20"
      );
      console.log(result);
      setOrganizations(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrganizations()
  }, []);

  const getOrganizationsDetails = async (id: any, orgName:any) => {
    try {
      const result = await axios.get(
        `https://my.api.mockaroo.com/organizations/${id}/reports.json?key=2e435a20`
      );
      setTestReports(result.data);
    navigate("/test-report");
    setOrganizationName(orgName)
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="organization_picker">
      <h2>Organizations</h2>
      <p>Pick the organization you want to access to</p>
      {organizations.map(({ name, id }) => (
        <div
          className="organization"
          onClick={() => getOrganizationsDetails(id,name)}
          key={id}
        >
          <div className="icon"><CgOrganisation /></div>
          <div className="name">{name}</div>
        </div>
      ))}
    </div>
  );
};

export default OrganizationPicker;
