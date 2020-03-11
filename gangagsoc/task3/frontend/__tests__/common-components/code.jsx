import Code from '../../src/components/common/code'

describe("<Code />", ()=>{
    it('Render', ()=>{
        const test_heading = 'This is test heading'
        const test_code = 'This is test code'
        const component = mount(<Code heading={test_heading} code={test_code}/>)

        expect(component.find('.pre-title').text()).toMatch(test_heading)
        expect(component.find('.language-json').text()).toMatch(test_code)
    })
})