import React from "react";

export type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (row: T) => React.ReactNode;
};

type Props<T> = {
  columns: Column<T>[];
  data: T[];
};

export default function DataTable<T>({ columns, data }: Props<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full text-sm text-left">
        
        {/* HEADER */}
        <thead className="bg-(--color-dark-2) text-gray-300">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-3 font-medium">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-(--color-dark) text-white">
          {data.map((row, i) => (
            <tr key={i} className="border-t border-gray-700 hover:bg-gray-800">
              {columns.map((col, j) => (
                <td key={j} className="px-4 py-3">
                  {col.render
                    ? col.render(row)
                    : (row[col.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}