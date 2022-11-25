import {useEffect, useState} from "react";
import {faker} from "@faker-js/faker";

function Suggestions() {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(6)].map( (_, i) => ({
            ...faker.helpers.objectValue(
                [{
                    userId: faker.datatype.uuid(),
                    username: faker.internet.userName(),
                    avatar: faker.image.avatar(),
                }]
            )
        }))
        setSuggestions(suggestions)
    }, []);

    return (
        <div className="ml-10 mt-7 ">
            <div className="flex justify-between mb-5 text-sm">
                <p className="text-gray-400 font-semibold ">Sugerencias para ti </p>
                <button className="">Ver todo</button>
            </div>

            {
                suggestions.map(suggestion => (
                    <div
                        className="flex items-center justify-betweenmt-3 "
                        key={suggestion.userId}
                    >
                        <img
                            className="rounded-full w-10 h-10 border p-0.5"
                            src={suggestion.avatar}
                            alt={suggestion.username}
                        />

                            <div className="mb-3  ml-3 flex-1 ">
                                <h2 className="">{ suggestion.username}</h2>
                                <p className="text-gray-400 text-sm ">te sigue</p>
                            </div>

                            <button className="text-sm font-semibold text-blue-400">
                                seguir
                            </button>


                    </div>

                ))
            }

        </div>
    )
}

export default Suggestions;
