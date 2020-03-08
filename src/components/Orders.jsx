import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'
export default function Orders({currentProduct}) {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Inventory Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentProduct && currentProduct.data.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{currentProduct.product_id}</TableCell>
              <TableCell>{currentProduct.product_name}</TableCell>
              <TableCell>{product.date}</TableCell>
              <TableCell>{product.inventory_level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
