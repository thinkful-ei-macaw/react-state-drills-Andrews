import React from 'react'
import Accordion from './Accordion'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

it('renders empty when sections prop not supplied', () => {
    expect(
        renderer.create(<Accordion />).toJSON()
        ).toMatchSnapshot()
  })

it('renders no sections as active by default', () => {
expect(
    renderer.create(<Accordion sections={sections}/>).toJSON()
    ).toMatchSnapshot()
})

it('opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections}/>)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

it('only opens the last section when multiple sections have been clicked', () => {
    const wrapper = shallow(<Accordion sections={sections}/>)
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
})