package DigitalHouse.proyectoIntegrador.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import DigitalHouse.proyectoIntegrador.entity.Producto;
import DigitalHouse.proyectoIntegrador.services.ProductoService;



@RestController
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    private ProductoService productoService;
    
    @PostMapping
    public ResponseEntity<Producto> guardarProducto(@RequestBody Producto producto) {
        return ResponseEntity.ok(productoService.guardarProducto(producto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Producto>> getProductoById(@PathVariable Long id) {
        return ResponseEntity.ok(productoService.buscarProducto(id));
    }

    @GetMapping
    public ResponseEntity<List<Producto>> getProductos() {
        return ResponseEntity.ok(productoService.buscarTodos());
    }
    
    @PutMapping
    public ResponseEntity<String> actualizarProducto(@RequestBody Producto producto){
        if(productoService.buscarProducto(producto.getIdProducto()).isPresent()){
            productoService.actualizarProducto(producto);
            return ResponseEntity.ok().body("Se actualizo con exito");
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarProducto(@PathVariable Long id) throws Exception{
        if(productoService.buscarProducto(id).isPresent()){
            productoService.eliminarProducto(id);
            return ResponseEntity.ok().body("Se elimino con exito");
        }
        throw new Exception("Producto con id " + id + "no encontrado");
    }
    
    
    
}
