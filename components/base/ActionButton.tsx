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

export default ActionButton;
