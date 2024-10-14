import "./Sidebar.css";
import { useEffect, useState } from 'react';
import { personsImgs } from './../../../Data/img';
import { navigationLinks } from './../../../Data//Data';
import { useContext } from 'react';
import { SidebarContext } from './../../../context/sidebarContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if(isSidebarOpen){
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);
   //============================= Mode =======================

  return (
    <div className={ `sidebar ${sidebarClass} ` }>
      <div className="user-info">
          <div className="info-img img-fit-cover">
              <img src={ personsImgs.person } alt="profile image" />
          </div>
          <span className="info-name">alice-doe</span>
      </div>

      <nav className="navigation">
          <ul className="nav-list">
            {
              navigationLinks.map((navigationLink) => (
                <li className="nav-item" key = { navigationLink.id }>
                  <Link to={navigationLink.link} className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                      <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
                      <span className="nav-link-text">{ navigationLink.title }</span>
                  </Link>
                </li>
              ))
            }
          </ul>
      </nav>
    </div>
  )
}

export default Sidebar
