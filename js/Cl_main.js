import Cl_Fijo from "./Cl_Fijo.js"
import Cl_Contratado from "./Cl_Contratado.js"
import Cl_Profesor from "./Cl_Profesor.js"

let profesor =new Cl_Profesor ()

let profesoFijo = new Cl_Fijo ("Carlos",25,100)
let profesoContratado = new Cl_Contratado ("Carolina",40,90)

let salida = document.getElementById ("salida")

salida.innerHTML = `

 Nombre del profesor fijo: ${profesoFijo.nombre}
<br> Monto del bono: ${profesoFijo.bono}
<br> Monto del sueldo: ${profesoFijo.sueldo}
<br> Ingreso total del profesor Carlos: ${profesoFijo.ingresoTotal()}
<br>
<br> Nombre del profesor fijo: ${profesoContratado.nombre}
<br> Monto del bono: ${profesoContratado.bono}
<br> Monto del sueldo: ${profesoContratado.sueldo}
<br> Ingreso total del profesor Carolina: ${profesoContratado.ingresoTotal()}
`

