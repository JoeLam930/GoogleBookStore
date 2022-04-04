import styledComponents from 'styled-components';

const Selectbook = styledComponents.div`
width: 45%;
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

function IsSelected(props) {

return (
        <Selectbook>
        {!props.selected?
        <Selectbookbutton onClick={() => props.setSelected(true)}>Select</Selectbookbutton>:
        <Selectbookbutton onClick={() => props.setSelected(false)}>Remove</Selectbookbutton>}
        </Selectbook> 
    )
}
export default IsSelected;