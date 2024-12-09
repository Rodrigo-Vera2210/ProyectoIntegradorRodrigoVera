package DigitalHouse.proyectoIntegrador.services;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import DigitalHouse.proyectoIntegrador.entity.Categoria;
import DigitalHouse.proyectoIntegrador.entity.ImagenProducto;
import DigitalHouse.proyectoIntegrador.entity.Producto;
import DigitalHouse.proyectoIntegrador.models.Request.ProductoRequest;
import DigitalHouse.proyectoIntegrador.repository.CategoriaRepository;
import DigitalHouse.proyectoIntegrador.repository.ImagenProductoRepository;
import DigitalHouse.proyectoIntegrador.repository.ProductoRepository;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private CategoriaRepository categoriaRepository;
    @Autowired
    private ImagenProductoRepository imagenRepository;
    @Autowired
    private ModelMapper modelMapper;

    public Producto guardarProducto(ProductoRequest productoRequest) throws ParseException{
        Producto producto = convertToEntity(productoRequest);
        producto.setCategoria(categoriaRepository.findById(Long.parseLong(productoRequest.getCategoria())).get());
        productoRepository.save(producto);
        ImagenProducto[] imagenes = productoRequest.getImagenes();
        for (ImagenProducto imagen : imagenes) {
            imagen.setProducto(producto);
            imagenRepository.save(imagen);
        }
        return producto;
    }

    public Categoria guardarCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    public Optional<Producto> buscarProducto(Long idProducto){
        return productoRepository.findById(idProducto);
    }

    public Page<Producto> buscarTodos(int page, int pageSize){
        
        return productoRepository.findAll(PageRequest.of(page-1,pageSize));
    }

    public void actualizarProducto(Producto producto){
        productoRepository.save(producto);
    }

    public void eliminarProducto(Producto producto){
        try {
            List<ImagenProducto> imagenes = imagenRepository.findByProducto(producto.getIdProducto());
            if (!imagenes.isEmpty()) {
                for (ImagenProducto imagen : imagenes) {
                    imagenRepository.deleteById(imagen.getIdImagenProducto());

                }
            }
            productoRepository.deleteById(producto.getIdProducto());
        } catch (Exception e) {
            System.out.print(e);
        }
    }

    public List<Categoria> buscarTodasCategoria(){
        return categoriaRepository.findAll();
    }

    public List<ImagenProducto> buscarImagenesByIdProducto(Producto producto){
        return imagenRepository.findByProducto(producto.getIdProducto());
    }

    
    private Producto convertToEntity(ProductoRequest productoRequest) throws ParseException {
        Producto producto = modelMapper.map(productoRequest, Producto.class);

        return producto;
    }
}
