const ROUTES = {
  espacios: {
    index: '/espacios',
    new: function () {
      return `${this.index}/new`
    },
    details: function (id) {
      return `${this.index}/${id}`
    }
  },
  areas: {
    index: '/areas',
    new: function () {
      return `${this.index}/new`
    },
    details: function (id) {
      return `${this.index}/${id}`
    }
  },
  items: {
    index: '/items',
    new: function () {
      return `${this.index}/new`
    },
    details: function (id) {
      return `${this.index}/${id}`
    }
  }
}
export default ROUTES
