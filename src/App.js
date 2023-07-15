import React, {useState, useEffect} from 'react';
import './App.css';
import SearchComponent from './components/Searchbar';
import Footer from './components/Footer';
import Card from './components/Card';
function App() {

  const [userList, setUserList] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = async () =>{
    const URL = `https://reqres.in/api/users?page=${currentPage}`
    await fetch(URL, {
      method: 'GET',
      'headers':{'content-type': 'application/json'}
    })
    .then((response)=>response.json())
    .then(data=>{
      console.log(data)
      setUserList(data.data)
      setCurrentUser(data.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const handleSearch = (search) =>{
    if(search.length ==0){
      setCurrentUser(userList)
      return 
    }
    const searchedUser = []
    userList.forEach(user=>{
      let username = user.first_name
      username = `${username}`.slice(0,search.length).toLowerCase()
      if(username == search.toLowerCase())
        searchedUser.push(user)
    })
    setCurrentUser(searchedUser)
  }

  useEffect(()=>{
    fetchData();
  },[currentPage])

  return (
    <div className="App p-4 bg-slate-800 h-screen flex flex-col mx-w-screen">
      <div className="flex justify-center w-full">
        <SearchComponent handleSearch={handleSearch}/>
      </div>
      <div className="grow flex justify-center overflow-y-scroll user-container p-4">
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1">
          {currentUser.map(user=>{
            return(
              <div>
                <Card user={user} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-center w-full p-2">
        <Footer active={currentPage} setActive={setCurrentPage}/>
      </div>
    </div>
  );
}

export default App;
