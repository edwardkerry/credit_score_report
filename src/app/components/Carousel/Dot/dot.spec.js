import React from 'react';
import Dot from './Dot.jsx';

describe('Dot', () => {
  const onClickFunc = jest.fn();

  afterEach(() => {
    onClickFunc.mockRestore();
  });

  describe('when active', () => {
    const component = shallow(<Dot active={true} select={onClickFunc} />)
    it('has an active class', () => {
      expect(component.find('a').hasClass('carousel__dot--active')).toEqual(true);
    });

    it('does not call the select function when clicked', () => {
      component.find('a').simulate('click')
      expect(onClickFunc.mock.calls.length).toBe(0);
      onClickFunc.mockRestore();
    });
 
  });

  describe('when inactive', () => {
    const component = shallow(<Dot select={onClickFunc} />)
    it('has does not have an active class', () => {
      expect(component.find('a').hasClass('carousel__dot--active')).toEqual(false);
    });
 
    it('calls the select function when clicked', () => {
      component.find('a').simulate('click')
      expect(onClickFunc.mock.calls.length).toBe(1);
    });
  });

});