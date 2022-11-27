import { faker } from '@faker-js/faker';
import {useEffect, useState} from "react";
import Storie from "./Storie";
import {useSession} from "next-auth/react";

function Stories() {

    const { data: session} = useSession()
    const [ suggestions, setSuggestions] = useState([])

    useEffect( () => {
        const suggestion = [...Array(20)].map( (_, i) => ({
            ...faker.helpers.objectValue(
                [{
                      userId: faker.datatype.uuid(),
                      username: faker.internet.userName(),
                      email: faker.internet.email(),
                      avatar: faker.image.avatar(),
                }]
            )
        }))
        setSuggestions(suggestion)
    },[])



    return (
            <div className="flex space-x-2 p-3 mt-5 bg-white border-gray-200
                            border  overflow-x-scroll scrollbar-thin
                            scrollbar-thumb-gray-200">
                { session &&
                    <Storie
                        key={session.user.id}
                        avatar={session.user.image}
                        username={session.user.username}
                    />
                    }
                {
                    suggestions.map((profile, i) => (
                        <Storie key={i} {...profile}/>
                    ))
                }

            </div>
    )
}

export default Stories;
