
import { userHasOrganization } from "../api/dashboard/userHasOrganization";
import { redirect } from 'next/navigation'




export default async function Dashboard () {
  // user hits this route
  // we check if they have a org
  // if not, we redirect to org setup
  const userOrganization = await userHasOrganization()
  if(userOrganization === null){
    redirect("/organization_setup")
  }
  // if they do have an org
  // make another call for their locations data based off of their org
  // display that data or pass it to relevant components.  
        
       
      return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}




