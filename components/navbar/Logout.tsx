"use client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/auth.slice"; // Use the logout action
import { resetTasks } from "@/redux/slices/tasks.slice"; // Assuming this action exists

const Logout = ({ className }: { className?: string }) => {
	const router = useRouter();
	const dispatch = useDispatch();

	// Handle logout logic
	const handleLogout = () => {
		// Clear the localStorage
		localStorage.clear();

		// Reset the auth state and tasks state in the Redux store
		dispatch(logout()); // Use the logout action to reset auth state
		dispatch(resetTasks()); // Reset tasks state (if this action exists)

		// Redirect to the homepage
		router.push("/");
	};

	return (
		<button
			onClick={handleLogout}
			className={`text-black hover:text-primary transition ${className}`}
		>
			<LogOut size={22} />
		</button>
	);
};

export default Logout;
