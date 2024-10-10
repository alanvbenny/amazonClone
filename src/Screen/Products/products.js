import React from 'react'
import './product.css';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import productDetail from './products.json'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Products = () => {
  
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.cart.items)
  const handleAddToCart=(item)=>{
        toast.success("Added to Cart",{
          position:"bottom-right"
        })
        dispatch(addToCart(item));
  }
  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">
          Electronics
        </div>
        <div className="productTopBannerItemsSubMenu">Mobiles & Accessories</div>
        <div className="productTopBannerItemsSubMenu">Laptops & Accessories</div>
        <div className="productTopBannerItemsSubMenu">TV & Home Entertainment</div>
        <div className="productTopBannerItemsSubMenu">Audio</div>
        <div className="productTopBannerItemsSubMenu">Cameras</div>
        <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
        <div className="productTopBannerItemsSubMenu">Smart Technology</div>
        <div className="productTopBannerItemsSubMenu">Musical Instruments </div>
        <div className="productTopBannerItemsSubMenu">Office & Stationary </div>

      </div>

      <div className="productsMainPage">
        <div className="productsMainPageLeftCategory">
          <div className="productsMainPageLeftCategoryTitle">Category</div>
          <div className="productsMainPageLeftCategoryContent">
            <div className="productsMainPageLeftCategoryContentTitle">Computer & Accessories</div>
            <div className="productsMainPageLeftCategoryContentSub">Macbooks</div>
            <div className="productsMainPageLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsMainPageLeftCategoryContentSub">Average Customer Review</div>

            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />

              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>

            </div>

            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp">& Up</div>
            </div>


            <div className="productsMainPageLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsMainPageLeftCategoryContentSub">Average Customer Review</div>
            <div className="productsMainPageLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsMainPageLeftCategoryContentSub">Average Customer Review</div>
            <div className="productsMainPageLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsMainPageLeftCategoryContentSub">Average Customer Review</div>
            <div className="productsMainPageLeftCategoryContentSub">Amazon Prime</div>
            <div className="productsMainPageLeftCategoryContentSub">Average Customer Review</div>


          </div>
        </div>

        <div className="productsPageMainRight">
          <div className="productsPageMainRightTopBanner">
            1-5 of 5 results for <span className='productsPageMainRightTopBannerspan'>Macbooks</span>
          </div>

          <div className="itemsImageProductPage">
            {
              productDetail.product.map((item, index) => {
                return (
                  <div className="itemsImageProductPageOne" key={item.id}>
                    <div className="imgBlockitemsImageProductPageOne">
                      <img src={item.imageUrl} className="productImageProduct" alt="" />
                    </div>
                    <div className="productNameProduct">
                      <div>{item.name}</div>
                      <div className="productNameProductRating">
                        <StarIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                      </div>
                      <div className="priceProductDetailPage">
                        <div className="currencyText">$</div>
                        <div className="rateHomeDetail">
                          <div className="rateHomeDetailPrice">{item.price}</div>
                          <div className="addBasketBtn" onClick={()=>{handleAddToCart(item)}}>Add to Cart</div>
                        </div>
                      </div>
                      <div className="offProductPage">Upto 10% off on select cards</div>
                      <div className="freeDeliveryHomepage">Free Delivery by Amazon</div>
                    </div>
                  </div>

                );
              })
            }



          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Products