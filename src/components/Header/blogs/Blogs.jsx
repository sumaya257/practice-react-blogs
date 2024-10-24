import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../blog/Blog";

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
        <div className="md:w-2/3">
            <h2>blogs:{blogs.length}</h2>
            {
                blogs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;