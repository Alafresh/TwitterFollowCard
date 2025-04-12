import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import UserList from './Components/UserList';

const users = [
  { userName: 'Alafresh', name: 'Alafresh', initialIsFollowing: true },
  {
    userName: 'Cardona1307',
    name: 'Camilo Cardona',
    initialIsFollowing: true,
  },
  {
    userName: 'dialextremo',
    name: 'Juan Pablo Correa',
    initialIsFollowing: false,
  },
  {
    userName: 'SinDinero-gif',
    name: 'Samuel Posada',
    initialIsFollowing: false,
  },
];

export function App() {
  return (
    <section className='App'>
      {users.map(({ userName, name, initialIsFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          initialIsFollowing={initialIsFollowing}
        />
      ))}
      <UserList />
    </section>
  );
}

/*
import { useState } from "react";
const [name, setName] = useState("Juan Guillermo Caicedo");
const changeName = () => {
    setName("Juanito Alimaña Con Mucha Maña");
  }; 
<section className="App">
      <TwitterFollowCard
        userName="Alafresh"
        name={name}
        initialIsFollowing={true}
      />
      <TwitterFollowCard
        userName="Cardona1307"
        name="Camilo Cardona"
        initialIsFollowing
      />
      <TwitterFollowCard userName="dialextremo" name="Juan Pablo Correa" />
      <TwitterFollowCard userName="SinDinero-gif" name="Samuel Posada" />
      <button onClick={changeName}>Cambiar Nombre</button>
    </section> */
