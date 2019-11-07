import manchester1 from '../../assets/manchester1.jpg'
import manchester2 from '../../assets/manchester2.jpeg'
import manchester3 from '../../assets/manchester3.jpg'
import manchester4 from '../../assets/manchester4.jpg'

import women1 from '../../assets/women1.jpeg'
import women2 from '../../assets/women2.jpg'
import women3 from '../../assets/women3.jpg'
import women4 from '../../assets/women4.jpg'

import jacket1 from '../../assets/jacket1.jpeg'
import jacket2 from '../../assets/jacket2.jpeg'
import jacket3 from '../../assets/jacket3.jpeg'
import jacket4 from '../../assets/jacket4.jpeg'


export const SHOP_DATA = {
hats:  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Red Stripes',
        imageUrl: manchester1,
        price: 25
      },
      {
        id: 2,
        name: 'RED Black',
        imageUrl: manchester2,
        price: 18
      },
      {
        id: 3,
        name: 'Navy',
        imageUrl: manchester3,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: manchester4,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  sneakers:{
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 1,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
      },
      {
        id: 2,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 3,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 4,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 5,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 6,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 7,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 8,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  jackets:{
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 1,
        name: 'Black Jean Shearling',
        imageUrl: jacket1,
        price: 125
      },
      {
        id: 2,
        name: 'Blue Jean Jacket',
        imageUrl: jacket2,
        price: 90
      },
      {
        id: 3,
        name: 'Grey Jean Jacket',
        imageUrl: jacket3,
        price: 90
      },
      {
        id: 4,
        name: 'Brown Shearling',
        imageUrl: jacket4,
        price: 165
      },
      {
        id: 5,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  womens:{
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 1,
        name: 'Red 15',
        imageUrl: women1,
        price: 25
      },
      {
        id: 2,
        name: 'Red Classic 19/20',
        imageUrl: women2,
        price: 20
      },
      {
        id: 3,
        name: 'Pink',
        imageUrl: women3,
        price: 80
      },
      {
        id: 4,
        name: 'Black',
        imageUrl: women4,
        price: 80
      },
      {
        id: 5,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 6,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 7,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  mens:{
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 1,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 2,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 3,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 4,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 5,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 6,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;