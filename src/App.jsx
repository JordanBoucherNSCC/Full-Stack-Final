import { Routes, Route, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Storefront from './pages/Storefront'
import Categories from './pages/Categories'
import Items from './pages/Items'
import './App.scss'

const App = () => {
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])
  const [editingCategory, setEditingCategory] = useState(null)
  const [editingItem, setEditingItem] = useState(null)

  function loadCategories() {
    const url = "http://127.0.0.1:3001/categories"
    axios.get(url)
      .then(response => {
        console.log(response)
        setCategories(response.data)
      })
      .catch(err => console.error('Error loading categories:', err))
  }

  function loadItems() {
    const url = "http://127.0.0.1:3001/items"
    axios.get(url)
      .then(response => {
        console.log(response)
        setItems(response.data)
      })
      .catch(err => console.error('Error loading items:', err))
  }

  useEffect(() => {
    console.log(`App component has loaded`)
    loadCategories()
    loadItems()
  }, [])

  const _addCategory = (newCategory) => {
    console.log(`_addCategory fired`)
    console.log(newCategory)

    const url = "http://127.0.0.1:3001/categories"
    axios.post(url, newCategory)
      .then(response => {
        console.log(response)
        loadCategories()
      })
      .catch(err => console.error('Error adding category:', err))
  }

  const _editCategory = (category) => {
    console.log(`_editCategory fired`)
    console.log(category)

    setEditingCategory(category)
  }

  const _updateCategory = (updatedCategory) => {
    console.log(`_updateCategory fired`)
    console.log(updatedCategory)

    const url = `http://127.0.0.1:3001/categories/${updatedCategory.id}`
    axios.patch(url, updatedCategory)
      .then(response => {
        console.log(response)
        loadCategories()
        setEditingCategory(null)
      })
      .catch(err => console.error('Error updating category:', err))
  }

  const _deleteCategory = (category) => {
    console.log(`_deleteCategory fired`)
    console.log(category)

    const url = `http://127.0.0.1:3001/categories/${category.id}`
    axios.delete(url)
      .then(response => {
        console.log(response)
        loadCategories()
      })
      .catch(err => console.error('Error deleting category:', err))
  }

  const _addItem = (newItem) => {
    console.log(`_addItem fired`)
    console.log(newItem)

    const url = "http://127.0.0.1:3001/items"
    axios.post(url, newItem)
      .then(response => {
        console.log(response)
        loadItems()
      })
      .catch(err => console.error('Error adding item:', err))
  }

  const _editItem = (item) => {
    console.log(`_editItem fired`)
    console.log(item)

    setEditingItem(item)
  }

  const _updateItem = (updatedItem) => {
    console.log(`_updateItem fired`)
    console.log(updatedItem)

    const url = `http://127.0.0.1:3001/items/${updatedItem.id}`
    axios.patch(url, updatedItem)
      .then(response => {
        console.log(response)
        loadItems()
        setEditingItem(null)
      })
      .catch(err => console.error('Error updating item:', err))
  }

  const _deleteItem = (item) => {
    console.log(`_deleteItem fired`)
    console.log(item)

    const url = `http://127.0.0.1:3001/items/${item.id}`
    axios.delete(url)
      .then(response => {
        console.log(response)
        loadItems()
      })
      .catch(err => console.error('Error deleting item:', err))
  }

  return (
    <>
      <nav className="main-nav">
        <NavLink to="/" end>Storefront</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/items">Items</NavLink>
      </nav>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Storefront items={items} />} />
          <Route
            path="/categories"
            element={
              <Categories
                categories={categories}
                editingCategory={editingCategory}
                _addCategory={_addCategory}
                _updateCategory={_updateCategory}
                _deleteCategory={_deleteCategory}
                _editCategory={_editCategory}
              />
            }
          />
          <Route
            path="/items"
            element={
              <Items
                items={items}
                categories={categories}
                editingItem={editingItem}
                _addItem={_addItem}
                _updateItem={_updateItem}
                _deleteItem={_deleteItem}
                _editItem={_editItem}
              />
            }
          />
        </Routes>
      </main>
    </>
  )
}

export default App

