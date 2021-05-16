import { createStore, applyMiddleware  } from "redux";
import { Subject } from "rxjs";
import reducer from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import { distinctUntilChanged, map } from 'rxjs/operators';
import objectPath from "object-path";

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware()
  )
);

const state$ = new Subject();

store.subscribe(() => {
  state$.next(store.getState());
});

function createObservableFrom(path: string) {
  return state$.pipe(
    map((val) => objectPath.get(val, path)),
    distinctUntilChanged()
  );
}

export { store as default, state$, createObservableFrom };
