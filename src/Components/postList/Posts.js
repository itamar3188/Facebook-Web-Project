import Post from "../Post/Post";
import {useEffect,useState} from "react";

function Posts() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:8989/posts");
            const post = await result.json();
            console.log("post")
            setPostList(post);
        };

        fetchData();
    }, []);
    return (
        <div>
            {postList.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}

export default Posts;