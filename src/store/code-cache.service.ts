import { Injectable, Type } from "@angular/core";
import store from "./store";

@Injectable({
  providedIn: "root"
})
export class CodeParameterStoreLocalCache {
  build(objectType: Type<any>, id: string) {
    store.dispatch({
      type: "STORE_JSON",
      id: id,
      paramType: "PANEL",
      jsonObject: {
        id
      }
    });
    return new objectType(id);
  }
}
