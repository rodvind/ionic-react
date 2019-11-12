import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { build, cart, car, flash, thermometer, wifi, tv } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="Data visualization" />
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Expenses</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={cart} />
            <IonLabel>Grocery</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Maintenance</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" icon={car} />
            <IonLabel>Car</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={flash} />
            <IonLabel>Electricity</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={thermometer} />
            <IonLabel>Gas</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={wifi} />
            <IonIcon slot="start" color="medium" icon={tv} />
            <IonLabel>TV + Internet</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
