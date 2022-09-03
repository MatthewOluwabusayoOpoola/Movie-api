import "./Table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
   
    {
        id: 114567,
        product: "Lenovo ",
        img: "https://www.notebookcheck.net/typo3temp/_processed_/2/b/csm_LenovoLegionY520-15__1__03_d18b4036f3.jpg",
        customer: "Pelumi Adika",
        date: "1 December",
        amount: "$1000",
        method: "Cash on Delivery",
        status: "Approved"
    },
    {
        id: 114567,
        product: "Lenovo ",
        img: "https://www.notebookcheck.net/typo3temp/_processed_/2/b/csm_LenovoLegionY520-15__1__03_d18b4036f3.jpg",
        customer: "Pelumi Adika",
        date: "1 December",
        amount: "$1000",
        method: "Cash on Delivery",
        status: "Declined"
    },
    {
        id: 114567,
        product: "Lenovo ",
        img: "https://www.notebookcheck.net/typo3temp/_processed_/2/b/csm_LenovoLegionY520-15__1__03_d18b4036f3.jpg",
        customer: "Pelumi Adika",
        date: "1 December",
        amount: "$1000",
        method: "Cash on Delivery",
        status: "Pending"
    },
    {
        id: 114567,
        product: "Lenovo ",
        img: "https://www.notebookcheck.net/typo3temp/_processed_/2/b/csm_LenovoLegionY520-15__1__03_d18b4036f3.jpg",
        customer: "Pelumi Adika",
        date: "1 December",
        amount: "$1000",
        method: "Cash on Delivery",
        status: "Declined"
    },
    {
        id: 114567,
        product: "Lenovo ",
        img: "https://www.notebookcheck.net/typo3temp/_processed_/2/b/csm_LenovoLegionY520-15__1__03_d18b4036f3.jpg",
        customer: "Pelumi Adika",
        date: "1 December",
        amount: "$1000",
        method: "Cash on Delivery",
        status: "Approved"
    },
    {
        id: 114567,
        product: "Lenovo ",
        img: "https://www.notebookcheck.net/typo3temp/_processed_/2/b/csm_LenovoLegionY520-15__1__03_d18b4036f3.jpg",
        customer: "Pelumi Adika",
        date: "1 December",
        amount: "$1000",
        method: "Cash on Delivery",
        status: "Pending"
    },
]
function List() {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="table Cell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt={row.product} className="image"/>
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List