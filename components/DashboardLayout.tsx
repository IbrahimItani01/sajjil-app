// DashboardLayout.tsx
"use client";

import FAB from "./base/FAB";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	const pageTitles: { [key: string]: string } = {
		"/dashboard/today": "Today's Tasks",
		"/dashboard": "All Your Tasks",
		"/dashboard/completed": "Completed Tasks",
	};

	const showFAB = pathname === "/dashboard";
	const handleAddTask = () => {
		console.log("df");
	};

	return (
		<div>
			<h1 className='text-center font-bold text-xl my-4'>
				{pageTitles[pathname] || "Dashboard"}
			</h1>

			<div className='max-w-2xl mx-auto border border-orange-400 rounded-xl p-6 h-[80vh] flex flex-col'>
				<div className='overflow-y-auto flex-grow p-2 custom-scroll'>
					{children}
				</div>
			</div>

			{showFAB && <FAB onPress={handleAddTask} />}
		</div>
	);
};

export default DashboardLayout;
