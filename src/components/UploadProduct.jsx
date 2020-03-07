import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Title from './Title'

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 400,
  },
})

class UploadProduct extends Component {
  state = {
    productId: '',
    productName: '',
    productDate: '',
    productInventoryLevel: ''
  }

  handleInputBox = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <Title>Upload Product</Title>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="productId"
            label="Product ID"
            variant="outlined"
            onChange={this.handleInputBox}
            required
          />
          <TextField
            id="productName"
            label="Product Name"
            variant="outlined"
            onChange={this.handleInputBox}
            required
          />
          <TextField
            id="productDate"
            label="Product Date"
            variant="outlined"
            onChange={this.handleInputBox}
            required
          />
          <TextField
            id="productInventoryLevel"
            label="Product Inventory Level"
            variant="outlined"
            onChange={this.handleInputBox}
            required
          />
        </form>
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(UploadProduct)
