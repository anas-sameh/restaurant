import Contact_cards from "../Contact_cards/Contact_cards";

export default function Contact_cards_data() {
    const data = [
        {
            icon : 'fas fa-map-marker-alt',
            title : 'Our Address',
            description : 'A108 Adam Street New York NY 535022'
        },
        {
            icon : 'fas fa-phone',
            title : 'Call Us',
            description : '+1 5589 55488 55'
        },
        {
            icon : 'far fa-envelope',
            title : 'Email Us',
            description : '8o7bB@example.com'
        },
        {
            icon : 'fas fa-map-marker-alt',
            title : 'Opening Hours',
            description : 'Mon-Sat: 11AM-23PM<br>Sunday: Closed',
        },
        {
            icon : 'far fa-envelope',
            title : 'Email Us',
            description : '8o7bB@example.com'
        },
        {
            icon : 'fas fa-phone',
            title : 'Opening Hours',
            description : 'Mon-Sat: 11AM-23PM<br>Sunday: Closed',
        }
    ]
        
  return (
    <>

    {data.map((item, index) => {
        return <Contact_cards key={index} data={item} />;
    })}
    
 
    
    </>
  )
}
