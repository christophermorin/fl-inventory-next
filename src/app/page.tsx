import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@/components/user.component";
import HeaderContainer from "@/components/Headers/HeaderContainer";
import SignInButton from "@/components/Buttons/SignInButton";
import NavButton from "@/components/Buttons/NavButton";
import SignOutButton from "@/components/Buttons/SignOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main
    >
      <HeaderContainer>
        <p className="text-2xl font-bold uppercase tracking-widest">
          Frontline
        </p>
        <nav>
          <ul className="flex 2 gap-4">
            <li>{session ? <SignOutButton /> : <SignInButton />}</li>
            {!session && (
              <li>
                <NavButton url="/register">
                  <p>Register</p>
                </NavButton>
              </li>
            )}
          </ul>
        </nav>
      </HeaderContainer>
      <h1>Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <User />
    </main>
  );
}
