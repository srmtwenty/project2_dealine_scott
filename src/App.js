
import './index.css';
import Navbar from './Pages/Navbar';
import UsersPage from './Pages/UsersPage';
import User from './Pages/user/User';
import AddUser from './Pages/user/AddUser';
import EditUser from './Pages/user/EditUser';
import { BrowserRouter, Route, browserHistory, Routes } from 'react-router';

import EnemiesPage from './Pages/EnemiesPage';
import Enemy from './Pages/enemy/Enemy';
import AddEnemy from './Pages/enemy/AddEnemy';
import EditEnemy from './Pages/enemy/EditEnemy';

import ArmorsPage from './Pages/ArmorsPage';
import Armor from './Pages/armor/Armor';
import AddArmor from './Pages/armor/AddArmor';
import EditArmor from './Pages/armor/EditArmor';

import WeaponsPage from './Pages/WeaponsPage';
import Weapon from './Pages/weapon/Weapon';
import AddWeapon from './Pages/weapon/AddWeapon';
import EditWeapon from './Pages/weapon/EditWeapon';

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

        <Route path="/enemies" element={<EnemiesPage />} />
        <Route exact path="/enemies/:id" element={<Enemy />} />
        <Route exact path="/enemies/add" element={<AddEnemy />} />
        <Route exact path="/enemies/update/:id" element={<EditEnemy />} />

        <Route path="/armors" element={<ArmorsPage />} />
        <Route exact path="/armors/:id" element={<Armor />} />
        <Route exact path="/armors/add" element={<AddArmor />} />
        <Route exact path="/armors/update/:id" element={<EditArmor />} />

        <Route path="/weapons" element={<WeaponsPage />} />
        <Route exact path="/weapons/:id" element={<Weapon />} />
        <Route exact path="/weapons/add" element={<AddWeapon />} />
        <Route exact path="/weapons/update/:id" element={<EditWeapon />} />

        <Route path="/items" element={<ItemsPage />} />
        <Route exact path="/items/:id" element={<Item />} />
        <Route exact path="/items/add" element={<AddItem />} />
        <Route exact path="/items/update/:id" element={<EditItem />} />

        


      </Routes>
    </div>
  );
}

export default App;
