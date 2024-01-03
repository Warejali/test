import { getSession } from 'next-auth/react';
import Notification from '../../../../models/Notification';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('user sign in required');
  }

  if (req.method === 'POST') {
    if (req.body.email) {
      await db.connect();
      const notifications = await Notification.find(req.body);
      await db.disconnect();
      res.send(notifications);
    }
  } else {
    await db.connect();
    const notifications = await Notification.find({});
    await db.disconnect();
    res.send(notifications);
  }
};

export default handler;

function app() {
  return <h2>This is heading</h2>;
}
app();
