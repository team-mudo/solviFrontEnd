import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './userReducer';
import PageReducer from './pageReducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: UserReducer,
    page: PageReducer
});

export default rootReducer;