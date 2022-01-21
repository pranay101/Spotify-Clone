import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import SpotifyAPi, { LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessToken(params) {
  try {
    SpotifyAPi.setAccessToken(token.accessToken);
    SpotifyAPi.setRefreshToken(token.refreshToken);

    const {body:refreshedToken} = await SpotifyAPi.refreshAccessToken();
    console.log("Refreshed token >>",refreshedToken);

    return{
      ...token,
      accessToken:refreshedToken.accessToken,
      accessTokenExpires: Date.now + refreshedToken.expires_at * 1000, // set it to one hour from now
      refreshToken : refreshedToken.refreshToken ?? token.refreshToken
    }
  } catch (error) {
    console.error(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC - CLIENT_SECRET,
      clientSecret: process.env.NEXT_PUBLIC - CLIENT_ID,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      //initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        console.log("Existing access token is valid");
        return token;
      }

      console.log("access token has expired ");
      return await refreshAccessToken(token);
    },

    async session({session,token}){
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    }
  },
});
