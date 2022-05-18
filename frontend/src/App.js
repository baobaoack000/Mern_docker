import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import table  from "./feature/api-table/Api.js";

function App() {

  const [coffee, setCoffee] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://random-data-api.com/api/coffee/random_coffee"
        );
        setCoffee(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

 

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
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead>
              {/* api database */}
              <tbody className="text-white">
                {table}
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
