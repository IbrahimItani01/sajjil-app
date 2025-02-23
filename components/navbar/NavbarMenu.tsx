import Link from "next/link";

const NavbarMenu = ({ className }: { className?: string }) => {
	return (
		<div className={`font-inter flex gap-3 font-semibold ${className}`}>
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
				Completed Tasks
			</Link>
		</div>
	);
};

export default NavbarMenu;
