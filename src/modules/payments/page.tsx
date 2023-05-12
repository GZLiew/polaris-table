import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import tasks from "./data/tasks.json";

export default function TaskPage() {
  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Polaris Table</h2>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
