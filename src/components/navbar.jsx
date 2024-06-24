import { NavLink, Outlet } from "react-router-dom";

const blob = document.getElementById('blob')

document.body.onpointermove = (e) => {
    const {clientX, clientY} = e
    const scrollY = window.scrollY
    blob.animate({
        left:`${clientX}px`,
        top:`${clientY + scrollY}px`
    }, {duration: 3000, fill: 'forwards'})
}

export default function Navbar() {
    return (
        <>
        <div className="flex justify-between px-7 py-3 m-1 h-auto w-auto 
        cursor-pointer">
            <div className="pt-1">
                <NavLink className = 'ml-10 text-xl px-2 pb-3 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-in'to = '/'>ari.dev</NavLink>
            </div>
            <nav className="flex gap-12 pr-10 text-[#ddd] transition-all duration-300 ease-in-out">
                <NavLink className = {({isActive}) => isActive ? "pt-2 px-2 pb-2 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:100%_2px] bg-no-repeat" : "px-2 pt-2 pb-1 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-in"} to = "/">HOME</NavLink>
                <NavLink className = {({isActive}) => isActive ? "pt-2 px-2 pb-2 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:100%_2px] bg-no-repeat" : "px-2 pt-2 pb-1 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-in"} to = "/about">ABOUT</NavLink>
                <NavLink className = {({isActive}) => isActive ? "pt-2 px-2 pb-2 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:100%_2px] bg-no-repeat" : "px-2 pt-2 pb-1 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-in"} to = "/projects">PROJECTS</NavLink>
                <NavLink className = {({isActive}) => isActive ? "pt-2 px-2 pb-2 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:100%_2px] bg-no-repeat" : "px-2 pt-2 pb-1 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-in"} to = "/stack">STACK</NavLink>
                <NavLink className = {({isActive}) => isActive ? "pt-2 px-2 pb-2 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:100%_2px] bg-no-repeat" : "px-2 pt-2 pb-1 bg-left-bottom bg-gradient-to-r from-[#ddd] to-[#fff] bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-in"} to = "/contact">CONTACT</NavLink>
            </nav>
        </div>
        <div>
            <Outlet />
        </div>
        </>
    )
}