import uuid from 'react-uuid'

/* eslint-disable no-unused-vars */
export enum tags {
  TRADICIONAL = 'TRADICIONAL',
  COM_LEITE = 'COM LEITE',
  ESPECIAL = 'ESPECIAL',
  GELADO = 'GELADO',
  ALCOOLICO = 'ALCOÓLICO',
}

export const coffeesList = [
  {
    id: uuid(),
    image: 'src/assets/coffees/expresso.png',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    tags: [tags.TRADICIONAL],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/americano.png',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    tags: [tags.TRADICIONAL],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/expresso-cremoso.png',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    tags: [tags.TRADICIONAL],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/gelado.png',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    tags: [tags.TRADICIONAL, tags.GELADO],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/com-leite.png',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    tags: [tags.TRADICIONAL, tags.COM_LEITE],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/latte.png',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    tags: [tags.TRADICIONAL, tags.COM_LEITE],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/capuccino.png',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    tags: [tags.TRADICIONAL, tags.COM_LEITE],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/macchiato.png',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    tags: [tags.TRADICIONAL, tags.COM_LEITE],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/mochaccino.png',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    tags: [tags.TRADICIONAL, tags.COM_LEITE],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/chocolate-quente.png',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    tags: [tags.ESPECIAL, tags.COM_LEITE],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/cubano.png',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    tags: [tags.ESPECIAL, tags.ALCOOLICO, tags.GELADO],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/havaiano.png',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    tags: [tags.ESPECIAL],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/arabe.png',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    tags: [tags.ESPECIAL],
  },
  {
    id: uuid(),
    image: 'src/assets/coffees/irlandes.png',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    tags: [tags.ESPECIAL, tags.ALCOOLICO],
  },
]
