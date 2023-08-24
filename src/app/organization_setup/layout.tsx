import type { Metadata } from "next";
import HeaderContainer from "@/components/Headers/HeaderContainer";
import NavButton from "@/components/Buttons/NavButton";
import SignOutButton from "@/components/Buttons/SignOutButton";

export const metadata: Metadata = {
  title: "Frontline - Organization Setup",
  description: "Join or Create a Organization",
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
          Setup
        </p>
        <nav>
          <SignOutButton/>
        </nav>
      </HeaderContainer>
      {children}
    </div>
  );
}
