import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link'
const Avatar = ({logout, email}) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
<Link href="/dashboard/"><div style={{background: 'rgb(175 198 207)', width:40, height: 39, borderRadius: 5,  display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' }}>
<FaUser
        size={25}
        onClick={handleToggle}
        style={{ cursor: 'pointer', color: 'white' }}
      />
</div>
</Link>
    


    // <div style={{ position: 'relative' }}>
    //   <FaUserCircle
    //     size={40}
    //     onClick={handleToggle}
    //     style={{ cursor: 'pointer' }}
    //   />
    //   {show && (
    //     <Dropdown.Menu
    //       show={show}
    //       style={{ position: 'absolute', right: 0, marginTop: 10 }}
    //       onMouseLeave={() => setShow(false)}
    //     >
    //         <Dropdown.Item style={{ pointerEvents: 'none', color: 'gray' }}>{email}</Dropdown.Item>
    //       <Dropdown.Item
    //         onClick={logout}
    //         style={{ 
    //           cursor: 'pointer', 
    //           ':focus': { 
    //             backgroundColor: 'inherit', 
    //             color: 'inherit' 
    //           }
    //         }}
    //         className="custom-dropdown-item"
    //       >
    //         Sign Out
    //       </Dropdown.Item>
    //     </Dropdown.Menu>
    //   )}
    // </div>
  );
};

export default Avatar;