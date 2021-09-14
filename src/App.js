import './App.css';
import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import A_about from './A_about';
import A_header from './A_header';
import A_URL from './A_URL';
import API, { endpoints } from './API';
import cookies from 'react-cookies';


export let UserContext = React.createContext() 

export default function App(props) {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    let res = await API.post(endpoints['login'], {
        'client_id':'uMeUDBqCKKZI0iU7vlJHGi7PHHS2krpPowRmXsEM',
        'client_secret':'AZziVU1uADSoy2bNVwUm5qjN3XnnjLwpq35VDi7gtQl1Otcz7HEQOZUoZzPxIprHPmOYWcFVrqTL8p18Ssv6GOrPwW6n6i4VOxPLw2iebvgaTKYWPjurybYhCncB4X7c',
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
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
