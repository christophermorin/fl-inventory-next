import { NextResponse } from "next/server";
import { toNewOrganizatioSetup } from "@/utils/toNewOrganizationSetup";
import { buildNewOrganization, isUnique } from "@/services/orgSetupServices";
import { updateUserOnNewOrg } from "@/services/usersServices";

export async function POST(request: Request) {
  try {
    // verify user input
    const userInput = await request.json();
    const { userId, organization } = toNewOrganizatioSetup(userInput);
    // check if org is unique, throw error if not
    await isUnique(organization);
    const { id } = await buildNewOrganization(organization, userId);
    await updateUserOnNewOrg(id, userId);
    // update user roles/org fields
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }
}
