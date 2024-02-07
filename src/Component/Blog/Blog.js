import React, { useEffect, useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlog(data))
        },[]);
    return (
        <>
        <div className="grid grid-cols-6 gap-10">
            <div className='col-span-4 border'>
                {blog.map(blogs => <BlogPost
                key={blogs.id}
                blog={blogs} 
                ></BlogPost>)}
                {/* <BlogPost blog={blog}></BlogPost> */}
            </div>
            <div className='col-span-2 border'>
                <p>blog status</p>
            </div>
        </div>
        </>
    );
};

export default Blog;