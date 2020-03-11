import ContainerHeading from '../../src/components/common/container-heading'

describe("<ContainerHeading />", ()=>{
    it('Render', ()=>{
        const test_heading = 'This is test heading'
        const component = mount(<ContainerHeading heading={test_heading}/>)

        expect(component.find('.heading').text()).toMatch(test_heading)
    })
})