/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { list } from "postcss"
import React,{useState} from "react"
import { NavLink } from "react-router-dom"
import {FaGithub, FaLinkedin, FaBars , FaXmark} from 'react-icons/fa6'
import '../App.css'

const Navbar = () => {
    const [ismenuopen, setismenuopen] = useState(false);
    const togglemenu = ()=>{
        setismenuopen(!ismenuopen);
    }
    const navItem =[
        {path:"/", link:"Home"},
        {path:"/blogs", link:"Blogs"},
        {path:"/services", link:"Services"},
        {path:"/contact", link:"Contact"},
        {path:"/about",link:"About"}
    ]
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-white ">DailyDevYT<span className="text-orange-400">blogs</span></a>
            {/* nav items for lg device*/}
            <ul className="md:flex gap-12 text-lg hidden">
                {
                    navItem.map(({path,link})=><li className="text-white" key={path}>
                        <NavLink className={({isActive,isPending})=>
                             isActive ? "active" : isPending ? "pending" : ""
                        }
                            
                        to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons */}
            <div className="text-white lg:flex gap-4 items-center hidden">
                <a href="/" className="hover-text-orange-500"><FaGithub /></a>
                <a href="/" className="hover-text-orange-500"><FaLinkedin /></a>
                <a href="">
                    <button className="bg-orange-500 px-6 py-3 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">Log in</button>
                </a>
            </div>

            {/* mobile menu*/}
            <div className="md:hidden">
                <button onClick={togglemenu} className="cursor-pointer">
                    {
                        ismenuopen ? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5"/>
                    }
                   
                    </button>
            </div>

        </nav>
              {/* moblie menu items*/}
              <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${ismenuopen ? "fixed top-0 left-0 w-full transition-all easy-out duration-150" : "hidden"}`}>
                {
                    navItem.map(({path,link})=><li className="text-black" key={path}>
                        <NavLink onClick={togglemenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
            </div>
    </header>
  )
}

export default Navbar
