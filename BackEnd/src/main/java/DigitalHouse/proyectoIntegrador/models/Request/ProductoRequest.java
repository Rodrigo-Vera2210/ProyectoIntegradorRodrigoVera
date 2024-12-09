package DigitalHouse.proyectoIntegrador.models.Request;

import DigitalHouse.proyectoIntegrador.entity.ImagenProducto;

public class ProductoRequest{
    
    private Long idProducto;
    
    private String nombre;
    
    private String descripcion;
    
    private Float precio;
    
    private int cantidad;

    private String categoria;
    
    private ImagenProducto[] imagenes;

    public Long getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Long idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Float getPrecio() {
        return precio;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public ImagenProducto[] getImagenes() {
        return imagenes;
    }

    public void setImagenes(ImagenProducto[] imagenes) {
        this.imagenes = imagenes;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    

    
}
