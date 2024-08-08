class Persona {
    constructor() {
        this.Cuil,
        this.Apellido,
        this.Nombre,
        this.FechaNac
    }

    getPersona() {
        return `${this.Apellido}, ${this.Nombre}`;
    }
}

class Vendedor extends Persona {
    constructor() {
        super(),
            this.NroVendedor,
            this.Venta,
            this.CantProdVend,
            this.Fecha
    }

    getVendedor(){
        return this.NroVendedor
    }
    getVenta(){
        return this.Venta
    }
    getCantProdVend(){
        return this.CantProdVend
    }
    getFecha(){
        return this.Fecha
    }
}


let cuil = JSON.parse(localStorage.getItem("cuil")) || []; 
let apellido = JSON.parse(localStorage.getItem("apellido")) || []; 
let nombre = JSON.parse(localStorage.getItem("nombre")) || [];
let fechaNac = JSON.parse(localStorage.getItem("fechaNac")) || [];
let nroVendedor = JSON.parse(localStorage.getItem("nroVendedor")) || [];
let venta = JSON.parse(localStorage.getItem("venta")) || [];
let cantProdVend = JSON.parse(localStorage.getItem("cantProdVend")) || [];
let fecha = JSON.parse(localStorage.getItem("fecha")) || [];

let i = cuil.length;

function agregar(){   
    
    const txtCuil = document.getElementById("txtCuil");
    const txtApellido = document.getElementById("txtApellido");
    const txtNombre = document.getElementById("txtNombre");
    const txtFechaNac = document.getElementById("txtFechaNac");
    const txtNroVendedor = document.getElementById("txtNroVendedor");
    const txtVenta = document.getElementById("txtVenta");
    const txtCantProdVend = document.getElementById("txtCantProdVend");
    const txtFecha = document.getElementById("txtFecha");        
    
    cuil[i] = parseFloat(txtCuil.value);
    apellido[i] = txtApellido.value;
    nombre[i] = txtNombre.value;
    fechaNac[i] = txtFechaNac.value;
    nroVendedor[i] = txtNroVendedor.value;
    venta[i] = parseFloat(txtVenta.value);
    cantProdVend[i] = parseFloat(txtCantProdVend.value);
    fecha[i] = txtFecha.value;   

    i++;
    
    localStorage.removeItem("cuil");
    localStorage.removeItem("apellido");
    localStorage.removeItem("nombre");
    localStorage.removeItem("fechaNac");
    localStorage.removeItem("nroVendedor");
    localStorage.removeItem("venta");
    localStorage.removeItem("cantProdVend");
    localStorage.removeItem("fecha");
    
    localStorage.setItem("cuil", JSON.stringify(cuil));
    localStorage.setItem("apellido", JSON.stringify(apellido));
    localStorage.setItem("nombre", JSON.stringify(nombre));
    localStorage.setItem("fechaNac", JSON.stringify(fechaNac));
    localStorage.setItem("nroVendedor", JSON.stringify(nroVendedor));
    localStorage.setItem("venta", JSON.stringify(venta));
    localStorage.setItem("cantProdVend", JSON.stringify(cantProdVend));
    localStorage.setItem("fecha", JSON.stringify(fecha));    
    
    txtCuil.value ="";
    txtApellido.value ="";
    txtNombre.value ="";
    txtFechaNac.value ="";
    txtNroVendedor.value ="";
    txtVenta.value ="";
    txtCantProdVend.value ="";
    txtFecha.value ="";

    txtCuil.focus();   

}   









