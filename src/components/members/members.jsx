import {
    useState,
    useEffect
} from 'react';

function Users({setUserId}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
            
    })

    return (
        <div className='container__item'>
            <h2 className='container__all'>users</h2>
            {users.length &&
                users.map(item => (
                    <div className='container__little--item'
                      key={item.id}
                      onClick={()=>{
                        setUserId(item.id)
                            }}
                            >
                                <p className='container__id'>id:  {item.id}</p>
                                <p className='container__username'>name:  {item.name}</p>
                                <p className='container__username'>username:  {item.username}</p>
                                <address className='container__address'>address:  {item.address.street}</address>
                                <p className='container__username'>address-lat:  {item.address.geo.lat}</p>
                        </div>
                ))
            }
        </div>
    )
}

export default Users