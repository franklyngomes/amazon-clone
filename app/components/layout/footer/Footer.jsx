import React from "react";
import amazonLogo from "../../../assets/amazon_logo.png";

const Footer = () => {
  const list1 = [
    "Careers",
    "Blog",
    "About Amazon",
    "Investor Relations",
    "Amazon Devices",
    "Amazon Science",
  ];
  const list2 = [
    "Sell products on Amazon",
    "Sell on Amazon Business",
    "Sell apps on Amazon",
    "Become an Affiliate",
    "Advertise Your Products",
    "Self-Publish with Us",
    "Host an Amazon Hub",
    "See More Make Money with Us",
  ];
  const list3 = [
    "Amazon Business Card",
    "Shop with Points",
    "Reload Your Balance",
    "Amazon Currency Converter",
  ];
  const list4 = [
    "Amazon and COVID-19",
    "Your Account",
    "Your Orders",
    "Shipping Rates & Policies",
    "Returns & Replacements",
    "Manage Your Content and Devices",
    "Help",
  ];
  const links1 = [
    {
      link: "Amazon Music",
      desc: "Stream Millions Of Songs",
    },
    {
      link: "Amazon Business",
      desc: "Everything For Your Business",
    },
    {
      link: "IMDbPro",
      desc: "Get Info Entertainment Professional Need",
    },
  ];
  const links2 = [
    {
      link: "Amazon Ads",
      desc: "Reach customers wherever they spend their time",
    },
    {
      link: "AmazonGlobal",
      desc: "Ship Orders Internationally",
    },
    {
      link: "Kindle Direct Publishing",
      desc: "Indie Digital & Print Publishing Made Easy",
    },
    {
      link: "eero WIFI",
      desc: "Stream 4K Video in Every Room",
    },
  ];
  const links3 = [
    {
      link: "6pm",
      desc: "Score deals on fashion brands",
    },
    {
      link: "Amazon Web Services",
      desc: "Scalable Cloud Computing Services",
    },
    {
      link: "Prime Video Direct",
      desc: "Video Distribution Made Easy",
    },
    {
      link: "Blink",
      desc: "Smart Security for Every Home",
    },
  ];
  const links4 = [
    {
      link: "AbeBooks",
      desc: "Books, art & collectibles",
    },
    {
      link: "Audible",
      desc: "Listen to Books & Original Audio Performances",
    },
    {
      link: "Shopbop",
      desc: "Designer Fashion Brands",
    },
    {
      link: "Neighbors App",
      desc: "Real-Time Crime and Safety Alerts",
    },
  ];
  const links5 = [
    {
      link: "ACX",
      desc: "AudioBook Publishing Made Easy",
    },
    {
      link: "Box Office Mojo",
      desc: "Find Movie Box Office Data",
    },
    {
      link: "Woot!",
      desc: "Deals and Shenanigans",
    },
    {
      link: "Amazon Subscription Boxes",
      desc: "Top subscription boxes - right to your door",
    },
  ];
  const links6 = [
    {
      link: "Sell on Amazon",
      desc: "Start Selling Account",
    },
    {
      link: "Goodreads",
      desc: "Book reviews and recommendations",
    },
    {
      link: "Zappos",
      desc: "Shoes & Clothing",
    },
    {
      link: "PillPack",
      desc: "Pharmacy Simplified",
    },
  ];
  const links7 = [
    {
      link: "Veego",
      desc: "Shipping Software Inventory Management",
    },
    {
      link: "IMDb",
      desc: "Movies, TV & Celebrities",
    },
    {
      link: "Ring",
      desc: "Smart Home Security Systems",
    },
  ];
  return (
    <>
      <div className="footer-container hidden md:block">
        <div className="top-section bg-[#232f3f] py-12">
          <div className="flex justify-between max-w-[1100px] m-auto  px-4">
            <div className="text-left">
              <h4 className="text-[16px] font-bold text-white mb-2">
                Get to Know Us
              </h4>
              <ul>
                {list1.map((item) => (
                  <li
                    className="text-[14px] text-[#ddd] py-1 hover:underline cursor-pointer"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-[16px] font-bold text-white mb-2">
                Make Money with Us
              </h4>
              <ul>
                {list2.map((item) => (
                  <li
                    className="text-[14px] text-[#ddd] py-1 hover:underline cursor-pointer"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-[16px] font-bold text-white mb-2">
                Amazon Payment Products
              </h4>
              <ul>
                {list3.map((item) => (
                  <li
                    className="text-[14px] text-[#ddd] py-1 hover:underline cursor-pointer"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-[16px] font-bold text-white mb-2">
                Let Us Help You
              </h4>
              <ul>
                {list4.map((item) => (
                  <li
                    className="text-[14px] text-[#ddd] py-1 hover:underline cursor-pointer"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="text-[#394555] h-[1px]" />
        <div className="logo-section bg-[#232f3f] flex justify-center items-center gap-[100px] py-10">
          <div className="logo">
            <img src={amazonLogo} alt="" className="logo" width={"85px"} />
          </div>
          <div className="components flex gap-2.5">
            <button className="text-[#ddd] px-2.5 py-1.5 border rounded-sm">
              Language
            </button>
            <button className="text-[#ddd] px-2.5 py-1.5 border rounded-sm">
              Currency
            </button>
            <button className="text-[#ddd] px-2.5 py-1.5 border rounded-sm">
              Location
            </button>
          </div>
        </div>
        <div className="miscellaneous bg-[#131921] pb-8 px-5">
          <div className="miscelleneous-container max-w-[1100px] flex justify-center m-auto gap-9 py-10">
            <div className="links">
              {links1.map((item) => (
                <div
                  key={item}
                  className="text-left hover:underline text-white mb-6 cursor-pointer"
                >
                  <p className="text-[12px] text-[#ddd]">{item.link}</p>
                  <p className="text-[12px] leading-[13px] text-[#999]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="links">
              {links2.map((item) => (
                <div
                  key={item}
                  className="text-left hover:underline text-white mb-6 cursor-pointer"
                >
                  <p className="text-[12px] text-[#ddd]">{item.link}</p>
                  <p className="text-[12px] leading-[13px] text-[#999]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="links">
              {links3.map((item) => (
                <div
                  key={item}
                  className="text-left hover:underline text-white mb-6 cursor-pointer"
                >
                  <p className="text-[12px] text-[#ddd]">{item.link}</p>
                  <p className="text-[12px] leading-[13px] text-[#999]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="links">
              {links4.map((item) => (
                <div
                  key={item}
                  className="text-left hover:underline text-white mb-6 cursor-pointer"
                >
                  <p className="text-[12px] text-[#ddd]">{item.link}</p>
                  <p className="text-[12px] leading-[13px] text-[#999]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="links">
              {links5.map((item) => (
                <div
                  key={item}
                  className="text-left hover:underline text-white mb-6 cursor-pointer"
                >
                  <p className="text-[12px] text-[#ddd]">{item.link}</p>
                  <p className="text-[12px] leading-[13px] text-[#999]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="links">
              {links6.map((item) => (
                <div
                  key={item}
                  className="text-left hover:underline text-white mb-6 cursor-pointer"
                >
                  <p className="text-[12px] text-[#ddd]">{item.link}</p>
                  <p className="text-[12px] leading-[13px] text-[#999]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="links">
              {links7.map((item) => (
                <div
                  key={item}
                  className="text-left  hover:underline text-white mb-6 cursor-pointer"
                >
                  <p className="text-[12px] text-[#ddd]">{item.link}</p>
                  <p className="text-[12px] leading-[13px] text-[#999]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="terms mb-1.5">
            <ul className="text-[12px] text-[#ddd] flex justify-center gap-6 ">
              <li className="hover:underline">Conditions of Use</li>
              <li className="hover:underline">Privacy Notice</li>
              <li className="hover:underline">
                Consumer Health Data Privacy Disclosure
              </li>
              <li className="hover:underline">Your Ads Privacy Choices</li>
            </ul>
          </div>
          <div className="copyrights">
            <p className="text-[12px] text-[#ddd]">
              © 1996-2025, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
      {/* Mobile Footer */}
      <div className="mobile-footer block md:hidden">
        <div className="top-section bg-[#232f3f] px-4 py-10 flex justify-start gap-10">
          <div className="mobile-footer text-left">
            <ul className="text-[15px] text-white ">
              <li className="mb-3 hover:underline">Amazon.com</li>
              <li className="mb-3 hover:underline">Your Lists</li>
              <li className="mb-3 hover:underline">Registry & Gift Lists</li>
              <li className="mb-3 hover:underline">Your Account</li>
              <li className="mb-3 hover:underline">Sell Products on Amazon</li>
              <li className="mb-3 hover:underline">
                Recalls and Product Safety Alerts
              </li>
              <li className="mb-3 hover:underline">Customer Service</li>
            </ul>
          </div>
          <div className="mobile-footer text-left">
            <ul className="text-[15px] text-white">
              <li className="mb-3 hover:underline">Your Orders</li>
              <li className="mb-3 hover:underline">Gift Cards</li>
              <li className="mb-3 hover:underline">Find a Gift</li>
              <li className="mb-3 hover:underline">Browsing History</li>
              <li className="mb-3 hover:underline">Your Returns</li>
            </ul>
          </div>
        </div>
        <div className="bottom-section bg-[#131921] px-4 py-8">
          <div className="terms mb-3">
            <ul className="text-[12px] text-[#ddd] flex justify-center gap-6 ">
              <li className="hover:underline">Conditions of Use</li>
              <li className="hover:underline">Privacy Notice</li>
              <li className="hover:underline">
                Consumer Health Data Privacy Disclosure
              </li>
              <li className="hover:underline">Your Ads Privacy Choices</li>
            </ul>
          </div>
          <div className="copyrights">
            <p className="text-[12px] text-[#ddd]">
              © 1996-2025, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
