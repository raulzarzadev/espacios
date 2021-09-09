import { testImage } from 'src/assets/images'

export const ESPACIOS = [
  {
    id: '1',
    title: 'Titulo del espacio #1',
    address: 'Dirección cerrada #1415, El Manglito, La Paz, BCS, 23060',
    contracts: [
      { title: 'renta 2021' },
      { title: 'Admin 2019' },
      { title: 'renta 2021' },
      { title: 'Admin 2019' }
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
    id: '2',
    title: 'Titulo del espacio #2ddsda',
    address: 'Dirección cerrada #1415, El Manglito, La Paz, BCS, 23060',
    contracts: [
      { title: 'renta 2021', image: testImage },
      { title: 'Admin 2019', image: testImage }
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
    contracts: [{ title: 'renta 2021' }, { title: 'Admin 2019' }],
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
