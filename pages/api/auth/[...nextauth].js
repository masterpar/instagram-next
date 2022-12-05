import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({

    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

    ],
    secret: process.env.SECRET,
    pages: {
        signIn: '/auth/signin',  // Displays signin buttons
        // signOut: '/auth/signout', // Displays form with sign out button
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // Used for check email page
        // newUser: null // If set, new users will be directed here on first sign in
    },
    callbacks: {
        async session({session, token, user}){
            session.user.username = session.user.name
                .split(' ')
                .join('')
                .toLowerCase()

            session.user.uid = token.sub
            return session
        }
    }


})