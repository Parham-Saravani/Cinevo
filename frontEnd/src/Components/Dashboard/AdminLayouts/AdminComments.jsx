function AdminComments() {
  return (
    <section className="space-y-5 animate-fadeIn">
      <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
        Comments Moderation
      </h1>

      <div className="rounded-xl bg-input-bg p-5 max-sm:p-4">
        <p className="text-text-secondary max-sm:text-xs">
          Review, approve or remove user comments.
        </p>
      </div>
    </section>
  );
}
export default AdminComments;
