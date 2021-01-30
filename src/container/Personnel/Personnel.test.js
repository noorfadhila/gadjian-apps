import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Personnel from './index';
import Search from '../../components/Personnel/Search';

configure({adapter: new Adapter()});

describe('<Personnel />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Personnel props={() => {}}/>);
    });

    it('should render <Personnel /> when receiving input search', () => {
        wrapper.setProps({inputSearch : ""});
        expect(wrapper.find(Search)).toHaveLength(1);
    });
});