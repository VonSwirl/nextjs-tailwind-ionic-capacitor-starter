import { useState } from "react";
import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";
import Store from "../../store";
import Notifications from "./Notifications";
import { getHomeItems } from "../../store/selectors";
import { ionicHealthPlugin } from "../../lib/Health";

const Testing = () => {
	const homeItems = Store.useState(getHomeItems);
	homeItems.push({});

	return (
		<>
			{homeItems.map((x, i) => (
				<div key={i}>{"Healthy " + i}</div>
			))}
		</>
	);
};
const HealthPage = () => {
	const [showNotifications, setShowNotifications] = useState(false);

	ionicHealthPlugin();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Health</IonTitle>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonButtons slot="end">
						<IonButton onClick={() => setShowNotifications(true)}>
							<IonIcon icon={notificationsOutline} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding" fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Health</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Notifications
					open={showNotifications}
					onDidDismiss={() => setShowNotifications(false)}
				/>
				<Testing />
			</IonContent>
		</IonPage>
	);
};

export default HealthPage;
