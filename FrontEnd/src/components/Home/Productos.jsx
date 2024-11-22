import RecommendCard from "./RecommendCard"

const Productos = () => {
    const carros = [
        {
            id:0,
            img:'',
            modelo:'',
            descripcion:'',
            isFav: true
        },
        {
            id:2,
            img:'',
            modelo:'',
            descripcion:'',
            isFav: false
        },
        {
            id:3,
            img:'',
            modelo:'',
            descripcion:'',
            isFav: true
        },
        {
            id:4,
            img:'',
            modelo:'',
            descripcion:'',
            isFav: false
        },
        {
            id:5,
            img:'',
            modelo:'',
            descripcion:'',
            isFav: true
        },
        {
            id:6,
            img:'',
            modelo:'',
            descripcion:'',
            isFav: false
        },
    ]


    return (
        <div className="p-5 text-center bg-info-subtle">
            <h1 className="text-warning pb-5">Productos</h1>
            <div className="d-flex flex-wrap gap-5 justify-content-center">
                {
                    carros && carros.map((carro)=>{
                        return <RecommendCard carro={carro}/>
                    })
                }
            </div>
        </div>
    )
}

export default Productos