const salarioBruto = 2000.00;
let aliquotaINSS;
let aliquotaIR;

if (salarioBruto <= 1556.94){
aliquotaINSS = salarioBruto *0.08;
}else if(salarioBruto  <= 2594.92){
  aliquotaINSS = salarioBruto * 0.09;
}else if(salarioBruto <= 5189.82){
  aliquotaINSS = salarioBruto *0.11
}
 const baseSalary = salarioBruto - aliquotaINSS


 if(baseSalary <= 1903.98){
  aliquotaIR = 0
 }else if(baseSalary < 2826.65){
  aliquotaIR = (baseSalary * 0.075) -142.80;
 }else if(baseSalary <= 3751.05){
  aliquotaIR = (baseSalary * 0.15) - 35.80 
 }else if (baseSalary <= 4664.68){
  aliquotaIR =(baseSalary *0.225)- 636.13 
 }else if(baseSalary > 4664.68){
  aliquotaIR =(baseSalary *0.275)-869.36 
 }
 console.log("Salario: " + (baseSalary - aliquotaIR))




 