verListado();

function verListado() {
    
    let cuil = JSON.parse(localStorage.getItem("cuil")) || []; 
    let apellido = JSON.parse(localStorage.getItem("apellido")) || []; 
    let nombre = JSON.parse(localStorage.getItem("nombre")) || [];
    let fechaNac = JSON.parse(localStorage.getItem("fechaNac")) || [];
    let nroVendedor = JSON.parse(localStorage.getItem("nroVendedor")) || [];
    let venta = JSON.parse(localStorage.getItem("venta")) || [];
    let cantProdVend = JSON.parse(localStorage.getItem("cantProdVend")) || [];
    let fecha = JSON.parse(localStorage.getItem("fecha")) || [];;
    
    
    for (let i = 0; i < cuil.length; i++) {
    
        let c = cuil[i];
        let a = apellido[i];
        let n = nombre[i];
        let fn = fechaNac[i];
        let nv = nroVendedor[i];
        let v = venta[i];
        let cp = cantProdVend[i];
        let f = fecha[i];
    
        const td0 = document.createElement("td");
        td0.innerHTML = c;
        const td1 = document.createElement("td");
        td1.innerHTML = a;
        const td2 = document.createElement("td");
        td2.innerHTML = n;
        const td3 = document.createElement("td");
        td3.innerHTML = fn;
        const td4 = document.createElement("td");
        td4.innerHTML = nv;
        const td5 = document.createElement("td");
        td5.innerHTML = v;
        const td6 = document.createElement("td");
        td6.innerHTML = cp;
        const td7 = document.createElement("td");
        td7.innerHTML = f;
    
        const tr = document.createElement("tr");
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
    
        const tbody = document.querySelector("tbody");
        tbody.appendChild(tr)
    }

}

function limpiar(){
    localStorage.removeItem("cuil");
    localStorage.removeItem("apellido");
    localStorage.removeItem("nombre");
    localStorage.removeItem("fechaNac");
    localStorage.removeItem("nroVendedor");
    localStorage.removeItem("venta");
    localStorage.removeItem("cantProdVend");
    localStorage.removeItem("fecha");  

    const tbody = document.querySelector("tbody");
    tbody.innerHTML= "";
}