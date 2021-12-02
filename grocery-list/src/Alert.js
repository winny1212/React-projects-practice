import React, {useEffect} from 'react'

export default function Alert({type,msg}) {
    
    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    )
}
