import React, { useState } from 'react'

export default function Navbar(props) {
  let theme=props.theme;
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.changeTheme} id="themeToggle" />
              <label className={`form-check-label text-${theme === "light" ? "dark" : "light"}`} htmlFor="themeToggle" >Enable {theme === "light" ? "dark" : "light"} mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}