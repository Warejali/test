import { useState, useEffect } from 'react';
import axios from 'axios';

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/admin/notification/`);
      setNotifications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return notifications;
};

export default useNotifications;
