import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const useUserById = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState({});

  useEffect(() => {
    const userId = session?.user?._id;
    const fetchData = async () => {
      try {
        const response = await axios.post(`/api/admin/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [session?.user?._id]);

  return user;
};

export default useUserById;
