class empleado {
    //Propiedades
    nombre = "";
    edad = 0;
    RFC = "";
    diasTrabajadosQuincena = 0;
    diasTrabajadosMes = 0;
    salarioDiario = 0;

    //Constructor
    constructor(nombre, edad, RFC, diasTrabajadosQuincena, diasTrabajadosMes, salarioDiario){
        this.nombre = nombre;
        this.edad = edad;
        this.RFC = RFC;
        this.diasTrabajadosQuincena = diasTrabajadosQuincena;
        this.diasTrabajadosMes = diasTrabajadosMes;
        this.salarioDiario = salarioDiario;
    }



    //Métodos

    imprimirInfo(){
        console.log("El nombre del empleado es: ", this.nombre);
        console.log("La edad del empleado es: ", this.edad);
        console.log("El RFC del empleado es: ", this.RFC);
        console.log("Los días trabajados por: ", this.nombre, " son: ", this. diasTrabajados);
        console.log("El salario diario de: ", this.nombre, " es de: ", this. salarioDiario);
    }

    sueldoMensualBruto(){
        var sueldoMensualBrutoVariable
        sueldoMensualBrutoVariable = this.diasTrabajadosMes*this.salarioDiario;
        console.log( this.nombre, " tiene un sueldo mensual bruto de: ", sueldoMensualBrutoVariable, " por ", this.diasTrabajadosMes, " días trabajados");


    }


    sueldoMensualNeto(){
        var sueldoMensualNetoVariable
        let ISR = 0.31
        sueldoMensualNetoVariable = this.diasTrabajadosMes*this.salarioDiario*(1-ISR);
        console.log( this.nombre, " tiene un sueldo mensual neto de: ", sueldoMensualNetoVariable, " por ", this.diasTrabajadosMes, " días trabajados");


    }

    sueldoQuincenalBruto(){
        var sueldoQuincenalBrutoVariable
        sueldoQuincenalBrutoVariable = this.diasTrabajadosQuincena*this.salarioDiario;
        console.log( this.nombre, " tiene un sueldo quincenal bruto de: ", sueldoQuincenalBrutoVariable, " por ", this.diasTrabajadosQuincena, " días trabajados");


    }

    sueldoQuincenalNeto(){
        var sueldoQuincenalNetoVariable
        let ISR = 0.31
        sueldoQuincenalNetoVariable = this.diasTrabajadosQuincena*this.salarioDiario*(1-ISR);
        console.log( this.nombre, " tiene un sueldo quincenal neto de: ", sueldoQuincenalNetoVariable, " por ", this.diasTrabajadosQuincena, " días trabajados");

    }


}

//Instanciar

let AnyiJimenez = new empleado ("Anyi Jiménez", 29, "JIBA940425POI", 13, 28, 156.78);

AnyiJimenez.imprimirInfo();
AnyiJimenez.sueldoMensualBruto();
AnyiJimenez.sueldoMensualNeto();
AnyiJimenez.sueldoQuincenalBruto();
AnyiJimenez.sueldoQuincenalNeto();
