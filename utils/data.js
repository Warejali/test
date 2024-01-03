import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
      bidNumber: 0,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
      bidNumber: 0,
      file: [
        {
          newFilename: '1672766076243_1.jpg',
          fileUrl: '/uploads/1672766076244_3.jpg',
          originalFilename: '3.jpg',
          mimetype: 'image/jpeg',
          size: 53076,
        },
      ],
    },
    {
      name: 'warej',
      email: 'warej2@gmail.com',
      password: bcrypt.hashSync('123456'),
      isVendor: true,
      bidNumber: 0,
    },
  ],
 

 

 
  application: [
    {
      email: 'warej2@gmail.com',
      name: 'Free visa',
      slug: 'free-visa',
      nid: 0,
      passport: 0,
      birth: 'Nike',
      phone: 0,
      description: 'A popular visa',
      
    },
  ],

  
};

export default data;
