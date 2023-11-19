import { useEffect } from "react";
import { Result } from "antd";
import underConstructionSVG from "@/assets/images/under-construction.svg";
import { useCommonStore } from "@/stores/common";

const ListAutomationsPage = function HomePage() {
	const commonStore = useCommonStore();

	useEffect(() => {
		commonStore.setBreadcrum([
			{
				label: "Automations",
			},
		]);
	}, []);

	return (
		<Result
			title="Under Construction"
			subTitle="Sorry, the page you visited is under construction."
			className="min-h-screen"
			icon={
				<img
					src={underConstructionSVG}
					className="w-[650px] h-[500px] max-w-full max-h-full"
				/>
			}
		/>
	);
};

export default ListAutomationsPage;
