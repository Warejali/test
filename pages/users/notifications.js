import React from 'react';
import UsersNav from '../../components/Dashboard/UsersNav';
import Layout from '../../components/Layout';
import useNotifications from '../../hooks/useNotifications';

const Notifications = () => {
  const notifications = useNotifications();
  console.log(notifications);
  return (
    <Layout>
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <UsersNav></UsersNav>
        <div className="xl:col-span-5 md:col-span-2">
          <div className="flex items-center justify-between">
            <h1 className="my-4 text-xl font-semibold text-secondary">
              {notifications.map((notification) => (
                <>
                  <div
                    tabIndex={0}
                    className="collapse border border-base-300 bg-base-100 rounded-box"
                  >
                    <div className="collapse-title text-xl font-medium uppercase">
                      {notification.notificationMessage.slice(0, 15) + '.....'}
                    </div>
                    <div className="collapse-content">
                      <p className="text-xs">
                        {notification.notificationMessage}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
