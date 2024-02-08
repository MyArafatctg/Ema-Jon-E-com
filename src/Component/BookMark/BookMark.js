import React from 'react';

const BookMark = (props) => {
    const asMartk = props.asMartk;
    return (
        <div className='m-5 bg-red-50 rounded-md'>
           <p className='p-5 text-start font-bold text-xl'>{asMartk.blog_title}</p>
        </div>
    );
};

export default BookMark;