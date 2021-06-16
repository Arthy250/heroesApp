import React from 'react';
import {Link} from 'react-router-dom';
import { heroeImages } from '../../helpers/heroImages';

export const HeroCard = ( heroe ) => {

  const {id, superhero, alter_ego, first_appearance, characters} = heroe;

  return (
    <div className="card ms-3" style={{maxWidth:540}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img 
          //src={`./assets/heroes/${id}.jpg`}
          src={heroeImages((`./${id}.jpg`)).default}
          className="card-img" alt={superhero}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-title">
              {superhero}
            </div>
            <p className="card-text">{alter_ego}</p>

            { (alter_ego !== characters) ? <p className="card-text" >{characters}</p> : null}

            <div className="card-text">
              <p className="text-muted"> {first_appearance} </p>
            </div>

            <Link to={`./heroe/${id}`}>Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
