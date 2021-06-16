import React,{ useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom';
import LoadingShape from './LoadingShape';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom";

function FetchData(InputComponent,url)
{

    function FetchResponse(props)
    {
        const [data, setData] = useState(null);
        const [idData, setIdData] = useState(null)
        const {id} = useParams();
        const history = useHistory();

        useEffect(()=>{
            fetchTask(id)
          },[])
          
          const fetchTask = async (id) => {
            try
            {
              if(id)
              {
                const response = await fetch(`${url}/${id}`);
                if (response.status === 404)
                {
                  toast.error("ID Not found");
                  history.push("/");
                }
                const data = await response.json();
                setIdData(data);
              }
              else
              {
                const response = await fetch(`${url}`);
                console.log("response is : " + response.status);
                if (response.status === 404)
                {
                  toast.error("Not found");
                }
                const data = await response.json();
                setData(data);
              }
            }
            catch (error)
            {
              toast.error("request failed!");
            }
          };

        if (data || idData)
        {
            return (<><InputComponent {...props} data={data} idData={idData}/><ToastContainer/></>);
        }
        else
        {
            return <LoadingShape/>;
        }
        
    }

    return FetchResponse;
}

export default FetchData;
