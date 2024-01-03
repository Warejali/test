import User from '../../../models/User';
import db from '../../../utils/db';

const handler = async (req, res) => {
  console.log('sdsads', req.query.id);
  console.log('asdasdssss', req.body);
  console.log('req.method', req.method);
  if (req.method === 'PUT') {
    await db.connect();
    const user = await User.findById(req.query.id);
    if (user) {
      const { bidNumber } = req.body;
      user.bidNumber = bidNumber;
      await user.save();
      await db.disconnect();
      res.send({ message: 'User Updated' });
    } else {
      await db.disconnect();
      res.status(404).send({ message: 'User Not Found' });
    }
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

export default handler;
