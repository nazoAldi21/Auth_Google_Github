import SignAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

const route = SignAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        }),
    ],
});

export { route as GET, route as POST};