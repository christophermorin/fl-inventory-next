export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/organization_setup/:path*"],
}

// export const config = {
//   // matcher: ["/profile"],
//   matcher: ["/((?!register|api|login|localhost:3000).*)"],
// };
