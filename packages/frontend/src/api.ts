class API {
  private BASE_URL = `http://${window.location.host}/api`

  async getOverlayById(id: string) {
    const data = await fetch(this.BASE_URL + `/overlays/${id}`).then((response) => response.json())
    return data
  }
}
export default new API()
