function AdminComments() {
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
            <tr className="border-b border-input-border">
              <td className="px-3 py-4">Parham</td>

              <td className="px-3 py-4 max-w-[300px] truncate">
                Amazing movie with a great story.
              </td>

              <td className="px-3 py-4 max-lg:hidden">Interstellar</td>

              <td className="px-3 py-4 text-center">
                <span className="px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs">
                  Yes
                </span>
              </td>

              <td className="px-3 py-4 max-lg:hidden">Sep 16, 2026</td>

              <td className="px-3 py-4">
                <div className="flex justify-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs">
                    View
                  </button>

                  <button className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-500 text-xs">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default AdminComments;
