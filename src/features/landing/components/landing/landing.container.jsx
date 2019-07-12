import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { addClassToEvent } from '../../../../helpers/dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faLocationArrow,
  faPhone,
  faEnvelope,
  faClock,
  faPeopleCarry,
  faTruckMoving
} from '@fortawesome/free-solid-svg-icons';

import { gradientEffect } from '../../../../helpers/effects/underline'

import './landing.container.scss'
import cargoTruck from '../../../../assets/img/cargoTruck.jpg'
import cargoTruck2 from '../../../../assets/img/cargoTruck2.jpg'
import cargoTruck3 from '../../../../assets/img/cargoTruck3.jpg'
import cargoTruck4 from '../../../../assets/img/cargoTruck4.jpg'
import cargoTruck5 from '../../../../assets/img/cargoTruck5.jpg'

import { LoginLayout } from '../../../login'
import { UserFormLayout } from '../../../userform';
import { driver } from '../../../../helpers/urls';

class LandingContainer extends Component {
  constructor(props) {
    super(props);
    gradientEffect();
  }

  componentDidMount() {
    addClassToEvent('js_register', 'click', 'register-user', 'slide-from-right-max', 'login-user', 'slide-from-right')
    addClassToEvent('js_login', 'click', 'login-user', 'slide-from-right', 'register-user', 'slide-from-right-max')
  }

  render() {
    return (
      <React.Fragment>
        <div className="landing-page">
          <div className="gradient-img">
            <span className="gradient" />
            <img className="landing-img-0" src={cargoTruck} alt="Cargo truck" />
            <div className="register-login">
              <button className="btn btn-register js_register">R E G I S T R A T E</button>
              <button className="btn js_login">L O G I N</button>
            </div>
            <div className="login-user">
              <LoginLayout />
            </div>
            <div className="register-user">
              <UserFormLayout />
            </div>
          </div>

          <section className="about">
            <div className="about-summary">
              <div className="inside-container">
                <h2 className="subtitle">e n t r e G o</h2>
                <p className="about-summary-text">
                  Conectamos personas que necesitan trasladar productos con conductores verificados con vehiculos ajustados a tus necesidades.
                  Si deseas trasladar tus productos con nosotros puedes monitorear tu carga en tiempo real y ver donde se encuentra tu conductor en todo momento.
                  La calidad de servicio esta asegurada con entreGo.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <div className="gradient-img-1">
                <span className="gradient-1" />
                <img className="landing-img-1" src={cargoTruck2} alt="Cargo truck" />
              </div>
              <div className="about-detail-text">
                <h2 className="title">POR QUÉ entreGo?</h2>
                <p>
                  Como cliente te proveemos SEGURIDAD, trasladando tu mercancía con conductores de confianza, te ahorramos TIEMPO ya que no necesitas esperar
                  horas o preocuparte por alguien que te recomiende un conductor.
                </p>
              </div>
            </div>
          </section>

          <section className="services">
            <div className="underline-effect">
              <h2 className="title">S E R V I C I O S</h2>
              <div className="inside-container service-text">
                <div className="services-types">
                  <div className="service-description">
                    <h4>C O N E C T A</h4>
                    <p>Deja de preocuparte por buscar un conductor confiable, e inverte ese tiempo en tu negocio.</p>
                  </div>
                  <div className="service-description">
                    <h4>M O N I T O R E A</h4>
                    <p>Puedes ver dónde se encuentra tu mercancía en tiempo real, y acceder desde tu laptop o smartphone.</p>
                  </div>
                </div>
                <div className="services-types">
                  <div className="service-description">
                    <h4>A &nbsp; M E D I D A</h4>
                    <p>Ingresa el tipo de carga y un conductor con las especificaciones necesarias se hará presente.</p>
                  </div>
                  <div className="service-description">
                    <h4>C O N D U C E</h4>
                    <p>Como conductor eres capaz de elegir que llevar según el tipo de carga que puedas transportar.</p>
                  </div>
                </div>
                <div className="services-types">
                  <div className="service-description">
                    <h4>P R E M I U M</h4>
                    <p>Nuestro servicio es de primera calidad, y nuestros precios se ajustan a tu necesidad</p>
                  </div>
                  <div className="service-description">
                    <h4>G A N A</h4>
                    <p>Como conductor podras contar con ingreso adicionales y los beneficios de trabajar con nosotros</p>
                  </div>
                </div>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              </div>
            </div>

            <div className="services-imgs">
              <div className="gradient-img-2">
                <span className="gradient-2" />
                <img className="landing-img-2" src={cargoTruck3} alt="Cargo truck" />
              </div>
              <div className="gradient-img-2">
                <span className="gradient-2" />
                <img className="landing-img-2" src={cargoTruck4} alt="Cargo truck" />
              </div>
              <div className="gradient-img-2">
                <span className="gradient-2" />
                <img className="landing-img-2" src={cargoTruck5} alt="Cargo truck" />
              </div>
            </div>
          </section>

          <section className="work-with-us">
            <h2 className="title">T R A B A J A &nbsp; C O N &nbsp; N O S O T R O S</h2>
            <div className="start-to-work">
              <Link to={driver.register} className="btn-work">E M P I E Z A &nbsp; A H O R A !</Link>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <div className="benefit-text">
                <h4>D I N E R O &nbsp; E X T R A</h4>
                <p>Regístrate gratis y comienza a ganar al instante. Obten los beneficios de trabajar con entreGo.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-text">
                <h4>L I B E R T A D</h4>
                <p>Con entreGo trabajas tanto como quieras, cuando quieras y donde quieras. Comienza con entreGo ahora! </p>
              </div>
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faPeopleCarry} />
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faTruckMoving} />
              </div>
              <div className="benefit-text">
                <h4>S O P O R T E</h4>
                <p>Proporcionamos a los conductores todas las herramientas necesarias que necesitan para conducir de forma segura.</p>
              </div>
            </div>
          </section>

