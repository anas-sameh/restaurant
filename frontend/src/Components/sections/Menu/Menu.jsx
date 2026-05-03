import { useState } from 'react';
import Head from '../../shared/Section_Head/Head'
import './Menu.css'
import Breakfast from './Menu_category/Breakfast';
import Lunch from './Menu_category/Lunch';
import Dinner from './Menu_category/Dinner';
import Starters from './Menu_category/Starters';
export default function Menu() {
    const section_head = {
        title: " Our Menu",
        des1: "Check Our ",
        des2: "Yummy Menu"
    }
    
    const [activeMenu, setActiveMenu] = useState(null);

    const renderContent = () => {
      switch(activeMenu) {
        case 'Starters':
          return <Starters/>;
        case 'Breakfast':
          return <Breakfast />;
        case 'Lunch':
          return <Lunch />;
        case 'Dinner':
          return <Dinner />;
        default:
          return  <Starters/> ;
      }
    };
  
    
    
      
    

  return (
    <>
    <section id='menu'>
        <div className="container">
           <div className="row">
            
           <div className="col-lg-12 title pb-0">
                <Head  data = {section_head} />
            </div>
            <div className="col-lg-12 menu_list">
                <ul>
                    <li  onClick={() => setActiveMenu('Starters')}className={activeMenu === 'Starters' ? 'active' : ''}> Starters</li>
                    <li  onClick={() => setActiveMenu('Breakfast')}className={activeMenu === 'Breakfast' ? 'active' : ''}> Breakfast</li>
                    <li  onClick={() => setActiveMenu('Lunch')}className={activeMenu === 'Lunch' ? 'active' : ''}> Lunch</li>
                    <li  onClick={() => setActiveMenu('Dinner')}className={activeMenu === 'Dinner' ? 'active' : ''}> Dinner</li>


                </ul>
            </div>

         <div className="row menu-content">
           {renderContent()}
           
         </div>
            </div>
        </div>
    </section>


    </>
  )
}
