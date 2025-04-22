import child from '../../assets/Products/boy-casual-wear-skateboard.jpg';
import image4 from '../../assets/hero/pngegg.png';
import tshirt from '../../assets/Products/short-sleeve-shirt-cloth-hanger-with-white-wall-background.jpg'
import casual from '../../assets/Products/cool-young-hip-hop-man-white-background.jpg';
import foot from '../../assets/Products/fashionable-young-woman-with-shopping-bags.jpg'
import { FaStar } from 'react-icons/fa6';

function TopProducts() {

const productDetails = [
  {
    id: 1,
    name: 'Casual Wear ',
    price: '$100',
    image: casual,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia dolore ea culpa quasi sequi laboriosam tenetur corrupti',
  },
  {
    id: 2,
    name: 'Printed Shirt ',
    price: '$200',
    image: tshirt,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia dolore ea culpa quasi sequi laboriosam tenetur corrupti',
  },
  {
    id: 3,
    name: 'Women Shirt ',
    price: '$300',
    image: image4,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia dolore ea culpa quasi sequi laboriosam tenetur corrupti',
  },
  {
    id: 4,
    name: 'Childrens Wear',
    price: '$400',
    image: child,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia dolore ea culpa quasi sequi laboriosam tenetur corrupti',
  },
  {
    id: 5,
    name: "Womens Accesory",
    price: '$500',
    image: foot,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia dolore ea culpa quasi sequi laboriosam tenetur corrupti',
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$600',
    image: image4,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quia dolore ea culpa quasi sequi laboriosam tenetur corrupti',
  },
];


  return (
    <div>
      <div className="container">
        <div className="mx-auto text-left mb-24 max-w-[600px]">
          <p data-aos="fade-up" className="text-md  text-primary">
            Top Rated Products for you
          </p>

          <h1 data-aos="fade-up" className="text-4xl font-bold m-2">
            {' '}
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs ">
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quia dolore ea culpa quasi sequi laboriosam tenetur corrupti{' '}
          </p>
        </div>
        {/* -> Top Products <- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 place-items-center ">
          {productDetails.map((product) => (
            <div className=" pb-3 " data-aos="zoom-in" key={product.id}>
              <div className=" rounded-2xl bg-white dark:text-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]  mb-6 ">
                <img
                  src={product.image}
                  alt=""
                  className=" max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md "
                />

                {/* Product Details */}
                <div className="p-4 text-center">
                  <div className=" w-full flex items-center justify-center mt-[-85px] ">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>

                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                  <p className="text-gray-600 duration-4 00 line-clamp-2 text-sm  group-hover:text-white">
                    {product.description}
                  </p>
                  <button className="bg-primary rounded-full py-1 px-4 text-white mt-4 hover:scale-105 group-hover:bg-white group-hover:text-primary">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
