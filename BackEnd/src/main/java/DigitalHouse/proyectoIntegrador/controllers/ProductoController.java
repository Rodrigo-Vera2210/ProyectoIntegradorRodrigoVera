package DigitalHouse.proyectoIntegrador.controllers;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import DigitalHouse.proyectoIntegrador.entity.Categoria;
import DigitalHouse.proyectoIntegrador.entity.Producto;
import DigitalHouse.proyectoIntegrador.models.Request.ProductoRequest;
import DigitalHouse.proyectoIntegrador.services.ProductoService;


@CrossOrigin(origins = "http://localhost:5173/",maxAge = 3600)
@RestController
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    private ProductoService productoService;
    
    @PostMapping
    public ResponseEntity<Producto> guardarProducto(@RequestBody ProductoRequest productoRequest) throws ParseException {
        return ResponseEntity.ok(productoService.guardarProducto(productoRequest));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Producto>> getProductoById(@PathVariable Long id) {
        var producto = productoService.buscarProducto(id);
        if(producto.isPresent()){
            return ResponseEntity.ok(producto);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/categoria")
    public ResponseEntity<List<Categoria>> getCategoria() {
        var categorias = productoService.buscarTodasCategoria();
        if(!categorias.isEmpty()){
            return ResponseEntity.ok(categorias);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/categoria")
    public ResponseEntity<Categoria> guardarCategoria(@RequestBody Categoria categoria) {
        return ResponseEntity.ok(productoService.guardarCategoria(categoria));
    }

    @GetMapping
    public ResponseEntity<Page<Producto>> getProductos(@RequestParam(required=false) String page, @RequestParam(required=false) String pageSize) {
        if(page == null) page = "1";
        if(pageSize == null) pageSize = "5";
        var productos =  productoService.buscarTodos(Integer.parseInt(page),Integer.parseInt(pageSize));
        if(!productos.isEmpty()){
            return ResponseEntity.ok(productos);
        }
        return ResponseEntity.notFound().build();
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
        Optional<Producto> producto = productoService.buscarProducto(id);
        if(producto.isPresent()){
            productoService.eliminarProducto(producto.get());
            return ResponseEntity.ok().body("Se elimino con exito");
        }
        throw new Exception("Producto con id " + id + "no encontrado");
    }
    
    
}
