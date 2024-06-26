import { v4 } from 'uuid';

const CARD_DATA = [
  {
    img: '../../public/images/image-colton.jpg',
    name: 'Colton Smith',
    opinion:
      '“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”',
    id: v4(),
    margin: '0px'
  },
  {
    img: '../../public/images/image-irene.jpg',
    name: 'Irene Roberts',
    opinion:
      '“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
    id: v4(),
    margin: '32px'
  },
  {
    img: '../../public/images/image-anne.jpg',
    name: 'Anne Wallace',
    opinion:
      '“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”',
    id: v4(),
    margin: '64px'
  }
];

export default CARD_DATA;
