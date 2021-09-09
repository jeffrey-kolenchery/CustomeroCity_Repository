import React from 'react'
import './Header.css';


function Header() {
  return (
  <>
    <div className="Header">
      <label className='header-content'>CRM Tools</label>
    </div>
    <button className='header-input' type='submit'>
        Login
    </button>
  </>
  )
}

export default Header