import Product from '../../models/Product';
import User from '../../models/User';
import Application from '../../models/application';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Application.insertMany(data.application);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
