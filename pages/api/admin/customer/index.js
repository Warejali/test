import Customer from '../../../../models/customer';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  

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
    
    let customers;
    
    if (passportNumber) {
      // If passport number is provided in the query, filter by passport number
      customers = await Customer.find({ passport: passportNumber });
    } else {
      // If no passport number provided, get all applications
      customers = await Customer.find({});
    }
    
    await db.disconnect();
    
    res.send(customers);
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
