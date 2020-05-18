import React, {useEffect, useState} from 'react';
import './App.css';
import Book from "./Book.js";



const App =  () => {


const APP_ID = "4f3f9c74-74cd-4bc4-a21d-80ac92d41a29";



const [books, setBooks] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState("");

useEffect (()=> {
getBooks();

},[query]);

const getBooks = async () => {
const response = await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=hAzLGYxE9ydMH30QAdJYNIF333jiz0nX");
const data = await response.json();

console.log(data);
setBooks(data.results.books);


};

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);

}

return(
  <div className="App">
<h1 className="header">POPULAR BOOKS</h1>

<div className="books">
{books.map(books =>


(<Book 
  key ={books.title}
  title={books.title} 
author={books.author} 
review={books.description} 
image={books.book_image} /> )) };




 

</div>

</div>


);


};






export default App;
