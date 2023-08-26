import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      roles: Array<string>;
      organization: string;
    } & DefaultSession["user"];
  }
}
