import { useEffect } from "react";
import { useState } from "react";

//will load the blog data
const Blogs = () => {
    //blogs gulo load kore state a rakhbo
    const [blogs,setBlogs] = useState([])

    //data load korar jonno useEffect dibo
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;