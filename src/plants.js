// 18 houseplants: six distinct products per category. Prices are in USD.
const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
export const plants = [
  {id:1,name:'Monstera Deliciosa',price:32,category:'Air Purifying Plants',image:photo('photo-1501004318641-b39e6451bec6'),description:'Iconic split leaves and a tropical character.'},
  {id:2,name:'Peace Lily',price:26,category:'Air Purifying Plants',image:photo('photo-1485955900006-10f4d324d411'),description:'Glossy green leaves with elegant white blooms.'},
  {id:3,name:'Boston Fern',price:22,category:'Air Purifying Plants',image:photo('photo-1459156212016-c812468e2115'),description:'Soft arching fronds for a fresh indoor look.'},
  {id:4,name:'Spider Plant',price:17,category:'Air Purifying Plants',image:photo('photo-1497250681960-ef046c08a56e'),description:'Graceful ribbon foliage and easy propagation.'},
  {id:5,name:'Rubber Plant',price:34,category:'Air Purifying Plants',image:photo('photo-1483794344563-d27a8d18014e'),description:'Deep green statement leaves for bright rooms.'},
  {id:6,name:'Golden Pothos',price:19,category:'Air Purifying Plants',image:photo('photo-1416879595882-3373a0480b5b'),description:'Trailing heart-shaped leaves for shelves.'},
  {id:7,name:'Snake Plant',price:24,category:'Low Maintenance Plants',image:photo('photo-1501004318641-b39e6451bec6'),description:'Architectural leaves that tolerate low light.'},
  {id:8,name:'ZZ Plant',price:29,category:'Low Maintenance Plants',image:photo('photo-1485955900006-10f4d324d411'),description:'Shiny foliage with minimal care requirements.'},
  {id:9,name:'Aloe Vera',price:16,category:'Low Maintenance Plants',image:photo('photo-1459156212016-c812468e2115'),description:'Sun-loving succulent with pointed leaves.'},
  {id:10,name:'Jade Plant',price:21,category:'Low Maintenance Plants',image:photo('photo-1497250681960-ef046c08a56e'),description:'Compact succulent with rounded green leaves.'},
  {id:11,name:'Echeveria',price:14,category:'Low Maintenance Plants',image:photo('photo-1483794344563-d27a8d18014e'),description:'Rosette-shaped succulent for sunny spots.'},
  {id:12,name:'Haworthia',price:18,category:'Low Maintenance Plants',image:photo('photo-1416879595882-3373a0480b5b'),description:'Small sculptural succulent for a windowsill.'},
  {id:13,name:'Orchid',price:38,category:'Flowering Plants',image:photo('photo-1490750967868-88aa4486c946'),description:'Long-lasting, graceful flowering stems.'},
  {id:14,name:'Anthurium',price:30,category:'Flowering Plants',image:photo('photo-1468327768560-75b778cbb551'),description:'Colorful heart-shaped spathes and glossy foliage.'},
  {id:15,name:'African Violet',price:20,category:'Flowering Plants',image:photo('photo-1525310072745-f49212b5ac6d'),description:'Compact plant with velvety leaves and blooms.'},
  {id:16,name:'Kalanchoe',price:18,category:'Flowering Plants',image:photo('photo-1494336934272-f0efcedfc8a4'),description:'Cheerful clusters of colorful flowers.'},
  {id:17,name:'Begonia',price:23,category:'Flowering Plants',image:photo('photo-1487530811176-3780de880c2d'),description:'Decorative leaves and delicate blossoms.'},
  {id:18,name:'Christmas Cactus',price:25,category:'Flowering Plants',image:photo('photo-1508610048659-a06b669e3321'),description:'Cascading stems with seasonal blooms.'}
];
