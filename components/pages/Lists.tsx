import Store from "../../store";
import * as selectors from "../../store/selectors";

import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonItem,
	IonLabel,
} from "@ionic/react";

interface ListEntry {
	list: any;
}

const ListEntry = (props: ListEntry) => {
	const { list } = props;
	return (
		<IonItem routerLink={`/tabs/lists/${list.id}`} className="list-entry">
			<IonLabel>{list.name}</IonLabel>
		</IonItem>
	);
};

const AllLists = () => {
	const lists = Store.useState(selectors.getLists);

	return (
		<>
			{lists.map((list, i) => (
				<ListEntry list={list} key={i} />
			))}
		</>
	);
};

const Lists = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Lists</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Lists</IonTitle>
					</IonToolbar>
				</IonHeader>
				<AllLists />
			</IonContent>
		</IonPage>
	);
};

export default Lists;
