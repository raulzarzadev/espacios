export const ESPACIOS = [
  {
    id: 'a1',
    title: 'Departamento 6',
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
    images: [
      'https://images.unsplash.com/photo-1626583223726-b259a1ba244c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    ],
    alerts: {
      inventoryStatus: '34',
      servicesStatus: '88',
      accountingStatus: '4',
      maintenanceStatus: '99',
      cleaningStatus: '88'
    }
  },
  {
    id: 'a1b',
    title: 'Departamente 8',
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
  },
  {
    id: 'a12',
    title: 'Departamento 4',
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
    category: ['forniture', 'kitchen'],
    description: 'descripcion de estufa',
    icon: null
  },
  {
    id: '2',
    value: '2',
    label: 'cuchara',
    category: ['consumables', 'kitchen'],
    description: 'descripcion de cuchara',
    icon: null
  },

  {
    id: '5',
    value: '5',
    label: 'toalla de manos',
    category: ['linens', 'bathroom'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '19',
    value: '19',
    label: 'Espejo',
    category: ['forniture', 'bathroom'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '10',
    value: '10',
    label: 'Tapete',
    category: ['linens', 'bathroom', ],
    description: 'descripcion del tapete de baño',
    icon: null
  }
]

export const SUB_ESPACIOS = [
  {
    id: '1',
    value: '1',
    label: 'Cocina Ch',
    icon: 'home',
    items: ['1', '2', '3'],
    consumables: ['14', '12'],
    description: 'Descripción de cuarto ',
    category: ['kitchen'],
    images: []
  },
  /*  {
    id: '2',
    value: '2',
    label: 'Cuarto Ind',
    icon: 'room',
    items: ['4', '6', '7', '9'],
    description: 'Descripción de cuarto ',
    category: ['room']
  }, */
  {
    id: '3',
    value: '3',
    label: 'Baño Completo',
    icon: 'kitchen',
    items: ['14', '12', '5', '19', '10'],
    description: 'Descripción label',
    category: ['bathroom'],
    images: []
  },
  {
    id: '4',
    value: '4',
    label: 'Cama mat',
    icon: 'bed',
    items: ['14', '12', '5', '19', '10'],
    description: 'Descripción cama',
    category: ['room'],
    images: [
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ]
  }
]
