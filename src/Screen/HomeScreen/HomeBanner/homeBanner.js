import React from 'react'
import './homeBanner.css'
import homeBannerItemProduct from '../../../homeProduct.json'

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img className='homeBannerimg' src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Arundhati/J24_PC_EventHeader_Unrec_V2.jpg" alt='' />
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homeBannerItemDiv">
        {
          homeBannerItemProduct.product.map((item, ind) => {
            return (
              <div className="homeBannerItemDivCard">
                <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                <div className="imgHomeBannerItemDivCard">
                  {
                    item.imgs.map((it, ind) => {
                      return (
                        <div className="imgBannerHomeDiv">
                          <img className="imageBannerHomeDivImg" src={it} />
                          <div className="imgBannerImgName">Kitchen appliance</div>
                        </div>

                      );
                    })
                  }



                </div>
                <div className="seeMoreHomeBanner">See More</div>
              </div>
            );
          })
        }





      </div>
    </div>

  )
}

export default HomeBanner