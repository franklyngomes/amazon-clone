import amazonLogo from "../../../assets/amazon_logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const categories = [
    "Deals",
    "Amazon Basics",
    "Livestreams",
    "Best Sellers",
    "Music",
    "Video",
    "Books",
    "Home",
    "New Releases",
  ];
  return (
    <>
      <div className="header-container hidden sm:block">
        <div className="bg-[#121921] flex justify-between items-center px-5 py-3">
          <img src={amazonLogo} alt="" className="logo" width={"100px"} />
          <div className="flex justify-center align-middle w-full px-10">
            <input
              type="text"
              name=""
              id=""
              className="w-full bg-white rounded-l-sm px-3"
              placeholder="Search Amazon"
            />
            <span className="bg-[#fec76f] px-4 text-2xl py-2 cursor-pointer rounded-r-sm">
              <IoSearchSharp />
            </span>
          </div>
          <nav className="w-full sm:w-xl ">
            <ul className="flex justify-between items-center">
              <li className="text-white text-left cursor-pointer hover:underline">
                <p className="text-[12px]">Hello, Sign in</p>
                <h6 className="font-bold text-[14px]">Account & Lists</h6>
              </li>
              <li className="text-white text-left cursor-pointer hover:underline">
                <p className="text-[12px]">Returns</p>
                <h6 className="font-bold text-[14px]">& Orders</h6>
              </li>
              <li className="font-bold text-white flex cursor-pointer">
                <span className="">
                  <p className="text-sm/3 text-center">0</p>
                  <BiCart className="text-2xl" />
                </span>
                <span className="flex justify-center items-end">
                  <h6 className="text-[14px]">Cart</h6>
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bottom-section bg-[#232f3f] h-[45px] flex justify-start gap-5 px-4 overflow-x-scroll scroll-smooth md:overflow-x-hidden max-w-full overflow-y-hidden">
          <div className="hamburger-menu flex justify-center items-center gap-1.5">
            <RxHamburgerMenu className="text-white text-2xl " />
            <h6 className="text-[14px]  text-white">All</h6>
          </div>
          <div className="category-list flex items-center">
            <ul className=" text-white gap-5 flex items-center justify-center whitespace-nowrap">
              {categories.map((item) => (
                <li className="cursor-pointer hover:underline" key={item}>
                  <h6 className="text-[14px] ">{item}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Header */}
      <div className="mobile-header-container bg-[#232f3f] block sm:hidden px-4 py-3">
        <div className="top-section flex justify-between items-center">
          <div className="menu text-white text-2xl flex gap-5">
            <RxHamburgerMenu />
            <img src={amazonLogo} alt="" className="logo" width={"100px"} />
          </div>
          <div className="user-cart flex gap-3">
            <div className="user flex font-bold text-white gap-2">
              <h5 className="">Sign in</h5>
              <FaUserAlt className="text-xl" />
            </div>
            <span className="cart font-bold text-white">
              <p className="text-sm/0 text-center">0</p>
              <BiCart className="text-2xl" />
            </span>
          </div>
        </div>
        <div className="middle-section py-2">
          <div className="flex justify-center align-middle w-full">
            <input
              type="text"
              name=""
              id=""
              className="w-full bg-white rounded-l-sm px-3"
              placeholder="Search Amazon"
            />
            <span className="bg-[#fec76f] px-4 text-2xl py-2 cursor-pointer rounded-r-sm">
              <IoSearchSharp />
            </span>
          </div>
        </div>
        <div className="bottom-section pt-2 flex justify-start gap-5 overflow-x-scroll scroll-smooth md:overflow-x-hidden max-w-full overflow-y-hidden">
          <div className="category-list flex items-center">
            <ul className=" text-white gap-5 flex items-center justify-center whitespace-nowrap">
              {categories.map((item) => (
                <li className="cursor-pointer hover:underline" key={item}>
                  <h6 className="text-[14px] ">{item}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
