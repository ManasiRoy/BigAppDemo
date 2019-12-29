import React, { Component } from 'react'
import DataTable from 'react-data-table-component';
import axios from 'axios'
import './filter.scss'

export default class FilterTable extends Component {
    state = {
        data: []
    }
    componentDidMount(){
        this.getData();
    }

    getData = async() => {
       let response = await axios.get('https://jsonplaceholder.typicode.com/users')
       this.setState({data: response.data})
    }
  render() {
    const {data} = this.state   
    const paginationOptions = { rowsPerPageText: 'items'};

    const columns = [
        {
          name: 'Ful Name',
          cell: row => <div><div>{row.name}</div><span className="emailer">{row.email}</span></div>,

        },
        {
            name: 'Phone',
            selector: 'phone',
          },
          {
            name: 'User Name',
            selector: 'username',
          },{
            name: 'Company Name',
            selector: 'company.name',
          }
      ];
    return (
        <div className="container">
        <DataTable className="table"
            columns={columns}
            data={data}
            pagination={true}
            paginationPerPage={5}
            sortable={true}
            paginationComponentOptions={paginationOptions}
            striped responsive
            noHeader = {true}
        />
      </div>
    )
  }
};