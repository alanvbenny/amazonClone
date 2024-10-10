import React from 'react';
import './navbarBelt.css';
import amazonLogo from '../../../Assets/amazonLogo.png';
import india from '../../../Assets/india.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';


const NavbarBelt = () => {

  const cartItems = useSelector((state) => state.cart.items)

  return (
    <div className='navbarBelt'>
      <div className="leftNavBelt">
        <Link to={'/'} className="leftNavBeltlogo">
          <img className='amazonLogoNavbar' src={amazonLogo} alt="" />
          <span className='navbar_inLogo'>.in</span>
        </Link>
        <div className="navbarBeltLocation">
          <div className="navbarBeltLocationImg">
            <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{ fontsize: "22px" }} />
          </div>
          <div className="navbarBeltLocationPlace">
            <div className="navbarBeltLocationTop">
              Delivering to Kochi
            </div>
            <div className="navbarBeltLocationBottom">
              Update Location
            </div>
          </div>
        </div>

      </div>
      <div className="navbarBeltSearchBox">
        <div className="navbarBeltSearchDiv">
          <div className="navbarBeltSearchBoxAll">
            <div className="navbarBeltSearchBoxAllText">All</div>
            <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
          </div>
          <input type="text" className='navbarBeltInputSearchBox' placeholder='search Amazon.in' />
          <div className="searchIconNavbarBelt">
            <SearchIcon sx={{ fontSize: "26px" }} className='searchIconNavbarBeltIcon' />
          </div>
        </div>
      </div>
      <div className="rightSideNavbarBelt">
        <div className="indianFlagCode">
          <img src={india} className='indiaFlag' alt='india' />
          <div className='indiaCodeNavbarBelt'>EN
            <ArrowDropDownOutlinedIcon sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }}
              className='indiaCodeNavbarBeltDrp' /></div>
        </div>

        <div className="helloSignInNavbarBelt">
          <div className="helloTopNavbarBelt">Hello, User</div>
          <div className="indiaCodeNavbarBelt">Accounts & List</div>
        </div>

        <div className="helloSignInNavbarBelt">
          <div className="helloTopNavbarBelt">Returns</div>
          <div className="indiaCodeNavbarBelt"> & Orders</div>
        </div>
        <Link to={'/cart'} className="helloSignInNavbarBelt">
          <span className='cartItemNumberNavbarBelt'>{cartItems.length}</span>
          <div className="helloTopNavbarBelt"><ShoppingCartOutlinedIcon /><span className='cartTitle'>Cart</span></div>
        </Link>
      </div>
    </div>
  )
}

export default NavbarBelt