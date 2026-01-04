import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Cell,
} from "recharts";
import useAuth from "../hooks/useAuth";

const COLORS = ["#ec4899", "#3b82f6", "#facc15", "#10b981"]; // Pink, Blue, Yellow, Green

const Statistics = () => {
  const { user } = useAuth();

  const [role, setRole] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Step 1: Get role
  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://import-export-server-lac.vercel.app/users/role?email=${user.email}`)
      .then((res) => setRole(res.data.role))
      .catch(() => setLoading(false));
  }, [user]);

  // 🔹 Step 2: Load stats
  useEffect(() => {
    if (!role || !user?.email) return;

    const url =
      role === "admin"
        ? `https://import-export-server-lac.vercel.app/admin/stats?email=${user.email}`
        : `https://import-export-server-lac.vercel.app/user/stats?email=${user.email}`;

    axios
      .get(url)
      .then((res) => {
        setStats(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [role, user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // 🔹 Chart Data
  const adminChartData = [
    { name: "My Exports", value: stats?.myTotalExports || 0 },
    { name: "Export Quantity", value: stats?.myTotalQuantity || 0 },
    { name: "Export Value", value: stats?.myExportValue || 0 },
  ];

  const userChartData = [
    { name: "My Imports", value: stats?.totalImports || 0 },
    { name: "Imported Quantity", value: stats?.totalQuantity || 0 },
    { name: "Total Spent", value: stats?.totalSpent || 0 },
  ];

  const chartData = role === "admin" ? adminChartData : userChartData;

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <h2 className="text-2xl font-bold">{role === "admin" ? "Admin Dashboard" : "User Dashboard"}</h2>

      {/* Stat Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {role === "admin" ? (
          <>
            <StatCard title="Total Users" value={stats.totalUsers} icon={<FaUsers />} color="#3b82f6" />
            <StatCard title="My Exports" value={stats.myTotalExports} icon={<FaBoxOpen />} color="#ec4899" />
            <StatCard title="Export Value" value={`$${stats.myExportValue}`} icon={<FaMoneyBillWave />} color="#facc15" />
            <StatCard title="Avg Rating" value={stats.avgRating?.toFixed(1)} icon={<FaStar />} color="#10b981" />
          </>
        ) : (
          <>
            <StatCard title="My Imports" value={stats.totalImports} icon={<FaShoppingCart />} color="#3b82f6" />
            <StatCard title="Imported Quantity" value={stats.totalQuantity} icon={<FaBoxOpen />} color="#ec4899" />
            <StatCard title="Total Spent" value={`$${stats.totalSpent}`} icon={<FaMoneyBillWave />} color="#facc15" />
          </>
        )}
      </div>

      {/* Bar Chart */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="mb-4 text-lg font-semibold">{role === "admin" ? "Export Overview" : "Import Overview"}</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Chart Labels Below */}
        <div className="flex justify-around mt-4">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;

/* =========================
   🔹 Stat Card Component
   ========================= */
const StatCard = ({ title, value, icon, color }) => (
  <div className="p-5 transition bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div className="text-3xl" style={{ color }}>{icon}</div>
    </div>
  </div>
);
