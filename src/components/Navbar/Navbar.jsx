import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import logo from '../../assets/lionHead.png';
import search from '../../assets/search.png';
import DarkMode from './DarkMode';
import menu from '../../components/Navbar/menu';
import Dropdown from '../../components/Navbar/Dropdown'

const Navbar = () => {
  return (
    <div
      className="shadow-md bg-white dark:bg-green-900 dark:text-white duration-200 relative
    z-40"
    >
      {/*  upper nav bar*/}

      <div className="bg-primary/40 py-2 sm:py-0">
        <div className="container flex justify-between items-center">
          <div className="">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          {/*  search bar*/}
          <div className="justify-between gap-4 items-center flex py-1">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200PX] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-green-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-grey-500 dark:bg-gray-800"
              />
              <img
                src={search}
                className="w-5 text-grey-500 absolute top-1/2 right-3 -translate-y-1/2 group-hover:text-primary"
                alt=""
              />
            </div>
            {/*  order button*/}

            <button
              onClick={() => alert(' order not yet available')}
              className="bg-gradient-to-t from-primary  to-secondary py-1 px-4 rounded-full text-white transition-all duration-200 flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                {' '}
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/*  darkMode Switch */}
            <div className="">
              <DarkMode />
            </div>
          </div>
        </div>
        {/*  search bar*/}
      </div>

      {/* lower nave bar  */}

      <div className="flex justify-center ">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((data, id) => (
            <li key={id}>
              <a
                href={data.link}
                className="inline-block px-4 py-1 hover:text-primary duration-200 hover:py-2 "
              >
                {' '}
                {data.name}
              </a>
            </li>
          ))}

          {/** simple Dropdown and Links */}

          <li className='group relative cursor-pointer' >
            <a href="#" className="flex items-center gap-[2px] group-hover:py-2">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>   
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white text-black  shadow-md">
              <ul>
                {Dropdown.map((link)=>
                  <li key={link.id} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                    <a href={link.link}>
                      {link.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
