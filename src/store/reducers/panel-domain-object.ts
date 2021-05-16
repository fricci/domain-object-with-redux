const watch = require("redux-watch");
import { Observable} from "rxjs";
import store, { createObservableFrom } from "../store";

export class PanelDomainObject {

  public name$ = createObservableFrom(`PANEL.${this.id}.name`);

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
