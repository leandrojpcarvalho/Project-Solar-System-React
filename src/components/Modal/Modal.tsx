import { useState, useEffect } from 'react';
import missions from '../../data/missions';
import Missions from '../Missions';
import MissionCard from '../Missions/MissionCard';
import planets from '../../data/planets';
import './modal.css';

type Props = {
  isHidden: boolean;
  planet:string;
  setModalIsInvisible: ()=>void;
};

function Modal({ isHidden, setModalIsInvisible, planet }:Props) {
  const objPlanet = planets.find((aPlanet) => aPlanet.name === planet);
  return (
    <div
      className="transparent"
      hidden={ isHidden }
      onClick={ setModalIsInvisible }
      aria-hidden
    >
      <section className="container card">
        <strong className="title">{ planet }</strong>
        <p className="info">{ objPlanet?.info }</p>
        <section className="container missions">
          <Missions planet={ planet } />
        </section>
      </section>
    </div>
  );
}

export default Modal;
