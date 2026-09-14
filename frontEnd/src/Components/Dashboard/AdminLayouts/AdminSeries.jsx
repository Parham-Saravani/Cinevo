function AdminSeries() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-text-primary">Series</h1>

        <button className="bg-cta-primary px-5 py-3 rounded-xl">
          Add Series
        </button>
      </div>

      <div className="mt-8 rounded-xl bg-input-bg p-5">
        <p className="text-text-secondary">
          Manage all TV series and episodes.
        </p>
      </div>
    </section>
  );
}
export default AdminSeries;
