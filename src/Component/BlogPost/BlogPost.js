import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const BlogPost = (props) => {
    const {id, author_name,blog_title,read_time,images,publish_date} = props.blog;
    const totalBookmark = props.totalBookmark;
    return (
        <div>
            <img src={images.blog_cover_image} alt="blog Post pic" />
            <div className='grid grid-cols-5 mx-5 mt-5'>
                <div className='col-span-4 flex '>
                    <img className='w-14 rounded-full h-14' src={images.author_image} alt="author pic" />
                    <div className='ml-5'>
                        <p className='text-xl font-bold	'>{author_name}</p>
                        <p className='text-left'>{publish_date}</p>
                    </div>
                </div>
                <div className='col-span-1 flex justify-end'>
                    <p>{read_time} min read</p>
                    <i onClick={() => totalBookmark(id)} className='ml-2 cursor-pointer'><FontAwesomeIcon icon={faBookmark} /></i>
                </div>
            </div>
            <p className='text-2xl font-bold text-left ml-5 mt-5'>{blog_title}</p>
            <button onClick={() => totalBookmark(id)} className="bg-red-600 px-4 py-2 my-3 rounded-md text-white text-left block ml-5">Mark as read</button>
        </div>
    );
};

export default BlogPost;