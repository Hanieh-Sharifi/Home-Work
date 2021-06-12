import React,{ useEffect, useState }  from 'react'
import { useParams } from 'react-router';
import LoadingShape from '../Components/LoadingShape';
import { toast } from 'react-toastify';

function FetchData(InputComponent,url)
{

    function FetchResponse()
    {
        const [data, setData] = useState(null);
        const {id} = useParams();
        console.log("id: "+id);
        console.log("url: "+url);

        useEffect(()=>{
            fetch(`${url}${id? '/'+id : '/'}`)
            .then(data => data.json())
            .then(data => setData(data))
            .catch(error => toast.error("error"))
        },[])

        if (data)
        {
            return <InputComponent data={data}/>;
        }
        else
        {
            return <LoadingShape/>;
        }
        
    }

    return FetchResponse;
}

export default FetchData;
