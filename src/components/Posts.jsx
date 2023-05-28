import React from 'react'
import Table from 'react-bootstrap/Table'; 

const Posts = ({posts}) => {

    const columnName = Object.keys(posts[0]);
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
        {
            columnName.map((column) => {
                return <th key = {column}>{column}</th>
            })
        }
        </tr>
      </thead>
      <tbody>
        {
            posts.map((post, index) =>{
                return <tr key = {index}>{
                    Object.values(post).map((value) =>{
                        return <th key = {value.index}>{value}</th>
                    })
                }</tr>
            })
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Posts
