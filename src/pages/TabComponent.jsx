import React from 'react'
import Cards from '../components/Cards';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { getData } from '../services/axios.service';
import { useState, useEffect } from 'react';
import EditModal from '../components/EditModal';
import AddModal from '../components/AddModal';
import Users from '../components/Users';
import Posts from '../components/Posts';


const TabComponent = () => {
    const [key, setKey] = useState('products');

    const [show, setShow] = useState(false);

    const [showAdd, setShowAdd] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleAddClose = () => setShowAdd(false);
    const handleAddShow = (e) => {
        e.preventDefault();
        setShowAdd(true)};
  
    
    const [prods, setProds] = useState([]);
    const [users, setUsers ] = useState([]);
    const [posts, setPosts] = useState([]);
    const [editProduct, setEditProduct] = useState({});
    const [addProduct, setAddProduct] = useState({});


    useEffect(() =>{
       getData(key).then((resp) => {
        if (key === 'products') {
          return setProds(resp.data.products)
        }
        else if (key === 'users') {
          return setUsers(resp.data.users)
        }
        if (key === 'posts') {
          return setPosts(resp.data.posts)
        }
      
      })

    }, [key]);

    const handleDelete = (e, id) =>{
        e.preventDefault();
        const filteredArray = prods.filter((prod) =>{
             return prod.id !== id;
            })
        setProds(filteredArray);   
    }

    const handleEdit = (e, product) =>{
        e.preventDefault();
        setEditProduct(product);
        setShow(true);
    }
    
 
    const handleChanges = (e) =>{
        let updatedData = {
             ...editProduct,
             [e.target.name]: e.target.value
        }
        setEditProduct(updatedData);
     }

     const handleEditChanges = (e) =>{
        e.preventDefault();
        const updatedProds =  prods.map((prod) => {
            return prod.id === editProduct.id ? editProduct : prod;
        })    
        setProds(updatedProds);
        setShow(false);
    }

    const handleAddChanges = (e) =>{
      e.preventDefault();
      const newProduct = {
        ...addProduct,
        [e.target.name] : e.target.value,
      }
      setAddProduct(newProduct);
    }

    const handleSubmit = (e) =>{
       e.preventDefault();
       prods.unshift(addProduct);

       setAddProduct(prods);
       setShow(false);
    }


  

    return (
        <>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="products" title="Products">
            <Cards prods = {prods} handleDelete = {handleDelete} handleEdit = {handleEdit} handleAddShow = {handleAddShow}/>
          </Tab>
           <Tab eventKey="posts" title="Posts">
            <Posts posts ={posts}/>        
            </Tab>
             <Tab eventKey="users" title="Users">
            <Users users = {users}/>
          </Tab> 
        </Tabs>

        <EditModal show = {show} handleClose ={handleClose} product = {editProduct} handleChanges = {handleChanges} handleEditChanges = {handleEditChanges}/>

        <AddModal showAdd={showAdd} handleAddClose={handleAddClose} handleAddChanges={handleAddChanges} handleSubmit={handleSubmit}/>
        </>
      );

}

export default TabComponent
