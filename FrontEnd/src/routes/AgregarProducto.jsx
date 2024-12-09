import { useProductosStates } from "../components/utils/globalContext"
import { RiAddFill } from "@remixicon/react"
import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const AgregarProducto = () => {
    
    const { state } = useProductosStates()
    const navigate = useNavigate()
    const [categorias, setCategorias] = useState(state && state.categorias)

    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        categoria: 0,
        precio: 0,
        cantidad: 0,
        imagenes: []
    })

    const [formDataCategoria, setFormDataCategoria] = useState({
        nombreCategoria: '',
        imagen: ''
    })

    const [formDataImagen, setFormDataImagen] = useState({
        url: ''
    })

    const {
        nombre,
        descripcion,
        categoria,
        imagenes,
        precio,
        cantidad
    } = formData

    const{
        nombreCategoria,
        imagen
    } = formDataCategoria
    
    const{
        url
    } = formDataImagen

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})
    const onChangeCategoria = e => setFormDataCategoria({ ...formDataCategoria, [e.target.name]: e.target.value})
    const onChangeImagen = e => setFormDataImagen({ ...formDataImagen, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        const fetchData = async () =>{
            try {
                const res = await axios.post('http://127.0.0.1:8080/producto', formData, config)
                if(res.status == 200){
                    navigate("/admin/productos")
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }

    const onSubmitImagen = e => {
        e.preventDefault()
        setFormData({ ...formData, [imagenes]: imagenes.push(
            {
                url: url
            }
        )})
    }

    const submitCategoria = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('nombre',nombreCategoria)
        formData.append('urlImagen',imagen)

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        
        const fetchData = async () =>{
            try {
                const res = await axios.post('http://127.0.0.1:8080/producto/categoria', formData, config)
                axios.get(url+'http://127.0.0.1:8080/producto/categoria').then((res)=>{
                    console.log(res)
                    setCategorias(res.data)
                })
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
        
    }

    return (
        <div className="d-flex justify-content-center h-100 align-items-center">
            <form className="bg-white p-5"
                style={{width: "50%"}}
                >
                <h1 className="text-center text-warning pb-5">Agregar Producto</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-warning">Nombre</label>
                    <input name="nombre" type="text" value={nombre} onChange={e => onChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-warning">Descripción</label>
                    <input type="text" name="descripcion" value={descripcion} onChange={e => onChange(e)} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-warning">Precio</label>
                    <input type="number" name="precio" value={precio} onChange={e => onChange(e)} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-warning">Cantidad</label>
                    <input type="number" name="cantidad" value={cantidad} onChange={e => onChange(e)} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-warning">Categoría</label>
                    <div className="d-flex align-items-center">
                        <select className="form-select w-100" name="categoria" value={categoria} onChange={e => onChange(e)} htmlFor="exampleCheck1">
                            <option>Seleccione una categoría</option>
                            {
                                categorias && categorias.map((categoria)=> {
                                    return <option value={categoria.idCategoria}>{categoria.nombre}</option>
                                })
                            }
                        </select>
                        <button type="button" className="btn btn-outline-warning border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <RiAddFill/>
                        </button>
                    </div>

                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="exampleInputPassword1"  className="form-label text-warning">Imagenes</label>
                    <button className="btn btn-warning border-0" type="button" data-bs-toggle="modal" data-bs-target="#modalImagen">
                        Agregar Imagen<RiAddFill/>
                    </button>
                    <div className="d-flex flex-wrap gap-3 p-4">
                        {
                            imagenes && imagenes.map((imagen) => {
                                return <img style={{width: "100px"}} src={imagen.url}/>
                            })
                        }
                    </div>
                </div>
                <div className="d-flex justify-content-center gap-2">
                    <Link to="/admin/productos" className="btn btn-outline-secondary w-50">Volver</Link>
                    <button type="button" onClick={e => onSubmit(e)} className="btn w-50" style={{background: "orange"}}>Guardar</button>
                </div>
            </form>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-warning" id="exampleModalLabel">Agregar Categoría</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-warning">Nombre</label>
                                <input type="text" name="nombreCategoria" value={nombreCategoria} onChange={e => onChangeCategoria(e)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label text-warning">Imagen</label>
                                <input type="text" name="imagen" value={imagen} onChange={e => onChangeCategoria(e)} className="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-warning" onClick={e => submitCategoria(e)}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalImagen" tabIndex="-1" aria-labelledby="modalImagenLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-warning" id="modalImagenLabel">Agregar Imagen</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-warning">Url</label>
                                <input type="text" name="url" value={url} onChange={e => onChangeImagen(e)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-warning" onClick={e => onSubmitImagen(e)}>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgregarProducto