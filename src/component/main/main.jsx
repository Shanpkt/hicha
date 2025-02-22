import React from 'react'
import "./main.scss"
function Main() {
  return (
    <div className='main_continer'>
        <div className='top_bar'></div>
        <div className='profile_continer'>
        <div className='profile'>
            <div className='profile_iMG'>
                <img className='profile_pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEth86FhV_U_AIi9tWrWo3ix-BRB7vSwwtXQ&s'/>
            </div>
            <label>Arun,29</label>
        </div>
        <div className='profile'>
            <div className='profile_iMG'></div>
            <label>Arun,29</label>
        </div>
        <div className='profile'>
            <div className='profile_iMG'></div>
            <label>Arun,29</label>
        </div>
        </div>
       
    </div>
  )
}

export default Main