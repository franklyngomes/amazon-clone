import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: "#e07d1f",
  }
});
const ProductList = () => {

  return (
    <div className='flex flex-col md:flex-row'>
      <div className="lg:w-1/6 md:w-1/4 w-full bg-white p-3">
        <div className="brands mb-4">
          <h4 className="text-[16px] font-bold">Brands</h4>
          <ul>
            <li className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Puma</label>
            </li>
            <li className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="" >Nike</label>
            </li>
            <li className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">US Polo</label>
            </li>
            <li className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Addidas</label>
            </li>
            <li className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Wrong</label>
            </li>
            <li className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Tommy Hilfiger</label>
            </li>
            <li className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Armani Exchange</label>
            </li>
          </ul>
        </div>
        <div className="price mb-4">
          <h4 className="text-[16px] font-bold">Price</h4>
          <input type="range" name="" id="" className='w-full' />
        </div>
        <div className="color mb-4">
          <h4 className="text-[16px] font-bold">Color</h4>
          <div className="color-container flex gap-0.5 flex-wrap">
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-red-600 checked:bg-red-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-blue-600 checked:bg-blue-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-green-600 checked:bg-green-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-yellow-600 checked:bg-yellow-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-cyan-600 checked:bg-cyan-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-gray-600 checked:bg-gray-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-pink-600 checked:bg-pink-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-purple-600 checked:bg-purple-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-red-600 checked:bg-red-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-red-600 checked:bg-red-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-red-600 checked:bg-red-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
            <input type="checkbox" name="" id="" className="colors w-5 h-5 appearance-none bg-red-600 checked:bg-red-600 checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:flex checked:after:items-center checked:after:justify-center" />
          </div>
        </div>
        <div className="size-component mb-4">
          <h4 className="text-[16px] font-bold">Size</h4>
          <div className="sizes flex flex-wrap gap-1">
            <div className="size w-7 h-7 flex justify-center items-center border rounded-sm cursor-pointer"><p>28</p></div>
            <div className="size w-7 h-7 flex justify-center items-center border rounded-sm cursor-pointer"><p>30</p></div>
            <div className="size w-7 h-7 flex justify-center items-center border rounded-sm cursor-pointer"><p>32</p></div>
            <div className="size w-7 h-7 flex justify-center items-center border rounded-sm cursor-pointer"><p>34</p></div>
            <div className="size w-7 h-7 flex justify-center items-center border rounded-sm cursor-pointer"><p>36</p></div>
          </div>
        </div>
      </div>
      <div className="lg:w-5/6 md:w-3/4 w-full bg-white flex md:justify-start justify-center flex-wrap gap-3 items-start py-5">
        <div className="card rounded-sm shadow-md max-w-[240px] w-full flex flex-col justify-center cursor-pointer">
          <div className="card-media flex justify-center">
            <Image src={"/assets/shirt-1.jpg"} alt='Product' width={200} height={200} />
          </div>
          <div className="card-content p-2 flex flex-col gap-1">
            <h4 className="text-[16px] font-bold">Allen Solly</h4>
            <p className='font-thin'>Men's Plain Slim Fit Shirt</p>
            <StyledRating name="read-only" value={4} readOnly size='small' />
            <div className="limited-deal bg-red-600 px-1 py-1 text-white rounded-sm max-w-[136px] w-full">
              Limited time deal
            </div>
            <div className='flex items-center gap-2'>
              <h2 className='text-2xl'>₹639</h2><p className='text-gray-500'>M.R.P: <span className='line-through'>₹1,399</span></p>
            </div>
            <p>
              FREE delivery
            </p>
            <Link href=''><button className="bg-[#ffd814] text-[14px] px-2.5 py-1.5 rounded-full w-[50%] cursor-pointer hover:underline">Add to Cart</button></Link>
          </div>
        </div>
        <div className="card rounded-sm shadow-md max-w-[240px] w-full flex flex-col justify-center cursor-pointer">
          <div className="card-media flex justify-center">
            <Image src={"/assets/shirt-1.jpg"} alt='Product' width={200} height={200} />
          </div>
          <div className="card-content p-2 flex flex-col gap-1">
            <h4 className="text-[16px] font-bold">Allen Solly</h4>
            <p className='font-thin'>Men's Plain Slim Fit Shirt</p>
            <StyledRating name="read-only" value={4} readOnly size='small' />
            <div className="limited-deal bg-red-600 px-1 py-1 text-white rounded-sm max-w-[136px] w-full">
              Limited time deal
            </div>
            <div className='flex items-center gap-2'>
              <h2 className='text-2xl'>₹639</h2><p className='text-gray-500'>M.R.P: <span className='line-through'>₹1,399</span></p>
            </div>
            <p>
              FREE delivery
            </p>
            <Link href=''><button className="bg-[#ffd814] text-[14px] px-2.5 py-1.5 rounded-full w-[50%] cursor-pointer hover:underline">Add to Cart</button></Link>
          </div>
        </div>
        <div className="card rounded-sm shadow-md max-w-[240px] w-full flex flex-col justify-center cursor-pointer">
          <div className="card-media flex justify-center">
            <Image src={"/assets/shirt-1.jpg"} alt='Product' width={200} height={200} />
          </div>
          <div className="card-content p-2 flex flex-col gap-1">
            <h4 className="text-[16px] font-bold">Allen Solly</h4>
            <p className='font-thin'>Men's Plain Slim Fit Shirt</p>
            <StyledRating name="read-only" value={4} readOnly size='small' />
            <div className="limited-deal bg-red-600 px-1 py-1 text-white rounded-sm max-w-[136px] w-full">
              Limited time deal
            </div>
            <div className='flex items-center gap-2'>
              <h2 className='text-2xl'>₹639</h2><p className='text-gray-500'>M.R.P: <span className='line-through'>₹1,399</span></p>
            </div>
            <p>
              FREE delivery
            </p>
            <Link href=''><button className="bg-[#ffd814] text-[14px] px-2.5 py-1.5 rounded-full w-[50%] cursor-pointer hover:underline">Add to Cart</button></Link>
          </div>
        </div>
        <div className="card rounded-sm shadow-md max-w-[240px] w-full flex flex-col justify-center cursor-pointer">
          <div className="card-media flex justify-center">
            <Image src={"/assets/shirt-1.jpg"} alt='Product' width={200} height={200} />
          </div>
          <div className="card-content p-2 flex flex-col gap-1">
            <h4 className="text-[16px] font-bold">Allen Solly</h4>
            <p className='font-thin'>Men's Plain Slim Fit Shirt</p>
            <StyledRating name="read-only" value={4} readOnly size='small' />
            <div className="limited-deal bg-red-600 px-1 py-1 text-white rounded-sm max-w-[136px] w-full">
              Limited time deal
            </div>
            <div className='flex items-center gap-2'>
              <h2 className='text-2xl'>₹639</h2><p className='text-gray-500'>M.R.P: <span className='line-through'>₹1,399</span></p>
            </div>
            <p>
              FREE delivery
            </p>
            <Link href=''><button className="bg-[#ffd814] text-[14px] px-2.5 py-1.5 rounded-full w-[50%] cursor-pointer hover:underline">Add to Cart</button></Link>
          </div>
        </div>
        <div className="card rounded-sm shadow-md max-w-[240px] w-full flex flex-col justify-center cursor-pointer">
          <div className="card-media flex justify-center">
            <Image src={"/assets/shirt-1.jpg"} alt='Product' width={200} height={200} />
          </div>
          <div className="card-content p-2 flex flex-col gap-1">
            <h4 className="text-[16px] font-bold">Allen Solly</h4>
            <p className='font-thin'>Men's Plain Slim Fit Shirt</p>
            <StyledRating name="read-only" value={4} readOnly size='small' />
            <div className="limited-deal bg-red-600 px-1 py-1 text-white rounded-sm max-w-[136px] w-full">
              Limited time deal
            </div>
            <div className='flex items-center gap-2'>
              <h2 className='text-2xl'>₹639</h2><p className='text-gray-500'>M.R.P: <span className='line-through'>₹1,399</span></p>
            </div>
            <p>
              FREE delivery
            </p>
            <Link href=''><button className="bg-[#ffd814] text-[14px] px-2.5 py-1.5 rounded-full w-[50%] cursor-pointer hover:underline">Add to Cart</button></Link>
          </div>
        </div>
        <div className="card rounded-sm shadow-md max-w-[240px] w-full flex flex-col justify-center cursor-pointer">
          <div className="card-media flex justify-center">
            <Image src={"/assets/shirt-1.jpg"} alt='Product' width={200} height={200} />
          </div>
          <div className="card-content p-2 flex flex-col gap-1">
            <h4 className="text-[16px] font-bold">Allen Solly</h4>
            <p className='font-thin'>Men's Plain Slim Fit Shirt</p>
            <StyledRating name="read-only" value={4} readOnly size='small' />
            <div className="limited-deal bg-red-600 px-1 py-1 text-white rounded-sm max-w-[136px] w-full">
              Limited time deal
            </div>
            <div className='flex items-center gap-2'>
              <h2 className='text-2xl'>₹639</h2><p className='text-gray-500'>M.R.P: <span className='line-through'>₹1,399</span></p>
            </div>
            <p>
              FREE delivery
            </p>
            <Link href=''><button className="bg-[#ffd814] text-[14px] px-2.5 py-1.5 rounded-full w-[50%] cursor-pointer hover:underline">Add to Cart</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList