import React from "react";

interface PrioritySelectorProps {
	value: "!" | "!!" | "!!!";
	onChange: (priority: "!" | "!!" | "!!!") => void;
}

const PrioritySelector: React.FC<PrioritySelectorProps> = ({
	value,
	onChange,
}) => {
	const priorities = ["!", "!!", "!!!"];

	return (
		<div className='mt-4'>
			<label className='block text-sm font-medium text-gray-700'>
				Priority
			</label>
			<div className='flex gap-4 mt-2'>
				{priorities.map((p) => (
					<label
						key={p}
						className='flex items-center gap-1 cursor-pointer'
					>
						<input
							type='radio'
							name='priority'
							value={p}
							checked={value === p}
							onChange={() => onChange(p as "!" | "!!" | "!!!")}
							className='hidden'
						/>
						<span
							className={`px-3 py-1 rounded-full border ${
								value === p ? "bg-blue-500 text-white" : "border-gray-400"
							}`}
						>
							{p}
						</span>
					</label>
				))}
			</div>
		</div>
	);
};

export default PrioritySelector;
