import styledComponents from 'styled-components';
import AddItemfunc from '../AddItemfunc';
import './DVDsItem.css';

const Bookitem = styledComponents.div`
    display: flex;
    flex-wrap: wrap;
    width: 45%;
    margin: 0.5rem 0;
    padding : 0.5rem;
    background-color: white;
    border-radius: 6px;
    @media only screen and (max-width: 900px){
        width: 75%;
    }
    @media only screen and (max-width: 600px){
        width: 100%;
    }
    
`;

const Bookimage = styledComponents.div`
    width: 35%;
    border: 1px solid black; 
`;

const Bookitemcontent = styledComponents.div`
    width: 60%;
    text-align: left;
    border: 1px solid black;
`;

function DVDsItem(props){

    return (
    <Bookitem>
        <Bookimage>The Book Cover
        </Bookimage>
        <Bookitemcontent key={props.DVD.id}>
            <h4>Title:{props.DVD.movie}</h4>
            <h4>Subtitle:{props.DVD.movie}</h4>
            <p>All authors: {props.DVD.genre.join(" | ")}</p>
            <p>Number of page: {props.DVD.year}</p>
            <p>Description: {props.DVD.price}</p>
            { props.DVD.stock < 10 && props.DVD.stock > 0 ? <p>Only <span>{props.DVD.stock}</span> left in stock</p> : <p>Stock: {props.DVD.stock}</p>}
        </Bookitemcontent>
        { props.DVD.stock === 0 ? <h3>Out of Stock</h3> :<AddItemfunc DVD = {props.DVD}
                     cart = {props.cart}
                     setCart = {props.setCart}
                     totalcost = {props.totalcost}
                     setTotalcost = {props.setTotalcost}
                      />
        }
    </Bookitem>
    )    
}
export default DVDsItem;