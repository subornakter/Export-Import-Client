import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    // const toastId = toast.loading("Updating profile...");

    try {
      await updateUserProfile(displayName, photoURL);
          toast.success("Profile updated successfully!", );
    } catch (error) {
        toast.error("Failed to update profile: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-gray-50">
      <title>Alpha Global Trade - profile</title>
      <div className="card bg-base-100 w-full max-w-sm shadow-xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Update Profile</h2>

        <div className="flex justify-center mb-4">
          <img
            src={photoURL || "https://via.placeholder.com/80"}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-blue-400"
          />
        </div>

        <form onSubmit={handleUpdate} className="space-y-3">
          <div>
            <label className="block mb-1 font-medium text-sm">Display Name</label>
            <input
              type="text"
              className="input input-bordered w-full rounded-full"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full rounded-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn w-full text-white rounded-full bg-gradient-to-r from-pink-500 to-red-600 mt-3"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default profile;

