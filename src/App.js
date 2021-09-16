import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import A_about from './A_about';
import A_header from './A_header';
import A_URL from './A_URL';
import API, { endpoints } from './API';
import cookies from 'react-cookies';
import A_formRegister from './A_formRegister';


export let UserContext = React.createContext() 

export default function App(props) {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    let res = await API.post(endpoints['login'], {
        'client_id':'SArs1A6NOuDoUlmbPXmupesRc44gLu2SwIIRlrze',
        'client_secret':'esEGDwhYOm2nlCjHe3o2qeZQzpWGjVJDejPQElcJMlbLrytueqZD3W9kA1hsQjx6BFCNh6447OXtQZGKablmbQ6IFVNymtbFmdkv0B8fz7CVBjMVIotYU7HEORj2nRUH',
        'username':username,
        'password':password,
        'grant_type':'password'
    })
    console.info(res.data)
    
    cookies.save("access_token", res.data.access_token)

    let user = await API.get(endpoints['current-user'], {
        headers: {
            'Authorization': `Bearer ${cookies.load('access_token')}`
        }
    })
    console.info(user.data)
    cookies.save("user", user.data)

    setUser(user)

  }

  return (
    <UserContext.Provider value={{user, login}}>
      <BrowserRouter>
        <div>
          <A_header/>
          <A_about/>
          <A_URL/>
          <A_formRegister/>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
