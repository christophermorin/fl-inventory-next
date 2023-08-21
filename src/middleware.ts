
export { default } from "next-auth/middleware";



export const config = {
  matcher: ["/profile", "/dashboard"],
  // matcher: ["/((?!register|api|login|).*)"],
};
