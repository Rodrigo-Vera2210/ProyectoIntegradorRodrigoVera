const AgregarProducto = () => {
    return (
        <div className="d-flex justify-content-center h-100 align-items-center">
            <form className="bg-white p-5"
                style={{width: "50%"}}
                >
                <h1 className="text-center text-warning pb-5">Agregar Producto</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-warning">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-warning">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label text-warning">Multiple files input example</label>
                    <input className="form-control" type="file" id="formFileMultiple" multiple/>
                </div>
                <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
    )
}

export default AgregarProducto