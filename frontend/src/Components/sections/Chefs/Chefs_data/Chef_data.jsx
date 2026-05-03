import Chefs_cards from "../Chefs_cards/Chefs_cards"

export default function Chef_data() {
    const chef = [
        {
            name : "Walter White",
            img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/chefs/chefs-1.jpg" ,
            description: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
            job: "Master Chef"
        } ,
        {
            name : "Sarah Jhonson",
            img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/chefs/chefs-2.jpg" ,
            description: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
            job: "Patissier"
        } ,
        {
            name : "William Anderson",
            img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/chefs/chefs-3.jpg" ,
            description: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
            job: "Cook"
        } ,
    ]
  return (
    <>
    {chef.map((item , index ) => {
        return(
            <Chefs_cards data={item} key={index} />
        )
    })}
    </>
  )
}
