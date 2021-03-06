import { Plugins, StatusBarStyle } from "@capacitor/core";
import {
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonMenuToggle,
	// IonRouterContext,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { cog, flash, list, heart } from "ionicons/icons";
// import { useHistory, useLocation } from "react-router-dom";

const pages = [
	{
		title: "Feed",
		icon: flash,
		url: "/tabs/feed",
	},
	{
		title: "Health",
		icon: heart,
		url: "/tabs/health",
	},
	{
		title: "Lists",
		icon: list,
		url: "/tabs/lists",
	},
	{
		title: "Settings",
		icon: cog,
		url: "/tabs/settings",
	},
];

const Menu = () => {
	const { StatusBar } = Plugins;

	// const ionRouterContext = useContext(IonRouterContext);
	// const location = useLocation();

	const [isDark, setIsDark] = useState(false);

	const handleOpen = async () => {
		try {
			await StatusBar.setStyle({
				style: isDark ? StatusBarStyle.Light : StatusBarStyle.Dark,
			});
		} catch (e) {
			console.log(e);
		}
	};
	const handleClose = async () => {
		try {
			await StatusBar.setStyle({
				style: isDark ? StatusBarStyle.Dark : StatusBarStyle.Light,
			});
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
	}, []);

	return (
		<IonMenu
			side="start"
			contentId="main"
			onIonDidOpen={handleOpen}
			onIonDidClose={handleClose}
		>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Menu</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					{pages.map((p, i) => (
						<IonMenuToggle autoHide={false} key={i}>
							<IonItem
								routerLink={p.url}
								routerDirection="none"
								detail={false}
								lines="none"
							>
								<IonIcon icon={p.icon} slot="start" />
								<IonLabel>{p.title}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					))}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
