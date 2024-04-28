import { useState,ReactNode } from 'react'
import OrganizationContext from './OrgContext'

const OrgContextProvider = ({children}:{children:ReactNode}) => {
    const [organizations, setOrganizations] = useState<[]>([])
    const [testReports, setTestReports] = useState<[]>([])
    const [testReportsDetails, setTestReportsDetails] = useState<[]>([])
    const [organizationName, setOrganizationName] = useState<string>("")
  return (
    <OrganizationContext.Provider value={{organizations,setOrganizations,testReports,setTestReports,testReportsDetails,setTestReportsDetails,organizationName,setOrganizationName}}>
        {children}
    </OrganizationContext.Provider>
  )
}

export default OrgContextProvider