import React, {useMemo} from 'react';
import { Redirect, useParams} from 'react-router-dom'
import { heroeImages } from '../../helpers/heroImages';
import { getheroesById } from '../../selectors/getheroesById';

export const HeroesScreen = ({history}) => {

  const {heroeId} = useParams();
  
  const heroe = useMemo(() => getheroesById(heroeId), [ heroeId ]);
  //console.log('Heroe: ', heroe, 'HeroId: ', heroeId);
  if ( !heroe ) {
    return (<Redirect to="/" />);
  }

  const { publisher, superhero, alter_ego, first_appearance, characters } = heroe;

  const handleReturn = () => {
    if(history.length <= 2) {

      if (publisher === 'DC Comics') {
        history.push('/dc');  
      } 
      
      if (publisher === 'Marvel Comics') {
        history.push('/marvel'); 
      }
      
    } else {
      history.goBack();
    }
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        //src={`../assets/heroes/${heroeId}.jpg`} //public/assets
        //src={batman}
        src={ heroeImages(`./${heroeId}.jpg`).default }
        alt={superhero} 
        className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego: </b> {alter_ego} </li>
          <li className="list-group-item"> <b>Publisher: </b> {publisher} </li>
          <li className="list-group-item"> <b>First appearance: </b> {first_appearance} </li>
        </ul>
        
        <h5>Characters</h5>
        <p> {characters} </p>

        <button className="btn btn-outline-info" onClick={handleReturn}>Return</button>
      </div>
    </div>
  )
}
