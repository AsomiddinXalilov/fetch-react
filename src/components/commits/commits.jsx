import {
    useState,
    useEffect
} from 'react';

function Commits({postId}) {
    const [commits, setCommits] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(response => response.json())
            .then(commits => setCommits(commits))
            
    },[])

    return (
        <div className='container__item'>
            <h2 className='container__all'>posts: </h2>
            {commits.length &&
                commits.map(item => (
                    postId === item.postId &&
                        <div className='container__little--item'
                            key={item.id}>
                                id:  {item.id}
                                <p className='container__username'>title:  {item.title}</p>
                                <p className='container__username'>body:  {item.email}</p>
                                <p className='container__username'>body:  {item.body}</p>
                        </div>
                ))
            }
        </div>
    )
}

export default Commits