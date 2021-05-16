import { createStore, applyMiddleware  } from "redux";
import { Subject } from "rxjs";
import reducer from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware()
  )
);

const store$ = new Subject();

store.subscribe(() => {
  store$.next(store.getState());
});

export { store as default, store$ };
