import ActionButton from "@/components/base/ActionButton";
import React from "react";

const page = () => {
	return (
		<div className='h-[100vh] w-full flex flex-col items-center justify-center gap-10'>
			<div className='flex flex-col items-center gap-2'>
				<h1 className='text-h2 font-poppins w-full font-bold'>
					Welcome to Sajjil 👋
				</h1>
				<p className='text-h3 font-inter font-semibold'>
					A revolution in task management
				</p>
			</div>
			<ActionButton
				title='Continue'
				forLanding
			/>
		</div>
	);
};

export default page;
