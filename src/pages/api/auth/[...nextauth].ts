import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
        },
        password: {
          label: "Şifre",
          type: "password",
        },
      },

      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Atakan",
          surname: "Altunbaş",
          email: "a.altunbas@outlook.com.tr",
          password: "Atakan1234*",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
