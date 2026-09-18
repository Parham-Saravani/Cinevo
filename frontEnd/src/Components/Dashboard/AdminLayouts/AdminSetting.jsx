import PasswordInput from "../../PasswordInput";
import { useEffect, useId, useState } from "react";
import getCookie from "../../../Utilities/Cookie/getCookie";
import { getUserData } from "../../../Utilities/uploadProfileImage";
import { baseUrl } from "../../../Utilities/constants";
import Toast from "../../Toast/Toast";

function AdminSettings() {
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [adminUsername, setAdminUsername] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    if (Boolean(Object.keys(updatedData).length)) {
      (async () => {
        try {
          const token = getCookie("auth-token");
          const repsonse = await fetch(`${baseUrl}/api/user/update`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, data: updatedData }),
          });
          if (!repsonse.ok) {
            console.log("errorr");
            return;
          }
          setLoading(false);
          const data = await repsonse.json();
          setProfileImagePreview(null);
          setAdminUsername("");
          setAdminEmail("");
          Toast({ children: "Profile updated successfully.", isError: false });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [updatedData]);

  const updateAccountDetail = async () => {
    if (profileImageFile) {
      setLoading(true);
      const value = await getUserData(profileImageFile);
      setUpdatedData((prev) => ({ ...prev, imageUrl: value }));
    } else if (adminUsername) {
      setUpdatedData((prev) => ({ ...prev, username: adminUsername }));
    } else if (adminEmail) {
      setUpdatedData((prev) => ({ ...prev, email: adminEmail }));
    } else {
      Toast({ children: "No changes detected." });
    }
  };

  const id = useId();
  return (
    <main className="space-y-6 animate-fadeIn">
      <div>
        <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
          Settings
        </h1>

        <p className="mt-2 text-text-secondary">
          Manage administrator preferences, platform behavior, and account
          security.
        </p>
      </div>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">
            Account Settings
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Update your administrator account information.
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Username
              </label>

              <input
                value={adminUsername}
                onInput={(event) => setAdminUsername(event.target.value)}
                type="text"
                placeholder="Administrator username"
                className="w-full h-14 rounded-xl border-2 border-input-border/50 px-4 text-text-primary outline-hidden focus-within:border-input-border-focus transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Email Address
              </label>

              <input
                value={adminEmail}
                onInput={(event) => setAdminEmail(event.target.value)}
                type="email"
                placeholder="Administrator email"
                className="w-full h-14 rounded-xl border-2 border-input-border/50 px-4 text-text-primary outline-hidden focus-within:border-input-border-focus transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Profile Image
              </label>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-dashed border-input-border p-4">
                <div className="size-16 rounded-full bg-bg-primary overflow-hidden">
                  {profileImagePreview && (
                    <img
                      className="animate-fadeIn size-16 rounded-full bg-bg-primary"
                      src={profileImagePreview}
                    />
                  )}
                </div>
                <label
                  htmlFor={id + "upload-image"}
                  className="flex items-center justify-center h-10 px-4 rounded-lg bg-cta-primary text-white cursor-pointer"
                >
                  <input
                    onChange={(event) => {
                      setProfileImagePreview(
                        URL.createObjectURL(event.target.files[0]),
                      );
                      setProfileImageFile(event.target.files[0]);
                    }}
                    id={id + "upload-image"}
                    type="file"
                    accept="image/*"
                    hidden
                  />
                  Upload Image
                </label>
              </div>
            </div>

            <button
              disabled={loading}
              onClick={updateAccountDetail}
              className={`transition-colors duration-300 w-full h-11 rounded-lg bg-cta-primary text-white cursor-pointer disabled:bg-cta-primary/50 ${loading ? "flex justify-center items-center" : ""}`}
            >
              {loading ? (
                <div className="aspect-square w-3 h-3 animate-loader rounded-full"></div>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">Security</h2>

          <p className="mt-1 text-sm text-text-secondary">
            Manage your password and account security.
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Current Password
              </label>
              <PasswordInput children={"Current password"} />
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                New Password
              </label>
              <PasswordInput children={"New Password"} />
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Confirm Password
              </label>
              <PasswordInput children={"Confirm password"} />
            </div>

            <button className="w-full h-11 rounded-lg bg-cta-primary text-white cursor-pointer">
              Update Password
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Platform Settings */}
        <div className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">
            Platform Settings
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Configure core platform behavior.
          </p>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <div>
                <h3 className="font-medium text-text-primary">
                  Maintenance Mode
                </h3>

                <p className="text-sm text-text-secondary">
                  Disable public access temporarily.
                </p>
              </div>

              <label
                className="rounded-full bg-bg-primary/70 relative w-12 h-6 cursor-pointer before:bg-white before:absolute before:w-4.5 before:h-4.5 before:rounded-full before:top-0 before:bottom-0 before:my-auto before:left-1 before:transition-all before:duration-300 has-checked:bg-cta-primary has-checked:before:left-6.5 transition-colors duration-300"
                htmlFor={id + "maintence-mode"}
              >
                <input id={id + "maintence-mode"} type="checkbox" hidden />
              </label>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <div>
                <h3 className="font-medium text-text-primary">
                  User Registration
                </h3>

                <p className="text-sm text-text-secondary">
                  Allow new users to create accounts.
                </p>
              </div>
              <label
                className="rounded-full bg-bg-primary/70 relative w-12 h-6 cursor-pointer before:bg-white before:absolute before:w-4.5 before:h-4.5 before:rounded-full before:top-0 before:bottom-0 before:my-auto before:left-1 before:transition-all before:duration-300 has-checked:bg-cta-primary has-checked:before:left-6.5 transition-colors duration-300"
                htmlFor={id + "use-registration"}
              >
                <input id={id + "use-registration"} type="checkbox" hidden />
              </label>{" "}
            </div>

            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <div>
                <h3 className="font-medium text-text-primary">
                  Comments System
                </h3>

                <p className="text-sm text-text-secondary">
                  Enable comments across content.
                </p>
              </div>
              <label
                className="rounded-full bg-bg-primary/70 relative w-12 h-6 cursor-pointer before:bg-white before:absolute before:w-4.5 before:h-4.5 before:rounded-full before:top-0 before:bottom-0 before:my-auto before:left-1 before:transition-all before:duration-300 has-checked:bg-cta-primary has-checked:before:left-6.5 transition-colors duration-300"
                htmlFor={id + "comment-system"}
              >
                <input id={id + "comment-system"} type="checkbox" hidden />
              </label>{" "}
            </div>
          </div>
        </div>

        {/* Content Preferences */}
        <div className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">
            Content Preferences
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Manage moderation and content visibility.
          </p>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <div>
                <h3 className="font-medium text-text-primary">
                  Auto Approve Comments
                </h3>

                <p className="text-sm text-text-secondary">
                  Publish comments without review.
                </p>
              </div>
              <label
                className="rounded-full bg-bg-primary/70 relative w-12 h-6 cursor-pointer before:bg-white before:absolute before:w-4.5 before:h-4.5 before:rounded-full before:top-0 before:bottom-0 before:my-auto before:left-1 before:transition-all before:duration-300 has-checked:bg-cta-primary has-checked:before:left-6.5 transition-colors duration-300"
                htmlFor={id + "auto-approve-comments"}
              >
                <input
                  id={id + "auto-approve-comments"}
                  type="checkbox"
                  hidden
                />
              </label>{" "}
            </div>

            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <div>
                <h3 className="font-medium text-text-primary">
                  Spoiler Comments
                </h3>

                <p className="text-sm text-text-secondary">
                  Allow spoiler-tagged comments.
                </p>
              </div>
              <label
                className="rounded-full bg-bg-primary/70 relative w-12 h-6 cursor-pointer before:bg-white before:absolute before:w-4.5 before:h-4.5 before:rounded-full before:top-0 before:bottom-0 before:my-auto before:left-1 before:transition-all before:duration-300 has-checked:bg-cta-primary has-checked:before:left-6.5 transition-colors duration-300"
                htmlFor={id + "spoiler-comments"}
              >
                <input id={id + "spoiler-comments"} type="checkbox" hidden />
              </label>{" "}
            </div>

            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <div>
                <h3 className="font-medium text-text-primary">
                  Featured Content
                </h3>

                <p className="text-sm text-text-secondary">
                  Highlight selected content on homepage.
                </p>
              </div>
              <label
                className="rounded-full bg-bg-primary/70 relative w-12 h-6 cursor-pointer before:bg-white before:absolute before:w-4.5 before:h-4.5 before:rounded-full before:top-0 before:bottom-0 before:my-auto before:left-1 before:transition-all before:duration-300 has-checked:bg-cta-primary has-checked:before:left-6.5 transition-colors duration-300"
                htmlFor={id + "featured-content"}
              >
                <input id={id + "featured-content"} type="checkbox" hidden />
              </label>{" "}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default AdminSettings;
