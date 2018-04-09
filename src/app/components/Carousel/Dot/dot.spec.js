import React from 'react';
import Dot from './Dot.jsx';

describe('Dot', () => {
  describe('when active', () => {
    it('has an active class', () => {
      const component = shallow(<Dot active={true} select={()=>{}}/>)
      expect(component.find('a').hasClass('carousel__dot--active')).toEqual(true);
    });
  });

  describe('when inactive', () => {
    it('has does not have an active class', () => {
      const component = shallow(<Dot select={() => { }} />)
      expect(component.find('a').hasClass('carousel__dot--active')).toEqual(false);
    });
  });

  it('calls the select function when clicked', () => {
    const onClickFunc = jest.fn();
    const component = shallow(<Dot select={onClickFunc} />)
    component.find('a').simulate('click')
    expect(onClickFunc.mock.calls.length).toBe(1);
    onClickFunc.mockRestore();
  });
});