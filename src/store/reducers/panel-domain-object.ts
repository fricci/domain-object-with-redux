import * as watch from "redux-watch";
import objectPath from "object-path";
import { Observable, Subject } from "rxjs";
import { distinctUntilChanged, map, tap } from "rxjs/operators";
import store, { store$ } from "../store";

export class PanelDomainObject {
  private store = store;

  constructor(private id: string) {
    let w = watch(store.getState, `PANEL.${id}`);
    store.subscribe(
      w((newVal, oldVal, objectPath) => {
        console.log("Json changed");
      })
    );
    let w2 = watch(store.getState, `PANEL.${this.id}.name`);
  }

  get name(): Observable<string> {
    return store$.pipe(
      tap((val) => console.log(">", val)),
      map((val) => objectPath(val, `PANEL.${this.id}.name`)),
      tap((val) => console.log(">>", val))
    );
  }

  set name(newName) {
    store.dispatch({
      id: this.id,
      type: "MODIFY_NAME",
      name: newName
    });
  }
}
