import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {

  const [coffee, setCoffee] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);  

  useEffect(() => {
    async function getRandomUser() {
      try {
        const database = await axios.get("https://fakestoreapi.com/products");
        const data = database.data;
        setCoffee(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoaded(true);
      }
    }
    getRandomUser();
  }, []);

  //trial test data *Moving to Jest*

  
  return (
    <div className="App">
      <div className="border-4 border-x-indigo-500 ">
        <h1 className="text-5xl font-extrabold ... hover:text-9xl bordr">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world !
          </span>
        </h1>
      </div>

      <div className="content flex flex-col space-y-4 ...">
        <div className="api">
          <p className="uppercase font-bold">1. Api database</p>
          <div className="api-content">
            <table className="table-auto border-separate rounded bg-slate-500 bg-auto box-border h-200 w-110">
              <thead className="bg-white">
                <tr>
                  <th>No.</th>
                  <th>Items</th>
                  <th>Price</th>
                </tr>
              </thead>
              {/* api database */}
              <tbody className="text-white">
                {!loaded
                  ? coffee.map(() => {
                      return (
                        <tr key={1}>
                          <td className="border px-8 py-4">Loading...</td>
                          <td className="border px-8 py-4">Loading...</td>
                          <td className="border px-8 py-4">Loading...</td>
                        </tr>
                      );
                    })
                  : coffee.map(({ id, title, price },i) => {
                      if (loaded) {
                        return error ? (
                          <span>Error: {error}</span>
                        ) : (
                          <tr key={i}>
                            <td className="border px-8 py-4">{id}</td>
                            <td className="border px-8 py-4">{title}</td>
                            <td className="border px-8 py-4">{price}</td>
                          </tr>
                        );
                      }
                    })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mongo">
          <p className="uppercase font-bold">2. Mongo database</p>
          <div className="mongo-content">
            <table className="table-auto border-separate rounded bg-slate-500 bg-auto box-border h-200 w-110">
              <thead className="bg-white">
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody className="text-white">
                <tr>
                  <td className="border px-8 py-4">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="border px-8 py-4">Malcolm Lockyer</td>
                  <td className="border px-8 py-4">1961</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
