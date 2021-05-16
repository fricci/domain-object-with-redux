import * as watch from "redux-watch";
import { Observable, Subject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
import store from "../store";

export class PanelDomainObject {
  private store = store;

  private store$ = new Subject();
  private name$ = new Subject<string>();

  constructor(private id: string) {
    let w = watch(store.getState, `PANEL.${id}`);
    store.subscribe(
      w((newVal, oldVal, objectPath) => {
        this.store$.next(newVal);
      })
    );
    let w2 = watch(store.getState, `PANEL.${this.id}.name`);
    this.store$.subscribe(
      w2((newVal, oldVal, objectPath) => {
        console.log("Name ", newVal, " ", oldVal);
        this.name$.next(newVal);
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
