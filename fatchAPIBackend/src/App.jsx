import axios from "axios"
import { useState } from "react"

function App() {
  const [prodect ,setprodect] = useState([])

  const getProdectApi  = () => {
    const api = "https://fakestoreapi.com/products"
    axios.get(api)
      .then(res => {
        console.log(res.data);
        setprodect(res.data);
      })
      .catch(error => console.log(error))
  }

  const addProdectApi = () => {
    const api = "https://fakestoreapi.com/products"
    axios.post(api, {
      "id": 0,
      "title": "string",
      "price": 0.1,
      "description": "string",
      "category": "string",
      "image": "http://example.com"
    }).then(res => {
      console.log(res);
    }).catch(error => console.log(error))
  }

  return (
    <>
      <div className="">app</div>
      <button onClick={getProdectApi} className="px-3 py-1 bg-blue-500 rounded-md text-white font-bold">call api</button>
      <button onClick={addProdectApi} className="px-3 mb-10 py-1 bg-blue-500 rounded-md text-white font-bold">save new prodect api</button>

      <ul>
        {prodect.length > 0 ? (
          prodect.map((e, index) => (
            <li key={index} className="p-3 my-3 bg-red-300">
              {e.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  )
}

export default App
