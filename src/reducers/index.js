import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './userReducer';
import PageReducer from './pageReducer';
import ClassReducer from './classReducer';
import TeamReducer from './teamReducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: UserReducer,
    class: ClassReducer,
    team: TeamReducer,
    page: PageReducer
});

export default rootReducer;