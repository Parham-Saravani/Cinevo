function AdminSettings() {
  return (
    <section className="space-y-6 animate-fadeIn">
      <div>
        <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
          Settings
        </h1>

        <p className="mt-2 text-text-secondary">
          Manage administrator preferences and platform configuration.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">
            Admin Profile
          </h2>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Username
              </label>

              <input
                type="text"
                placeholder="Admin username"
                className="w-full h-11 rounded-lg border border-input-border bg-background px-4 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Admin email"
                className="w-full h-11 rounded-lg border border-input-border bg-background px-4 outline-none"
              />
            </div>

            <button className="h-11 px-5 rounded-lg bg-primary text-white">
              Save Changes
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">Security</h2>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Current Password
              </label>

              <input
                type="password"
                placeholder="Current password"
                className="w-full h-11 rounded-lg border border-input-border bg-background px-4 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                New Password
              </label>

              <input
                type="password"
                placeholder="New password"
                className="w-full h-11 rounded-lg border border-input-border bg-background px-4 outline-none"
              />
            </div>

            <button className="h-11 px-5 rounded-lg bg-primary text-white">
              Update Password
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-input-bg p-5">
        <h2 className="text-lg font-semibold text-text-primary">
          Platform Preferences
        </h2>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-input-border p-4">
            <div>
              <h3 className="font-medium text-text-primary">
                Maintenance Mode
              </h3>

              <p className="text-sm text-text-secondary">
                Temporarily disable public access to the platform.
              </p>
            </div>

            <button className="h-6 w-11 rounded-full bg-primary"></button>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-input-border p-4">
            <div>
              <h3 className="font-medium text-text-primary">
                Allow User Registration
              </h3>

              <p className="text-sm text-text-secondary">
                Enable new users to create accounts.
              </p>
            </div>

            <button className="h-6 w-11 rounded-full bg-primary"></button>
          </div>
        </div>
      </div>
زی     </section>
  );
}
export default AdminSettings;
