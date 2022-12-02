import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'; 

export function App() {

  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
            <Post 
                author="Raimndo Silva"
                content="Lorem ipsun dolor sit consectetur adipiscing elit  "
            />
           <Post 
                author="Raimndo Silva"
                content="Lorem ipsun dolor sit consectetur adipiscing elit  "
            />
        </main>

      </div>
      

    </div>
    
  )
}

