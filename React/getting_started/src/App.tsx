import { FC, useState } from 'react'
import './App.css'

const App = ()  => {
  const [filterText, setFilterText] = useState('')
  const data = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  const Fruits = data
      .filter((data) => data.category === 'Fruits')
      .map((data) =><>
                          <tr>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                          </tr>
                        </>)
  const Vegetables = data
      .filter((data) => data.category === 'Vegetables')
      .map((data) => <>
                          <tr>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                          </tr>
                          </>)
  const handleSearch()

  return (
    <>
    <div className='Category-Search'>
      <input type='search' id='query' placeholder='Search'></input>
    </div>
    <div className='checkbox'>
      <input type='checkbox' id='stock' />
      <label htmlFor='stock'>Only show products in stock</label>
    </div>
      <div className='category-Fruits'>
        <ul>
          <table>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
              <h1>Fruits</h1>
              {Fruits}
              <h1>Vegetables</h1>
              {Vegetables}
          </table>
        </ul>
      </div>
    </>
  )
}
export default App
