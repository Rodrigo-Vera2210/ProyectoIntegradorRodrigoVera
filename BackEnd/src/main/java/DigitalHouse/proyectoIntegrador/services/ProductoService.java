package DigitalHouse.proyectoIntegrador.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import DigitalHouse.proyectoIntegrador.entity.Categoria;
import DigitalHouse.proyectoIntegrador.entity.Producto;
import DigitalHouse.proyectoIntegrador.repository.CategoriaRepository;
import DigitalHouse.proyectoIntegrador.repository.ProductoRepository;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private CategoriaRepository categoriaRepository;

    public Producto guardarProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public Optional<Producto> buscarProducto(Long idProducto){
        return productoRepository.findById(idProducto);
    }

    public List<Producto> buscarTodos(){
        return productoRepository.findAll();
    }

    public void actualizarProducto(Producto producto){
        productoRepository.save(producto);
    }

    public void eliminarProducto(Long idProducto){
        productoRepository.deleteById(idProducto);
    }

    public List<Categoria> buscarTodasCategoria(){
        return categoriaRepository.findAll();
    }
}
