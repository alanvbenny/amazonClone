import React from 'react';
import './navbarBanner.css';
import MenuIcon from '@mui/icons-material/Menu';
import Banner from '../../../Assets/banner.jpg'
import { Link } from 'react-router-dom';
const NavbarBanner = () => {
  const options = [
    { "name": "Fresh" },
    { "name": "Amazon miniT" },
    { "name": "Sell" },
    { "name": "Best Sellers" },
    { "name": "Todays Deal" },
    { "name": "Mobiles" },
    { "name": "Electronics" },
    { "name": "prime" },
    { "name": "customer service" },
    { "name": "Fashion" },
    { "name": "Home &Kitchen" },
  ]
  return (
    <div className="navbarBanner">

      <div className="navbarBannerOptionsLeft">

        <div className="optionsNavBanner">
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className="allOptionsNavbarBanner">All</div>
        </div>
        {
          options.map((item, ind) => {
            return (
              <Link to={'/products'} className="optionsNavBanner" key={ind}>
                <div className="allOptionsNavbarBanner">{item.name}</div>
              </Link>

            );
          })
        }

      </div>

      <img src={Banner} className="bannerimg" alt="amazao" />


    </div>
  )
}

export default NavbarBanner