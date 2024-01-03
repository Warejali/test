import Image from 'next/image';
import Link from 'next/link';
import AdminLayout from '../../components/AdminLayout';
import AdminNavBar from '../../components/Dashboard/AdminNavBar';
import AdminTopNav from '../../components/Dashboard/AdminTopNav';
import Application from '../../models/application';
import db from '../../utils/db';



export default function ApplicationDetails(props) {
  const { application } = props;
  const { name, father, mother, address, phone, email, marriedStatus, nid, passport, postoffice, subdistrict, district, image } =
    application;


  return (

    <AdminLayout title={application.name}>
      <div className="grid xl:grid-cols-6 gap-5 md:grid-cols-3">
        <AdminNavBar></AdminNavBar>
        <div className="xl:col-span-5 md:col-span-2">
          <AdminTopNav></AdminTopNav>
          <div className="flex items-center justify-between">
            <h1 className="my-4 text-xl font-semibold text-secondary"></h1>
            <div>
              <div className="my-2 btn btn-xs text-xs font-extralight">
                <Link href="/admin/products">Back to customers</Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className=" my-4 col-span-3">
                  <div className="my-6">
                    <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <Image
                      className=""
                      src={image}
                      alt="image"
                      width={100}
                      height={100}
                      
                    />
                    </div>
                    <table className="table w-full">
                      <tbody>
                        <tr>
                          <th className=" border-2">Father</th>
                          <td className=" border-2">{father}</td>
                          <th className=" border-2">Mother</th>
                          <td className=" border-2">{mother}</td>

                        </tr>
                        <tr>
                          <th className=" border-2">Address</th>
                          <td className=" border-2">{address},{postoffice}, {subdistrict}, {district}</td>
                          <th className=" border-2">Phone</th>
                          <td className=" border-2">{phone}</td>

                        </tr>
                        <tr>
                          <th className=" border-2">email</th>
                          <td className=" border-2">{email}</td>
                          <th className=" border-2">marriedStatus</th>
                          <td className=" border-2">{marriedStatus}</td>
                        </tr>
                        <tr>
                          <th className=" border-2">nid</th>
                          <td className=" border-2">{nid}</td>
                          <th className=" border-2">Passport</th>
                          <td className=" border-2">{passport}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-span-2  my-4">

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>



  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  await db.connect();
  const application = await Application.findOne({ _id: id }).lean();
  await db.disconnect();
  return {
    props: {
      application: application ? db.convertDocToObj(application) : null,
    },
  };
}

ApplicationDetails.auth = true;
