import React from 'react'
import { MemoryRouter } from 'react-router';
import { configure, mount, shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

global.React = React
global.MemoryRouter = MemoryRouter
global.shallow = shallow
global.render = render
global.mount = mount