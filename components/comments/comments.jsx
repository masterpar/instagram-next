import Moment from "react-moment";
import 'moment/locale/es'

function Comments({ comments}) {
    return (
        <div className="ml-10 h-20 overflow-y-scroll
                                scrollbar-thumb-black scrollbar-thin">
            { comments.map(comment => (
                <div
                    key={comment.id}
                    className="flex items-center space-x-2 mb-3"
                >
                    <img
                        className="h-7 rounded-full"
                        src={comment.data().userImage}
                        alt=''
                    />
                    <p className="text-md">
                        <span className="font-bold mr-3">{ comment.data().username}</span>
                        { comment.data().comment}
                    </p>
                    <Moment
                        className="pr-5 text-xs"
                        fromNow
                        locale="es"
                        interval={1000}
                    >
                        { comment.data().timestamp?.toDate() }
                    </Moment>
                </div>
            ))}
        </div>
    )
}

export default Comments;
