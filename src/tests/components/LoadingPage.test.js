import React from 'react'
import LoadingPage from '../../components/LoadingPage'
import {shallow} from 'enzyme'

test('should render LoginPage correctly', ()=>{
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})
