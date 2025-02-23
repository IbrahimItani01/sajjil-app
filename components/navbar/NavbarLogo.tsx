import React from "react";
import Link from "next/link";
import Image from "next/image";
const NavbarLogo = () => {
	return (
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
	);
};

export default NavbarLogo;
