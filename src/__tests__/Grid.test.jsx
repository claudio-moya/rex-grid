import { shallow } from 'enzyme';
import React from 'react';
import Grid from '../Grid';

describe('<Grid />', () => {
  const params = {
    text: 'Hello ReX React Component Starter Kit!!',
  };
  const makeSubject = (props, children) =>
    shallow(<Grid {...props}>{children}</Grid>);

  beforeEach(() => {
    jest.resetModules();
  });

  it('should match snapshot', () => {
    const component = makeSubject(params);
    expect(component.html()).toMatchSnapshot();
  });

  it('should render default-props', () => {
    const component = makeSubject();

    // Text
    expect(component.text()).toBe('Welcome to React');
    // className
    expect(component.hasClass('rex-grid')).toBe(true);
    // click, no side-effect
    const clickedComponent = component.simulate('click');
    expect(clickedComponent).toBe(component);
  });

  it('should render passed props', () => {
    const component = makeSubject({
      text: 'Hello Jest Test!!',
      className: 'my-custom-class',
    });

    // Text
    expect(component.text()).toBe('Hello Jest Test!!');
    // className
    expect(component.hasClass('my-custom-class')).toBe(true);
  });

  it('simulate click event', () => {
    const clickHandler = jest.fn();
    const component = makeSubject({
      onClick: clickHandler,
    });

    component.find('div').simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });

  it('should render a child', () => {
    const component = makeSubject(params, <div>child</div>);
    expect(component.contains(<div>child</div>)).toBe(true);

    // Same as above:
    const wrapper = shallow(
      <Grid>
        <p className="child">I am a child</p>
      </Grid>
    );
    expect(
      wrapper.containsAllMatchingElements([
        <p className="child">I am a child</p>,
      ])
    ).toBe(true);
  });

  it('should render children', () => {
    const wrapper = shallow(
      <Grid>
        <p className="child">I am a child</p>
        <span className="child">I am a child, too</span>
      </Grid>
    );
    expect(
      wrapper.containsAllMatchingElements([
        <p className="child">I am a child</p>,
        <span className="child">I am a child, too</span>,
      ])
    ).toBe(true);
  });
});
