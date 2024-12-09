import { RiArrowLeftBoxFill, RiArrowLeftLine, RiArrowRightBoxFill, RiArrowRightFill, RiArrowRightLine, RiDeleteBin2Fill, RiEdit2Fill } from "@remixicon/react";
import ReactPaginate from 'react-paginate';
import { useState } from "react";

const TablaProductos = ({ productos,
  itemsPerPage,
  pageSize,
  totalProductos,
  totalPages,
  handlePageClick, 
  handlePageSize,
  deleteProducto
}) => {
  
  
  return (
    <div className="p-3">
      <table className="table table-hover text-center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Categoría</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos && productos.map((producto) => {
              return(
                <tr key={producto.idProducto}>
                  <td>{producto.idProducto}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.categoria.nombre}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.cantidad}</td>
                  <td className="d-flex justify-content-center gap-2">
                    <button className="btn btn-outline-secondary"><RiEdit2Fill/> </button>
                    <button className="btn btn-outline-danger" onClick={e => deleteProducto(e, producto.idProducto)}><RiDeleteBin2Fill/> </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="pagination d-flex justify-content-between">
        <select className="form-select" name="pageSize" style={{width:"70px"}} onChange={e => handlePageSize(e.target)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <ReactPaginate 
          breakLabel="..."
          nextLabel={
            <div className="btn btn-outline-warning">  
              <RiArrowRightLine color="orange"/>
            </div> 
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={pageSize}
          pageClassName = "btn btn-outline-warning"
          pageCount={totalPages}
          previousLabel={
            <div className="btn btn-outline-warning">  
              <RiArrowLeftLine color="orange"/>
            </div> 
          }
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default TablaProductos;
