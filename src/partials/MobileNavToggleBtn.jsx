import React from 'react'
const MobileNavToggleBtn = () => {

  const handleSidebarcontrol = () => {
    console.log('SideBar')
  }
  

  return <i onClick={handleSidebarcontrol} className="bi bi-list mobile-nav-toggle "></i>
}

export default MobileNavToggleBtn