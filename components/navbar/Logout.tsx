"use client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Logout = ({ className }: { className?: string }) => {
	const router = useRouter();
	const handleLogout = () => {
		localStorage.clear();
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
