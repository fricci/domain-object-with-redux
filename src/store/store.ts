import { createStore } from "redux";
import { Subject } from "rxjs";
import reducer from "./reducers/index";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store$ = new Subject();

store.subscribe(() => {
  store$.next(store.getState());
});

export { store as default, store$ };
