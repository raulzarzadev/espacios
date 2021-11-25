const ROUTES = {
  espacios: {
    index: '/espacios',
    new: function () {
      return `${this.index}/new`
    },
    details: function (id) {
      return `${this.index}/${id}`
    }
  }
}
export default ROUTES
