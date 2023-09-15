
import {useEffect, useState} from 'react';
import './App.css';
import Userdata from './components/Userdata';
import NavBar from './components/NavBar';
import AddUser from './components/NavBar';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Display from './components/Display';
import AllUser from './components/AllUser';

function App() {

  const API='https://jsonplaceholder.typicode.com/users';

  const [users,setUsers] = useState([]);

  const fetchUsers =async (url) => {
    const res =await fetch(url);
    const data = await res.json();

    if(data.length > 0){
      setUsers(data);
    }

    console.log(data);
  }

  useEffect(()=>{
         fetchUsers(API);
  },[])

  
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    {/* <Route path='/add' element={<AddUser />} />
    <Route path='/all' element={<AllUser />} /> */}

    </Routes>
    
      
    

    
    <table>
         <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            
            <th>E-mail</th>
            <th>Address</th>
          </tr>
         </thead>
         <tbody>
          <Userdata users={users} />
            
         </tbody>
      </table>
      
    </BrowserRouter>
      
  
      
    </>
  );
}

export default App;
