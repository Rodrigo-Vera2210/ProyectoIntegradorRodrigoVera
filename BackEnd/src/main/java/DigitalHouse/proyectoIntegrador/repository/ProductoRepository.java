package DigitalHouse.proyectoIntegrador.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import DigitalHouse.proyectoIntegrador.entity.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

}
