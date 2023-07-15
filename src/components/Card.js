import React from 'react'

const Card = ({user}) => {
  return (
    <div className="max-w-sm bg-white relative grow border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 p-2 border border-2 border-sky-400">
        <span class="absolute inline-flex rounded-full justify-center items-center h-10 w-10 -top-3 z-40 -right-3 bg-black text-white text-lg">{user.id}</span>
        <div className="relative flex">
            <img className="rounded-xl w-full h-full" src={user.avatar} alt="" />
        </div>
        <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.first_name}</h5>
        </div>
    </div>
  )
}

export default Card