import { useEffect, useState } from "react";
import EmptyAdminUsersDashboard from "../../Empty/EmptyAdminUsersDashboard";
import { baseUrl } from "../../../Utilities/constants";
import AdminUsersItem from "../elements/AdminUsersItem";
function AdminUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/api/user`);
        if (!response.ok) {
          console.log(response);
          return;
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {}
    })();
  }, []);
  return (
    <section className="relative space-y-5 animate-fadeIn">
      <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
        Users Management
      </h1>

      <div className="rounded-xl bg-input-bg p-5 max-sm:p-4">
        <p className="text-text-secondary max-sm:text-xs">
          View, manage and monitor registered users.
        </p>
      </div>

      {users.length !== 0 && (
        <div className="w-full overflow-x-hidden">
          <table className="w-full">
            <thead className="text-text-primary bg-input-bg border-b border-input-border">
              <tr className="text-left px-3">
                <th className="px-3 py-2.5 max-xl:hidden">ID</th>
                <th className="px-3 py-2.5 max-lg:text-sm max-md:text-xs">
                  Username
                </th>
                <th className="px-2 py-2.5 max-lg:text-sm max-md:text-xs">
                  Email
                </th>
                <th className="px-2 py-2.5 max-lg:text-sm max-md:text-xs text-center">
                  Role
                </th>
                <th className="px-2 py-2.5 max-lg:hidden">Join Time</th>
                <th className="px-2 py-2.5 max-lg:text-sm max-md:text-xs text-center">
                  Operation
                </th>
              </tr>
            </thead>
            <tbody className="text-text-secondary text-sm max-sm:text-xs">
              {users &&
                users.map((item) => {
                  return <AdminUsersItem key={item._id} {...item} />;
                })}
            </tbody>
          </table>
        </div>
      )}
      {users.length === 0 && <EmptyAdminUsersDashboard />}
    </section>
  );
}
export default AdminUsers;
