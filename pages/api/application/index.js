import Application from '../../../models/application';
import db from '../../../utils/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }


  const { name,father,mother,address,phone, email, marriedStatus, nid, passport, postoffice, subdistrict, district, image } = req.body;
  if (
    !name ||
    !email ||
    !email.includes('@')
    
    
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await db.connect();

  const existingUser = await Application.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    await db.disconnect();
    return;
  }

  const newApplication = new Application({
    name,father,mother,address,phone, email, marriedStatus, nid, passport, postoffice, subdistrict, district, image
  });

  const application = await newApplication.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Application submitted successfully',
    name: application.name,
    father: application.father,
    mother: application.mother,
    address: application.address,
    phone: application.phone,
    email: application.email,
    marriedStatus: application.marriedStatus,
    nid: application.nid,
    passport: application.passport,
    postoffice: application.postoffice,
    subdistrict: application.subdistrict,
    district: application.district,
    image: application.image,
  });
}

export default handler;
