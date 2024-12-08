import CategoryCard from "./CategoryCard"

const categorias =
[
    {
    nombre: 'Todo Terreno',
    descripcion: 'Juanes',
    img: 'https://autoland.com.pe/wp-content/uploads/2024/01/Suzuki-Jimny-autoland.jpg'
    },
    {
    nombre: 'Deportivo',
    descripcion: 'Marco',
    img: 'https://media.gq.com.mx/photos/5d6ec5c43d0c810008e7008c/4:3/w_2248,h_1686,c_limit/bugatti.jpg'
    },
    {
    nombre: 'Deportivo',
    descripcion: 'Marco',
    img: 'https://media.gq.com.mx/photos/5d6ec5c43d0c810008e7008c/4:3/w_2248,h_1686,c_limit/bugatti.jpg'
    },
    {
    nombre: 'Deportivo',
    descripcion: 'Marco',
    img: 'https://media.gq.com.mx/photos/5d6ec5c43d0c810008e7008c/4:3/w_2248,h_1686,c_limit/bugatti.jpg'
    }

]


function Category() {
    
    return (
        <div className="text-center p-5 bg-dark">
            <h1 className="pb-5 text-warning">Buscar carros por tipo de categorías</h1>
            <div className="container d-flex flex-wrap gap-4 text-center">
                { categorias && categorias.map((categoria) => {
                    return (
                        <>
                            <CategoryCard categoria={categoria}/>
                        </>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Category