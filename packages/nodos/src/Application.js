export default class Application {
  constructor(app) {
    this.app = app;
  }

  listen(...args) {
    return this.app.listen(...args);
  }

  get = url => this.request('GET', url)

  post(url) {
    return this.request('POST', url);
  }

  put(url) {
    return this.request('PUT', url);
  }

  patch(url) {
    return this.request('PATCH', url);
  }

  delete(url) {
    return this.request('DELETE', url);
  }

  request(method, url) {
    return this.app.inject({
      method,
      url,
    });
  }
}
