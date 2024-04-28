import { createContext, SetStateAction, Dispatch } from "react";


export interface orgContextType {
    organizations:{}[];
    setOrganizations:Dispatch<SetStateAction<[]>>
    testReports:{}[];
    setTestReports:Dispatch<SetStateAction<[]>>
    testReportsDetails:{}[];
    setTestReportsDetails:Dispatch<SetStateAction<[]>>
    organizationName:string,
    setOrganizationName:Dispatch<SetStateAction<string>>
}
const OrganizationContext = createContext<orgContextType>({
    organizations: [], testReports: [], testReportsDetails: [],
    organizationName:"",
    setOrganizations: function (value: SetStateAction<[]>): void {
        throw new Error("Function not implemented.");
    },
    setTestReports: function (value: SetStateAction<[]>): void {
        throw new Error("Function not implemented.");
    },
    setTestReportsDetails: function (value: SetStateAction<[]>): void {
        throw new Error("Function not implemented.");
    },
    setOrganizationName:function(value:SetStateAction<string>):void{
        throw new Error("Function not implemented.");
    }
})

export default OrganizationContext