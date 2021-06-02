import React, { useState } from 'react';
import Input from "./Input";
import Button from "./Button";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {FiEdit, FiTrash,FiCheck} from "react-icons/fi";


function DetailedPage({name,number,email,address,onBack,deletedItem,newInf,id}) {
    const [readOnly, setReadOnly] = useState(true);
    const [innerInf, setInnerInf] = useState({id:id,name:name,number:number,email:email,address:address})

    function checkButtonClicked()
    {
        innerInf.name && innerInf.number && setReadOnly(true);
        newInf(innerInf.name,innerInf.number,innerInf.email,innerInf.address,innerInf.id,true);
    }

    return (
        <div className="detailed-page">
            <div className="back-btn">
                {readOnly && <Button onClick={() => onBack(true)}> <AiOutlineArrowLeft/></Button>}
            </div>
            <div className="detailed-input-parents">
                <Input type="text" placeholder="name" onChange={(e) => setInnerInf({...innerInf,name:e.target.value})} readOnly={readOnly} value={innerInf.name}/>
                {innerInf.name==="" && <div className="error">fill the name input</div>}
                <Input type="text" placeholder="number"  onChange={(e) => setInnerInf({...innerInf,number:e.target.value})} readOnly={readOnly} value={innerInf.number}/>
                {innerInf.number==="" && <div className="error">fill the number input</div>}
                <Input type="text" placeholder="email" onChange={(e) => setInnerInf({...innerInf,email:e.target.value})} readOnly={readOnly} value={innerInf.email}/>
                <Input type="text" placeholder="address" onChange={(e) => setInnerInf({...innerInf,address:e.target.value})} readOnly={readOnly} value={innerInf.address}/>
            </div>
            <div className="edit-delete-check-parent-detailed">
                {readOnly && <Button onClick={()=>setReadOnly(false)} ><FiEdit/></Button>}
                {!readOnly && <Button className="green" onClick={()=> checkButtonClicked()} ><FiCheck/></Button>}
                {readOnly && <Button onClick={() => deletedItem(id)}><FiTrash/></Button>}
            </div>
        </div>
    )
}

export default DetailedPage
