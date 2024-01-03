import { useState, useEffect } from 'react';
import axios from 'axios';

const useUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return users;
};

export default useUser;
