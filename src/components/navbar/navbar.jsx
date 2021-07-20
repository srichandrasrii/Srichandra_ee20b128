import React from 'react'

function func(){
    const styles = {
        navitemDiv:{
            margin: 60,
            position:'absolute',
            right:0
        },
        navitem:{
            margin: 12
        }
    };
    
    return(<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Image & logo */}
    <a className="navbar-brand" href="#">
    <img style={styles.navbarLogo} src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/furniture-logo.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
    Timber
  </a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" style={styles.navitemDiv} id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li style={styles.navitem} className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li style={styles.navitem} className="nav-item active">
        <a className="nav-link" href="#shop">Shop <span className="sr-only">(current)</span></a>
      </li>
      <li style={styles.navitem} className="nav-item active">
        <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
      </li>
      <li style={styles.navitem} className="nav-item active">
        <a className="nav-link" href="#services">Services <span className="sr-only">(current)</span></a>
      </li>      
    </ul>
    {/* Search Bar */}
  <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>)
}

export default func