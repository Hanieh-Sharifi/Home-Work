import React,{ useState} from 'react';
import image1 from "../imgs/image1.jpg";
import image2 from "../imgs/image2.jpg";
import image3 from "../imgs/image3.jpg";
import image4 from "../imgs/image4.jpeg";
import image5 from "../imgs/image5.jpg";
import image6 from "../imgs/image6.jpg";
import Button from "./Button";
import {FiEdit, FiTrash,FiCheck} from "react-icons/fi";
import Input from "./Input";

let images=[image1,image2,image3,image4,image5,image6];

function Card({editedContact,email,name,address,number,id,onClick,edited,deletedItem}) {
    const [readOnly, setReadOnly] = useState(true);
    const [contactInf, setContactInf] = useState({"id":id,"name":name,"number":number,"email":email,"address":address})
    const [edit, setEdit] = useState(edited)
    
    function changeInformation(e,target)
    {
        target === "name" && setContactInf({id:contactInf.id,"name":e.target.value,"number":contactInf.number,"email":contactInf.email,"address":contactInf.address})
        target === "address" && setContactInf({id:contactInf.id,"name":contactInf.name,"number":contactInf.number,"email":contactInf.email,"address":e.target.value})
        target === "number" && setContactInf({id:contactInf.id,"name":contactInf.name,"number":e.target.value,"email":contactInf.email,"address":contactInf.address})
    }

    function finishedEditing()
    {
        let editHelper = [false,false,false,false,false,false];
        (contactInf.name!==name || contactInf.number!==number || contactInf.address!==address) && (editHelper[contactInf.id-1] = true);
        setEdit(editHelper);
        contactInf.name !== "" && contactInf.address !== "" && contactInf.number !== "" && setReadOnly(true);
        editedContact(contactInf);
    }

    return (
        <div onClick={(e) => {e.stopPropagation();onClick(e)}} id={id} className="card">
            <img src={images[id%6]} alt="none" />
            {edit[contactInf.id-1] && <div className="edited">edited</div>}
            <div className="card-text-parent">
                <Input onClick={(e)=> {e.stopPropagation()}} placeholder="" size={15} type="text" onChange={(e) =>  changeInformation(e,"name")} readOnly={readOnly} value={contactInf.name}/>
                <Input onClick={(e)=> {e.stopPropagation()}} placeholder="" size={15} type="text" onChange={(e) => changeInformation(e,"address")} readOnly={readOnly} value={contactInf.address}/>
                <Input onClick={(e)=> {e.stopPropagation()}} placeholder="" size={15} type="text" onChange={(e) => changeInformation(e,"number")} readOnly={readOnly} value={contactInf.number}/>
            </div>
            <div className="edit-delete-check-parent">
                {readOnly && <Button onClick={(e)=> {e.stopPropagation();setReadOnly(false)}} ><FiEdit/></Button>}
                {!readOnly && <Button className="green" onClick={(e) => {e.stopPropagation();finishedEditing()}}><FiCheck/></Button>}
                {readOnly && <Button onClick={(e) => {e.stopPropagation();deletedItem(id)}}><FiTrash/></Button>}
            </div>
        </div>
    )
}

export default Card;
