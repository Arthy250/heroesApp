import React from 'react';
import {mount} from 'enzyme';
import { HeroesScreen } from '../../../components/heroes/HeroesScreen';
import { MemoryRouter, Route } from 'react-router-dom';


describe('Pruebas en <HeroesScreen/>', () => {

  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack:jest.fn()
  }

  test('Debe de mostrar el componente Redirect si no hay argumentos en la URL', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe']}>
        <HeroesScreen history={historyMock}/>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('Debe de mostrar el contenido enviado por la URL', () => {
    
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route path="/heroe/:heroeId" component={ HeroesScreen } />
      </MemoryRouter>
    );

    const titulo = wrapper.find('h3').text().trim();
    expect(wrapper).toMatchSnapshot();
    expect(titulo).toEqual('Spider Man');

  });

  test('Debe de regresar a la pantalla anterior con PUSH', () => {
   
    const history = {
      length: 1,
      push: jest.fn(),
      goBack:jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route 
          path="/heroe/:heroeId" 
          component={ () => <HeroesScreen
          history={ history }/> } 
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    
    expect(history.push).toHaveBeenCalledWith('/marvel');
    expect(history.goBack).not.toHaveBeenCalled();

  });

  test('Debe de regresar a la pantalla anterior con GoBack', () => {

    const history = {
      length: 10,
      push: jest.fn(),
      goBack:jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route 
          path="/heroe/:heroeId" 
          component={ () => <HeroesScreen
          history={ history }/> } 
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    
    expect(history.push).toHaveBeenCalledTimes(0);
    expect(history.goBack).toHaveBeenCalled();

  });

  test('Debe de llamar el redirect si el heroe no existe', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spiderasdf21']}>
        <Route 
          path="/heroe/:heroeId" 
          component={ () => <HeroesScreen
          history={ historyMock }/> } 
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');

  });

});