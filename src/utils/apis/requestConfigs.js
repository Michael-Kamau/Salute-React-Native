import * as endpoints from "./endpoints";
import { displayData } from "./endpoints";

export const loginConfig = (payload) => {
  return {
    method: 'POST',
    endpoint: endpoints.login(),
    payload: payload
  }
}


export const displayDataConfig = (token) => {
  return {
    method: 'GET',
    endpoint: endpoints.displayData(),
    token: token,

  }
}
