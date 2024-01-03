import { getSession } from 'next-auth/react';
import Customer from '../../../../../models/customer';
import db from '../../../../../utils/db';


const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || (session && !session.user.isAdmin)) {
    return res.status(401).send('signIn required');
  }

  const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res, user);
  } else if (req.method === 'PUT') {
    return putHandler(req, res, user);
  } else if (req.method === 'DELETE', user) {
    return deleteHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const getHandler = async (req, res) => {
  await db.connect();
  const application = await Customer.findById(req.query.id);
  await db.disconnect();
  res.send(application);
};
const putHandler = async (req, res) => {
  await db.connect();
  const customer = await Customer.findById(req.query.id);
  if (customer) {
    customer.name = req.body.image;
    customer.passport = req.body.passport;
   
    await customer.save();
    await db.disconnect();
    res.send({ message: 'application updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'application not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const customer = await Customer.findById(req.query.id);
  if (customer) {
    await customer.remove();
    await db.disconnect();
    res.send({ message: 'application deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'application not found' });
  }
};
export default handler;
