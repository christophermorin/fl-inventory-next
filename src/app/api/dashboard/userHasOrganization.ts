import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function userHasOrganization() {
  const session = await getServerSession(authOptions);
  const organization = session?.user?.organization
  if (!organization){
    return null;
  }
  return organization;
}
