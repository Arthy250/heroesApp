import React, {useMemo} from 'react'
import { getheroesByPublisher } from '../../selectors/getheroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({publisher}) => {

  const heroes = useMemo(() => getheroesByPublisher(publisher), [ publisher ]);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {
        heroes.map ( heroe => (
          <HeroCard key={heroe.id} { ...heroe }/>
        ))
      }
    </div>
  )
}
