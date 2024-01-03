import { getSession } from 'next-auth/react';
import bcryptjs from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';

async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(400).send({ message: `${req.method} not supported` });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({ message: 'signIn required' });
  }

  const { user } = session;
  const { name, email, password, file, bidNumber } = req.body;

  if (!name || !email || !email.includes('@')) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await db.connect();
  const toUpdateUser = await User.findById(user._id);
  toUpdateUser.name = name;
  toUpdateUser.email = email;
  toUpdateUser.file = file;
  toUpdateUser.bidNumber = bidNumber;

  if (password) {
    toUpdateUser.password = bcryptjs.hashSync(password);
  }

  await toUpdateUser.save();
  await db.disconnect();

  // const updatedSession = await session.update({
  //   // Pass in the new session data here
  //   name: 'John Doe',
  //   email: 'john@example.com',
  // });

  // // Set a new cookie with the updated session data
  // res.setHeader('Set-Cookie', await serializeSession(updatedSession));
  res.send({
    message: 'User updated',
  });
}
// function serializeSession(session) {
//   const serializedSession = JSON.stringify(session);
//   const expires = new Date(session.expires * 1000);

//   return serialize('next-auth.session-token', serializedSession, {
//     expires,
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     path: '/',
//   });
// }

export default handler;
