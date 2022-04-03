import { useState } from 'react';
import Cartstorage from '../components/Cartstorage';
import DVDsList from '../components/DVDsItemsandlists/DVDsList';
      
function AllDVDsPage(props) {

        const [openCart, setopenCart] = useState(false);
        const [fetching, setFetching] = useState(true);

        fetching && fetch("DVDdata.json")
        .then(response => {
            return response.json();
        }).then(data =>{
            props.LoadDVDsStorge(data);
        }).finally(() => {
          setFetching(false)
        })
        
        return (
          <section>
            <h1>All DVDs</h1>
            <button className='btn' onClick={()=>setopenCart(true)}>Check Out<span> ({props.cart.length})</span></button>
            <button className='btn' onClick={()=>setopenCart(false)}>Close Check Out</button>
            {openCart && <Cartstorage cart = {props.cart} setCart = {props.setCart} totalcost = {props.totalcost} setTotalcost = {props.setTotalcost} DVDsStorge={props.DVDsStorge}/>}          
            <DVDsList DVDsStorge={props.DVDsStorge} cart = {props.cart} setCart={props.setCart} totalcost = {props.totalcost} setTotalcost={props.setTotalcost} dvdstock={props.dvdstock} setdvdStock={props.setdvdStock}/>            
          </section>
        );
      }
      
      export default AllDVDsPage;
