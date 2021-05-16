const watch = require("redux-watch");
import objectPath from "object-path";
import { Observable, Subject } from "rxjs";
import { distinctUntilChanged, map, tap } from "rxjs/operators";
import store, { store$ } from "../store";

export class PanelDomainObject {

  public name$ = store$.pipe(
    map((val) => objectPath.get(val, `PANEL.${this.id}.name`)),
    distinctUntilChanged()
  );

  constructor(private id: string) {
    let w = watch(store.getState, `PANEL.${id}`);
    store.subscribe(
      w((newVal, oldVal, objectPath) => {
        console.log("Json changed");
      })
    );
  }

  get name(): Observable<string> {
    return this.name$;
  }

  set name(newName) {
    store.dispatch({
      id: this.id,
      type: "MODIFY_NAME",
      name: newName
    });
  }
}
