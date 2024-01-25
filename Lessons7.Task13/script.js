let num = Number(prompt(`Введіть число:`))
let degree = Number(prompt(`Введіть ступінь до якого треба піднести число:`))
if (!isNaN(num) && !isNaN(degree)) {
    function pow(num, degree) {
	    if (degree != 1) {
	    return num *= pow(num,degree - 1)
	    } else {
	        return num
	        }
    }
alert(pow(num,degree))
}
else { 
    alert(`Щось введено некоректно...`)
}