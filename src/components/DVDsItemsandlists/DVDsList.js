import './DVDsItem.css';
import DVDsItem from './DVDsItem';

function DVDsList(props){
   
    return (
        <div className="dvdContainer">    
        {props.DVDsStorge.map((DVD, i) => (
            <DVDsItem DVD = {DVD}
                key = {i}
                cart = {props.cart} 
                setCart={props.setCart} 
                totalcost = {props.totalcost} 
                setTotalcost={props.setTotalcost}
                />
                ))}
        </div>
        )
}
export default DVDsList;