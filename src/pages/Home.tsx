import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../pages/Home.css";
import "/node_modules/swiper/swiper-bundle.min.css";

import boracay from "../assets/img/boracay.jpg";
import elnido from "../assets/img/elnido.jpg";
import facility from "../assets/img/facility.jpg";

import { star, starHalf, close } from "ionicons/icons";
import { Icon } from "@iconify-icon/react";

const Home: React.FC = () => {
  const [loginModal, setLoginModal] = useState(false);

  const renderMenuButton = (text: string, route: string, disabled = false) => (
      <IonButton
        expand="full"
        routerLink={route}
        color={disabled ? "light" : "dark"}
        disabled={disabled}
      >
        {text}
      </IonButton>
  );

  const renderFeedbackCard = (
    content: string,
    name: string,
    rating: number
  ) => (
    <IonCol size="4" style={{ minWidth: "300px" }}>
      <IonCard>
        <IonCardContent>{content}</IonCardContent>
        <IonCardHeader>
          <IonCardTitle>{name}</IonCardTitle>
          <IonCardSubtitle>
            {rating.toFixed(1)}
            {[...Array(Math.floor(rating))].map((_, i) => (
              <IonIcon key={i} icon={star} />
            ))}
            {rating % 1 !== 0 && <IonIcon icon={starHalf} />}
          </IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </IonCol>
  );

  return (
    <IonPage>
      <IonMenu side="start" contentId="main-content">
        <IonHeader>
          <IonToolbar color="light">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="dark">
          {renderMenuButton("Home", "/home", true)}
          {renderMenuButton("About", "/about")}
          {renderMenuButton("Browse", "/browse")}
        </IonContent>
      </IonMenu>

      <IonHeader>
        <IonToolbar color="dark" className="toolbar-header">
          <IonTitle color="light">G A L A . ai</IonTitle>
          <IonButton
            slot="end"
            color="light"
            onClick={() => setLoginModal(true)}
            style={{
              paddingRight: '10px'
            }}
          >
            Login
          </IonButton>
          <IonMenuButton slot="start" color={"light"}/>
        </IonToolbar>
      </IonHeader>

      <IonContent id="main-content" style={{ position: "relative" }}>
        {/* Hero Section */}
        <div className="hero-section">
          <IonCol className="hero-title">Explore the Shore</IonCol>
          <IonCol className="hero-subtitle">
            Begin your adventurous journey with us
          </IonCol>
          <IonCol className="hero-button">
            <IonButton className="custom-button">Plan a travel</IonButton>
          </IonCol>
        </div>

        {/* Image Carousel */}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          style={{ width: "90vw", height: "auto" }}
        >
          <SwiperSlide>
            <img
              src={boracay}
              alt="Boracay"
              className="carousel-image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={elnido}
              alt="El Nido"
              className="carousel-image"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>

        {/* Feedback Section */}
        <IonCol>
          <IonCardHeader className="section-header">
            <IonCardTitle>Feedback</IonCardTitle>
            <IonCardSubtitle>
              Testimonials from our valued clients
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="feedback-container">
            {renderFeedbackCard("Fantastic experience", "Given Name", 4.5)}
            {renderFeedbackCard("Simple and convenient", "Anonymous", 4.5)}
            {renderFeedbackCard("So much more to offer", "Juan Dela", 5.0)}
          </IonCardContent>
        </IonCol>

        {/* About Section */}
        <div className="gradient">
          <IonCol>
            <IonCardHeader className="section-header">
              <IonCardTitle>About Us</IonCardTitle>
              <IonCardSubtitle>Subheading for description</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="about-us-content">
              <IonGrid>
                <IonRow>
                  <IonCol
                    style={{
                      display: "flex",
                      gap: "10%",
                    }}
                  >
                    <div style={{ minWidth: "300px" }}>
                      <p>
                        Body text for your whole article or post. We’ll put in
                        some lorem ipsum to show how a filled-out page might
                        look...
                      </p>
                      <p>
                        Excepteur efficient emerging, minim veniam anim aute
                        curated Ginza conversation exquisite perfect nostrud...
                      </p>
                    </div>

                    <div>
                      <img
                        src={facility}
                        alt="Facility"
                        className="about-facility-image"
                      />
                    </div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <p>
                    <Icon icon="skill-icons:gmail-light" /> • info@gala.ai
                  </p>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCol>
        </div>
      </IonContent>

      {/* Login Modal */}
      <IonModal
        isOpen={loginModal}
        onDidDismiss={() => setLoginModal(false)}
        style={{
          margin: "auto" }}
      >
        <IonHeader>
          <IonToolbar color={'dark'}>
            <IonTitle color={'light'}>Login</IonTitle>
            <IonIcon
            color="light"
              icon={close}
              slot="end"
              onClick={() => setLoginModal(false)}
              className="close-icon"
            />
          </IonToolbar>
        </IonHeader>

        <IonContent
          className="ion-padding login-modal-content"
          style={{ textAlign: "center" }}
        >
          <IonItem lines="none">
            <IonInput placeholder="Enter your email" />
          </IonItem>
          <IonItem lines="none">
            <IonInput placeholder="Enter your password" type="password" />
          </IonItem>

          <IonButton
            expand="block"
            onClick={() => {
              /* Handle login */
            }}
            className="login-button"
          >
            Login
          </IonButton>

          <div style={{ margin: "20px 0" }}>
            <div style={{ fontWeight: "bold" }}>or continue with</div>
          </div>

          <div className="social-login-options">
            <IonButton shape="round" fill="clear" className="social-btn">
              <img src="src/assets/img/google.png" alt="Google" />
            </IonButton>
            <IonButton shape="round" fill="clear" className="social-btn">
              <img src="src/assets/img/facebook.png" alt="Facebook" />
            </IonButton>
          </div>

          <div className="terms-text">
            <IonText style={{fontSize: '14px'}}>
              By clicking continue, you agree to our {" "}
              <a href="/terms">Terms of Service</a>
              {" "} and {" "}
              <a href="/privacy">Privacy Policy</a>
            </IonText>
          </div>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Home;
