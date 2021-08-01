export const ESPACIOS = [
  {
    id: 'a1',
    title: 'Rangel A',
    subTitle: 'LPZ Manglito',
    description:
      'Antes un hostal, hoy un punto de encuentro para viajeros y amantes de la aventura',
    maxOccupants: 12,
    subEspacios: [],
    address: '',
    trashDaysColect: ['2', '4'],
    location: '',
    contracts: [],
    services: {
      contracts: [],
      paymentsHistory: []
    },
    images: ['https://placehold.it/350x150'],
    alerts: {
      inventoryStatus: '34',
      servicesStatus: '88',
      accountingStatus: '4',
      maintenanceStatus: '99',
      cleaningStatus: '88'
    }
  }
]

export const CONSUMABLES = [
  {
    id: '3',
    value: '3',
    label: 'jabon de trastes',
    category: ['consumible', 'kitchen'],
    description: 'descripcion del jabon de trastes',
    icon: null
  },
  {
    id: '14',
    value: '14',
    label: 'shapoo de cuerpo',
    category: ['consumible', 'restroom'],
    description: 'descripcion del shampo',
    icon: null
  },
  {
    id: '12',
    value: '12',
    label: 'papel sanitario',
    category: ['consumible', 'restroom'],
    description: 'descripcion del papel',
    icon: null
  }
]

export const ITEMS = [
  {
    id: '1',
    value: '1',
    label: 'estufa',
    category: ['mobil', 'kitchen'],
    description: 'descripcion de estufa',
    icon: null
  },
  {
    id: '2',
    value: '2',
    label: 'cuchara',
    category: ['consumible', 'kitchen'],
    description: 'descripcion de cuchara',
    icon: null
  },

  {
    id: '5',
    value: '5',
    label: 'toalla de manos',
    category: ['linens', 'restroom'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '19',
    value: '19',
    label: 'Espejo',
    category: ['mobil', 'restroom'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '10',
    value: '10',
    label: 'Tapete',
    category: ['linens', 'restroom', 'floor'],
    description: 'descripcion del toalla de manos',
    icon: null
  }
]
