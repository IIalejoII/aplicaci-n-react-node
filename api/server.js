const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [];
const products = [
  {
    id: 0,
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Único!',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet purus sed purus interdum placerat. Cras tempor nulla ac est sodales accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sodales nulla in nisl convallis convallis. Sed malesuada tempor nunc ut efficitur. Sed porta mollis nulla. Curabitur eu ex vitae est interdum gravida id a augue. Vestibulum vulputate mauris ac massa semper, eu finibus lorem iaculis. Suspendisse sodales vulputate tortor, eu tincidunt lectus maximus in. Proin elementum imperdiet hendrerit. Nam tellus tortor, pulvinar at vehicula ac, iaculis eget purus. Mauris volutpat sagittis nisl mattis pretium. Fusce nec luctus quam. Curabitur euismod a erat convallis auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: '',
    region: 'Mendoza',
    mainImage: 'Mendoza',
    slug: 'apple-ipod-touch-5g-16g',
    salesCount: 234,
    categories: 'Electrónica, Audio y Video > Ipod > Reproductores > Ipod Touch > 32gb',
  },
  {
    id: 1,
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Único!',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet purus sed purus interdum placerat. Cras tempor nulla ac est sodales accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sodales nulla in nisl convallis convallis. Sed malesuada tempor nunc ut efficitur. Sed porta mollis nulla. Curabitur eu ex vitae est interdum gravida id a augue. Vestibulum vulputate mauris ac massa semper, eu finibus lorem iaculis. Suspendisse sodales vulputate tortor, eu tincidunt lectus maximus in. Proin elementum imperdiet hendrerit. Nam tellus tortor, pulvinar at vehicula ac, iaculis eget purus. Mauris volutpat sagittis nisl mattis pretium. Fusce nec luctus quam. Curabitur euismod a erat convallis auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: '',
    region: 'Mendoza',
    mainImage: 'Mendoza',
    slug: 'apple-ipod-touch-5g-16g',
    salesCount: 100,
    categories: 'Electrónica, Audio y Video > Ipod > Reproductores > Ipod Touch > 32gb',
  },
  {
    id: 2,
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Único!',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet purus sed purus interdum placerat. Cras tempor nulla ac est sodales accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sodales nulla in nisl convallis convallis. Sed malesuada tempor nunc ut efficitur. Sed porta mollis nulla. Curabitur eu ex vitae est interdum gravida id a augue. Vestibulum vulputate mauris ac massa semper, eu finibus lorem iaculis. Suspendisse sodales vulputate tortor, eu tincidunt lectus maximus in. Proin elementum imperdiet hendrerit. Nam tellus tortor, pulvinar at vehicula ac, iaculis eget purus. Mauris volutpat sagittis nisl mattis pretium. Fusce nec luctus quam. Curabitur euismod a erat convallis auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: '',
    region: 'Mendoza',
    mainImage: 'Mendoza',
    slug: 'apple-ipod-touch-5g-16g',
    salesCount: 15,
    categories: 'Electrónica, Audio y Video > Ipod > Reproductores > Ipod Touch > 32gb',
  },
  {
    id: 3,
    title: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Único!',
    Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet purus sed purus interdum placerat. Cras tempor nulla ac est sodales accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sodales nulla in nisl convallis convallis. Sed malesuada tempor nunc ut efficitur. Sed porta mollis nulla. Curabitur eu ex vitae est interdum gravida id a augue. Vestibulum vulputate mauris ac massa semper, eu finibus lorem iaculis. Suspendisse sodales vulputate tortor, eu tincidunt lectus maximus in. Proin elementum imperdiet hendrerit. Nam tellus tortor, pulvinar at vehicula ac, iaculis eget purus. Mauris volutpat sagittis nisl mattis pretium. Fusce nec luctus quam. Curabitur euismod a erat convallis auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    price: '',
    region: 'Mendoza',
    mainImage: 'Mendoza',
    slug: 'apple-ipod-touch-5g-16g',
    salesCount: 99,
    categories: 'Electrónica, Audio y Video > Ipod > Reproductores > Ipod Touch > 32gb',
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.get('/api/products', (req, res) => {
  console.log('api/products called!')
  res.json(products);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});