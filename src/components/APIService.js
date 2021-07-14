export default class APIService {
  static LoginUser(body) {
    return fetch(`/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(error => console.error(error))
  }
}
