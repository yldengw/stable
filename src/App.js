import React from "react";
import { AutoSizeSTable } from "virtualized-sc-table";
import sampleDate from "./data";
import "./styles.css";

export default function App() {
  const { rowHeader, colHeader, data } = sampleDate;
  return (
    <>
      <h3 className="text-center">XX 公司季度销售量统计表</h3>
      <div
        style={{
          height: 500
        }}
      >
        <AutoSizeSTable
          rowHeader={rowHeader}
          colHeader={colHeader}
          data={data}
          cellWidth={100}
          cellHeight={40}
          enableColResize
          enableRowResize
          enableColSorting
          enableRowSorting
        />
      </div>
    </>
  );
}
