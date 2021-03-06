const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const products = [
  {
    id: 0,
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Único!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet purus sed purus interdum placerat. Cras tempor nulla ac est sodales accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sodales nulla in nisl convallis convallis. Sed malesuada tempor nunc ut efficitur. Sed porta mollis nulla. Curabitur eu ex vitae est interdum gravida id a augue. Vestibulum vulputate mauris ac massa semper, eu finibus lorem iaculis. Suspendisse sodales vulputate tortor, eu tincidunt lectus maximus in. Proin elementum imperdiet hendrerit. Nam tellus tortor, pulvinar at vehicula ac, iaculis eget purus. Mauris volutpat sagittis nisl mattis pretium. Fusce nec luctus quam. Curabitur euismod a erat convallis auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: '$ 5.980',
    region: 'Mendoza',
    mainImage: 'https://falabella.scene7.com/is/image/FalabellaCO/9722720_1?wid=800&hei=800&qlt=70',
    slug: 'apple-ipod-touch-5g-16g',
    salesCount: 234,
    categories: 'Electrónica, Audio y Video > Ipod > Reproductores > Ipod Touch > 32gb',
    condition: 'Usado'
  },
  {
    id: 1,
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Único!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet purus sed purus interdum placerat. Cras tempor nulla ac est sodales accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sodales nulla in nisl convallis convallis. Sed malesuada tempor nunc ut efficitur. Sed porta mollis nulla. Curabitur eu ex vitae est interdum gravida id a augue. Vestibulum vulputate mauris ac massa semper, eu finibus lorem iaculis. Suspendisse sodales vulputate tortor, eu tincidunt lectus maximus in. Proin elementum imperdiet hendrerit. Nam tellus tortor, pulvinar at vehicula ac, iaculis eget purus. Mauris volutpat sagittis nisl mattis pretium. Fusce nec luctus quam. Curabitur euismod a erat convallis auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: '$ 1.980',
    region: 'Mendoza',
    mainImage: 'https://med.csmobiles.com/143531-large_default/apple-iphone-11-pro-max-64gb-gris.jpg',
    slug: 'apple-ipod-touch-5g-16g',
    salesCount: 100,
    categories: 'Electrónica, Audio y Video > Ipod > Reproductores > Ipod Touch > 32gb',
    condition: 'Usado'
  },
  {
    id: 2,
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Único!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet purus sed purus interdum placerat. Cras tempor nulla ac est sodales accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sodales nulla in nisl convallis convallis. Sed malesuada tempor nunc ut efficitur. Sed porta mollis nulla. Curabitur eu ex vitae est interdum gravida id a augue. Vestibulum vulputate mauris ac massa semper, eu finibus lorem iaculis. Suspendisse sodales vulputate tortor, eu tincidunt lectus maximus in. Proin elementum imperdiet hendrerit. Nam tellus tortor, pulvinar at vehicula ac, iaculis eget purus. Mauris volutpat sagittis nisl mattis pretium. Fusce nec luctus quam. Curabitur euismod a erat convallis auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: '$ 980',
    region: 'Mendoza',
    mainImage: 'https://falabella.scene7.com/is/image/FalabellaCO/9722731_1?q=i?wid=800&hei=800&qlt=70',
    slug: 'apple-ipod-touch-5g-16g',
    salesCount: 15,
    categories: 'Electrónica, Audio y Video > Ipod > Reproductores > Ipod Touch > 32gb',
    condition: 'Nuevo'
  },
  {
    id: 3,
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Único!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet purus sed purus interdum placerat. Cras tempor nulla ac est sodales accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sodales nulla in nisl convallis convallis. Sed malesuada tempor nunc ut efficitur. Sed porta mollis nulla. Curabitur eu ex vitae est interdum gravida id a augue. Vestibulum vulputate mauris ac massa semper, eu finibus lorem iaculis. Suspendisse sodales vulputate tortor, eu tincidunt lectus maximus in. Proin elementum imperdiet hendrerit. Nam tellus tortor, pulvinar at vehicula ac, iaculis eget purus. Mauris volutpat sagittis nisl mattis pretium. Fusce nec luctus quam. Curabitur euismod a erat convallis auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: '$ 3.980',
    region: 'Mendoza',
    mainImage: 'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/481798-Product-0-I-637382712841144603_e980e283-2e3c-4fe7-a59c-7ee47fcc9594_800x800.jpg',
    slug: 'apple-ipod-touch-5g-16g',
    salesCount: 99,
    categories: 'Electrónica, Audio y Video > Ipod > Reproductores > Ipod Touch > 32gb',
    condition: 'Nuevo'
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/products', (req, res) => {
  console.log('api/products called!')
  res.json(products);
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});