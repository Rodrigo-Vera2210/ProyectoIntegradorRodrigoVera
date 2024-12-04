package DigitalHouse.proyectoIntegrador.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="productos")
public class Producto {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idProducto;
    @Column
    private String nombre;
    @Column
    private String descripcion;
    @Column
    private Float precio;
    @Column
    private int cantidad;
    @ManyToOne
    @JoinColumn(name="categoria_id",referencedColumnName="idCategoria")
    private Categoria categoria;

    public Producto(int cantidad, Categoria categoria, String descripcion, Long idProducto, String nombre, Float precio) {
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
    }

    public Producto(){}
    
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

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
