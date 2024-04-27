import Post from "../Post/Post";
import config from '../../config'
import {useEffect,useState} from "react";

function Posts(user) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:"+config.PORT+"/api/posts");
            const post = await result.json();
            console.log("post")
            setPostList(post);
        };

        fetchData();
    }, []);
    return (
        <div>
            {postList.map((post) => (
                <Post key={post._id} post={post} user={user.user} />
            ))}
        </div>
    );
}

export default Posts;