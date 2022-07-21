
import './index.css';
import Navbar from './Pages/Navbar';
import UsersPage from './Pages/UsersPage';
import User from './Pages/user/User';
import AddUser from './Pages/user/AddUser';
import EditUser from './Pages/user/EditUser';
import { BrowserRouter, Route, browserHistory, Routes } from 'react-router';

import ArmorsPage from './Pages/ArmorsPage';
import Armor from './Pages/armor/Armor';
import AddArmor from './Pages/armor/AddArmor';
import EditArmor from './Pages/armor/EditArmor';

import ItemsPage from './Pages/ItemsPage';
import Item from './Pages/item/Item';
import AddItem from './Pages/item/AddItem';
import EditItem from './Pages/item/EditItem';



function App() {
  return (
    <div className="App">
      <Navbar />


      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route exact path="/users/:id" element={<User />} />
        <Route exact path="/users/add" element={<AddUser />} />
        <Route exact path="/users/update/:id" element={<EditUser />} />
        <Route path="/armors" element={<ArmorsPage />} />
        <Route exact path="/armors/:id" element={<Armor />} />
        <Route exact path="/armors/add" element={<AddArmor />} />
        <Route exact path="/armors/update/:id" element={<EditArmor />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route exact path="/items/:id" element={<Item />} />
        <Route exact path="/items/add" element={<AddItem />} />
        <Route exact path="/items/update/:id" element={<EditItem />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route exact path="/items/:id" element={<Item />} />
        <Route exact path="/items/add" element={<AddItem />} />
        <Route exact path="/items/update/:id" element={<EditItem />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route exact path="/items/:id" element={<Item />} />
        <Route exact path="/items/add" element={<AddItem />} />
        <Route exact path="/items/update/:id" element={<EditItem />} />


      </Routes>
    </div>
  );
}

export default App;
