import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@/components/user.component";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log("In session", session)

  return (
    <main
    // style={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   height: "70vh",
    // }}
    >
      <header className="h-20 border border-red-300 p-4">
        <nav className="h-full grid grid-cols-2 items-center">
          <section>
          <img></img>
            FrontLine Inventory
          </section>
          <section className="flex justify-end">
            <LoginButton />
            <RegisterButton />
            <LogoutButton />
          </section>
        </nav>
      </header>
   
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
        <User />

     
    </main>
  );
}
