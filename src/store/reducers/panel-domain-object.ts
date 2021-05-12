import * as watch from "redux-watch";
import store from "../store";

export class PanelDomainObject {
  private store = store;

  constructor(id: string) {
    let w = watch(store.getState, `PAGE.${id}`);
    store.subscribe(
      w((newVal, oldVal, objectPath) => {
        console.log("%s changed from %s to %s", objectPath, oldVal, newVal);
        // admin.name changed from JP to JOE
      })
    );
  }
}
