import { useState, useEffect } from "react"
import TablaProductos from "../components/Dashboard/TablaProductos"
import { useProductosStates } from "../components/utils/globalContext"
import { Link } from "react-router-dom"
import axios from "axios"

function ListaProductos() {
    
    const [itemOffset, setItemOffset] = useState(0);
    const { state } = useProductosStates()
    const [productos, setProductos] = useState(state && state.productos)
    const [itemsPerPage, setItemsPerPage] = useState(0)
    const [pageSize, setPageSize] = useState(5)
    const [page, setPage] = useState(1)
    const [totalProductos, setTotalProductos] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    useEffect(() => {
        getProductos()
    },[])

    const handlePageClick = (event) => {
        setPage(event.selected + 1)
        getProductos()
        const newOffset = (event.selected * itemsPerPage) % totalProductos;
        setItemOffset(newOffset);
    };

    const handlePageSize = async (e) => {
        setPageSize(parseInt(e.value))
        getProductos()
    }
8.
    const deleteProducto = async (e, idProducto) => {
        console.log(idProducto)
        await axios.delete(`http://localhost:8080/producto/${idProducto}`).then((res)=>{
            getProductos()
        })
    }

    const getProductos = async() => {
        await axios.get(`http://localhost:8080/producto?page=${page}&pageSize=${pageSize}`).then((res)=>{
            console.log(res)
            setProductos(res.data.content)
            setItemsPerPage(res.data.size)
            setTotalProductos(res.data.totalElements)
            setTotalPages(res.data.totalPages)
        })
    }

    return (
        <div className="bg-white rounded-2 m-5 p-5">
            <h2 className="text-warning">Lista de productos</h2>
            <div className="d-flex justify-content-between border-bottom py-4">
                <div className="input-group w-50">
                    <input type="text" className="form-control" placeholder="Buscar producto..." />
                    <button className="btn btn-outline-warning">Buscar</button>
                </div>
                <Link to="/admin/agregar-producto" className="btn btn-secondary">Agregar Producto</Link>
            </div>
            <TablaProductos 
                productos = {productos && productos}
                itemsPerPage = {itemsPerPage && itemsPerPage}
                pageSize = {pageSize && pageSize}
                totalProductos = {totalProductos && totalProductos}
                totalPages = {totalPages && totalPages}
                handlePageClick = {handlePageClick}
                handlePageSize = {handlePageSize}
                deleteProducto = {deleteProducto}
                />
        </div>
    )
}

export default ListaProductos
