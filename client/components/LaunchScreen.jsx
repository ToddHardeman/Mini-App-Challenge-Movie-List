import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import '../styles/LaunchScreen.css';

function LaunchScreen() {
    const navigate = useNavigate();

    useEffect( () => {
        console.log('LaunchScreen mounted');
        const timer = setTimeout( () => {
            navigate('/MovieList');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

  return (
    <>
      <div className='launch-screen'> 
        <h1>Welcome!</h1>
        <p>Grab some popcorn. 🍿 Let watch some movies. 🎬</p>
      </div>
    </>
  )
}

export default LaunchScreen;
