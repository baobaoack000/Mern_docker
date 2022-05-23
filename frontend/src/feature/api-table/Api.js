import { useState, useEffect } from "react";
import axios from "axios";


const [coffee, setCoffee] = useState([]);

useEffect(() => {
  async function getRandomUser() {
    try {
      const database = await axios.get(
        "https://random-data-api.com/api/coffee/random_coffee"
      );
      setCoffee(database.data);
    } catch (err) {
      console.log(err)
    } finally {
      console.log(" Waittingg...")
    }
  }
  getRandomUser();
}, []);

const table = () => {
  return (
    <table>
      {coffee.map((item, i) => {
        console.log("Hi");
        return (
          <tr key={i}>
            <td className="border px-8 py-4">{item.id}</td>
            <td className="border px-8 py-4">{item.intensifier}</td>
            <td className="border px-8 py-4">{item.blend_name}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default { table, coffee };
