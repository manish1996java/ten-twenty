import { userCredential } from "@/constants/userCredential";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {

        if (
          credentials?.email === userCredential.email &&
          credentials?.password === userCredential.password
        ) {
          return {
            id: userCredential.id,
            name: userCredential.name,
            email: userCredential.email,
          };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };