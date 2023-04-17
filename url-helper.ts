const params = new URLSearchParams(window.location.search)
export const Url = {
  get(p) {
    return params.get(p)
  }
}
