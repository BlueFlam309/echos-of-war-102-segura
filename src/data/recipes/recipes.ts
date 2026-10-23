import { pasta_alfredo, tacos_de_pollo } from "../img/img-data";

export interface Recipe {
    id: number;
    image: string;
    name: string;
    foodType: string;
    description: string;
    preparationTime: string;
    difficulty: 'facil' | 'intermedia' | 'dificil';
    rating: number;
    user: string;
    ingredients: {
        name: string;
        quantity: string;
    }[];
    steps: string[];
}

export const recipes: Recipe[] = [
    {
        id: 1,
        image: tacos_de_pollo.url,
        name: 'Tacos de pollo',
        foodType: 'Comida',
        description: 'Deliciosos tacos de pollo sazonado con verduras frescas y salsa al gusto.',
        preparationTime: '25 mins',
        difficulty: 'facil',
        rating: 5,
        user: 'Edgar Segura',
        ingredients: [
            { name: 'Pechuga de pollo', quantity: '500 g' },
            { name: 'Tortillas de maíz', quantity: '8 piezas' },
            { name: 'Cebolla', quantity: '1/2 pieza' },
            { name: 'Tomate', quantity: '2 piezas' },
            { name: 'Cilantro fresco', quantity: '1 manojo pequeño' },
            { name: 'Ajo', quantity: '2 dientes' },
            { name: 'Aceite vegetal', quantity: '2 cucharadas' },
            { name: 'Sal', quantity: 'Al gusto' },
            { name: 'Pimienta', quantity: 'Al gusto' },
            { name: 'Salsa', quantity: 'Al gusto' }
        ],
        steps: [
            'Corta el pollo en tiras pequeñas y sazónalo con sal, pimienta y ajo.',
            'Calienta una sartén con un poco de aceite y cocina el pollo hasta que esté bien cocido.',
            'Pica la cebolla, el cilantro y los tomates.',
            'Calienta las tortillas en una sartén.',
            'Sirve el pollo en las tortillas y agrega las verduras y la salsa al gusto.'
        ]
    },
    {
        id: 2,
        image: pasta_alfredo.url,
        name: 'Pasta Alfredo',
        foodType: 'Cena',
        description: 'Deliciosa pasta cremosa con salsa de queso parmesano, mantequilla y crema.',
        preparationTime: '35 mins',
        difficulty: 'intermedia',
        rating: 3.5,
        user: 'Edgar Segura',
        ingredients: [
            { name: 'Pasta fettuccine', quantity: '250 g' },
            { name: 'Crema para cocinar', quantity: '200 ml' },
            { name: 'Queso parmesano rallado', quantity: '100 g' },
            { name: 'Mantequilla', quantity: '50 g' },
            { name: 'Ajo', quantity: '2 dientes' },
            { name: 'Sal', quantity: 'Al gusto' },
            { name: 'Pimienta negra', quantity: 'Al gusto' },
            { name: 'Perejil fresco', quantity: 'Al gusto, opcional' }
        ],
        steps: [
            'Hierve agua con sal y cocina la pasta siguiendo las instrucciones del paquete.',
            'Derrite la mantequilla en una sartén a fuego medio.',
            'Agrega la crema y mezcla suavemente durante unos minutos.',
            'Incorpora el queso parmesano rallado y revuelve hasta obtener una salsa cremosa.',
            'Escurre la pasta y mézclala con la salsa.',
            'Sirve caliente y añade más queso parmesano al gusto.'
        ]
    }
];
