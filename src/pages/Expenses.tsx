// import React from 'react';
// import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// const Tab2: React.FC = () => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Tab Two</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <IonList>
//           <IonItem routerLink="/tab2/details">
//             <IonLabel>
//               <h2>Go to detail</h2>
//             </IonLabel>
//           </IonItem>
//         </IonList>
//       </IonContent>
//     </IonPage>
//   );
// };

import React from 'react';
import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote, IonPage } from '@ionic/react';
import { more, heart, trash, star, archive } from 'ionicons/icons';

const Expenses: React.FC = () => (
  <IonPage>
    <IonList>
      {/* Sliding item with text options on both sides */}
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption onClick={() => console.log('favorite clicked')}>Favorite</IonItemOption>
          <IonItemOption color="danger" onClick={() => console.log('share clicked')}>Share</IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>Item Options</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption onClick={() => console.log('unread clicked')}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* Sliding item with expandable options on both sides */}
      <IonItemSliding>
        <IonItemOptions side="start">
          <IonItemOption color="danger" expandable>
            Delete
      </IonItemOption>
        </IonItemOptions>

        <IonItem>
          <IonLabel>Expandable Options</IonLabel>
        </IonItem>

        <IonItemOptions side="end">
          <IonItemOption color="tertiary" expandable>
            Archive
      </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* Multi-line sliding item with icon options on both sides */}
      <IonItemSliding id="item100">
        <IonItem href="#">
          <IonLabel>
            <h2>HubStruck Notifications</h2>
            <p>A new message in your network</p>
            <p>Oceanic Next has joined your network</p>
          </IonLabel>
          <IonNote slot="end">
            10:45 AM
          </IonNote>
        </IonItem>

        <IonItemOptions side="start">
          <IonItemOption>
            <IonIcon slot="icon-only" icon={heart}></IonIcon>
          </IonItemOption>
        </IonItemOptions>

        <IonItemOptions side="end">
          <IonItemOption color="danger">
            <IonIcon slot="icon-only" icon={trash}></IonIcon>
          </IonItemOption>
          <IonItemOption>
            <IonIcon slot="icon-only" icon={star}></IonIcon>
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* Sliding item with icon start options on end side */}
      <IonItemSliding>
        <IonItem>
          <IonLabel>
            Sliding Item, Icons Start
      </IonLabel>
        </IonItem>
        <IonItemOptions>
          <IonItemOption color="primary">
            <IonIcon slot="start" icon={more}></IonIcon>
            More
      </IonItemOption>
          <IonItemOption color="secondary">
            <IonIcon slot="start" icon={trash}></IonIcon>
            Archive
      </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* Sliding item with icon end options on end side */}
      <IonItemSliding>
        <IonItem>
          <IonLabel>
            Sliding Item, Icons End
      </IonLabel>
        </IonItem>
        <IonItemOptions>
          <IonItemOption color="primary">
            <IonIcon slot="end" icon={more}></IonIcon>
            More
      </IonItemOption>
          <IonItemOption color="secondary">
            <IonIcon slot="end" icon={archive}></IonIcon>
            Archive
      </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* Sliding item with icon top options on end side */}
      <IonItemSliding>
        <IonItem>
          <IonLabel>
            Sliding Item, Icons Top
      </IonLabel>
        </IonItem>
        <IonItemOptions>
          <IonItemOption color="primary">
            <IonIcon slot="top" icon={more}></IonIcon>
            More
      </IonItemOption>
          <IonItemOption color="secondary">
            <IonIcon slot="top" icon={archive}></IonIcon>
            Archive
      </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* Sliding item with icon bottom options on end side */}
      <IonItemSliding>
        <IonItem>
          <IonLabel>
            Sliding Item, Icons Bottom
      </IonLabel>
        </IonItem>
        <IonItemOptions>
          <IonItemOption color="primary">
            <IonIcon slot="bottom" icon={more}></IonIcon>
            More
      </IonItemOption>
          <IonItemOption color="secondary">
            <IonIcon slot="bottom" icon={archive}></IonIcon>
            Archive
      </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonPage>
  
);
export default Expenses;