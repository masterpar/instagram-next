import {
    getProviders,
    signIn as SignIntoProvider
    } from "next-auth/react";
import Header from "../../components/header/Header";

//Browser
function SignIn({ providers }) {
    return (
        <>
            <Header/>
            <div className="flex flex-col items-center mt-40 min-h-screen py-2  px-14 text-center">
                <img
                    src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
                    alt="instagram"
                    className="w-80"
                />
                <p className="font-xs italic">
                    Bienvenido a instagram
                </p>
                <div className="mt-20">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className="p-3 bg-blue-500 rounded-md text-white"
                                onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/'})}
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

//Server
export async function getServerSideProps(){
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

export default SignIn;
