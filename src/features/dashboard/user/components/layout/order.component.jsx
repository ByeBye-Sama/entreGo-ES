import React from 'react';

import './order.component.scss'
import {
  UIbutton,
  UIinput
} from '../../../../../ui';

function OrderComponent(props) {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="fields">
        <div className="row">
          <UIinput name="cargoVolume" type="cargoVolume" value={props.cargoVolume} label="Volumen en m3 del cargo" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="obs" type="obs" value={props.obs} label="Observaciones del producto" onChange={props.handleChange}></UIinput>
        </div>
      </div>
      <UIbutton className="user-btn" name="button" type="submit" variant="contained" color="primary" fullWidth={true}>E N T R E G O</UIbutton>
    </form>
  );
}

export {
  OrderComponent
}
