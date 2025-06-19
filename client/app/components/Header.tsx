"use client"
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Cookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useStore } from "@/store/store";

const Header = () => {
  const cookies = new Cookies()
  const token  = useStore((state : any) => state.token)
  const user  = useStore((state : any) => state.user)
  const updateToken = useStore((state : any) => state.updateToken)
  const updateUser = useStore((state : any) => state.updateUser)
  console.log(token)
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
  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => {
    setShowModal(false)
  }
  const Logout = () => {
    const token = cookies.get("token")
    if (token) {
      cookies.remove("token")
      updateToken("");
      updateUser({})
    }
  }
  React.useEffect(() => {
   const token = cookies.get("token")
   if(token){
    updateToken(token)
    const decoded = jwtDecode(token)
    updateUser(decoded)
   }
  }, [])
  console.log(token)
  console.log(user)

  return (
    <div className="relative">
      <div className="header-container hidden sm:block">
        <div className="bg-[#121921] flex justify-between items-center px-5 py-3">
          <Link href="/"><Image src={"/assets/amazon_logo.png"} alt="Logo" className="logo" height={47} width={130} /></Link>
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
          <nav className="w-xl ">
            <ul className="flex justify-between items-center">
              <li className="text-white text-left cursor-pointer hover:underline" onClick={() => setShowModal(!showModal)}>
                <p className="text-[12px]">Hello, {user.name ? `${user.name}` : "Sign in"}</p>
                <h6 className="font-bold text-[14px]">Account & Lists</h6>
              </li>
              <li className="text-white text-left cursor-pointer hover:underline">
                <p className="text-[12px]">Returns</p>
                <h6 className="font-bold text-[14px]">& Orders</h6>
              </li>
              <li className="font-bold text-white flex cursor-pointer">
                <span className="">
                  <p className="text-sm/3 text-center text-[#e07d1f]">0</p>
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
      <div className={`signin-modal hidden ${showModal && "sm:block"}  z-99 max-w-[500px] w-[100%] flex-1 p-4 bg-white rounded-sm absolute top-16 right-20 shadow-md`} onPointerLeave={closeModal}>
        {
          !token &&
            <>
              <div className="btn text-center py-5">
                <Link href='/auth/signin'><button onClick={closeModal} className="bg-[#ffd814] px-2.5 py-1.5 rounded-sm w-[50%] cursor-pointer hover:underline">Sign in</button></Link>
              </div>
              <hr className="text-[#a9a9a9]" />
            </>
            }
        <div className="row flex justify-between gap-5 mt-4">
          <div className="col text-start">
            <h4 className="text-[16px] font-bold">Your List</h4>
            <ul className="text-[13px] text-[#3e3f40] ">
              <Link href="">
                <li className="hover:underline mt-1.5">Your Lists</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Create a Wish List</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Wish from Any Website</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Baby Wishlist</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Discover Your Style</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Explore Showroom</li>
              </Link>
            </ul>
          </div>
          <div className="col text-start">
            <h4 className="text-[16px] font-bold">Your Account</h4>
            <ul className="text-[13px] text-[#3e3f40]">
              {
                token !== "" &&
                <li className="hover:underline mt-1.5 cursor-pointer" onClick={Logout}>Signout</li>
              }
              <Link href="/">
                <li className="hover:underline mt-1.5">Your Account</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Your Orders</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Your Wish List</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Your Recommendations</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Your Prime Membership</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Your Prime Video</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Your Subscribe & Save Items</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Memberships & Subscriptions</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Your Seller Account</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Manage Your Content and Devices</li>
              </Link>
              <Link href="/">
                <li className="hover:underline mt-1.5">Register for a free Business Account</li>
              </Link>
            </ul>

          </div>
        </div>
      </div>
      {/* Mobile Header */}
      <div className="mobile-header-container bg-[#232f3f] block sm:hidden px-4 py-3">
        <div className="top-section flex justify-between items-center">
          <div className="menu text-white text-2xl flex gap-5">
            <RxHamburgerMenu />
            <Link href="/"><Image src={"/assets/amazon_logo.png"} alt="Logo" className="logo" height={36} width={100} /></Link>
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
    </div>
  );
};

export default Header;
