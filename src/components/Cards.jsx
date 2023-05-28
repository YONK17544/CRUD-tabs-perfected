import React from 'react'
import CardItems from './CardItems';
// import { getData } from '../services/axios.service';
// import { PRODUCT_URL } from '../constants/api.constants';
// import { useState, useEffect } from 'react';

const Cards = ({prods, handleDelete, handleEdit, handleAddShow}) => {
    //  const [prods, setProds] = useState([]);

    //  useEffect(() =>{
    //     getData(PRODUCT_URL).then((resp) => {setProds(resp.data.products)})
    //  }, []);

  return (
    <>
     <button className = "m-3" variant = "primary" onClick = {(e) => {handleAddShow(e)}}>Add</button>
     <div className = "d-flex flex-wrap justify-content-center">
        {
            prods.map((prods) =>{
                return <CardItems product = {prods} handleDelete = {handleDelete}
                handleEdit = {handleEdit}/>
            })
        }
    </div>
    </>
   
  )
}

export default Cards