          <section className="statistics">
            <div className="statistics-type">
              <p className="statistics-number">150 K+</p>
              <p className="statistics-label">Clientes satisfechos</p>
            </div>
            <div className="statistics-type">
              <p className="statistics-number">15 K+</p>
              <p className="statistics-label">Conductores felices</p>
            </div>
            <div className="statistics-type">
              <p className="statistics-number">800 K+</p>
              <p className="statistics-label">Envios completados</p>
            </div>
            <div className="statistics-type">
              <p className="statistics-number">20 K+</p>
              <p className="statistics-label">Inversion</p>
            </div>
          </section>

          <section className="contact">
            <div className="contact-text">
              <h2 className="subtitle">C O N T A C T O</h2>
              <p className="bold">Dudas? Contacta con nosotros!</p>
              <p>
                Si tienes una sugerencia, una queja sobre el servicio, o buscas comunicarte
                con el equipo de entreGo, contactanos!
              </p>
              <div className="contact-data">
                <div className="contact-personal">
                  <p className="contact-personal-text"><FontAwesomeIcon className="contact-icon" icon={faLocationArrow} />Recavarren 111, Floor 7</p>
                  <p className="contact-personal-text">Miraflores, Lima</p>
                </div>
                <div className="contact-personal">
                  <p className="contact-personal-text"><FontAwesomeIcon className="contact-icon" icon={faPhone} />(51) - 943484768</p>
                  <p className="contact-personal-text">&nbsp; &nbsp; &nbsp; &nbsp;(51) - 957276765</p>
                </div>
              </div>
              <div className="contact-data">
                <div className="contact-personal">
                  <p className="contact-personal-text"><FontAwesomeIcon className="contact-icon" icon={faEnvelope} />entrego.supp@gmail.com</p>
                  <p className="contact-personal-text">&nbsp; &nbsp; &nbsp; &nbsp;app.entrego@gmail.com</p>
                </div>
                <div className="contact-personal">
                  <p className="contact-personal-text"><FontAwesomeIcon className="contact-icon" icon={faClock} />M-F: 9AM - 5PM</p>
                  <p className="contact-personal-text">&nbsp; &nbsp; &nbsp; &nbsp;Sa: 10AM - 1PM</p>
                </div>
              </div>
            </div>
          </section>

          <section className="foot-logo">
            <h2 className="max-logo">e n t r e G o</h2>
          </section>

        </div>
      </React.Fragment >
    )
  }
}

export {
  LandingContainer
}
