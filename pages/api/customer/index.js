import Customer from "../../../models/customer";
import db from "../../../utils/db";


async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const { passport, image , image2} = req.body;
  await db.connect();
  const newCastomer = new Customer({
    passport, image, image2
  });

  const castomer = await newCastomer.save();
  await db.disconnect();
  res.status(201).send({
    message: 'Application submitted successfully',
    passport: castomer.passport,
    image: castomer.image,
    image2: castomer.image2,
  });
}

export default handler;
