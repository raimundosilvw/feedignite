import { Header } from './components/Header';
import {Post} from './Post';

import './global.css';

export function App() {

  return (

    <div>
      <Header />

      <Post 
      author="Raimndo Silva"
      content="Lorem ipsun dolor sit consectetur adipiscing elit  "
      />
      

    </div>
    
  )
}

