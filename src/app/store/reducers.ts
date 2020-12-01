import { HeaderComponent } from '../navigation/header/header.component';
import { State } from './state';
import { LOGOUT_USER } from './actions';

// this will be updated from database after login
const initialState: State = {
    userLoggedIn: false,
    employeeUser: '',
    supervisorUser: '',
    administratorUser: ''
};

function logout(state): State {
    return Object.assign({}, state, {
        userLoggedIn: false,
        employeeUser: '',
        supervisorUser: '',
        administratorUser: ''
    });
}

export function reducer(state= initialState, action) {
    switch (action.type) {
        case LOGOUT_USER:
            return logout(state);
        default:
            return state;
    }

}
