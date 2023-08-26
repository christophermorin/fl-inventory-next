import { isString } from "./typeGuards";
import type { OrganizationSetup } from "@/types/main";

const parseUserId = (userId: unknown): string => {
  if (!isString(userId) || userId.length != 36) {
    throw new Error("Incorrect or missing userId");
  }
  return userId;
};

const parseOrganization = (organization: unknown): string => {
  if (!isString(organization) || organization.length < 3) {
    throw new Error("Incorrect or missing organization");
  }
  return organization;
};

export const toNewOrganizatioSetup = (object: unknown): OrganizationSetup => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if ("userId" in object && "organization" in object) {
    const organization: OrganizationSetup = {
      userId: parseUserId(object.userId),
      organization: parseOrganization(object.organization),
    };
    return organization;
  }
  throw new Error("Incorrect data: some fields are missing");
};
