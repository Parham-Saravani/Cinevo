import { useLoaderData } from "react-router";
import EmptyAdminCommentsDashboard from "../../Empty/EmptyAdminCommentsDashboard";
import AdminCommentItem from "../elements/AdminCommentItem";

function AdminComments() {
  const data = useLoaderData();
  console.log(data);

  return (
    <section className="relative space-y-5 animate-fadeIn">
      <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
        Comments Management
      </h1>

      <div className="rounded-xl bg-input-bg p-5 max-sm:p-4">
        <p className="text-text-secondary max-sm:text-xs">
          View, moderate and manage user comments across the platform.
        </p>
      </div>

      {data.length !== 0 && (
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead className="bg-input-bg border-b border-input-border text-text-primary">
              <tr className="text-left">
                <th className="px-3 py-2.5">User</th>
                <th className="px-3 py-2.5">Comment</th>
                <th className="px-3 py-2.5 max-lg:hidden">Content</th>
                <th className="px-3 py-2.5 text-center">Spoiler</th>
                <th className="px-3 py-2.5 max-lg:hidden">Date</th>
                <th className="px-3 py-2.5 text-center">Operation</th>
              </tr>
            </thead>

            <tbody className="text-text-secondary text-sm">
              {data.map((item) => {
                return <AdminCommentItem {...item} />;
              })}
            </tbody>
          </table>
        </div>
      )}
      {data.length === 0 && <EmptyAdminCommentsDashboard />}
    </section>
  );
}
export default AdminComments;
