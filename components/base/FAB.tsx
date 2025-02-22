import { Plus } from "lucide-react";
import React from "react";

interface FABProps {
	onPress: () => void;
}

const FAB = ({ onPress }: FABProps) => {
	return (
		<div
			onClick={onPress}
			className='w-fit p-2 rounded-full bg-accent absolute bottom-3 right-3 cursor-pointer'
		>
			<Plus size={24} />
		</div>
	);
};

export default FAB;
