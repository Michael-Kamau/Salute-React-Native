import * as endpoints from "./endpoints";

export const loginConfig = (lat, lon) => {
  return {
    method: 'POST',
    endpoint: endpoints.login(),
  }
}
