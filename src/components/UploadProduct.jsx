import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Title from './Title'
import axios from 'axios'

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
  button: {
    width: 150,
    margin: theme.spacing(2),
  },
})

const initialState = {
  product_id: '',
  product_name: '',
  date: '',
  inventory_level: ''
};

class UploadProduct extends Component {
  state = initialState

  handleInputBox = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { product_id, product_name, date, inventory_level } = this.state
    try {
      await axios.post('https://us-central1-flowlity-4b6c5.cloudfunctions.net/app/api/create', {
        product_id: product_id,
        product_name: product_name,
        date: date,
        inventory_level: inventory_level
      })
    }
    catch(err) {
      console.log(err)
    }
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <Title>Upload Product</Title>
        <div className={classes.root}>
          <TextField
            id="product_id"
            label="Product ID"
            variant="outlined"
            onChange={this.handleInputBox}
            required
          />
          <TextField
            id="product_name"
            label="Product Name"
            variant="outlined"
            onChange={this.handleInputBox}
            required
          />
          <TextField
            id="date"
            label="Product Date"
            variant="outlined"
            onChange={this.handleInputBox}
            required
          />
          <TextField
            id="inventory_level"
            label="Product Inventory Level"
            variant="outlined"
            onChange={this.handleInputBox}
            required
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={this.handleSubmit}
          >
            Upload
          </Button>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(UploadProduct)
