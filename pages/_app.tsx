import React from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { IonRouterOutlet, IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import dynamic from 'next/dynamic';
import { IonNextRouter } from '@ionic/react-next-router';
import { ellipse, square, triangle } from 'ionicons/icons';

/* Theme variables */
import '../theme/global.css';
import '../theme/variables.css';

/* This controls if SSR is on or not. Enabling it works but with warnings at the moment */
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
});

function MyApp({ Component, pageProps }) {
  return (
    <IonApp>
      <IonNextRouter>
        <IonTabs>
          <IonRouterOutlet ionPageContainer>
            <Component {...pageProps} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tabs/tab1">
              <IonIcon icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tabs/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tabs/tab3">
              <IonIcon icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonNextRouter>
    </IonApp>
  );
}