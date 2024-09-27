import {
    IonButton,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
  } from "@ionic/react";
  
  const About: React.FC = () => {
    const renderMenuItem = (text: string, route: string, disabled = false) => (
        <IonItem
          button
          routerLink={route}
          color={disabled ? "light" : "dark"}
          detail={false}
          disabled={disabled}
        >
          {text}
        </IonItem>
    );
  
    return (
      <IonPage>
        <IonMenu side="start" menuId="main-menu" contentId="main-content">
          <IonHeader>
            <IonToolbar color="light">
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
  
          <IonContent color={'dark'}>
            {renderMenuItem("Home", "/home")}
            {renderMenuItem("About", "/about", true)}
            {renderMenuItem("Browse", "/browse")}
          </IonContent>
        </IonMenu>
  
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonMenuButton slot="start" menu="main-menu" color="dark" />
              <IonTitle>About</IonTitle>
            </IonToolbar>
          </IonHeader>
  
          <IonContent>
            <h1>Welcome to the About Page!</h1>
          </IonContent>
        </IonPage>
      </IonPage>
    );
  };
  
  export default About;
  