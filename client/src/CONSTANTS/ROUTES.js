const ROUTES = {
  espacios: {
    index: '/espacios',
    new: function () {
      return `${this.index}/new`
    },
    details: function (id) {
      return `${this.index}/${id}`
    },
    inventories: function (espacioId) {
      return {
        index: `${this.index}/${espacioId}/inventories`,
        new: `${this.index}/${espacioId}/inventories/new`
      }
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
  },
  inventory: {
    index: '/inventory',
    new: function () {
      return `${this.index}/new`
    },
    espacio: function (espacioId) {
      return {
        new: `${this.index}/${espacioId}/new`
      }
    },
    details: function (id) {
      return `${this.index}/${id}`
    }
  }
}
export default ROUTES
