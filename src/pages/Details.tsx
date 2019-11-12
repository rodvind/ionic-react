import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonToggle, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';

const Details: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Grocery</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Toggle</IonLabel>
            <IonToggle slot="end"></IonToggle>
          </IonItem>
        </IonList>

        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {console.log('clicked')}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Details;
