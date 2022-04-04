import { useEffect, useState } from 'react';
import styledComponents from 'styled-components';
import './BooksItem.css';

const Bookitem = styledComponents.div`
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
    width: 45%;
    cursor: pointer;
    margin: 0.5rem 0;
    padding : 0.5rem;
    @media only screen and (max-width: 900px){
        width: 75%;
    }
    @media only screen and (max-width: 600px){
        width: 100%;
    }
`;


const Bookimage = styledComponents.div`
    width: 40%;
    border: 1px solid black; 
`;

const Bookitemcontent = styledComponents.div`
    width: 60%;
    text-align: left;
    border: 1px solid black;
`;

function BooksItem(props){

    const [selected, setSelected] = useState(false);
    

    useEffect(() => {
        setSelected(JSON.parse(window.localStorage.getItem(props.item.id+'_selected')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem(props.item.id+'_selected', selected);
    }, [selected]);

    // const truncate1 = (str, n) => {
	// 	return str.length > n ? str.substr(0, n - 1) : str;
	// };

    const truncate2 = ( str, n, useWordBoundary ) => {
        if (str.length <= n) { return str; }
        const subString = str.substr(0, n-1); // the original check
        return (useWordBoundary 
          ? subString.substr(0, subString.lastIndexOf(" ")) 
          : subString);
    };

    const checkSelect = () => {
        if (!selected){
            setSelected(true);
            // Press Select
           
        }else{
            setSelected(false);
            // Press Remove
        }

    }

    return (
    

    <Bookitem onClick={()=>checkSelect() } className = {selected ? 'bookItemgray' : 'bookItemwhite'}> 

        <Bookimage>
                    <img
                        src={props.item.volumeInfo.imageLinks.smallThumbnail}
                        alt="book cover"
                    />
        </Bookimage>
        <Bookitemcontent key={props.item.id}>
            <h4>{props.item.volumeInfo.title}
            {props.item.volumeInfo.subtitle == null ? "" : <h5>{props.item.volumeInfo.subtitle}</h5>}</h4>
            <p>{props.item.volumeInfo.authors.join(" | ")}</p>
            <p>Pages: {props.item.volumeInfo.pageCount}</p>
            <p>{truncate2(props.item.volumeInfo.description, 140, true)}</p>             
        </Bookitemcontent>
    </Bookitem>
    
    )    
}
export default BooksItem;