import React, { useEffect, useState } from 'react';

const Card = () => {
    const [item, setItem] = useState([])

    useEffect(() => {fetch('http://localhost:3000/useri', {
        method: 'get',
        headers: {'Content-Type': 'application/json'},
    }).then(response => response.json())
      .then(response => {
        console.log(response)    
        const tempItems = response.map(member => ({
            'email': member.email,
            'name': member.name
        }))
        setItem([...item, ...tempItems]);
        })
    }, [])      

    const componentRender = item.map(comp => {
        return(
            <div>
            <li>{comp.email}</li>
            <li>{comp.name}</li>
            </div>
        )
    })
    return (
        <div>
            <ul>
                {componentRender}
            </ul>
        </div>
    )
    
}

export default Card;