import { useState } from 'react';
import CheckoutBox from './CheckoutBox';
import './DVDsItemsandlists/DVDsItem.css';
import RemoveItemfunc from './RemoveItemfunc';

function Cartstorage(props) {
    
    const [buyMovie, setbuyMovie] = useState(false);

    return (
        <div>
            <h1>Your Cart</h1>
                <div>
                    {props.cart.map((DVD, i) =>
                        <div key={i} className="cartItem">
                            <p>{DVD.movie}</p>
                            <p>{DVD.price}</p>
                            <RemoveItemfunc selectedDVD = {DVD} cart = {props.cart} setCart = {props.setCart} totalcost = {props.totalcost} setTotalcost = {props.setTotalcost} DVDsStorge={props.DVDsStorge}/>
                        </div>                                   
                    )}                    
                </div>              
            <h1>Total : £{props.totalcost}</h1>
            <div className="actions">
                <button className='btn' onClick={()=>setbuyMovie(true)}>Buy</button>
            </div>            
                {buyMovie && <CheckoutBox cart = {props.cart} setCart = {props.setCart} totalcost = {props.totalcost} setTotalcost = {props.setTotalcost}/>}
        </div>
    )
}
export default Cartstorage;