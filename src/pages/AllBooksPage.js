import { useState } from 'react';
import BooksList from '../components/BooksItemsandlists/BooksList';
      
function AllBooksPage(props) {

  const [fetching, setFetching] = useState(true);

  fetching && fetch("https://www.googleapis.com/books/v1/volumes?q=HTML5")
  .then(response => response.json())
  .then(data =>{
      props.setBooksStorage(data.items);
  }).finally(() => {
    setFetching(false);
  })
        
  return (
    <section>
      <BooksList BooksStorage={props.BooksStorage}
                 setBooksStorage={props.setBooksStorage}
                 FeaturedBook1 = {props.FeaturedBook1}
                 setFeaturedBook1 = {props.setFeaturedBook1}
                 FeaturedBook2 = {props.FeaturedBook2}
                 setFeaturedBook2 = {props.setFeaturedBook2}
      />            
    </section>
  );
}
      
export default AllBooksPage;
