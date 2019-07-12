import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import './driver.container.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import cargoTruck4 from '../../../../../assets/img/cargoTruck4.jpg'
import { driver } from '../../../../../helpers/urls';

class DriverDashboard extends Component {
  render() {
    return (
      <div className="driver-dashboard">
        <Link to={driver.order1} className="driver-start-btn">
          <FontAwesomeIcon icon={faTruck} />
          &nbsp; E M P I E Z A &nbsp; A H O R A
        </Link>
        <div className="gradient-img-driver">
          <span className="gradient" />
          <img className="driver-img-0" src={cargoTruck4} alt="Cargo truck" />
        </div>
      </div>
    )
  }
}

export {
  DriverDashboard
};
