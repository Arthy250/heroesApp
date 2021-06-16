import React, {useMemo} from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

  const location = useLocation();
  const { q = '' } = (queryString.parse (location.search));

  const [ {heroSearch} , handleInputChange] = useForm({
    heroSearch: q
  });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${heroSearch}`)
  }

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr/>

          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Find your hero" 
              className="form-control"
              name="heroSearch"
              autoComplete="off"
              value={heroSearch}
              onChange={handleInputChange}
              />
            <button type="submit" className="btn btn-block btn-outline-primary mt-3">Search...</button>
          </form>


        </div>
        <div className="col-7">

          <h4>Results</h4>
          <hr/>

          { (q === '') 
            && 
            <div className="alert alert-info"> Search a hero </div>
          }

          { (q !== '' && heroesFiltered.length === 0) 
            && 
            <div className="alert alert-danger"> There is not a hero with "{q}" </div>
          }

          {
            heroesFiltered.map(heroe => (
              <HeroCard
                key={heroe.id}
                {...heroe}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
