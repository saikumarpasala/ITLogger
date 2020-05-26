import { combineReducer } from '../../store/reducers';
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducer({
    log: logReducer,
    tech: techReducer,
});
