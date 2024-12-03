const RecommendCard = ({carro}) => {
    return(
        <div className="card"
            style={{width: "18rem"}}
        >
            {/* <Link to={"/dentist/" + id}> */}
            <img src="./images/doctor.jpg" alt="" />
            <div className="card-body">
                <h4>{carro.id}</h4>
                <h5>{carro.modelo}</h5>
            </div>
            {/* </Link> */}
            
            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            <button className="favButton">{carro.isFav ? "🌟" : "⭐"}</button>
        </div>
    )
}

export default RecommendCard