import React from 'react';


const Book = ({title, author, review, image})=> {
return(
    <div className="allbooks">
        <h1 className="booktitle">{title}</h1>
        <h2 classname="bookauthor">{author}</h2>
        <p className="bookreview">{review}</p>
        <img className="bookimage"src={image} alt=""></img>




        </div>


);


}

export default Book;