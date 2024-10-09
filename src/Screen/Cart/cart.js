import React from 'react'
import './cart.css'
const Cart = () => {
    return (
        <div className="cart">
            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shopping Cart</div>
                <div className="deselectAllItems">Deselect all Items</div>
                <div className="cartPriceTextDivider">Price</div>

                <div className="cartItemsDiv">
                    <div className="cartItemsBlock">
                        <div className="cartItemsLeftBlock">
                            <div className="cartItemLeftBlockImage">
                                <img className='cartItemLeftBlockImg' src="https://m.media-amazon.com/images/I/61JvFLHZ6NL._SX679_.jpg" alt="" />
                            </div>
                            <div className="cartItemLeftBlockDetails">
                                <div className="cartItemProductName">Apple iPhone 16 Pro (128 GB) - Desert Titanium</div>
                                <div className="inStockCart">In Stock</div>
                                <div className="elgFreeShip">Elligible for free Shipping</div>
                                <div className="amazonFullFilledImage"><img className='fullfillImg' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></div>
                                <div className="removeFromCart">Remove from Cart</div>
                            </div>
                        </div>
                        <div className="cartItemRightBlock">
                            Rs {25000}
                        </div>
                    </div>

                    <div className="cartItemsBlock">
                        <div className="cartItemsLeftBlock">
                            <div className="cartItemLeftBlockImage">
                                <img className='cartItemLeftBlockImg' src="https://m.media-amazon.com/images/I/61JvFLHZ6NL._SX679_.jpg" alt="" />
                            </div>
                            <div className="cartItemLeftBlockDetails">
                                <div className="cartItemProductName">Apple iPhone 16 Pro (128 GB) - Desert Titanium</div>
                                <div className="inStockCart">In Stock</div>
                                <div className="elgFreeShip">Elligible for free Shipping</div>
                                <div className="amazonFullFilledImage"><img className='fullfillImg' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></div>
                                <div className="removeFromCart">Remove from Cart</div>
                            </div>
                        </div>
                        <div className="cartItemRightBlock">
                            Rs {25000}
                        </div>
                    </div>

                    <div className="cartItemsBlock">
                        <div className="cartItemsLeftBlock">
                            <div className="cartItemLeftBlockImage">
                                <img className='cartItemLeftBlockImg' src="https://m.media-amazon.com/images/I/61JvFLHZ6NL._SX679_.jpg" alt="" />
                            </div>
                            <div className="cartItemLeftBlockDetails">
                                <div className="cartItemProductName">Apple iPhone 16 Pro (128 GB) - Desert Titanium</div>
                                <div className="inStockCart">In Stock</div>
                                <div className="elgFreeShip">Elligible for free Shipping</div>
                                <div className="amazonFullFilledImage"><img className='fullfillImg' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></div>
                                <div className="removeFromCart">Remove from Cart</div>
                            </div>
                        </div>
                        <div className="cartItemRightBlock">
                            Rs {25000}
                        </div>
                    </div>
                </div>
            </div>

            <div className="topRightCart">
                <div className="subTotalTitle">Suntotal({2} items) : <span className='subTotalTitleSpan'>Rs {45000}</span></div>
                <div className="giftAddto">
                    <input type="checkbox" />
                    <div>This order conatins a gift</div>
                </div>
                <div className="proceedToBuy">Proceed to Buy</div>
            </div>

        </div>
    )
}

export default Cart