import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Title from './Title'

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
})

class SelectProducts extends Component {
  state = {
    selectedProduct: ''
  }

  handleChange = (e) => {
    this.setState({
      selectedProduct: e.target.value
    }, () => {
      console.log(this.state.selectedProduct)
      this.props.parentCallBack(this.state.selectedProduct)
    })
  }

  render() {
    const { classes, products } = this.props
    
    return (
      <div>
        <Title>Select Product</Title>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Products</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={this.handleChange}
          >
            {
              products.map((product, index) => (
                <MenuItem value={product.product_id} key={index}>{product.product_id + '-' + product.product_name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    )
  }
}

export default withStyles(useStyles)(SelectProducts)
