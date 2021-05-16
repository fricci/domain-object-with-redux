import produce from "immer";
import { combineReducers } from "redux";

function pageDomainObjectReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_PANEL":
      return state;
    default:
      return state;
  }
}

function panelDomainObjectReducer(state = {}, action) {
  switch (action.type) {
    case "MODIFY_NAME":
      return produce(state, (draftState) => {
        draftState[action.id].name = action.name;
      });
    default:
      return state;
  }
}

const combinedReducer = combineReducers({
  PAGE: pageDomainObjectReducer,
  PANEL: panelDomainObjectReducer
});

function defaultReducer(state = {}, action) {
  switch (action.type) {
    case "STORE_JSON": {
      return produce(state, (draftState) => {
        draftState[action.paramType][action.id] = action.jsonObject;
      });
    }
    default:
      return state;
  }
}

function rootReducer(state, action) {
  const intermediateState = combinedReducer(state, action);
  const finalState = defaultReducer(intermediateState, action);
  return finalState;
}

export default rootReducer;
