import Post from "./Post";

const DATA = [
    {
        id: '123',
        username: 'username',
        img: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
        caption: 'caption',
    },
    {
        id: '1223',
        username: 'username2',
        img: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
        caption: 'caption2',
    }
]

function Posts() {
    return (
        <div>
            { DATA.map(user => (
                <Post key={user.id} {...user}/>
            ))}


        </div>
    )
}

export default Posts;
