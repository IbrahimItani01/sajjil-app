import Navbar from "@/components/base/NavBar";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Navbar />
			<main className='p-4'>{children}</main>
		</div>
	);
};

export default layout;
