const isikukood = "50503262736"

 function getGender(isikukood){
	if(["1", "3", "5", "7"].includes(isikukood[0])){
		return "Sugu: Mees"
	} else {
		return "Sugu: Naine"
	}
}

function getBirthdate(isikukood){
	let year, month, day;
	year = "Aasta 20" + isikukood.slice(1, 3)
	month = ""
	day = isikukood.slice(5, 7)
	if (isikukood.slice(3, 5) == '01'){
		month = " Jaanuar "
	}
	else if (isikukood.slice(3, 5) == '02'){
		month = " Veebruar "
	}
	else if (isikukood.slice(3, 5) == '03'){
		month = " Märts "
	}
	else if (isikukood.slice(3, 5) == '04'){
		month = " Aprill "
	}
	else if (isikukood.slice(3, 5) == '05'){
		month = " Mai "
	}
	else if (isikukood.slice(3, 5) == '06'){
		month = " Juuni "
	}
	else if (isikukood.slice(3, 5) == '07'){
		month = " Juuli "
	}
	else if (isikukood.slice(3, 5) == '08'){
		month = " August "
	}
	else if (isikukood.slice(3, 5) == '09'){
		month = " September "
	}
	else if (isikukood.slice(3, 5) == '10'){
		month = " Oktoober "
	}
	else if (isikukood.slice(3, 5) == '11'){
		month = " November "
	}
	else if (isikukood.slice(3, 5) == '12'){
		month = " Detsember "
	}
	else
		month = " Undefined "
	birthdate = "Sünnikuupäev: " + day + month + year
	return birthdate}

function getLine(isikukood){
	let line
	let hospital
	if (isikukood.slice(7, 10) >= '001' && isikukood.slice(7, 10) <= '010'){
		hospital = 'Kuressaare haigla'
	}
	else if (isikukood.slice(7, 10) >= '011' && isikukood.slice(7, 10) <= '019'){
		hospital = 'Tartu Ülikooli Naistekliinik'
	}
	else if (isikukood.slice(7, 10) >= '021' && isikukood.slice(7, 10) <= '150'){
		hospital = 'Ida-Tallinna keskhaigla, Pelgulinna sünnitusmaja (Tallinn)'
	}
	else if (isikukood.slice(7, 10) >= '151' && isikukood.slice(7, 10) <= '160'){
		hospital = 'Keila haigla'
	}
	else if (isikukood.slice(7, 10) >= '161' && isikukood.slice(7, 10) <= '220'){
		hospital = 'Rapla haigla, Loksa haigla, Hiiumaa haigla (Kärdla)'
	}
	else if (isikukood.slice(7, 10) >= '221' && isikukood.slice(7, 10) <= '270'){
		hospital = 'Ida-Viru keskhaigla (Kohtla-Järve, endine Jõhvi)'
	}
	else if (isikukood.slice(7, 10) >= '271' && isikukood.slice(7, 10) <= '370'){
		hospital = 'Maarjamõisa kliinikum (Tartu), Jõgeva haigla'
	}
	else if (isikukood.slice(7, 10) >= '371' && isikukood.slice(7, 10) <= '420'){
		hospital = 'Narva haigla'
	}
	else if (isikukood.slice(7, 10) >= '421' && isikukood.slice(7, 10) <= '470'){
		hospital = 'Pärnu haigla '
	}
	else if (isikukood.slice(7, 10) >= '471' && isikukood.slice(7, 10) <= '490'){
		hospital = 'Haapsalu haigla'
	}
	else if (isikukood.slice(7, 10) >= '491' && isikukood.slice(7, 10) <= '520'){
		hospital = 'Järvamaa haigla (Paide)'
	}
	else if (isikukood.slice(7, 10) >= '521' && isikukood.slice(7, 10) <= '570'){
		hospital = 'Rakvere haigla, Tapa haigla'
	}
	else if (isikukood.slice(7, 10) >= '571' && isikukood.slice(7, 10) <= '600'){
		hospital = 'Valga haigla '
	}
	else if (isikukood.slice(7, 10) >= '601' && isikukood.slice(7, 10) <= '650'){
		hospital = 'Viljandi haigla'
	}
	else if (isikukood.slice(7, 10) >= '651' && isikukood.slice(7, 10) <= '700'){
		hospital = 'Lõuna-Eesti haigla (Võru), Põlva haigla '
	}
	line = "Haigla: " + hospital
	return line
}

function getControl(isikukood){
	let control
	control = "Kontroll number: " + isikukood.slice(-1)
	return control
}

let result_gender = getGender(isikukood)
let result_birthdate = getBirthdate(isikukood)
let result_hospital = getLine(isikukood)
let result_controlnumber = getControl(isikukood)

console.log(result_gender)
console.log(result_birthdate)
console.log(result_hospital)
console.log(result_controlnumber)

/*
const idInfo = (idcode) => {
	idcode = idcode.toString()
	let sex = idcode.slice[0]
	let year = idcode.slice[1, 3]
	let month = idcode.slice[3, 5]
	let day = idcode.slice[5, 7]
	let addInfo = idcode.slice[7, 10]
	let idControl = idcode.slice(-1)

const sexControl = (sex) => {
	if (sex % 2 != 0) {
	return "Male"
	} else {
	return "Female"
	}
}

const 

	console.log(sexControl(sex))
}


idInfo(50503262736)
*/