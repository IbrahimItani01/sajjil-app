import { User } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Adjust the import based on your actual store file

const UserBubble = ({ className }: { className?: string }) => {
	// Access the user data from the Redux store
	const user = useSelector((state: RootState) => state.auth.user?.username);


	return (
		<div className={`flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full space-x-2 cursor-default ${className}`}>
			<User size={20} />
			<span className='text-sm font-medium font-poppins'>{user}</span>
		</div>
	);
};

export default UserBubble;
