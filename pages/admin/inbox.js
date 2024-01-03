import AdminLayout from '../../components/AdminLayout';
import AdminTopNav from '../../components/Dashboard/AdminTopNav';
import AdminNavBar from '../../components/Dashboard/AdminNavBar';

export default function Inbox() {
  return (
    <AdminLayout title="Profile">
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <AdminNavBar></AdminNavBar>
        <div className="xl:col-span-5 md:col-span-2">
          <AdminTopNav></AdminTopNav>
          <div className="flex items-center justify-between">
            <h1 className="my-4 text-xl font-semibold text-secondary">
              Inbox Coming Soon
            </h1>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

Inbox.auth = true;
