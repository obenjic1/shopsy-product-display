import productDetails from '../Products/productDetails';
import { FaStar } from 'react-icons/fa6';
import 'aos/dist/aos.css';

function products() {
  return (
    <div className="mt-10 mb-12">
      {/**  the heading  */}
      <div>
        <div className="mx-auto text-center mb-10 max-w-[600px]">
          <p data-aos="fade-up" className="text-md  text-primary">
            {' '}
            Top Selling bProducts for you{' '}
          </p>

          <h1 data-aos="fade-up" className="text-4xl font-bold m-2">
            {' '}
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs ">
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quia dolore ea culpa quasi sequi laboriosam tenetur corrupti{' '}
          </p>
        </div>
        {/** the body  */}

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-5 mx-auto w-[800px]">
          {productDetails.map((products) => (
            <div
              className="space-y-3"
              data-aos="fade-up"
              data-aos-delay={products.aosDelay}
              key={products.id}
            >
              <img
                src={products.img}
                alt=""
                className="h-[230px] w-[170px] object-cover rounded-md "
              />

              <div>
                <h3
                  data-aos="fade-up"
                  className="text-sm text-center font-semibold"
                >
                  {products.title}
                </h3>
                <p
                  data-aos="fade-up"
                  className="text-center text-sm text-gray-600"
                >
                  {products.author}
                </p>
              </div>
              <div className="flex  justify-center  gap-1">
                <FaStar className="text-yellow-400 mt-1 " />
                <span className=" ">{products.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default products;
