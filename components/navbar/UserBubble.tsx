import { User } from "lucide-react";

const UserBubble = ({ className }: { className?: string }) => {
	// TODO: handle user name state
	return (
		<div className={`flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full space-x-2 cursor-default ${className}`}>
			<User size={20} />
			<span className='text-sm font-medium font-poppins'>John Doe</span>
		</div>
	);
};

export default UserBubble;
