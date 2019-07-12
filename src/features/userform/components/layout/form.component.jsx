import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import './form.component.scss'
import {
  UIbutton,
  UIinput
} from '../../../../ui';

function FormComponent(props) {
  return (
    <form className="form user-form js_registerSubmit" onSubmit={props.handleSubmit}>
      <div className="fields">
        <div className="row">
          <UIinput name="firstName" value={props.firstName} label="Nombre" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="lastName" value={props.lastName} label="Apellido" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="email" type="email" value={props.email} label="Email" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="cellphone" value={props.cellphone} label="Celular" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="password" type="password" value={props.password} label="Contraseña" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="password2" type="password" value={props.password2} label="Confirma tu contraseña" onChange={props.handleChange}></UIinput>
        </div>
      </div>
      <UIbutton className="register-component-btn" name="button" type="submit" variant="contained" color="primary" fullWidth={true}>R E G I S T R A T E</UIbutton>
    </form>
  );
}

export {
  FormComponent
}
