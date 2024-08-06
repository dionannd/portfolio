import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default async function auth() {
  return await NextAuth({
    providers: [
      GitHubProvider({
        clientId: process.env.OAUTH_CLIENT_KEY as string,
        clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
      }),
    ],
    pages: {
      signIn: '/sign-in',
    },
  });
}
