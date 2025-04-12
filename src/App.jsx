import './App.css';
import { useContext, createContext, useState } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';
import UserList from './Components/UserList';
import SearchPost from './Components/SearchPost';
import Counter from './Components/Counter';
import CounterWithCustomHook from './Components/CounterWithCustomHook';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      Cambiar tema
    </button>
  );
}

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
    <>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <CounterWithCustomHook />
    </>
    /*<section className='App'>
      <Counter />
      users.map(({ userName, name, initialIsFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          initialIsFollowing={initialIsFollowing}
        />
      ))}
      <UserList />
       <SearchPost /> 
    </section>*/
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
