import React, { useEffect, useState } from 'react'
import ax from 'axios'

const Usuarios = () => {
  const [users, setUsers] = useState([])

  const ponerFilas = (array) => (
    array.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.website}</td>
        </tr>
    ))
  )
  
  useEffect( ()=> {
    const signal = ax.CancelToken.source()
    const fetchData = async () => {
      try {
        const { data } = await ax.get('https://jsonplaceholder.typicode.com/users',{
          cancelToken: signal.token
          })
          setUsers(data)            
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    return () => {
      signal.cancel('fetch Stopped')
    }
  },[])

  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>website</th>
        </tr>
      </thead>
      <tbody>
        {ponerFilas(users)}
      </tbody>
    </table>
    </div>
  )
}

export default Usuarios
