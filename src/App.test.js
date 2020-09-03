import React from 'react';
// import { render } from '@testing-library/react';
import { shallow, mount, render } from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

// Memory Router Fixes Unit Test Issues

describe('App', () => {
  // it('renders learn react link', () => {
  //   const { getByText } = render(<MemoryRouter><App /></MemoryRouter>);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  // });

  it('renders initial state', () => {
    const wrapper = shallow(<MemoryRouter><App /></MemoryRouter>)
    expect(wrapper.state('players').toEqual([]))
  })

})





