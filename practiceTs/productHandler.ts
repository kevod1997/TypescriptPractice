// Aquí tienes un ejemplo más funcional y escalable en el contexto de un comercio electrónico. Vamos a crear una estructura básica para manejar productos, variantes de productos y descuentos utilizando interfaces y genéricos en TypeScript.

// Definir interfaces y tipos:

interface Product {
  id: number;
  name: string;
  price: number;
  variants: ProductVariant[];
}

interface ProductVariant {
  id: number;
  name: string;
  price: number;
}

interface PricedItem {
    price: number;
  }

interface Discount {
  id: number;
  name: string;
  percentage: number;
}

type WithDiscount<T> = T & { discount: Discount };
// Aquí, hemos definido interfaces para Product, ProductVariant y Discount. Luego, creamos un tipo genérico WithDiscount que toma un tipo y añade la propiedad discount al tipo dado.

// Crear funciones para aplicar descuentos a productos y variantes de productos:

function applyDiscount<T extends PricedItem>(item: T, discount: Discount): WithDiscount<T> {
    const discountedPrice = item.price * (1 - discount.percentage / 100);
    return { ...item, price: discountedPrice, discount };
  }

// Esta función genérica toma un item de tipo T y un objeto discount y devuelve un objeto con el descuento aplicado. Esta función funcionará tanto para productos como para variantes de productos.

// Crear algunos productos, variantes de productos y descuentos:

const product: Product = {
  id: 1,
  name: 'Camiseta',
  price: 20,
  variants: [
    { id: 11, name: 'Talla S', price: 20 },
    { id: 12, name: 'Talla M', price: 20 },
    { id: 13, name: 'Talla L', price: 20 },
  ],
};

const discount: Discount = { id: 101, name: 'Descuento de lanzamiento', percentage: 10 };

// Aplicar descuentos a productos y variantes de productos:

const discountedProduct = applyDiscount(product, discount);
console.log(discountedProduct);

const discountedVariant = applyDiscount(product.variants[0], discount);
console.log(discountedVariant);

// En este ejemplo, aplicamos el descuento tanto al producto principal como a una variante de producto utilizando la función applyDiscount.

// Este ejemplo ilustra cómo se pueden utilizar interfaces y genéricos en TypeScript para crear una estructura de código flexible y escalable en el contexto de un comercio electrónico. Puedes ampliar este ejemplo para manejar otras características, como categorías de productos, inventario y pedidos, utilizando un enfoque similar con interfaces y genéricos.