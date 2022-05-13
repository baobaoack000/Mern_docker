import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const { coffee, setCoffee } = useState([]);
  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/coffee/random_coffee")
      .then((res) => {
        const data = res.data;
        setCoffee(data);
      });
  }, []);

  //trial test data *Moving to Jest*
  const datas = [
    {
      id: 4471,
      uid: "a3598788-07e5-4b54-8931-314008c23012",
      blend_name: "American Coffee",
      origin: "Kayanza, Burundi",
      variety: "Kona",
      notes: "tart, slick, bergamot, orange creamsicle, jasmine",
      intensifier: "delicate",
    },
  ];


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
                {datas.map((item, i) => {
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.uid}</td>
                    <td>{item.blend_name}</td>
                  </tr>;

                  // <tr key={i}>
                  //   <td className="border px-8 py-4">{item.id}</td>
                  //   <td className="border px-8 py-4">Malcolm Lockyer</td>
                  //   <td className="border px-8 py-4">1961</td>
                  // </tr>
                }
                )};
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
