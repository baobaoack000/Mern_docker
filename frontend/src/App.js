import './App.css'

function App () {
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
              <tbody className="text-white">
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
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
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App
