import Slider from 'react-slick';
import Content from '../../components/Hero/Content';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function hero() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 6000,
    slidesToscroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm-min-h[650px]  bg-gray-200  flex justify-center   items-center  dark:bg-blue-950 dark:text-white duration-200">
      {/** background pattern */}
      <div className=" h-[700px] w-[600px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

      {/**  content  */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {Content.map((data) => (
            <div className="" key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2  ">
                <div className=" flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    data-aos="zoom-out"
                    data-aos-duration="500"
                  >
                    {data.price}
                  </h1>
                  <p
                    className="py-4"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="true"
                  >
                    {' '}
                    {data.description}
                  </p>
                  <div
                    className="py-2"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary px-4 rounded-full py-2 hover:scale-105 duration-200 text-white ">
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    className="relative z-10"
                    data-aos="zoom-in"
                    data-aos-once="true"
                    data-aos-delay="500"
                  >
                    <img
                      src={data.image}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-120 object-contain mx-auto lg:scale-120 "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default hero;
