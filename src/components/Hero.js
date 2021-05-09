import React,{useState ,useEffect} from 'react';

const Hero = () =>{
    const [users,setusers] = useState([])

    useEffect(()=>{
        getData();
    },[])
    const url = 'https://reqres.in/api/users?page=1';
    const getData = async () =>{
        const res = await fetch(url);
        const user = await res.json();
        console.log(user)
        setusers(user.data)
        
    }
    return(
        <div className="hero">
           <div className="card">
              {users && users.map(user=>{
                  return(
                      <div className="card-info">
                      <img src={user.avatar}  />
                      <p>{user.first_name}  {user.last_name}</p>
                      <p><a href={"mailto:" + user.email}>{user.email}</a></p>
                      </div>
                      )
                      
              })}
           </div>
        </div>
    )
}

export default Hero;