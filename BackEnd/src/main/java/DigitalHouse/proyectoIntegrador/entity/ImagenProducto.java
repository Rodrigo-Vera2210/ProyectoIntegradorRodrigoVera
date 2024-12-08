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
@Table(name="imagenesProducto")
public class ImagenProducto {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idImagenProducto;
    @Column 
    private String url;
    @ManyToOne
    @JoinColumn(name="producto_id", referencedColumnName="idProducto")
    private Producto producto;

    public ImagenProducto(Long idImagenProducto, Producto producto, String url) {
        this.idImagenProducto = idImagenProducto;
        this.producto = producto;
        this.url = url;
    }

    public Long getIdImagenProducto() {
        return idImagenProducto;
    }

    public void setIdImagenProducto(Long idImagenProducto) {
        this.idImagenProducto = idImagenProducto;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    
}
