// import Slender from 'react-slick';



// ---------- COMPONENTE RESPONSÁVEL PELA RENDERIZAÇÃO DE USUÁRIOS DA BARRA LATERAL ESQUERDA ---------- // 

const Users = ({ avatar, name, photo1, photo2, photo3 }) => {

    var settings = { // Responsável pela dinâmica do Carousel na página
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }

    return (<div className="user">
        <article title="userName" className="userName">
            <div className="avatar"><img src={avatar} /></div>
            <div className="name" id="name">{name}</div>
        </article>
        <div className="photoDiv" id="photoDiv" data-aos="fade-right">
            <div className="name" id="name" role={'userList'}>
                <div className="avatar">
                    <img src={avatar} />
                </div>
                <h5>{name}</h5>
            </div>
            {/* <Slender {...settings}> */}
            <div className="divPhotoUsers">
                <img src={photo1} alt="userPhoto" />
            </div>
            <div className="divPhotoUsers">
                <img src={photo2} alt="" />
            </div>
            <div className="divPhotoUsers">
                <img src={photo3} alt="" />
            </div>
            {/* </Slender> */}
        </div>
    </div>)
}

export default Users;