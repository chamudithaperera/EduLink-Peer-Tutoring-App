import Sidebar from "../Sidebar";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-screen bg-richblue-800 border-r border-richblack-700">
        <Sidebar />
      </div>

      {/* Profile Content */}
      <div className="flex-1 ml-64 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Profile</h1>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-richblue-800"
              />
            </div>
            {/* Add Profile Picture Button */}
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => document.getElementById("profilePicture").click()}
            >
              Add Profile Picture
            </button>
            <input
              type="file"
              id="profilePicture"
              className="hidden"
            />
          </div>

          {/* Form */}
          <form>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-richblue-600 focus:border-richblue-600"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-richblue-600 focus:border-richblue-600"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-richblue-600 focus:border-richblue-600"
                placeholder="Enter your password"
              />
            </div>

            {/* Bio */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-richblue-600 focus:border-richblue-600"
                placeholder="Write a short bio about yourself"
                rows="4"
              ></textarea>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => alert("Changes Saved!")}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
