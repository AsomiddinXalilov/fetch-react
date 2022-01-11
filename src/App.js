import './App.scss';
import { useState } from 'react';
import Users from './components/members/members';
import Posts from './components/posts/posts';
import Commits from './components/commits/commits';

function App() {
const [userId, setUserId]=useState(null)
const [postId, setPostId]=useState(null)

  return (
    <div className='container'>
      <h1 className='container__heading'>Homework day-4</h1>

      <div className='container__list'>
        <Users setUserId={setUserId}/>
        <Posts userId={userId} setPostId={setPostId}/>
        <Commits postId={postId}/>
      </div>
    </div>
  );
}

export default App;
