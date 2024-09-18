import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "../pages/Home.css";
import "/node_modules/swiper/swiper-bundle.min.css";

import boracay from "../assets/img/boracay.jpg";
import elnido from "../assets/img/elnido.jpg";
import facility from "../assets/img/facility.jpg";

import { star, starHalf } from "ionicons/icons";
import { Icon } from "@iconify-icon/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar color={"light"}>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent color={"dark"}>
          <IonMenuToggle>
            <IonButton expand="full" routerLink="/About" color={"dark"}>
              About
            </IonButton>
          </IonMenuToggle>

          <IonMenuToggle>
            <IonButton expand="full" routerLink="/browse" color={"dark"}>
              Browse
            </IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>

      <IonHeader>
        <IonToolbar color={"dark"} style={{ display: "flex" }}>
          <IonTitle slot="start" color={"light"}>
            G A L A . ai
          </IonTitle>

          <IonButton slot="end" color={"light"} routerLink="/login">
            Login
          </IonButton>

          <IonMenuButton slot="end" />
        </IonToolbar>
      </IonHeader>

      <IonContent id="main-content" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <IonCol
            style={{
              position: "absolute",
              top: "15vw",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "6vw",
              fontWeight: "bold",
              color: "black",
              textShadow: "1px 1px 2px white",
            }}
          >
            Explore the Shore
          </IonCol>

          <IonCol
            style={{
              position: "absolute",
              top: "20vw",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "2.5vw",
              color: "black",
              textShadow: "1px 1px 2px white",
            }}
          >
            Begin your adventurous journey with us
          </IonCol>

          <IonCol
            style={{
              position: "absolute",
              top: "25vw",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          >
            <IonButton className="custom-button">Plan a travel</IonButton>
          </IonCol>
        </div>

        <div
          style={{
            position: "relative",
            textAlign: "center",
            zIndex: -1,
          }}
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            style={{ width: "90vw", height: "auto" }}
          >
            <SwiperSlide>
              <img
                src={boracay}
                alt="Boracay"
                style={{ width: "90vw", height: "auto", borderRadius: "8px" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={elnido}
                alt="El Nido"
                style={{ width: "90vw", height: "auto", borderRadius: "8px" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <IonCol>
          <IonCardHeader
            style={{
              paddingLeft: "5%",
            }}
          >
            <IonCardTitle>Feedback</IonCardTitle>
            <IonCardSubtitle>
              Testimonials from our valued clients
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <div
              style={{
                display: "flex",
                overflowX: "auto",
              }}
            >
              <IonCol size="4" style={{ minWidth: "300px" }}>
                <IonCard>
                  <IonCardContent>"Fantastic experience"</IonCardContent>

                  <IonCardHeader>
                    <IonCardTitle>Given Name</IonCardTitle>
                    <IonCardSubtitle>
                      4.5
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={starHalf} />
                    </IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>

              <IonCol size="4" style={{ minWidth: "300px" }}>
                <IonCard>
                  <IonCardContent>"Simple and convenient"</IonCardContent>

                  <IonCardHeader>
                    <IonCardTitle>Anonymous</IonCardTitle>
                    <IonCardSubtitle>
                      4.5
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={starHalf} />
                    </IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>

              <IonCol size="4" style={{ minWidth: "300px" }}>
                <IonCard>
                  <IonCardContent>"So much more to offer"</IonCardContent>

                  <IonCardHeader>
                    <IonCardTitle>Juan Dela</IonCardTitle>
                    <IonCardSubtitle>
                      5.0
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </div>
          </IonCardContent>
        </IonCol>

        <IonCol>
          <IonCardHeader
            style={{
              paddingLeft: "5%",
            }}
          >
            <IonCardTitle>About Us</IonCardTitle>
            <IonCardSubtitle>Subheading for description</IonCardSubtitle>
          </IonCardHeader>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <IonCardContent
              style={{
                minWidth: "300px",
              }}
            >
              <IonGrid>
                <IonRow class="ion-align-items start">
                  <IonCol>
                    <p>
                      Body text for your whole article or post. We’ll put in
                      some lorem ipsum to show how a filled-out page might look:
                    </p>

                    <p>
                      Excepteur efficient emerging, minim veniam anim aute
                      carefully curated Ginza conversation exquisite perfect
                      nostrud nisi intricate Content. Qui international
                      first-class nulla ut. Punctual adipisicing, essential
                      lovely queen tempor eiusmod irure. Exclusive izakaya
                      charming Scandinavian impeccable aute quality of life soft
                      power pariatur Melbourne occaecat discerning. Qui wardrobe
                      aliquip, et Porter destination Toto remarkable officia
                      Helsinki excepteur Basset hound. Zürich sleepy perfect
                      consectetur.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <br />

              <p>
                <Icon icon={"skill-icons:gmail-light"} /> • info@gala.ai
              </p>
            </IonCardContent>

            <img src={facility} alt="Facility" />
          </div>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};

export default Home;
