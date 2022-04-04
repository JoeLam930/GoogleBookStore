import styledComponents from 'styled-components';

function AddItemfunc(props) {

    const Selectbook = styledComponents.div`
    padding: 1.5rem;
    text-align: center;
    `;

    const Selectbookbutton = styledComponents.div`
    font: inherit;
    color: #77002e;
    cursor: pointer;
    border: 1px solid #77002e;
    background-color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
`;

    const addtoCart = (props) => {
        props.setCart([...props.cart, props.book]);
        //props.setTotalcost(props.totalcost + Number(props.DVD.price.replace(/[^0-9.-]+/g,"")))
        //props.minusStock()
        //props.DVD.stock -=1
    }

    return (
        <Selectbook>
        <Selectbookbutton onClick={() => addtoCart(props)}>Select</Selectbookbutton>
        </Selectbook> 
    )
}
export default AddItemfunc;