export const Url = {
  get(p) {
    const params = new URLSearchParams(window.location.search)
    return params.get(p)
  }
}
