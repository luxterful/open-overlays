class API {
  private BASE_URL = 'http://localhost:3000'

  async getOverlayById(id: string) {
    const data = await fetch(this.BASE_URL + `/overlays/${id}`).then((response) => response.json())
    return data
  }
}
export default new API()
