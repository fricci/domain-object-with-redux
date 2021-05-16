import { Component } from "@angular/core";
import { CodeParameterStoreLocalCache } from "../store/code-cache.service";
import { PanelDomainObject } from "../store/reducers/panel-domain-object";
import store from "../store/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  domainObjects = [];
  idToCreate= '';

  constructor(private codeParamStoreLocalCache: CodeParameterStoreLocalCache) {
  }

  onNameChanged(domainObject, event) {
    domainObject.name = event.target.value;
  }

  onCreateNewDomainObject() {
    if(this.idToCreate) {
      const domainObject = this.codeParamStoreLocalCache.build(PanelDomainObject, this.idToCreate);
      this.domainObjects.push(domainObject);
      this.idToCreate = '';
    }
  }
}
