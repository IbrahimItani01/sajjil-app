"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavbarLogo from "../navbar/NavbarLogo";
import NavbarMenu from "../navbar/NavbarMenu";
import UserBubble from "../navbar/UserBubble";
import Logout from "../navbar/Logout";
import MobileMenu from "../navbar/MobileMenu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-accentLight text-text font-poppins px-6 py-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<NavbarLogo />

				<NavbarMenu className='hidden md:flex absolute left-1/2 gap-10 transform -translate-x-1/2' />

				<div className='hidden md:flex items-center space-x-4'>
					<UserBubble />
					<Logout />
				</div>

				<button
					className='md:hidden text-text hover:text-primary transition'
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{isOpen && <MobileMenu />}
		</nav>
	);
};

export default Navbar;
