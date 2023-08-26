import type { Metadata } from "next";
import HeaderContainer from "@/components/Headers/HeaderContainer";
import NavButton from "@/components/Buttons/NavButton";

export const metadata: Metadata = {
  title: "Frontline - Sign In",
  description: "Sign in",
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
          <NavButton url={"/register"}>
            <p>Register</p>
          </NavButton>
        </nav>
      </HeaderContainer>
      {children}
      <footer>Footer</footer>
    </div>
  );
}
