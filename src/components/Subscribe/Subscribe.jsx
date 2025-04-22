import bg from '../../assets/Banner/bg.jpg';



const BannerImage={
    backgroundImage:`url(${bg})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
}
function Subscribe() {


  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="500"
      className="mb-20 bg-gray-100 dark:bg-gray-800 "
      style={BannerImage}
    >
      <div className="container backdrop-blur-sm py-10 text-white">
        <div className="space-y-6 max-w-xl mx-auto ">
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
             className="text-2xl text-center sm:text-left  sm:text-3xl font-semibold"
          >
            Get Notified About New Products
          </h1>

          <input
            type="text"
            data-aos="fade-up"
            data-aos-delay="400"
            placeholder="Enter your Email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe