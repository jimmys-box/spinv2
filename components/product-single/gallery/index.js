
import { Swiper, SwiperSlide } from 'swiper/react';

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if (window.innerWidth > 500) {
    slidesPerView = 1;
    spaceBetween = 35;
    centeredSlides = true;
  }
  if (window.innerWidth > 768) {
    slidesPerView = 1;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 1;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

const Gallery = ({ images }) => {
  const featImage = images;
console.log(featImage.src);
  return (
  //  <section className="product-gallery">
  //      <div className="product-gallery__thumbs">
  //       {images.map(image => (
  //         <div key={image} className="product-gallery__thumb">
  //           <img src={image} alt="" />
  //         </div>
  //       ))}
  //     </div>  
  //     <div className="product-gallery__image">
  //       <img src={featImage} alt="" />
  //     </div> 
      <div className="products-carousel">
        <Swiper
          spaceBetween={spaceBetween}
          loop={false}

          centeredSlides={centeredSlides}
          watchOverflow={true}
          slidesPerView={slidesPerView}
          className="swiper-wrapper productPageSwiper">
          {images.map(featImage => (
            <SwiperSlide key={featImage.id} style={{width:'auto!important'}}>
              <div className="product-gallery__image">
                <img height="350px" src={featImage.src}  />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    // </section>
  );
};

export default Gallery;
