import React from 'react';

const BlogPost = (props) => {
    const {author_name,blog_title,read_time,images,publish_date} = props.blog;
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
                    <i className='ml-2'>red</i>
                </div>
            </div>
            <p className='text-2xl font-bold text-left ml-5'>{blog_title}</p>
            <button className='items-start'>Mark as read</button>
        </div>
    );
};

export default BlogPost;