import Menu_card from "../Menu_card/Menu_card";
import '../Menu_card/Menu_card.css'


export default function Dinner() {
  const startersMenu = [
  
     
      {
        name: "Aut Lula",
        description: "Lorem, deren, trataro, filede, nerada",
        price: 14.95 ,
        img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-3.png"
     },
     {
        name: "Eos Lulbusdam",
        description: "Lorem, deren, trataro, filede, nerada",
        price: 12.95 ,
        img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-4.png"

      },
      {
        name: "Magnam Tiste",
        description: "Lorem, deren, trataro, filede, necada",
        price: 5.95,
        img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-1.png"
    },
    {
        name: "Eos Lulbusdam",
        description: "Lorem, deren, trataro, filede, necada",
        price: 12.95,
        img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-2.png"
    } ,
      {
        name: "Est Eligendi",
        description: "Lorem, deren, trataro, filede, nerada",
        price: 8.95 ,
        img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-5.png"

      },
      {
        name: "Laboriosam Direva",
        description: "Lorem, deren, trataro, filede, nerada",
        price: 9.95 ,
        img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-6.png"

      }
              
  ];

  return (
      <>

<div className="col-lg-12 card_title">
              <p>Menu</p>
              <h3> Dinner</h3>
              </div>
          {startersMenu.map((item, index) => {
             
             return <Menu_card data={item} key={index} />;
          })}
      </>
  );
}
