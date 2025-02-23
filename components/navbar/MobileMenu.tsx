import Logout from "./Logout";
import NavbarMenu from "./NavbarMenu";
import UserBubble from "./UserBubble";

const MobileMenu = () => {
	return (
		<div className='md:hidden mt-5 space-y-3 text-center font-inter font-medium'>
			<div className='flex justify-between items-center px-4'>
				<UserBubble />
				<Logout />
			</div>
			<NavbarMenu className='flex flex-col' />
		</div>
	);
};

export default MobileMenu;
