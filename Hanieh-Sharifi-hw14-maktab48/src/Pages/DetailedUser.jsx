import React from 'react';
import { useParams } from 'react-router';

function DetailedUser() {

    const {id} = useParams();

    return (
        <div>
            {id}
        </div>
    )
}

export default DetailedUser;
