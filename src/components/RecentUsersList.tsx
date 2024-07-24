const RecentUsersList = () => {

  const userListData = [
    { name: 'Zake The Bard', email: 'zake.bard@example.com', phone: '123-456-7890', list: 'List A' },
    { name: 'Mary Jane', email: 'mary.jane@example.com', phone: '234-567-8901', list: 'List B' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '345-678-9012', list: 'List C' },
    { name: 'Alice Brown', email: 'alice.brown@example.com', phone: '456-789-0123', list: 'List D' },
    { name: 'Charlie Davis', email: 'charlie.davis@example.com', phone: '567-890-1234', list: 'List E' },
    { name: 'Diane Evans', email: 'diane.evans@example.com', phone: '678-901-2345', list: 'List F' },
    { name: 'Evan Frank', email: 'evan.frank@example.com', phone: '789-012-3456', list: 'List G' },
    { name: 'Fiona Green', email: 'fiona.green@example.com', phone: '890-123-4567', list: 'List H' },
    { name: 'George Harris', email: 'george.harris@example.com', phone: '901-234-5678', list: 'List I' },
    { name: 'Hannah White', email: 'hannah.white@example.com', phone: '012-345-6789', list: 'List J' },
  ];

  return (
    <div className="p-4 bg-white rounded-sm">
      <h2 className="text-lg font-semibold mb-6">Recent Subscribers</h2>
      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
        <div className="max-h-[400px] overflow-y-auto">
          <table className="min-w-full border-b border-gray-200">
            <thead className="sticky top-0 bg-white border-b border-gray-200">
              <tr>
                <th className="px-4 pt-4 pb-3 text-left text-xs font-medium text-gray-600 tracking-wider w-1/4">
                  Name
                </th>
                <th className="px-4 pt-4 pb-3 text-left text-xs font-medium text-gray-600 tracking-wider w-1/4">
                  Email
                </th>
                <th className="px-4 pt-4 pb-3 text-left text-xs font-medium text-gray-600 tracking-wider w-1/4">
                  Phone
                </th>
                <th className="px-4 pt-4 pb-3 text-left text-xs font-medium text-gray-600 tracking-wider w-1/4">
                  List
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userListData.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-black truncate w-1/4">{user.name}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 truncate w-1/4">{user.email}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 truncate w-1/4">{user.phone}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 truncate w-1/4">{user.list}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentUsersList;