import axios from "axios";
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
  },
];

async function getProdutos() {
  try {
    const res = await axios.get("api/produtos");
    return res.data
  } catch (error) {
    console.log(error);
  }
};

const produtos = await getProdutos();

export const produtosAPI = {
  all: produtos,
  promocao: produtos.filter(item => item.promocao === true),
  menuDoDia: produtos.filter(item => item.menu_do_dia === true),
  maisPedidos: produtos.filter(item => item.mais_pedidos === true),
  novidade: produtos.filter(item => item.novidade === true),
}