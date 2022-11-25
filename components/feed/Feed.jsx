import Stories from "../stories/Stories";
import Posts from "../posts/Posts";


function Feed() {
    return (
        <main  className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
                xl:grid-cols-3 xl:max-w-6xl mx-auto ">

            {/* section center*/}
            <section className="col-span-2">
                {/*  stories*/}
                <Stories/>
                {/* post*/}
                <Posts/>
            </section>


            {/*section right*/}
            <section className="">
                {/*  mini-profile*/}

                {/*  suggestion*/}
            </section>



        </main>
    )
}

export default Feed;
