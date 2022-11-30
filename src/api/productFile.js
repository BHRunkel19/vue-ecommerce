const _products = [
    {
        id: 1,
        class: "pa-0",
        discount: "-20%",
        name: "KD 8 EXT",
        size: "10",
        price: "$145.00",
        public_id: "1.png",
        quantityInStock: 2
    },
    {
        id: 2,
        class: "pa-0",
        discount: "-30%",
        name: "Jordan Galaxy",
        size: "10",
        price: "$599.99",
        public_id: "2.png",
        quantityInStock: 1
    },
    {
        id: 3,
        class: "py-0 pl-0",
        discount: "-17%",
        name: "Nike SB Trainerendor Leather",
        size: "8",
        price: "$190.00",
        public_id: "3.png",
        quantityInStock: 3
    },
    {
        id: 4,
        class: "pa-0",
        discount: "-22%",
        name: "Air Jordan Spike 40 iD",
        size: "12",
        price: "$220.00",
        public_id: "4.png",
        quantityInStock: 1
    },
    {
        id: 5,
        class: "pa-0",
        discount: "-18%",
        name: "Nike Air Footscape Magista Flyknit",
        size: "13",
        price: "$235.00",
        public_id: "5.png",
        quantityInStock: 2
    },
    {
        id: 6,
        class: "py-0 pl-0",
        discount: "-40%",
        name: "Nike Air Zoom Huarache 2k4",
        size: "11",
        price: "$190.00",
        public_id: "6.png",
        quantityInStock: 3
    },
    {
        id: 7,
        class: "pa-0",
        discount: "-13%",
        name: "Jordan Horizon",
        size: "10",
        price: "$230.00",
        public_id: "7.png",
        quantityInStock: 1
    },
    {
        id: 8,
        class: "pa-0",
        discount: "-15%",
        name: "Air Jordan xx9 Low",
        size: "13",
        price: "$185.00",
        public_id: "8.png",
        quantityInStock: 2
    },
    {
        id: 9,
        class: "py-0 pl-0",
        discount: "-10%",
        name: "Lebron XIII Premium AS iD",
        size: "12.5",
        price: "$265.00",
        public_id: "3.png",
        quantityInStock: 1
    },
    {
        id: 10,
        class: "pa-0",
        discount: "-19%",
        name: "Air Jordan 1 Retro High Nouveau",
        size: "10.5",
        price: "$190.00",
        public_id: "10.png",
        quantityInStock: 2
    },
    {
        id: 11,
        class: "pa-0",
        discount: "-16%",
        name: "Nike Air Presto",
        size: "11",
        price: "$175.00",
        public_id: "11.png",
        quantityInStock: 1
    },
    {
        id: 12,
        class: "py-0 pl-0",
        discount: "-10%",
        name: "KD 8 Premium AS iD",
        size: "13.5",
        price: "$245.00",
        public_id: "12.png",
        quantityInStock: 1
    }
   
]

export default {
    getProducts(cb) {
      setTimeout(() => cb(_products), 500)
    }
}