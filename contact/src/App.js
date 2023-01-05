import React from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ContactList from './components/contacts/ContactList/ContactList';
import AddContact from './components/contacts/AddContact/AddContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';

let App = () => {
  return(
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/ContactList'}/>}/>
        <Route path={'/contacts/ContactList'} element={<ContactList/>}/>
        <Route path={'/contacts/AddContact'} element={<AddContact/>}/>
        <Route path={'/contacts/ViewContact/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contacts/EditContact/:contactId'} element={<EditContact/>}/>

      </Routes>


    </React.Fragment>
  );
}

export default App;
