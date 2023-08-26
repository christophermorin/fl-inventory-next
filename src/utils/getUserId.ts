import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function getUserId() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return null;
  }
  const userId = session.user.id;
  return userId;
}
