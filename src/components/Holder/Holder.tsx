import { useEffect, useState } from "react";
import data from "./data.json";
import "./Holder.css";

export default function Holder(props:any) {

  //State Management
  const [prodData, setProdData] = useState({});

  // Data Fetch
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(prodData => setProdData(prodData))
  }, []);

  const Arr = Object.entries(data);//replace (data -> prodData)

  return (
    <div id="container">
      <table>
        <tbody>
        <tr>
          <th>Product</th>
          <th>Information</th>
        </tr>
        {Arr.map((entry,index) => {
          return (
            <tr key={index}>
              <td>{entry[0]}</td>
              <td>{JSON.stringify(entry[1])}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}
