import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    
    test('debe de realizar el login', () => {
        
        const initState = {};
        const action = {
            type:types.login,
            payload: {
                uid: 'abc',
                displayName: 'Anderson'
            }
        };
        const state = authReducer( initState, action );

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Anderson'
        });
    });

    test('debe de realizar el logout', () => {
        
        const initState = {
            uid: 'hola',
            name: 'Juan'
        };
        const action = {
            type:types.logout
        };
        const state = authReducer( initState, action );

        expect( state ).toEqual({});
    });

    test('no debe de hacer cambio en el state', () => {
        
        const initState = {
            uid: 'hola',
            name: 'Juan'
        };
        const action = {
            type: 'invalid'
        };
        const state = authReducer( initState, action );

        expect( state ).toEqual(initState);
    });
    
});
