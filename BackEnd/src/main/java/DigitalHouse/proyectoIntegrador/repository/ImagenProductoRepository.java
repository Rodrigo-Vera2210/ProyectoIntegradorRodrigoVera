package DigitalHouse.proyectoIntegrador.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import DigitalHouse.proyectoIntegrador.entity.ImagenProducto;
import DigitalHouse.proyectoIntegrador.entity.Producto;



public interface ImagenProductoRepository extends JpaRepository<ImagenProducto, Long>{
    
    List<ImagenProducto> findByProducto(Producto producto);
}
