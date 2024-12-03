const DetalleProducto = () =>{
    return (
        <div className="container mt-5">
            <div className="row bg-white p-5">
                <div className="col-md-6 mb-4">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product" className="img-fluid rounded mb-3 product-image" id="mainImage"/>
                    <div className="d-flex justify-content-between">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 1" className="img-thumbnail w-25 rounded active"/>
                        <img src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 2" className="img-thumbnail w-25 rounded"/>
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 3" className="img-thumbnail w-25 rounded"/>
                        <img src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 4" className="img-thumbnail w-25 rounded"/>
                    </div>
                </div>

                <div className="col-md-6">
                    <h2 className="mb-3">Premium Wireless Headphones</h2>
                    <p className="text-muted mb-4">SKU: WH1000XM4</p>
                    <div className="mb-3">
                        <span className="h4 me-2">$349.99</span>
                        <span className="text-muted"><s>$399.99</s></span>
                    </div>
                    <div className="mb-3">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-half text-warning"></i>
                        <span className="ms-2">4.5 (120 reviews)</span>
                    </div>
                    <p className="mb-4">Experience premium sound quality and industry-leading noise cancellation with these wireless
                        headphones. Perfect for music lovers and frequent travelers.</p>
                    <div className="mb-4">
                        <h5>Color:</h5>
                        <div className="btn-group" role="group" aria-label="Color selection">
                            <input type="radio" className="btn-check" name="color" id="black"/>
                            <label className="btn btn-outline-dark" htmlFor="black">Black</label>
                            <input type="radio" className="btn-check" name="color" id="silver"/>
                            <label className="btn btn-outline-secondary" htmlFor="silver">Silver</label>
                            <input type="radio" className="btn-check" name="color" id="blue"/>
                            <label className="btn btn-outline-primary" htmlFor="blue">Blue</label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="form-label">Quantity:</label>
                        <input type="number" className="form-control" id="quantity"/>
                    </div>
                    <button className="btn btn-primary btn-lg mb-3 me-2">
                            <i className="bi bi-cart-plus"></i> Add to Cart
                        </button>
                    <button className="btn btn-outline-secondary btn-lg mb-3">
                            <i className="bi bi-heart"></i> Add to Wishlist
                        </button>
                    <div className="mt-4">
                        <h5>Key Features:</h5>
                        <ul>
                            <li>Industry-leading noise cancellation</li>
                            <li>30-hour battery life</li>
                            <li>Touch sensor controls</li>
                            <li>Speak-to-chat technology</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalleProducto