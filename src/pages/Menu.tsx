import React, { useState } from 'react'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons, IonButton, IonPopover, IonList, IonListHeader, IonItem, IonMenu, IonRouterOutlet, IonIcon, IonLabel, IonSplitPane, IonPage } from '@ionic/react'
import { home } from 'ionicons/icons'
// import { home, person, chatbubbles, settings } from 'ionicons/icons'

const Menu: React.SFC<{}> = () => (
  <IonContent>
    <IonSplitPane when="md" contentId="menuContent">
      <IonMenu contentId="menuContent">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonMenu>
      <IonPage id="menuContent" />
    </IonSplitPane>
  </IonContent>
 
)

// async function presentPopover() {
//   const popoverElement = Object.assign(document.createElement('ion-popover'), {
//     component: 'profile-page',
//     event: event
//   });
//   document.body.appendChild(popoverElement);
//   return await popoverElement.present();
// }


// const ionMenu = () => <IonRouterOutlet></IonRouterOutlet>
// const openMenu = async () => {
//   await ionMenu.open('start')
// }
// return (
//   <>
    // <IonMenu side="start" menuId="first" disabled={false}>
    //   <IonHeader>
    //     <IonToolbar color="primary">
    //       <IonTitle>Start Menu</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent>
    //     <IonList>
    //       <IonItem>Menu Item</IonItem>
    //       <IonItem>Menu Item</IonItem>
    //       <IonItem>Menu Item</IonItem>
    //       <IonItem>Menu Item</IonItem>
    //       <IonItem>Menu Item</IonItem>
    //     </IonList>
    //   </IonContent>
    // </IonMenu>
//     <IonHeader>
//       <IonToolbar>
//         <IonButtons slot="start" > 
//           <IonMenuButton autoHide={false} onClick={() => ionMenu.open('start')}></IonMenuButton>
//         </IonButtons>
//       </IonToolbar>
//     </IonHeader>
//     <IonRouterOutlet></IonRouterOutlet>
//   </>
// )

// Popover
// const [showPopover, setShowPopover] = useState(false)
// const presentPopover = async () => {
//   const ionPopover = await Object.assign(document.createElement('ion-popover'), {
//     component: 'Menu',
//     // event:event
//   })
//   document.body.appendChild(ionPopover)
//   ionPopover.innerHTML = 
//   return await ionPopover.present()
// }


// return (
//   <>
//   <IonHeader translucent>
//     <IonToolbar>
//       <IonTitle>Popover</IonTitle>
//         <IonPopover
//           isOpen={showPopover}
//           onDidDismiss={
//             () => {
//               setShowPopover(false)
//             }
//           }

//         >
//           <IonList>
//             <IonListHeader>Ionic</IonListHeader>
//             <IonItem button>Learn Ionic</IonItem>
//             <IonItem button>Documentation</IonItem>
//             <IonItem button>Showcase</IonItem>
//             <IonItem button>GitHub Repo</IonItem>
//           </IonList>
//         </IonPopover>
//         <IonButtons slot="start">
//           <IonMenuButton autoHide={false} onClick={
//             (e) => {
//               setShowPopover(true)
//               // presentPopover()
//             }
//           }
//           >

//           </IonMenuButton>
//         </IonButtons>

//     </IonToolbar>
//   </IonHeader>
//   {/* <IonPopover
//     isOpen={showPopover}
//     onDidDismiss={(e) => setShowPopover(false)}
//   >
//     <p>Test</p>
//   </IonPopover>
//   <IonButton slot="end" onClick={() => setShowPopover(true)}>Open Menu</IonButton> */}
//   </>
// )

{/* <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>App</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <IonButton expand="block">Open Menu</IonButton>
    </IonContent> */}

export default Menu