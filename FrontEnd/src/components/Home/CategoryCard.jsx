const CategoryCard = ({categoria}) =>{
    return (
        <div className="card" 
            style={{width: "18rem"}}
        >
            <img src={categoria.img} className="card-img-top h-50" alt="..."/>
            <div className="card-body">
                <h1>{categoria.nombre}</h1>
                <p className="card-text">{categoria.descripcion}</p>
            </div>
        </div>
    )
}

export default CategoryCard