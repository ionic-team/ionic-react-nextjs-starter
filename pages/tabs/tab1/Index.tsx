import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';

interface Tab1Props { }

const Tab1: React.FC<Tab1Props> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React Next App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem routerLink='/tabs/tab1/details/[id]' routerOptions={{ as: '/tabs/tab1/details/1' }}>
          <IonLabel>Details 1</IonLabel>
        </IonItem>
        <IonItem routerLink='/tabs/tab1/details/[id]' routerOptions={{ as: '/tabs/tab1/details/2' }}>
          <IonLabel>Details 2</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;