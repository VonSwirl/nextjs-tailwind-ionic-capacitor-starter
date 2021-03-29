import { useState } from 'react';
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
} from '@ionic/react';
import { notificationsOutline } from 'ionicons/icons';
import Store from '../../store';
import Notifications from './Notifications';
import { getHomeItems } from '../../store/selectors';

import {
  Health,
  // HealthData,
  // HealthDataType,
  // HealthOriginal,
  // HealthQueryOptions,
  // HealthQueryOptionsAggregated,
  // HealthStoreOptions,
} from '@ionic-native/health';

const HealthPage = () => {
  const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);

  console.log(Health.isAuthorized());

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
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        {homeItems.map((i, index) => (
          <div>{index}</div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default HealthPage;
