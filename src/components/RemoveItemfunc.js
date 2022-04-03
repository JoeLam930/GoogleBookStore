function RemoveItemfunc(props) {

    const removeFromCart = (props) => {
        props.setCart(props.cart.filter((item,i) => item.id !== props.selectedDVD.id))
        props.setTotalcost(props.totalcost - Number(props.selectedDVD.price.replace(/[^0-9.-]+/g,"")))
        props.DVDsStorge.map((item)=>{
            if(item.id === props.selectedDVD.id){
                item.stock += 1
            }
        })
        
    }
    return(
    <div className="actions">
        <button onClick={()=>removeFromCart(props)}>Remove</button>
    </div>
    )
}
export default RemoveItemfunc;


