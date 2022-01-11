import {
    useState,
    useEffect
} from 'react';

function Posts({ userId, setPostId }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(p => {
                console.log(p);
                setPosts(p)
            })

    }, [])

    return (
        <div className='container__item'>
            <h2 className='container__all'>posts</h2>
            {
                posts.length && posts.map(item => (
                    userId === item.userId &&
                    <div className='container__little--item'
                        key={item.id}
                        onClick={() => {
                            setPostId(item.id)
                        }}
                    >
                        <p>id:  {item.id}</p>
                        <p className='container__username'>title:  {item.title}</p>
                        <p className='container__username'>body:  {item.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts