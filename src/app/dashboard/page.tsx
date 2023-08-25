import { userHasOrganization } from "../api/dashboard/userHasOrganization";
import { redirect } from 'next/navigation'

export default async function Dashboard () {
  const userOrganization = await userHasOrganization()
  if(userOrganization === null){
    redirect("/organization_setup")
  }  
      return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}




