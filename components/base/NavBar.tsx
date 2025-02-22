"use client";
import { useState } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-accentLight text-text font-poppins px-6 py-4'>
			<div className='container mx-auto flex justify-between items-center'>
				{/* Logo */}
				<Link
					href='/dashboard'
					className='text-xl font-bold text-primary flex items-center gap-2'
				>
					<Image
						src='/logo.svg'
						alt='logo'
						height={30}
						width={30}
					/>
					Sajjil
				</Link>

				{/* Desktop Menu - Centered */}
				<div className='hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2 font-inter font-semibold'>
					<Link
						href='/dashboard/today'
						className='hover:text-primary'
					>
						Today
					</Link>
					<Link
						href='/dashboard/completed'
						className='hover:text-primary'
					>
						Completed
					</Link>
				</div>

				{/* User Bubble + Logout (Desktop) */}
				<div className='hidden md:flex items-center space-x-4'>
					{/* User Info */}
					<div className='flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full space-x-2 cursor-default'>
						<User size={20} />
						<span className='text-sm font-poppins font-medium'>John Doe</span>
					</div>

					{/* Logout Button */}
					<button className='text-black hover:text-primary transition'>
						<LogOut size={22} />
					</button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden text-text hover:text-primary transition'
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className='md:hidden mt-5 space-y-3 text-center font-inter font-medium'>
					{/* User Bubble + Logout (Mobile) */}
					<div className='flex justify-between items-center space-x-4'>
						<div className='flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full space-x-2 cursor-default'>
							<User size={20} />
							<span className='text-sm font-medium font-poppins'>John Doe</span>
						</div>

						{/* Logout Button */}
						<button className='text-black hover:text-primary transition'>
							<LogOut size={22} />
						</button>
					</div>
					<Link
						href='/dashboard/today'
						className='block py-2 hover:text-primary'
					>
						Today
					</Link>
					<Link
						href='/dashboard/completed'
						className='block py-2 hover:text-primary'
					>
						Completed
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
