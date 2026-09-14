function AdminDashboard() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-text-primary">
        Dashboard Overview
      </h1>

      <p className="mt-2 text-text-secondary">
        Monitor platform activity and content statistics.
      </p>

      <div className="grid grid-cols-4 gap-5 mt-8">
        <div className="rounded-xl bg-input-bg p-5">
          <h3 className="text-text-secondary">Movies</h3>
          <p className="mt-2 text-3xl font-bold">120</p>
        </div>

        <div className="rounded-xl bg-input-bg p-5">
          <h3 className="text-text-secondary">Series</h3>
          <p className="mt-2 text-3xl font-bold">80</p>
        </div>

        <div className="rounded-xl bg-input-bg p-5">
          <h3 className="text-text-secondary">Users</h3>
          <p className="mt-2 text-3xl font-bold">340</p>
        </div>

        <div className="rounded-xl bg-input-bg p-5">
          <h3 className="text-text-secondary">Comments</h3>
          <p className="mt-2 text-3xl font-bold">1520</p>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
