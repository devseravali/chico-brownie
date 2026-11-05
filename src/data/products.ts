import { imageUrl } from "./assets";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: string;
  image?: string;
  alt?: string;
}

export const categories = ["Brownies", "Cones", "Combos"];
export const products: Product[] = [
  {
    id: "brownie-cafe",
    name: "Brownie de café",
    description: "Brownie artesanal sabor café.",
    category: "Brownies",
    image: imageUrl("brownie-cafe.jpg"),
    alt: "Embalagem do brownie sabor café",
  },
  {
    id: "brownie-maca-canela",
    name: "Brownie de maçã e canela",
    description: "Brownie artesanal com maçã e canela.",
    category: "Brownies",
    image: imageUrl("brownie-maca-canela.jpg"),
    alt: "Embalagem do brownie sabor maçã e canela",
  },
  {
    id: "brownie-morango",
    name: "Brownie de morango",
    description: "Brownie artesanal sabor morango.",
    category: "Brownies",
    image: imageUrl("brownie-morango.jpg"),
    alt: "Embalagem do brownie sabor morango",
  },
  {
    id: "cone-brigadeiro",
    name: "Cone de brigadeiro",
    description: "Cone recheado de brigadeiro.",
    category: "Cones",
    image: imageUrl("cone-brigadeiro.jpg"),
    alt: "Cones de brigadeiro Chico Brownie",
  },
  {
    id: "cone-pistache",
    name: "Cone de pistache",
    description: "Cone recheado de pistache.",
    category: "Cones",
    image: imageUrl("cone-pistache.jpg"),
    alt: "Cone de pistache Chico Brownie",
  },
  {
    id: "combo-brownies",
    name: "Combo de brownies",
    description: "Uma seleção de brownies Chico Brownie.",
    category: "Combos",
    image: imageUrl("combo.jpg"),
    alt: "Seleção de brownies em diferentes sabores",
  },
];
