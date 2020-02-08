import InitialState from '../models/redux.state.ini';

export default function (state = InitialState, action) {
    if (action.type === 'ACTIVE_PAGE') {
        return {
            activeLink: action.payload
        }
    }

    return state;
}