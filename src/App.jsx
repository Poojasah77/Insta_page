import React from "react";
import insta from './assets/insta.png';
import dipa from './assets/dipa.jpg'
import puja from './assets/puja.jpg'
import kam from './assets/kam.jpg'
import kripa from './assets/kripa.jpg'
import prashant from './assets/prashant.jpg'
import nature from './assets/nature.jpg'
import baby from './assets/baby.jpg'
import pooza from './assets/pooza.jpg'
//import pranisha from './assets/pranisha.jpg'
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
// { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";

function InstagramHomePage() {
  return (
    <div className="border border-black p-4 w-full h-full ">
      {/* Main div */}
      <div className="  flex h-full ">
        {/* First child div */}
        <div className=" w-[180px] bg-white-500  p-4 flex flex-col shadow ">
          {/* Instagram Logo */}
          <img src={insta} alt="insta" className="h-[55px] w-[120px] mb-10" />

          {/* Navigation Icons */}
          <div className="flex flex-col justify-center ">
            {/* Instagram Icon */}
            <div  className='flex  justify-start flex-row  h-[40px] mb-4 '>
        <div  className=' flex flex-col justify-center h-full'>
         <AiFillHome className='h-[30px] w-[50px] -ml-2 mr-1'/>
        </div>
        <span className='text-sm flex flex-col justify-center font-bold'>Home</span>
      </div>

      <div  className='flex  justify-start flex-row  h-[40px] mb-4 '>
        <div  className=' flex flex-col justify-center h-full'>
         <BiSearch className='h-[30px] w-[50px] -ml-2 mr-1'/>
        </div>
        <span className=' text-sm flex flex-col justify-center '>Search</span>
      </div>


      <div  className='flex  justify-start flex-row  h-[40px] mb-4 '>
        <div  className=' flex flex-col justify-center h-full'>
         <MdOutlineExplore className='h-[30px] w-[50px] -ml-2 mr-1'/>
        </div>
        <span className='text-sm flex flex-col justify-center '>Explore</span>
      </div>

      <div  className='flex  justify-start flex-row  h-[40px] mb-4 '>
        <div  className=' flex flex-col justify-center h-full'>
         <RiMessengerLine className='h-[30px] w-[50px] -ml-2 mr-1'/>
        </div>
        <span className='text-sm flex flex-col justify-center '>Messages</span>
      </div>

      <div  className='flex  justify-start flex-row  h-[40px] mb-4 '>
        <div  className=' flex flex-col justify-center h-full'>
         < AiOutlineHeart className='h-[30px] w-[50px] -ml-2 mr-1'/>
        </div>
        <span className='text-sm flex flex-col justify-center '>Notificatons</span>
      </div>

      <div  className='flex  justify-start flex-row  h-[40px] mb-4 '>
        <div  className=' flex flex-col justify-center h-full'>
         < CgAddR  className='h-[30px] w-[50px] -ml-2 mr-1'/>
        </div>
        <span className='text-sm flex flex-col justify-center '>Create</span>
      </div>

      <div  className='flex  justify-start flex-row  h-[40px] mb-4 '>
        <div  className=' flex flex-col justify-center h-full'>
          <a className="block bg-white p-1 transform transition hover:-rotate-6 rounded-full" href="#">
            <img className="h-8 w-8 rounded-full object-cover" src={pooza} alt="image1" />
          </a>          
        </div>
          <span className='text-sm flex flex-col justify-center '>Profile</span>
      </div>

      <div  className='flex  justify-start flex-row  h-[40px] mb-4  mt-[50px]'>
        <div  className=' flex flex-col justify-center h-full'>
         <AiOutlineMenu className='h-[30px] w-[50px] -ml-2 mr-1'/>
        </div>
        <span className='text-sm flex flex-col justify-center '>More</span>
      </div>


          </div>
        </div>

        {/* Second child div */}
        <div className="w-2/3 bg-slate-45 p-4 flex flex-col   ">
          <div className=" h-[130px] w-[600px] shadow bg-white-600 ml-[100px] pl-2">
           <ul className="flex space-x-6">

            <li className="flex flex-col items-center space-y-1 mt-3">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
              <a className="block bg-white p-1 transform transition hover:-rotate-6 rounded-full" href="#">
                <img className=" h-12 w-12 rounded-full object-cover" src={dipa} alt="image1" />
              </a>
              </div>
              <a href="#">dipa katuwal_</a>
            </li>

            <li className="flex flex-col items-center space-y-1 mt-3">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
              <a className="block bg-white p-1 transform transition hover:-rotate-6 rounded-full" href="#">
                <img className="h-12 w-12 rounded-full object-cover" src={puja} alt="image1" />
              </a>
              </div>
              <a href="#">pujapant_</a>
            </li>

            <li className="flex flex-col items-center space-y-1 mt-3">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
              <a className="block bg-white p-1 transform transition hover:-rotate-6 rounded-full" href="#">
                <img className="h-12 w-12 rounded-full object-cover" src={kam} alt="image1" />
              </a>
              </div>
              <a href="#">kam.p_</a>
            </li>

            <li className="flex flex-col items-center space-y-1 mt-3">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
              <a className="block bg-white p-1 transform transition hover:-rotate-6 rounded-full" href="#">
                <img className="h-12 w-12 rounded-full object-cover" src={kripa} alt="image1" />
              </a>
              </div>
              <a href="#">kripa.S_</a>
            </li>

             <li className="flex flex-col items-center space-y-1 mt-3">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
              <a className="block bg-white p-1 transform transition hover:-rotate-6 rounded-full" href="#">
                <img className="h-12 w-12 rounded-full object-cover" src={prashant} alt="image1" />
              </a>
              </div>
              <a href="#">the_cyb3r.m0nk</a>
            </li>

            {/* <li className="flex flex-col items-center space-y-1 mt-3">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
              <a className="block bg-white p-1 transform transition hover:-rotate-6 rounded-full" href="#">
                <img className="h-12 w-12 rounded-full object-cover" src={pranisha} alt="image1" />
              </a>
              </div>
              <a href="#">pranisha_11</a>
            </li> */}

           </ul>
          </div>

          <div className="flex flex-col h-[950px] w-[600px]  shadow bg-white-600 mt-4 ml-[100px] ">
            <div className="  flex  h-10  bg-white-500 ">
              
            <li className="flex flex-col items-center space-y-1">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px] rounded-full">
              <a className="block bg-white p-[2px] transform transition hover:-rotate-6 rounded-full" href="#">
                <img className="h-4 w-4 rounded-full object-cover" src={baby} alt="image1" />
              </a>
              </div>
            </li>
           
            <span className="mt-2 ml-1">its_me_ur_luck</span>
            <span className="mt-2 mr-1 ml-[450px]">...</span>
          </div>


            <div className="mt-1  ">
              <img className=" h-80 w-screen object-cover" src={nature}  alt="image8" />
            </div>

           
            <div className="flex ml-1 ">
            < AiOutlineHeart className='h-[25px] w-[45px] -ml-2 mr-1'/>
            < TbMessageCircle2 className='h-[25px] w-[45px] -ml-2 mr-1'/>
            < LuSend className='h-[25px] w-[45px] -ml-2 mr-1'/>
            < FaRegBookmark className='h-[20px] w-[45px] ml-[470px] mr-1 mt-1'/>
             </div>

             <div className="flex transition relative">
  <img className="h-6 w-6 rounded-full absolute left-2 top-0 z-0 cursor-pointer object-cover" src={dipa} alt="image1" />
  <img className="h-6 w-6 rounded-full z-10 cursor-pointer object-cover" src={pooza} alt="image1" />
  <span className="ml-3  text-sm cursor-pointer ">Liked by _kamakshya_and others</span>
</div>
<span>#In love with this nature ❤️😍</span>
<span className=" cursor-pointer">View all three comments...more</span>

            
            <div></div>
          </div>
        </div>

        

        {/* Third child div */}
        <div className=" w-2/6 bg-white-500 p-4 flex flex-col">
  
  <div className="flex items-center -mr-20 justify-between mb-4">
    
    <div className="bg-gray-300 p-1 rounded-full -ml-[13px]">
      <a className="block bg-white p-1 transform transition hover:-rotate-6 rounded-full " href="#">
        <img className="h-10 w-10 rounded-full object-cover " src={pooza} alt="image1" />
      </a>
    </div>
    <div className="flex">
    <div className="flex flex-col mr-36">
      <span>poozashah_77</span>
      <span className="text-gray-400">Pooza Shah </span>
    </div>
      <span className="text-sky-400 font-bold mr-20">switch</span>

    </div>
    

  </div>

  <div className="flex  mb-5 ">
      <span className="text-gray-400">SuggestionsFor You</span>
      <span className="  font-bold text-black-400 ml-[165px]">See all</span>
    </div>
    



  <div className="flex items-center  -ml-[13px] justify-between mb-4">
    
        <img className=" h-12 w-12 rounded-full object-cover" src={dipa} alt="image1" />
    <div className="flex ">
    <div className="flex flex-col mr-32">
      <span>DEepa Kc</span>
      <span className="text-gray-400">Suggested for you </span>
    </div>
      <span className="text-sky-400 font-bold cursor-pointer">Follow</span>

    </div>
      
  </div>
    
    



  <div className="flex items-center  -ml-[13px] justify-between mb-4">
    
        <img className="h-12 w-12 rounded-full object-cover" src={puja} alt="image1" />
    <div className="flex ">
    <div className="flex flex-col mr-32">
      <span>Puzza_pant</span>
      <span className="text-gray-400">Followed DEepa Kc</span>
    </div>
      <span className="text-sky-400 font-bold">Follow</span>
    </div>

  </div>
    




  <div className="flex items-center  -ml-[13px] justify-between mb-4">
    
        <img className="h-12 w-12 rounded-full object-cover" src={kripa} alt="image1" />
    <div className="flex ">
    <div className="flex flex-col mr-36">
      <span>Kripa___</span>
      <span className="text-gray-400">Followed by puja </span>
    </div>
      <span className="text-sky-400 font-bold">Follow</span>
    </div>
  </div>

    


  <div className="flex items-center  -ml-[13px] justify-between mb-4">
    
        <img className="h-12 w-12 rounded-full object-cover" src={kam} alt="image1" />
    <div className="flex ">
    <div className="flex flex-col mr-36 ">
      <span>_kamakshya_</span>
      <span className="text-gray-400">Suggested for you </span>
    </div>
      <span className="text-sky-400 font-bold">Follow</span>

    </div>
    
  </div>

  <div className="flex items-center  -ml-[13px] justify-between mb-4">
        <div className="flex mt-5">
    <div className="flex flex-col mr-7">
      <span className="text-gray-400">About </span>
      <span className="text-gray-400">Privacy </span>
    </div>
    <div className="flex flex-col mr-7">
      <span className="text-gray-400">Help </span>
      <span className="text-gray-400">Terms </span>
    </div>
    <div className="flex flex-col mr-7">
      <span className="text-gray-400">Press </span>
      <span className="text-gray-400">Location </span>
    </div>
    <div className="flex flex-col mr-7">
      <span className="text-gray-400">Api </span>
      <span className="text-gray-400">Language </span>
    </div>
    <div className="flex flex-col mr-7">
      <span className="text-gray-400">jobs </span>
    </div>
    
    </div>
    
    
  </div>
  
  <div className="flex items-center  -ml-[13px] justify-between mb-4">
  <div className="flex mt-5">
  <div className="flex flex-col mr-7">
      <span className="text-gray-400">© 2024 INSTAGRAM FROM META
 </span>
    </div>
  </div>

  </div>

  

</div>

      </div>
  </div>
);
}

export default InstagramHomePage;