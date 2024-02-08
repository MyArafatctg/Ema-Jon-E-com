import React, { useEffect, useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import BookMark from '../BookMark/BookMark';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlog(data))
        },[]);
        
        const [blogs, setBlogs] = useState([]);
        const totalBookmark = (id) =>{
            let newblogs = [];
            newblogs = [...blogs, id];
            setBlogs(newblogs);
        }
        const [time, setTime] = useState([]);
        let totalreadingTime = 0;
        for (const tlTime of time){
            const readtime = tlTime.read_time;
            totalreadingTime = totalreadingTime + parseInt(readtime);
            console.log(totalreadingTime);
        }
        useEffect(()=>{
            const totalReadTime = [];
            for (let id of blogs){
                const getBlogs = blog.find(obj => obj.id === id);
                if(getBlogs){
                totalReadTime.push(getBlogs);
            }}
            setTime(totalReadTime);
        },[blog, blogs, setTime])

    return (
        
        <>
        <div className="grid grid-cols-6 gap-10 mt-5">
            <div className='col-span-4'>
                {blog.map(blogs => <BlogPost
                key={blogs.id}
                blog={blogs}
                totalBookmark = {totalBookmark} 
                ></BlogPost>)}
            </div>
            <div className='col-span-2 sticky top-0 max-h-[600px] overflow-auto scroll-smooth'>
                <div className='border py-5 rounded-md text-2xl bg-red-600 text-white font-bold'>
                    <p>Spent time on read : {totalreadingTime} min</p>
                </div>
                <div className='mt-5 p-5 bg-red-100'>
                    <p className='flex m-5 pt-5 font-bold text-2xl'>Bookmark blogs : {blogs.length}</p>
                    {time.map(asMartk => <BookMark
                    asMartk = {asMartk}
                    ></BookMark>)}
                </div>
            </div>
        </div>
        </>
    );
};

export default Blog;