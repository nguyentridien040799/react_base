import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { logger } from '../middleware';
import rootReducer from '../reducers';

function configure(initialState = {}) {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        applyMiddleware(logger),
        // other store enhancers if any
    );

    const store = createStore(rootReducer, enhancer);

    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default configure();
