import React from 'react';
import Table from 'react-bootstrap/Table'; 
// import { getData } from '../services/axios.service';
// import { USER_URL } from '../constants/api.constants';
// import { useState, useEffect } from 'react';

const Users = ({users}) => {

    // const [users, setUsers ] = useState([]);

    // useEffect(() => {
    //     getData(USER_URL).then((resp) => {setUsers(resp.data.users)});
    // })

    const columnName = Object.keys(users[0]);

  return (
    <div>
       <Table striped bordered hover>
      <thead>
      <tr>{
        columnName.map((column) =>{
            return <th key = {column}>{column}</th>
        })}</tr>

      </thead>
      <tbody>
       {
        users.map((user, index) =>{
            return <tr key = {index}>{
                Object.values(user).map((value) => {
                    return <td key = {value.index}>{
                       typeof value === 'object' ? JSON.stringify(value): value}</td>
                })
            }</tr>
        })
       }
      </tbody>
    </Table>
    </div>
  )
}

export default Users
