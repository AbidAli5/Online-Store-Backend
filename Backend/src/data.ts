
interface Food {
  id: string;
  name: string;
  cookTime: string;
  price: number;
  favorite: boolean;
  origins: string[];
  description: string;
  stars: number;
  imageUrl: string;
  tags: string [];
}
interface Tags{
  name: string;
  count : number;
}

export const Sample_Food: Food[] = [
  {
    id: "1",
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    description: 'dllkdfjkdfhf so kdfh jfhd ',
    stars: 4.5,
    imageUrl: 'assets/Food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id: "2",
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/Food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "3",
    name: 'Hamburger',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/Food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id: "4",
    name: 'Fried Potatoes',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/Food-4.jpg',
    tags: ['FastFood', 'Fry'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "5",
    name: 'Chicken Soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/Food-5.jpg',
    tags: ['SlowFood', 'Soup'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "6",
    name: 'Vegetables Pizza',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/Food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "7",
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    cookTime: '10-20',
    price: 109.95,
    favorite: false,
    origins: ['Sweden'],
    stars: 3.9,
    imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    tags: ["Men's Clothing", 'Backpack'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "8",
    name: 'Mens Casual Premium Slim Fit T-Shirts',
    cookTime: 'N/A',
    price: 22.3,
    favorite: false,
    origins: ['N/A'],
    stars: 4.1,
    imageUrl:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    tags: ["Men's Clothing", 'T-Shirts'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "9",
    name: 'Mens Cotton Jacket',
    cookTime: 'N/A',
    price: 55.99,
    favorite: false,
    origins: ['N/A'],
    stars: 4.7,
    imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    tags: ["Men's Clothing", 'Jackets'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "10",
    name: 'Mens Casual Slim Fit',
    cookTime: 'N/A',
    price: 15.99,
    favorite: false,
    origins: ['N/A'],
    stars: 2.1,
    imageUrl: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    tags: ["Men's Clothing", 'Shirts'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "11",
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    cookTime: 'N/A',
    price: 695,
    favorite: false,
    origins: ['N/A'],
    stars: 4.6,
    imageUrl:
      'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    tags: ['Jewelry', 'Bracelets'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "12",
    name: 'Solid Gold Petite Micropave',
    cookTime: 'N/A',
    price: 168,
    favorite: false,
    origins: ['N/A'],
    stars: 3.9,
    imageUrl:
      'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    tags: ['Jewelry', 'Rings'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "13",
    name: 'White Gold Plated Princess',
    cookTime: 'N/A',
    price: 9.99,
    favorite: false,
    origins: ['N/A'],
    stars: 3.0,
    imageUrl:
      'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    tags: ['Jewelry', 'Rings'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "14",
    name: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    cookTime: 'N/A',
    price: 10.99,
    favorite: false,
    origins: ['N/A'],
    stars: 1.9,
    imageUrl:
      'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    tags: ['Jewelry', 'Earrings'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
  {
    id: "15",
    name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
    cookTime: 'N/A',
    price: 64,
    favorite: false,
    origins: ['N/A'],
    stars: 3.3,
    imageUrl: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    tags: ['Electronics', 'Hard Drives'],
    description:
      'Versatile Style: Wear it as a crossbody bag or a shoulder bag, and let it effortlessly blend',
  },
];

export const Sample_tags: Tags[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
];

export const Sample_Users : any []=[
  {
    name : "John Smith",
    email : "john@gmail.com",
    password : "12345",
    address : "Toronto USA",
    isAdmin : true,
  },
  {
    name : "Sam",
    email : "sam@gmail.com",
    password : "12345",
    address : "Toronto USA",
    isAdmin : false,
  }
]