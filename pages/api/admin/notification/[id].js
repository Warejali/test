import Notification from '../../../../models/Notification';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  // const session = await getSession({ req });
  // if (!session || !session.user.isAdmin) {
  //   return res.status(401).send('admin signin required');
  // }

  if (req.method === 'DELETE') {
    return deleteHandler(req, res);
  } else {
    console.log('request console', req.query);
    if (req.query.id) {
      await db.connect();
      const notifications = await Notification.find({
        email: req.query.id,
      });
      await db.disconnect();
      res.send(notifications);
    }
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

const deleteHandler = async (req, res) => {
  await db.connect();
  const bid = await Notification.findById(req.query.id);
  if (bid) {
    if (bid.email === 'admin@example.com') {
      return res.status(400).send({ message: 'Can not delete admin' });
    }
    await bid.remove();
    await db.disconnect();
    res.send({ message: 'Bid Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'bid Not Found' });
  }
};

export default handler;
