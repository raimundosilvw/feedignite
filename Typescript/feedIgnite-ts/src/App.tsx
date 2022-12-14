import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'; 

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/raimundosilvw.png',
      name: 'Raimundo Silva',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ð'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
      { type: 'link', content: 'Raimundo.dev/doctorcare'},
    ],
    publishedAt: new Date('2022-12-01 20:00:00'),
  },

  {
  id: 2,
  author: {
    avatarUrl: 'https://github.com/raimundosilvw.png',
    name: 'Raimundo',
    role: 'Web Developer'
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa ð'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
    { type: 'link', content: 'Raimundo.dev/doctorcare'},
  ],
  publishedAt: new Date('2022-12-10 20:00:00'),
},

{
  id: 3,
  author: {
    avatarUrl: 'https://github.com/raimundosilvw.png',
    name: 'JosÃ©',
    role: 'Web Developer'
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa ð'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð'},
    { type: 'link', content: 'Raimundo.dev/doctorcare'},
  ],
  publishedAt: new Date('2022-12-15 20:00:00'),
},
];

export function App() {

  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
            {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            } )}
        </main>

      </div>
      

    </div>
    
  )
}

