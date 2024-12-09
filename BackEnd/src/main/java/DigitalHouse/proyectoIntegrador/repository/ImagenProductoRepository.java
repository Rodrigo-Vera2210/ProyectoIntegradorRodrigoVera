package DigitalHouse.proyectoIntegrador.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import DigitalHouse.proyectoIntegrador.entity.ImagenProducto;



public interface ImagenProductoRepository extends JpaRepository<ImagenProducto, Long>{
    
    @Query("SELECT im FROM ImagenProducto im WHERE im.producto = ?1")
    List<ImagenProducto> findByProducto(Long producto);
}
