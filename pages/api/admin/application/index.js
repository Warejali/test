import { getSession } from 'next-auth/react';
import Application from '../../../../models/application';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send('admin signin required');
  }

  // const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res);
  } 
   else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};


const getHandler = async (req, res) => {
  const passportNumber = req.query.passport; // Get passport number from query parameter
  
  try {
    await db.connect();
    
    let applications;
    
    if (passportNumber) {
      // If passport number is provided in the query, filter by passport number
      applications = await Application.find({ passport: passportNumber });
    } else {
      // If no passport number provided, get all applications
      applications = await Application.find({});
    }
    
    await db.disconnect();
    
    res.send(applications);
  } catch (error) {
    // Handle errors appropriately, e.g., send an error response
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

// const getHandler = async (req, res) => {
  
//   await db.connect();
//   const applications = await Application.find({});
//   await db.disconnect();
//   res.send(applications);
// };
export default handler;
