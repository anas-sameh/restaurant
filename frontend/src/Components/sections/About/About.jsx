import Learn_more_btn from '../../shared/Buttons/Learn_more_btn'
import Choose_cards from '../../features/Choose_cards/Choose_cards'
import Head from '../../shared/Section_Head/Head';
import './About.css'
import Counter from '../../features/Counter/Counter';

export default function About() {
    // بيانات البطاقات التي سيتم عرضها في قسم "لماذا تختارنا"
    const cardsData = [
        {
          icon: "bi bi-clipboard-data", // أيقونة البطاقة الأولى
          title: "Corporis voluptates officia eiusmod",
          description: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
        },
        {
          icon: "bi bi-gem", // أيقونة البطاقة الثانية
          title: "Ullamco laboris ladore lore pan",
          description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
        },
        {
          icon: "bi bi-inboxes", // أيقونة البطاقة الثالثة
          title: "Labore consequatur incidid dolore",
          description: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
        }
      ];

    // بيانات عنوان القسم
    const section_head = {
        title: "About Us",
        des1: "Learn More",
        des2: "About Us"
    }

  return (
    <>
    {/* القسم الرئيسي */}
    <section className="about mt-5 mb-5" id='about' data-aos="zoom-in">
    <div className="container">
        <div className="row">
           <Head data={section_head}/>
            {/* البيانات الرئيسية */}
            <div className="main_data col-lg-12 mb-5" data-aos="fade-up">
                <div className="row">
                    {/* العمود الأول - الصورة ومعلومات الحجز */}
                    <div className="col-lg-7 first_col">
                        <div className="img">
                            <img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/about.jpg" alt="oops" />
                        </div>
                        <div className="book_table_info">
                            <h3>Book a Table</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>

                    {/* العمود الثاني - تفاصيل المطعم */}
                    <div className="col-lg-5 second_col">
                            <div className="Book_table_det">
                                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul>
                                    <li><span className='text-danger fs-5 me-3'><i className="bi bi-check-circle"></i></span>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                    <li><span className='text-danger fs-5 me-3'><i className="bi bi-check-circle"></i></span>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><span className='text-danger fs-5 me-3'><i className="bi bi-check-circle"></i></span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ul>
                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                            </div>
                            <div className="img mt-4">
                                <img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/about-2.jpg" alt="oops" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    {/* قسم "لماذا تختارنا" */}
    <div className="choose_yummy">
        <div className="container">
        <div className="col-lg-12 mt-5">
            <div className="row">
                {/* صندوق المعلومات */}
                <div className="Why_box col-lg-4 mt-5 mb-5" data-aos="fade-up">
                    <h3>Why Choose Yummy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                    <div className="learn_btn text-center"><Learn_more_btn/></div>
                </div>  
                {/* بطاقات المميزات */}
                <div className="choose_cards col-lg-8 mt-5 mb-5 ps-4">
                <div className="row justify-content-center cards_row">
                    {cardsData.map((card_data, index) => (
                        <div className="col-lg-4 choose_cards_children" key={index}>
                            <Choose_cards data={card_data}/>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    {/* قسم الإحصائيات */}
    <div className="background_img">
            <div className="bg_img">
                <div className="img">
                    <img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/stats-bg.jpg" alt="oops" />
                </div>
                <div className="over_lay"></div>
                <div className="container clients">
                    <div className="row">
                        {/* عداد العملاء */}
                        <div className="col-lg-3 col-md-12 col-sm-12 clients_data">
                            <Counter end={232} />
                            <p>Clients</p>
                        </div>
                        {/* عداد المشاريع */}
                        <div className="col-lg-3 col-md-12 col-sm-12 clients_data">
                            <Counter end={521} />
                            <p>Projects</p>
                        </div>
                        {/* عداد ساعات الدعم */}
                        <div className="col-lg-3 col-md-12 clients_data">
                            <Counter end={1453} />
                            <p>Hours Of Support</p>
                        </div>
                        {/* عداد العمال */}
                        <div className="col-lg-3 col-md-12 clients_data">
                            <Counter end={32} />
                            <p>Workers</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </section>
    </>
  )
}

