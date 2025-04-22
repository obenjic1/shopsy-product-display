import Slider from 'react-slick';

function SimpleSlider() {

    var settings = {
     dots: true,
    arrows: true,
    infinite: true,
    speed: 8000,
    slidesToscroll: 1,
    slidesToShow : 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
    };
 return (
   <Slider {...settings}>
     <div className='px-20'>
       <h3>1</h3>
     </div>
     <div>
       <h3>2</h3>
     </div>
     <div>
       <h3>3</h3>
     </div>
     <div>
       <h3>4</h3>
     </div>
     <div>
       <h3>5</h3>
     </div>
     <div>
       <h3>6</h3>
     </div>
   </Slider>
 );
}

export default SimpleSlider;
