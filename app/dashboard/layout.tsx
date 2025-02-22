import Navbar from "@/components/base/NavBar";
import DashboardLayout from "@/components/DashboardLayout";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Navbar />
			<DashboardLayout>{children}</DashboardLayout>
		</div>
	);
};

export default layout;
