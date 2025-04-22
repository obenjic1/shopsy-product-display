import { GrSecure } from 'react-icons/gr';
import girl from '../../assets/hero/young-woman-shopping-with-colorful-packs-blue-wall.jpg'
import { IoFastFood } from 'react-icons/io5';
import { Gi3dStairs, GiFoodTruck } from 'react-icons/gi';
function showCase() {

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className=" container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/**** image section */}
          <div data-aos="zoom-out" data-aos-delay="500" className="">
            <img
              src={girl}
              alt=""
              className="max-w-[500px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/**** text  section */}
          <div className="flext flex-coljustify-ccenter gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold ">
              Winter Sales Upto 50% Off
            </h1>
            <p
              data-aos="zoom-out"
              data-aos-delay="500"
              className="text-sm text-gray-500 tracking-wide leading-5 p-5"
            >
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              pariatur ab distinctio sit explicabo ullam, eius maiores
              laboriosam voluptatum dignissimos, nulla facilis quasi optio.
            </p>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className=" flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm  p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p> Quality Products </p>
              </div>

              <div data-aos="fade-up" className=" flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm  p-4 rounded-full bg-orange-100 dark:bg-violet-400" />
                <p> Fast Delivery </p>
              </div>

              <div data-aos="fade-up" className=" flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm  p-4 rounded-full bg-green-400 dark:bg-violet-400" />
                <p> Easy Payment Method </p>
              </div>

              <div data-aos="fade-up" className=" flex items-center gap-4">
                <Gi3dStairs className="text-4xl h-12 w-12 shadow-sm  p-4 rounded-full bg-yellow-400 dark:bg-violet-400" />
                <p>Get Offers </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default showCase