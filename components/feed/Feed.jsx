import Stories from "../stories/Stories";
import Posts from "../posts/Posts";
import MiniProfile from "../miniProfile/MiniProfile";
import Suggestions from "../suggestions/Suggestions";
import {useSession} from "next-auth/react";


function Feed() {

    const { data: session} = useSession()

    return (
        <main  className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
                xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>

            {/* section center*/}
            <section className="col-span-2">
                {/*  stories*/}
                <Stories/>
                {/* post*/}
                <Posts/>
            </section>



            {/*section right*/}
            { session &&
                <section className="hidden xl:inline-grid md:col-span-1 mx-0">
                <div className="fixed top-20">
                     {/*  mini-profile*/}
                    <MiniProfile/>
                    {/*  suggestion*/}
                    <Suggestions/>
                </div>

                </section>
            }


        </main>
    )
}

export default Feed;
