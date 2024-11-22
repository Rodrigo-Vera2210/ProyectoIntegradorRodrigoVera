const Search = () => {
    return(
        <div className="d-flex justify-content-around">
            <div className="input-group w-50">
                <input type="text" className="form-control" placeholder="Buscar producto..." />
                <button className="btn btn-outline-warning">Buscar</button>
            </div>
            <div className="m-2">
                <button>Chek 1</button><button>Check 2</button>
            </div>
        </div>
    )
}

export default Search