import type { Metadata } from "next";
import HeaderContainer from "@/components/Headers/HeaderContainer";
import NavButton from "@/components/Buttons/NavButton";
import SignInButton from "@/components/Buttons/SignInButton";

export const metadata: Metadata = {
  title: "Frontline - Register",
  description: "Register a new user",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col justify-between register-bg bg-no-repeat bg-top bg-contain">
      <HeaderContainer>
        <NavButton url="/">
          <p>Back</p>
        </NavButton>
        <p className="text-2xl font-bold uppercase tracking-widest">
          Frontline
        </p>
        <nav>
          <SignInButton />
        </nav>
      </HeaderContainer>
      {children}
      <footer>Footer</footer>
    </div>
  );
}
