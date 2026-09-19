import { useEffect, useId, useState } from "react";
import PasswordInput from "../../PasswordInput";
import { getUserData } from "../../../Utilities/uploadProfileImage";
import Toast from "../../Toast/Toast";
import getCookie from "../../../Utilities/Cookie/getCookie";
import { baseUrl } from "../../../Utilities/constants";

function UserSetting() {
  const id = useId();
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [userUsername, setUserUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    if (Object.keys(updatedData).length) {
      (async () => {
        try {
          const token = getCookie("auth-token");
          const repsonse = await fetch(`${baseUrl}/api/user/update`, {
            signal: controller.signal,
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
          setAdminUsername("");
          setAdminEmail("");
          Toast({ children: "Profile updated successfully.", isError: false });
        } catch (error) {
          Toast({
            children: "Please check your network and try again!",
            isError: false,
          });
        }
      })();
    }
    return () => {
      controller.abort();
    };
  }, [updatedData]);

  const updateAccountDetail = async () => {
    if (profileImageFile) {
      setLoading(true);
      const value = await getUserData(profileImageFile);
      if (value) {
        setUpdatedData((prev) => ({ ...prev, imageUrl: value }));
      } else {
        setUpdatedData({});
        setLoading(false);
        Toast({ children: "Image does'nt upload successfully." });
        return;
      }
    }
    if (userUsername) {
      setUpdatedData((prev) => ({ ...prev, username: userUsername }));
    }
    if (userEmail) {
      setUpdatedData((prev) => ({ ...prev, email: userEmail }));
    }

    if (!profileImageFile && !userUsername && !userEmail) {
      Toast({ children: "No changes detected." });
    }
  };

  return (
    <main className="space-y-6 animate-fadeIn">
      <div>
        <h1 className="text-3xl max-sm:text-2xl font-bold text-text-primary">
          Account Settings
        </h1>

        <p className="mt-2 text-text-secondary">
          Manage your profile, security, and account preferences.
        </p>
      </div>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Profile Information */}
        <div className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">
            Profile Information
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Update your personal information and profile picture.
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Profile Picture
              </label>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-dashed border-input-border p-4">
                <div className="size-16 rounded-full overflow-hidden bg-bg-primary">
                  {profileImagePreview && (
                    <img
                      src={profileImagePreview}
                      alt="Profile Preview"
                      className="animate-fadeIn size-16 object-cover"
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
                    accept="image/*"
                    type="file"
                    hidden
                  />
                  Upload Image
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Username
              </label>

              <input
                value={userUsername}
                onInput={(event) => setUserUsername(event.target.value)}
                type="text"
                placeholder="Your username"
                className="w-full h-14 rounded-xl border-2 border-input-border/50 px-4 text-text-primary outline-hidden"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Email Address
              </label>

              <input
                value={userEmail}
                onInput={(event) => setUserEmail(event.target.value)}
                type="email"
                placeholder="Your email address"
                className="w-full h-14 rounded-xl border-2 border-input-border/50 px-4 text-text-primary outline-hidden"
              />
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
        <form className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">
            Password & Security
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Change your password and keep your account secure.
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Current Password
              </label>

              <PasswordInput>Current password</PasswordInput>
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                New Password
              </label>

              <PasswordInput>New password</PasswordInput>
            </div>

            <div>
              <label className="block mb-2 text-sm text-text-secondary">
                Confirm Password
              </label>

              <PasswordInput>Confirm password</PasswordInput>
            </div>

            <button className="w-full h-11 rounded-lg bg-cta-primary text-white cursor-pointer">
              Update Password
            </button>
          </div>
        </form>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Preferences */}
        <div className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">
            Preferences
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Customize your experience.
          </p>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <div>
                <h3 className="font-medium text-text-primary">
                  Email Notifications
                </h3>

                <p className="text-sm text-text-secondary">
                  Receive important account updates.
                </p>
              </div>
              <label
                className="rounded-full bg-bg-primary/70 relative w-12 h-6 cursor-pointer before:bg-white before:absolute before:w-4.5 before:h-4.5 before:rounded-full before:top-0 before:bottom-0 before:my-auto before:left-1 before:transition-all before:duration-300 has-checked:bg-cta-primary has-checked:before:left-6.5 transition-colors duration-300"
                htmlFor={id + "email-notifications"}
              >
                <input id={id + "email-notifications"} type="checkbox" hidden />
              </label>{" "}
            </div>
          </div>
        </div>

        {/* Account Activity */}
        <div className="rounded-xl bg-input-bg p-5">
          <h2 className="text-lg font-semibold text-text-primary">
            Account Activity
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Overview of your account information.
          </p>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <span className="text-text-secondary">Member Since</span>
              <span className="font-medium text-text-primary">
                September 2026
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <span className="text-text-secondary">Account Status</span>
              <span className="font-medium text-green-500">Active</span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-input-border p-4">
              <span className="text-text-secondary">Subscription</span>
              <span className="font-medium text-text-primary">Premium</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserSetting;
