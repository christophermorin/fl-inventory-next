import Link from "next/link";
import OrgSetupCard from "@/components/Cards/OrgSetupCard";


export default function OrganizationSetup() {
  return (
    <div className="h-full flex flex-col md:flex-row justify-center items-center gap-10 p-8">
      <Link
      href="/organization_setup/join"
      >
      <OrgSetupCard
        title="Join Org"
        image={joinOrgImg}
        text="Join an existing org with your invite code"
      />
      </Link>
      <Link
      href="/organization_setup/create"
      >
      <OrgSetupCard
        title="Create Org"
        image={newOrgImg}
        text="Create a new organization and invite others to join."
        />
        </Link>
    </div>
  );
}

const newOrgImg = (
  <svg
    className="fill-white hover:fill-red-300"
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="150"
    viewBox="0 0 24 24"
  >
    <path d="M5 19V5v14Zm-2 2V3h18v10.35q-.475-.175-.975-.262T19 13V5H5v14h8q0 .525.088 1.025t.262.975H3Zm16 2l-1.4-1.4l1.575-1.6H15v-2h4.175L17.6 16.4L19 15l4 4l-4 4Zm-8-6h2v-4h4v-2h-4V7h-2v4H7v2h4v4Z" />
  </svg>
);

const joinOrgImg = (
  <svg
    className="fill-white hover:fill-red-300"
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="150"
    viewBox="0 0 24 24"
  >
    <ellipse cx="12" cy="12" fill="currentColor" rx="3" ry="5.74" />
    <path d="M16.5 12c0 .97-.23 4.16-3.03 6.5c.78.31 1.63.5 2.53.5c3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5c2.8 2.34 3.03 5.53 3.03 6.5zM8 19c.9 0 1.75-.19 2.53-.5c-.61-.51-1.1-1.07-1.49-1.63c-.33.08-.68.13-1.04.13c-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13c.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7z" />
  </svg>
);
