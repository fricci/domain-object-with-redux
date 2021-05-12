import { Injectable, Type } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CodeParameterStoreLocalCache {
  build(objectType: Type<any>, id: string) {
    return new objectType(id);
  }
}
