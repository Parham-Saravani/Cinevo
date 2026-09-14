function AdminMovies() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-text-primary">Movies</h1>

        <button className="bg-cta-primary px-5 py-3 rounded-xl">
          Add Movie
        </button>
      </div>

      <div className="mt-8 rounded-xl bg-input-bg p-5">
        <p className="text-text-secondary">
          Manage all movies available on Cinevo.
        </p>
      </div>
    </section>
  );
}
export default AdminMovies;
