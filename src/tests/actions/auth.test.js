import {login, logout} from '../../actions/auth'


test('should setup login action object', ()=>{
    const result = login('id123')
    expect(result).toEqual({
        type:"LOGIN",
        uid:'id123'
    })
})

test('should setup logout object', ()=>{
    const result = logout()
    expect(result).toEqual({
        type:"LOGOUT"
    })
})