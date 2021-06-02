import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import DetailedPage from "./Components/DetailedPage";
import contactsInf from "./contacts.json";
import AddContact from "./Components/AddContact"

function App() {
  const [information, setInformation] = useState(null);
  const [contacts, setContacts] = useState(contactsInf);
  const [edited,setEdited] = useState([false,false,false,false,false,false]);
  const [add, setAdd] = useState(false);

  function sendDetailedData(id)
  {
    setInformation({name:contacts[id].name,number:contacts[id].number,email:contacts[id].email,address:contacts[id].address,id:contacts[id].id})
  }

  function updateContacts(name,number,email,address,id)
  {
    let editedIndex = edited;
    setEdited([false,false,false,false,false,false]);
    (contacts[id-1].name!==name || contacts[id-1].number!==number || contacts[id-1].address!==address || contacts[id-1].email!==email) && (editedIndex[id-1] = true);
    setEdited(editedIndex);
    let helper = contacts;
    helper[id-1] = {id:id,name:name,number:number,email:email,address:address};
    setContacts(helper);
  }

  function creatContact(name,number,email,address)
  {
    let newContact = {"id":contacts[contacts.length-1].id+1,"name":name,"number":number,"email":email,"address":address,"image":"image1"};
    setContacts([...contacts,newContact]);
    setAdd(false)
  }

  function deletedItem(id)
  {
    let helper = contacts;
    helper = helper.filter((value) => value.id!==id)
    setContacts(helper);
  }


  useEffect(()=>{
    return setEdited([false,false,false,false,false,false]);
  },[]);

  return (
    <div className="main-parent">
      <div className="app">
        {!add && !information && <MainPage onClick={() => setAdd(true)} edited={edited} contactsInf={contacts} clickedComponent={(id) => sendDetailedData(id)}/>}
        {!add && information && <DetailedPage deletedItem={(id) => deletedItem(id)} newInf={(name,number,email,address,id,edited) => {updateContacts(name,number,email,address,id,edited)}} onBack={(e) => setInformation(null)} name={information.name} number={information.number} email={information.email} id={information.id} address={information.address} />}
        {add && <AddContact discard={() => setAdd(false)} newInf={(name,number,email,address) => {creatContact(name,number,email,address)}}/>}
      </div>
    </div>
  );
}

export default App;
