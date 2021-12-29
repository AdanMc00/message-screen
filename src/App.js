import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
let socket = io('https://fastfoodrt.herokuapp.com/')  // http://localhost:8080
function App() {
  const [allOrders, setAllOrders] = useState([])
socket.on('newOrders', function (data) {
  setAllOrders([...allOrders, data])
});

  return (
    <div >
      <header>
         Huevos!
         <h1>
           {
            allOrders.length > 0 ? allOrders.map((item,key)=>(
                <ul>
                  <li>
                   <div>
                   direccion: {item.address}
                   </div>
                   <div>
                   fecha: {item.date}
                   </div>
                   <div>
                   total:{item.amount}
                   </div>
                   <div>
                   productos:{item.products}
                   </div>
                  </li>
                </ul>
            )) : null
           }
         </h1>
      </header>
    </div>
  );
}

export default App;
