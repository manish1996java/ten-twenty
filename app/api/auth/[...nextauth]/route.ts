import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const EMAIL = "manish@gmail.com";
const Password = "Manish@1234"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // ✅ Dummy auth
        if (
          credentials?.email === EMAIL &&
          credentials?.password === Password
        ) {
          return {
            id: "1",
            name: "Manish",
            email: EMAIL,
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