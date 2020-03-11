import MsgSm from '../../src/components/common/msg-sm'

describe("<MsgSm />", ()=>{
    it('Render', ()=>{
        const test_msg = 'This is test message'
        const component = mount(<MsgSm msg={test_msg}/>)

        expect(component.find('.msg-sm').text()).toMatch(test_msg)
    })
})