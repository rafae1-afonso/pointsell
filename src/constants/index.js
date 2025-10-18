// import axios from "axios";
import { ChefHat, CircleDollarSign, CupSoda, FlameIcon, IceCream2, Salad, Sparkles, Vegan, WheatOff } from "lucide-react";

export const CaroucelButtons = [
  {
    content: 'Menu do Dia',
    icon: ChefHat
  },
  {
    content: 'Mais Pedidos',
    icon: FlameIcon
  },
  {
    content: 'Novidades',
    icon: Sparkles
  },
  {
    content: 'Promoções',
    icon: CircleDollarSign
  },
  {
    content: 'Saladas',
    icon: Salad
  },
  {
    content: 'Bebidas',
    icon: CupSoda
  },
  {
    content: 'Sobremesas',
    icon: IceCream2
  },
  {
    content: 'Vegano',
    icon: Vegan
  },
  {
    content: 'Sem Glúten',
    icon: WheatOff
  }
];

export const Categorias = {
  menuDoDia: {
    content: 'Menu do Dia',
    icon: ChefHat
  },
  maisPedidos: {
    content: 'Mais Pedidos',
    icon: FlameIcon
  },
  novidades: {
    content: 'Novidades',
    icon: Sparkles
  },
  promocoes: {
    content: 'Promoções',
    icon: CircleDollarSign
  },
}

// async function getProdutos() {
//   try {
//     const res = await axios.get("api/produtos");
//     return res.data
//   } catch (error) {
//     console.log(error);
//   }
// };

// const produtos = await getProdutos();

const produtos = [
  {
    nome: 'Bruschetta de Tomate',
    descricao: 'Fatias de pão italiano com tomate, manjericão e azeite.',
    preco: 18,
    url_foto: 'https://exemplo.com/fotos/bruschetta.jpg',
    categoria_id: 1,
    promocao: false,
    menu_do_dia: true,
    mais_pedidos: true,
    novidade: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Risoto de Cogumelos',
    descricao: 'Arroz arbório com mix de cogumelos frescos e parmesão.',
    preco: 45,
    url_foto: 'https://exemplo.com/fotos/risoto.jpg',
    categoria_id: 2,
    promocao: true,
    menu_do_dia: true,
    mais_pedidos: false,
    novidade: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Spaghetti à Bolonhesa',
    descricao: 'Massa italiana ao molho de carne com tomates frescos.',
    preco: 42,
    url_foto: 'https://exemplo.com/fotos/spaghetti.jpg',
    categoria_id: 2,
    promocao: false,
    menu_do_dia: false,
    mais_pedidos: true,
    novidade: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Cheesecake de Frutas Vermelhas',
    descricao: 'Clássico cheesecake com calda artesanal de frutas vermelhas.',
    preco: 22,
    url_foto: 'https://exemplo.com/fotos/cheesecake.jpg',
    categoria_id: 3,
    promocao: false,
    menu_do_dia: false,
    mais_pedidos: false,
    novidade: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Brownie com Sorvete',
    descricao: 'Brownie de chocolate servido com sorvete de baunilha.',
    preco: 20,
    url_foto: 'https://exemplo.com/fotos/brownie.jpg',
    categoria_id: 3,
    promocao: true,
    menu_do_dia: false,
    mais_pedidos: true,
    novidade: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Suco Natural de Laranja',
    descricao: 'Suco fresco de laranja espremida na hora.',
    preco: 10,
    url_foto: 'https://exemplo.com/fotos/suco-laranja.jpg',
    categoria_id: 4,
    promocao: false,
    menu_do_dia: true,
    mais_pedidos: false,
    novidade: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Refrigerante Lata',
    descricao: 'Coca-Cola, Guaraná ou Fanta - 350ml.',
    preco: 8,
    url_foto: 'https://exemplo.com/fotos/refrigerante.jpg',
    categoria_id: 4,
    promocao: false,
    menu_do_dia: false,
    mais_pedidos: true,
    novidade: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    nome: 'Salada Caesar',
    descricao: 'Clássica salada com frango grelhado, croutons e molho Caesar.',
    preco: 30,
    url_foto: 'https://exemplo.com/fotos/salada-caesar.jpg',
    categoria_id: 5,
    promocao: true,
    menu_do_dia: true,
    mais_pedidos: false,
    novidade: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const produtosAPI = {
  all: produtos,
  promocao: produtos.filter(item => item.promocao === true),
  menuDoDia: produtos.filter(item => item.menu_do_dia === true),
  maisPedidos: produtos.filter(item => item.mais_pedidos === true),
  novidade: produtos.filter(item => item.novidade === true),
}