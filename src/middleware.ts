export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/organization_setup/:path*"],
};
