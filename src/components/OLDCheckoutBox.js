function CheckoutBox(props) {

    const emptyCart = (props) => {
        props.setCart([])
        props.setTotalcost(0.0)
      }


    return(
        <div>
            <h1>Are you sure?</h1>
            <div className="actions">
                <button onClick={()=>emptyCart(props)}>Yes</button>
            </div>
        </div>
    )
}
export default CheckoutBox;