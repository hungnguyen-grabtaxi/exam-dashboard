import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Link, useLocation } from "wouter";
import {
	PieChartOutlined,
	SettingOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	HomeOutlined,
} from "@ant-design/icons";
import {
	ConfigProvider,
	Layout,
	Menu,
	Button,
	Breadcrumb,
	MenuProps,
} from "antd";
import { useCommonStore } from "@/stores/common";
import grabLogoSVG from "@/assets/images/grab-logo.svg";

import "./Layout.scss";

interface LayoutProps {
	children: React.ReactNode;
}

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Sider, Content } = Layout;

const AppLayout = observer((props: LayoutProps) => {
	const commonStore = useCommonStore();
	const [location] = useLocation();
	const [collapsed, setCollapsed] = useState(false);

	function getMenuItem(
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[]
	): MenuItem {
		return {
			key,
			icon,
			children,
			label,
		} as MenuItem;
	}

	const menuItems: MenuItem[] = [
		getMenuItem(<Link href="/">Dashboard</Link>, "/", <PieChartOutlined />),
		getMenuItem(
			<Link href="/automations">Automations</Link>,
			"/automations",
			<SettingOutlined />
		),
	];

	const breadcrumItems = [
		{
			href: "",
			title: <HomeOutlined />,
		},
		...(commonStore.breadcrumItems || []).map((item) => {
			return {
				href: item.url,
				title: item.label,
			};
		}),
	];

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#00b14f",
					colorInfo: "#00a5cf",
				},
			}}
		>
			<Layout>
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					style={{ background: "#fff" }}
					className="sidebar"
				>
					<div className="logo">
						<a href="/">
							<img src={grabLogoSVG} alt="Grab" />
						</a>
					</div>
					<Menu
						theme="light"
						mode="inline"
						defaultSelectedKeys={[location]}
						items={menuItems}
					/>
				</Sider>
				<Layout className="transition-all">
					<Header style={{ padding: 0, background: "#fff" }}>
						<Button
							type="text"
							icon={
								collapsed ? (
									<MenuUnfoldOutlined />
								) : (
									<MenuFoldOutlined />
								)
							}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								width: 64,
								height: 64,
							}}
						/>
					</Header>
					<Content
						id="layout-content"
						className="pt-[16px] px-[16px] pb-[80px]"
					>
						<Breadcrumb items={breadcrumItems} />
						<div className="relative bg-[#fff] min-h-screen mt-[16px]">
							{props.children}
						</div>
					</Content>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
});

export default AppLayout;
