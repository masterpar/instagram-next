import Stories from "./stories/Stories";


function Feed() {
    return (
        <main  className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
                xl:grid-cols-3 xl:max-w-6xl mx-auto ">

            {/* section center*/}
            <section className="col-span-2">
                {/*  stories*/}
                <Stories/>
                {/* post*/}
            </section>


            {/*section right*/}
            <section className="">
                {/*  mini-profile*/}
                <h2>profile</h2>
                {/*  suggestion*/}
            </section>



        </main>
    )
}

export default Feed;
