import { getSession } from 'next-auth/react';
import Application from '../../../../../models/application';
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
  } else if (req.method === 'DELETE') {
    return deleteHandler(req, res, user);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};
const getHandler = async (req, res) => {
  await db.connect();
  const application = await Application.findById(req.query.id);
  await db.disconnect();
  res.send(application);
};
const putHandler = async (req, res) => {
  await db.connect();
  const application = await Application.findById(req.query.id);
  if (application) {
    application.name = req.body.name;
    application.father = req.body.father;
    application.mother = req.body.mother;
    application.address = req.body.address;
    application.phone = req.body.phone;
    application.email = req.body.email;
    application.marriedStatus = req.body.marriedStatus;
    application.nid = req.body.nid;
    application.passport = req.body.passport;
    application.district = req.body.district;
    application.subdistrict = req.body.subdistrict;
    application.postoffice = req.body.postoffice;
    await application.save();
    await db.disconnect();
    res.send({ message: 'application updated successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'application not found' });
  }
};
const deleteHandler = async (req, res) => {
  await db.connect();
  const application = await Application.findById(req.query.id);
  if (application) {
    await application.remove();
    await db.disconnect();
    res.send({ message: 'application deleted successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'application not found' });
  }
};
export default handler;
