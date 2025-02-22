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
}: ActionButtonProps) => {};

export default ActionButton;
