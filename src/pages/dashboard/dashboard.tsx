import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import DashboardChart from "./dashboard-chart";

export default function Dashboard() {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    error,
    isFetching,
  } = useProducts({ page });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong.</div>;
  }

  return (
    <div className="space-y-6 py-6">
      <h1 className="text-3xl font-bold px-6">
        Product Dashboard
      </h1>

      <div className="grid px-6 overflow-auto max-h-[700px]">
        <DashboardChart />
      </div>
    </div>
  );
}