import TshirtImage from "../assets/shop/Tshirts.jpg";
import JacketImage from "../assets/shop/Jackets.jpg"
import TrouserImage from "../assets/shop/Trousers.jpg"
import TrackSuits from "../assets/shop/TrackSuits.jpg"
import Shorts from "../assets/shop/Shorts.jpg"
import Skinny from "../assets/shop/Skinny.jpg"
import Boots from "../assets/shop/Boots.jpg"
import Sneakers from "../assets/shop/Sneakers.jpg"
import SportShoes from "../assets/shop/Sport Shoes.jpg"
import Wallete from "../assets/shop/Wallete.jpg"
import Sunglasses from "../assets/shop/glasses.webp"
import Cap from "../assets/shop/Caps.webp"

export const itemsData = {
  "casual-wear": [
    {
      id: 1,
      name: "Casual T-Shirt",
      sizeOptions: ["xs", "s", "m", "l", "xl"],
      image: TshirtImage,
      price: "$20.00"
    },
    {
      id: 2,
      name: "Denim Jacket",
      sizeOptions: ["s", "m", "l", "xl"],
      image: JacketImage,
      price: "$50.00"
    },
    {
      id: 3,
      name: "Denim Trouser",
      sizeOptions: ["s", "m", "l", "xl"],
      image: TrouserImage,
      price: "$60.00"
    }
  ],
  "sport-wear": [
    {
      id: 4,
      name: "Track Suits",
      sizeOptions: ["8", "9", "10", "11", "12"],
      image: TrackSuits,
      price: "$80.00"
    },
    {
      id: 5,
      name: "Sport Shorts",
      sizeOptions: ["s", "m", "l", "xl"],
      image: Shorts,
      price: "$25.00"
    },
    {
      id: 6,
      name: "Sport Skinny",
      sizeOptions: ["s", "m", "l", "xl"],
      image: Skinny,
      price: "$25.00"
    }
  ],
  "foot-wear": [
    {
      id: 7,
      name: "Boots",
      sizeOptions: ["7", "8", "9", "10", "11"],
      image: Boots,
      price: "$60.00"
    },
    {
      id: 8,
      name: "Sneakers",
      sizeOptions: ["6", "7", "8", "9", "10"],
      image: Sneakers,
      price: "$40.00"
    },
    {
      id: 9,
      name: "Sport Shoes",
      sizeOptions: ["6", "7", "8", "9", "10"],
      image: SportShoes,
      price: "$40.00"
    }
  ],
  "accessories": [
    {
      id: 10,
      name: "Leather Wallet",
      sizeOptions: ["s" , "m"],
      image: Wallete,
      price: "$30.00"
    },
    {
      id: 11,
      name: "Sunglasses",
      sizeOptions: ["s" , "m" ,"l"],
      image: Sunglasses,
      price: "$15.00"
    },
    {
      id: 12,
      name: "Cap",
      sizeOptions: ["s" , "m" , "l"],
      image: Cap,
      price: "$15.00"
    }
  ]
};
