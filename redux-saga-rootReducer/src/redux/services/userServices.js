import { apiUrl } from '../constants';


export function getApiData() {
    return fetch(apiUrl).then((response) =>
      response.json().catch((error) => error)
    )
  }