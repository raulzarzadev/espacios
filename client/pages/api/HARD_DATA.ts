import { testImage } from 'src/assets/images'

export const ESPACIOS = [
  {
    id: '1',
    title: 'Titulo del espacio #1',
    address: 'Dirección cerrada #1415, El Manglito, La Paz, BCS, 23060',
    contracts: [
      {
        title: 'renta 2021',
        images: [{ title: 'image contract', description: '', href: testImage }]
      },
      {
        title: 'Admin 2019',
        images: [{ title: 'image contract', description: '', href: testImage }]
      }
    ],
    services: ['235345', '2342dsf'],
    images: [
      {
        title: 'Titulo de imagen',
        description:
          'Descripcion de imagen por que muestras detalles especificos',
        href: testImage
      },
      {
        title: 'img sin Description',
        description: '',
        href: testImage
      }
    ]
  },
  {
    id: '2',
    title: 'Titulo del espacio #2ddsda',
    address: 'Dirección cerrada #1415, El Manglito, La Paz, BCS, 23060',
    contracts: [
      {
        title: 'renta 2021',
        images: [{ title: 'image contract', description: '', href: testImage }]
      },
      {
        title: 'Admin 2019',
        images: [{ title: 'image contract', description: '', href: testImage }]
      }
    ],
    images: [
      {
        title: 'Titulo de imagen',
        description:
          'Descripcion de imagen por que muestras detalles especificos',
        href: testImage
      },
      {
        title: 'img sin Description',
        description: '',
        href: testImage
      }
    ]
  },
  {
    id: '3',
    title: 'Titulo del espacio #qwe3',
    address: 'Dirección cerrada #1415, El Manglito, La Paz, BCS, 23060',
    contracts: [
      {
        title: 'renta 2021',
        images: [{ title: 'image contract', description: '', href: testImage }]
      },
      {
        title: 'Admin 2019',
        images: [{ title: 'image contract', description: '', href: testImage }]
      }
    ],
    images: [
      {
        title: 'Titulo de imagen',
        description:
          'Descripcion de imagen por que muestras detalles especificos',
        href: testImage
      },
      {
        title: 'img sin Description',
        description: '',
        href: testImage
      }
    ]
  }
]

export const SERVICES = [
  { id: '2342dsf', label: 'Gas 1', records: ['678', '23'] },
  { id: '235345', label: 'Luz 2', records: ['234'] },
  { id: '3', label: 'Agua 3', records: ['12'] }
]

export const SERVICES_RECORDS = [
  {
    label: '',
    title: '',
    coments: '',
    id: '678',
    images: [testImage],
    date: '12/12/12',
    image: testImage,
    quantity: '22.22'
  },
  {
    label: '',
    title: '',
    coments: '',
    id: '23',
    images: [testImage],
    date: '12/11/12',
    image: testImage,
    quantity: '12.22'
  },
  {
    label: '',
    title: '',
    coments: '',
    id: '234',
    images: [testImage],
    date: '12/11/13',
    image: testImage,
    quantity: '16.22'
  },
  {
    label: '',
    title: '',
    coments: '',
    id: '12',
    images: [testImage],
    date: '12/11/13',
    image: testImage,
    quantity: '50.22'
  }
]
