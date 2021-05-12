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
  title = "CodeSandbox";

  constructor(private codeParamStoreLocalCache: CodeParameterStoreLocalCache) {
    const obj = codeParamStoreLocalCache.build(PanelDomainObject, "1");
  }
}
