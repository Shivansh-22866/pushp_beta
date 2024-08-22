import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
  Header: "Id",
  accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
]

const Orders = () => {

  const [rows, setRows] = useState<DataType[]>([{
    _id: "12345",
    amount: 100,
    discount: 5,
    quantity: 5,
    status: <span className="green">Delivered</span>,
    action: <Link to={"/order/12345"}>View</Link>,
  }]);

  const Table = TableHOC<DataType>(column, rows, "dashboard-product-box", "Orders", rows.length > 6)();
  return (
    <div className="container">

      <h1>My Orders</h1>
      {Table}

    </div>
  )
}

export default Orders