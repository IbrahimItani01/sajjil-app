"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ActionButtonProps {
	onPress?: () => void;
	title: string;
	forLanding?: boolean;
}

const ActionButton = ({
	title,
	onPress,
	forLanding = false,
}: ActionButtonProps) => {
	const route = useRouter();
	const handleNavigate = () => {
		if (localStorage.getItem("token")) {
			route.push("/dashboard");
		} else {
			route.push("/auth");
		}
	};
	return (
		<div
			onClick={!forLanding ? onPress : handleNavigate}
			className='bg-accent font-inter text-black font-semibold px-8 py-3 rounded-full cursor-pointer 
            hover:scale-105 active:scale-95 transform transition duration-150'
		>
			{title}
		</div>
	);
};

export default ActionButton;
