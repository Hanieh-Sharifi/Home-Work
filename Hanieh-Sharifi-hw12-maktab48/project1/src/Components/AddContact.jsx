import React,{useState} from 'react';
import Input from "./Input";
import Button from "./Button";
import {FiCheck} from "react-icons/fi";
import {GiCardDiscard} from "react-icons/gi";

function AddContact({newInf,discard}) {

    const [innerInf, setInnerInf] = useState({name:"",number:"",email:"",address:""})

    function checkButtonClicked()
    {
        innerInf.name !== "" && innerInf.number !== "" && newInf(innerInf.name,innerInf.number,innerInf.email,innerInf.address,innerInf.id,true);
    }

    return (
        <div className="add-contact-parent">
            <div className="add-contact-input">
                <Input size={30} type="text" placeholder="name" onChange={(e) => setInnerInf({...innerInf,name:e.target.value})}/>
                {!innerInf.name && <div className="add-error">fill the name input</div>}
                <Input size={30} type="text" placeholder="number" onChange={(e) => setInnerInf({...innerInf,number:e.target.value})}/>
                {!innerInf.number && <div className="add-error">fill the number input</div>}
                <Input size={30} type="text" placeholder="email" onChange={(e) => setInnerInf({...innerInf,email:e.target.value})}/>
                <Input size={30} type="text" placeholder="address" onChange={(e) => setInnerInf({...innerInf,address:e.target.value})}/>
            </div>
            <div className="back-enter-parent">
                <Button className="green" onClick={()=> checkButtonClicked()} ><FiCheck/></Button>
                <Button onClick={discard}><GiCardDiscard/></Button>
            </div>
        </div>
    )
}

export default AddContact
