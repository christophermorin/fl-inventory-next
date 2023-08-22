import type { NextAuthOptions } from "next-auth";
import type { User, SanitizedUser } from "@/types/main";
import { query } from "@/db";
import { findUniqueUser } from "@/db/models/users";
import { compareSync}  from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
         if (!credentials?.email || !credentials.password) {
          return null;
        }
        const results = await query(findUniqueUser(credentials.email))
        const user: User = results.rows[0];

        if (!user || !(compareSync(credentials.password, user.password))) {
          return null;
        }
        const sanitizedUser: SanitizedUser = {
          id: user.id,
          email: user.email,
          name: user.name,
          roles: user.roles,
          organization: user.organization
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          roles: user.roles,
          organization: user.organization
        }
      }
    }),
  ],
   callbacks: {
     jwt:({ token, user }) => {
      //  console.log("JWT Callback", { token, user});
      const u = user as User;
       if (user) {
         return {
           ...token,
           id: u.id,
           name: u.name,
           email: u.email,
           roles: u.roles,
           organization: u.organization,
          };
        }
        return token;
      },
      session: ({ session, token}) => {
        // console.log("Session Callback", { session, token})

        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            roles: token.roles,
            organization: token.organization
          },
        };
      },
    },
  };

