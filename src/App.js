import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllDVDsPage from './pages/AllDVDs.js';
import { useState } from 'react';
import styledComponents from 'styled-components';
import { Book, Facebook, Instagram, Twitter } from '@material-ui/icons';

const Header = styledComponents.div`
  height: 75px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
`;

const Logo = styledComponents.div`
`;

const StoreName = styledComponents.div`
  font-size: 2rem;
  @media only screen and (max-width: 600px){
    font-size: 1.5rem;
  }
`;

const Socialmediaheader = styledComponents.div`
  width: 25%;
  height: 50%;
  @media only screen and (max-width: 420px){
    display: none;
  }
`;

const Socialmediafooter = styledComponents.div`
  width: 100%;
  height: 50%;
  visibility: hidden;
  @media only screen and (max-width: 420px){
    visibility: visible;
  }
`;

const Menu = styledComponents.div`
  width: 100%;
  height: 70px;
  background-color: white;
  border: 1px solid black;
  @media only screen and (max-width: 600px){
    display: none;
  }
`;

const MobileMenu = styledComponents.div`
  display: none;
  @media only screen and (max-width: 600px){
    display: block;
    background: url(./imgs/icons8-xbox-menu-100.png);
    width: 100px;
    height: 100px;
    border: 1px solid black;  
  }
`;
const Menuicon = styledComponents.div`

`;

const Items = styledComponents.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media only screen and (max-width: 600px){
    flex-direction: column;
  }

`;

const ReverseforDesktop =  styledComponents.div`
  width: 33%;
  @media only screen and (max-width: 600px){
    width: 100%;
  }
`;

const Featured = styledComponents.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  border: 1px solid black;
`;

const Featureditem = styledComponents.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border: 1px solid black;
  @media only screen and (max-width: 600px){
    flex-direction: column-reverse;
  }

`;
const Featuredimage = styledComponents.div`
  flex-wrap: wrap;
  width: 70%;
  border: 1px solid black;
`;
const Featurecontent = styledComponents.div`
  flex-wrap: wrap;
  width: 90%;
  border: 1px solid black;
`;

const NoFeatured = styledComponents.div`
  width: 66%;
  @media only screen and (max-width: 600px){
    width: 100%;
  }
`;


function App() {

  const [ cart, setCart ] = useState ([])
  const [ DVDsStorge, LoadDVDsStorge ] = useState([])
  const [ totalcost, setTotalcost] = useState(0.0)
  const [ dvdstock, setdvdStock ] = useState()

  return (
    <div>
      <Header>
      <Logo>
      <Book></Book>
      </Logo>
      <StoreName>The Book Store</StoreName>
      <Socialmediaheader>
        <Twitter></Twitter>
        <Facebook></Facebook>
        <Instagram></Instagram>
      </Socialmediaheader>
      </Header>
      <Menu>Menu</Menu>
      <MobileMenu></MobileMenu>
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.</div>
      <div>
      <Items>
        <ReverseforDesktop>
        <Featured>Featured
          <Featureditem>
            <Featurecontent>Title</Featurecontent>
            <Featuredimage>Image</Featuredimage>
          </Featureditem>
        </Featured>
        <Featured>Featured
        <Featureditem>
            <Featurecontent>Title</Featurecontent>
            <Featuredimage>Image</Featuredimage>
          </Featureditem>
        </Featured>
        </ReverseforDesktop>
      <NoFeatured>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllDVDsPage cart={cart} 
                                                setCart={setCart}
                                                DVDsStorge = {DVDsStorge}
                                                LoadDVDsStorge={LoadDVDsStorge}
                                                totalcost = {totalcost}
                                                setTotalcost={setTotalcost}
                                                dvdstock={dvdstock}
                                                setdvdStock={setdvdStock}
                                                />}>
                                                </Route>                                                
        </Routes>
      </BrowserRouter>
      </NoFeatured>
      </Items>      
      </div>
      <Socialmediafooter>
        <Twitter></Twitter>
        <Facebook></Facebook>
        <Instagram></Instagram>
      </Socialmediafooter>
    </div>
  );
}

export default App;