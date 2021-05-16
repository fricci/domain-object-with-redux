import { Component } from "@angular/core";
import { CodeParameterStoreLocalCache } from "../store/code-cache.service";
import { PanelDomainObject } from "../store/reducers/panel-domain-object";
import store from "../store/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  domainObject = null;

  constructor(private codeParamStoreLocalCache: CodeParameterStoreLocalCache) {
    this.domainObject = codeParamStoreLocalCache.build(PanelDomainObject, "1");
  }

  onNameChanged(event) {
    this.domainObject.name = event.target.value;
  }
}
