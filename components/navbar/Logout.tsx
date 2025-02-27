"use client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/auth.slice";
import { resetTasks } from "@/redux/slices/tasks.slice";

const Logout = ({ className }: { className?: string }) => {
	const router = useRouter();
	const dispatch = useDispatch();

	// Handle logout logic
	const handleLogout = () => {
		localStorage.clear();

		// Reset the auth state and tasks state in the Redux store
		dispatch(logout());
		dispatch(resetTasks());

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
