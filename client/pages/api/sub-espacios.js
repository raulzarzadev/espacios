export default function subEspacios(req, res) {
  res.status(200).json({
    subEspacios: [
      {
        id: '1',
        value: '1',
        label: 'Cocina Ch',
        icon: 'home',
        items: ['1', '2', '3'],
        description: 'Descripción de cuarto ',
        category: ['kitchen']
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
        category: ['room']
      }
    ]
  })
}
