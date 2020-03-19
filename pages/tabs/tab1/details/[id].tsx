import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import { useRouter } from 'next/dist/client/router';

const Details: React.FC = () => {

  const router = useRouter();

   return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/tabs/tab1"></IonBackButton>
          </IonButtons>
          <IonTitle> Details {router.query.id}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"> Details {router.query.id}</IonTitle>
          </IonToolbar>
        </IonHeader>
       
      </IonContent>

    </IonPage>
  );
};

export default Details;