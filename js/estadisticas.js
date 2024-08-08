varEstadisticas();

function varEstadisticas() {

    //let cuil = JSON.parse(localStorage.getItem("cuil")) || []; 
    let apellido = JSON.parse(localStorage.getItem("apellido")) || []; 
    let nombre = JSON.parse(localStorage.getItem("nombre")) || [];
    //let fechaNac = JSON.parse(localStorage.getItem("fechaNac")) || [];
    let nroVendedor = JSON.parse(localStorage.getItem("nroVendedor")) || [];
    let venta = JSON.parse(localStorage.getItem("venta")) || [];
    let cantProdVend = JSON.parse(localStorage.getItem("cantProdVend")) || [];
    let fecha = JSON.parse(localStorage.getItem("fecha")) || [];

    let acum= 0;
    let total = 0;
    let mayPromVen = 0;
    let idMay = "";
    let menPromVen = 0;
    let idMen = "";
    let mayVendedor = "";
    let fechaVenMay = "";
    let fechaVenMen = "";     
    let promVen = 0;
    let mayCant = 0;
    let mayVent = 0;
    let menVent = 0;
    
        
    for (let i = 0; i < nroVendedor.length; i++) {
                
        let vend = `${apellido[i]} ${nombre[i]}`;
        let cP = cantProdVend[i];

        promVen = (venta[i] / cP);
        acum += venta[i];
        total = acum;      
              

        //Mayor promedio de venta 
        if (promVen > mayPromVen ){

            idMay = vend; 
            mayPromVen = promVen;  
            fechaVenMay = fecha[i];
            mayVent = venta[i]; 
        }
        
        // Menor promedio de venta
        else {

            idMen = vend;
            menPromVen = promVen;
            fechaVenMen = fecha[i];
            menVent = venta[i];
        }
        
        //Vendedor con mas productos vendidos 
        if (cP > mayCant){
            
            mayCant = cP;
            mayVendedor = vend;
        }
    }   
    

    //Mostrar el resulta en el DOM    
    const lblVentaTotal = document.getElementById("lblVentaTotal");
    lblVentaTotal.innerHTML = ` $ ${total}`;

    const lblMayPromVen = document.getElementById("lblMayPromVen");
    lblMayPromVen.innerHTML = `VENDEDOR: ${idMay} - PROMEDIO:$ ${mayPromVen} - MONTO:$ ${mayVent} FECHA DE VENTA: ${fechaVenMay}`;

    const lblMenPromVen = document.getElementById("lblMenPromVen");
    lblMenPromVen.innerHTML =  `VENDEDOR: ${idMen} - PROMEDIO:$ ${menPromVen} - MONTO:$ ${menVent} FECHA DE VENTA: ${fechaVenMen}`;

    const lblMayVendedor = document.getElementById("lblMayVendedor");
    lblMayVendedor.innerHTML = `NOMBRE: ${mayVendedor} - CANTIDAD DE PRODUCTOS: ${mayCant}`;
   

}