exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
           title: 'Pizza',
           description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
           price: '$10',
           image: 'https://storage.cloud.google.com/store-app-images/pizza.jpg',
           likes: '',
           likes_amount: 0
          },
        {
          title: 'Bugatti',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          price: '$4,000,000',
          image: 'https://storage.cloud.google.com/store-app-images/bugatti.jpg',
          likes: '',
          likes_amount: 0
        },
        {
          title: 'Camera',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          price: '$50',
          image: 'https://storage.cloud.google.com/store-app-images/camera.jpg',
          likes: '',
          likes_amount: 0
        },

        {
           title: 'Couch',
           description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
           price: '$400',
           image: 'https://storage.cloud.google.com/store-app-images/couch.jpg',
           likes: '',
           likes_amount: 0
          },
        {
           title: 'Glasses',
           description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
           price: '$30',
           image: 'https://storage.cloud.google.com/store-app-images/glasses.jpg',
           likes: '',
           likes_amount: 0
          },
        {
           title: 'Jet Ski',
           description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
           price: '$4,000',
           image: 'https://storage.cloud.google.com/store-app-images/jetski.jpg',
           likes: '',
           likes_amount: 0
          },
        {
           title: 'Shoes',
           description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
           price: '$60',
           image: 'https://storage.cloud.google.com/store-app-images/shoes.jpg',
           likes: '',
           likes_amount: 0
          },
        {
           title: 'Kitchen Set',
           description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
           price: '$100',
           image: 'https://storage.cloud.google.com/store-app-images/kitchenset.jpg',
           likes: '',
           likes_amount: 0
          },
        {
           title: 'Table',
           description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
           price: '$130',
           image: 'https://storage.cloud.google.com/store-app-images/table.jpg',
           likes: '',
           likes_amount: 0
          },
        {
           title: 'Xbox',
           description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
           price: '$400',
           image: 'https://storage.cloud.google.com/store-app-images/xbox.jpg',
           likes: '',
           likes_amount: 0
          }
      ]);
    });
};
