import React from "react";
import { fetchUsers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  company: {
    name: string;
  };
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const UserView: React.FC = () => {
  const dispatch = useAppDispatch();

  const { users, loading, error } = useAppSelector(
    (state: { user: UserState }) => state.user
  );

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold my-2">List of Users</h2>
      <button
        onClick={handleFetchUsers}
        className="p-4 bg-slate-900 text-white rounded-md my-2"
      >
        Fetch Users
      </button>

      {loading && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-2 border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-4 border-r border-gray-600 text-left">Name</th>
                <th className="p-4 border-r border-gray-600 text-left">
                  Email
                </th>
                <th className="hidden md:table-cell p-4 border-r border-gray-600 text-left">
                  Phone
                </th>
                <th className="hidden lg:table-cell p-4 border-r border-gray-600 text-left">
                  Website
                </th>
                <th className="hidden lg:table-cell p-4 text-left">Company</th>
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-800 odd:bg-gray-400 text-white"
                  >
                    <td className="p-4 border-r border-gray-600">
                      <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
                    </td>
                    <td className="p-4 border-r border-gray-600">
                      <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
                    </td>
                    <td className="hidden md:table-cell p-4 border-r border-gray-600">
                      <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
                    </td>
                    <td className="hidden lg:table-cell p-4 border-r border-gray-600">
                      <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
                    </td>
                    <td className="hidden lg:table-cell p-4">
                      <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {error && <h3 className="text-red-500">{error}</h3>}

      {!loading && users.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-2 border-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-black text-white">
              <tr>
                <th className="text-center p-4 border-r border-gray-600 ">
                  Name
                </th>
                <th className="hidden lg:table-cell p-4 border-r border-gray-600 text-center">
                  Email
                </th>
                <th className="hidden md:table-cell p-4 border-r border-gray-600 text-center">
                  Phone
                </th>
                <th className=" p-4 border-r border-gray-600 text-center">
                  Role
                </th>
                <th className="hidden lg:table-cell p-4 text-center">
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User) => (
                <tr
                  key={user.id}
                  className="even:bg-gray-800 odd:bg-gray-400 text-white"
                >
                  <td className="p-4 border-r border-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="hidden lg:table-cell p-4 border-r border-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    {user.email}
                  </td>
                  <td className="hidden md:table-cell p-4 border-r border-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    {user.phone}
                  </td>
                  <td className=" p-4 border-r border-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                    {user.role}
                  </td>
                  <td className="hidden lg:table-cell p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                    {user.company.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserView;
