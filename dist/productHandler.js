// Aquí tienes un ejemplo más funcional y escalable en el contexto de un comercio electrónico. Vamos a crear una estructura básica para manejar productos, variantes de productos y descuentos utilizando interfaces y genéricos en TypeScript.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Aquí, hemos definido interfaces para Product, ProductVariant y Discount. Luego, creamos un tipo genérico WithDiscount que toma un tipo y añade la propiedad discount al tipo dado.
// Crear funciones para aplicar descuentos a productos y variantes de productos:
function applyDiscount(item, discount) {
    var discountedPrice = item.price * (1 - discount.percentage / 100);
    return __assign(__assign({}, item), { price: discountedPrice, discount: discount });
}
// Esta función genérica toma un item de tipo T y un objeto discount y devuelve un objeto con el descuento aplicado. Esta función funcionará tanto para productos como para variantes de productos.
// Crear algunos productos, variantes de productos y descuentos:
var product = {
    id: 1,
    name: 'Camiseta',
    price: 20,
    variants: [
        { id: 11, name: 'Talla S', price: 20 },
        { id: 12, name: 'Talla M', price: 20 },
        { id: 13, name: 'Talla L', price: 20 },
    ],
};
var discount = { id: 101, name: 'Descuento de lanzamiento', percentage: 10 };
// Aplicar descuentos a productos y variantes de productos:
var discountedProduct = applyDiscount(product, discount);
console.log(discountedProduct);
var discountedVariant = applyDiscount(product.variants[0], discount);
console.log(discountedVariant);
// En este ejemplo, aplicamos el descuento tanto al producto principal como a una variante de producto utilizando la función applyDiscount.
// Este ejemplo ilustra cómo se pueden utilizar interfaces y genéricos en TypeScript para crear una estructura de código flexible y escalable en el contexto de un comercio electrónico. Puedes ampliar este ejemplo para manejar otras características, como categorías de productos, inventario y pedidos, utilizando un enfoque similar con interfaces y genéricos.
