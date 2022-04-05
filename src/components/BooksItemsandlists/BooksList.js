import './BooksItem.css';
import BooksItem from './BooksItem';

function BooksList(props){
   
    return (
        <div className="bookContainer">
        {props.BooksStorage.map((item, index, array) => (
            (index === array.length-2) ? props.setFeaturedBook1(item)
            : ((index === array.length-1) ? props.setFeaturedBook2(item): <BooksItem item = {item}/>)            
            ))}
        </div>
        )
}
export default BooksList;