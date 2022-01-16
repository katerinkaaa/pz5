var table_activeAmountList = [];
var table_passivAmountList = [];

function AddRow(){

	var name = document.getElementById("name").value;
	var price =  document.getElementById("price").value;

	if (name == "" || price == "") {
		alert("Вы не заполнили все поля")
		return
	}

	if (document.querySelector('input[name="type_radio"]:checked').value == "Актив") {
        var addRown = document.getElementById('table_active');
		var newRow = addRown.insertRow(table_activeAmountList.length + 1);

		var cel1 = newRow.insertCell(0);
		var cel2 = newRow.insertCell(1);
		
		
		cel1.innerHTML = name;
		cel2.innerHTML = price;

		table_activeAmountList.push(price)

		var sum = 0;
		table_activeAmountList.forEach(element => { sum += parseInt(element) });
		document.getElementById("itog").innerHTML = "Итого: " + sum;   
		return sum

	} else {
		var addRown = document.getElementById('table_passiv');
		var newRow = addRown.insertRow(table_passivAmountList.length + 1);

		var cel1 = newRow.insertCell(0);
		var cel2 = newRow.insertCell(1);

		
		cel1.innerHTML = name;
		cel2.innerHTML = price;

		table_passivAmountList.push(price)

		var sum = 0;
		table_passivAmountList.forEach(element => { sum += parseInt(element) });
		document.getElementById("itogPas").innerHTML = "Итого: " + sum; 
		return sum

	}
			
}

function сalculateActive() {
	var sum = 0;
	table_activeAmountList.forEach(element => { sum += parseInt(element) });
    document.getElementById("ActiveSummary").innerHTML = "Сумма активов: " + sum;   
	return sum
}

function calculatePassive() {
	var sum = 0;
	table_passivAmountList.forEach(element => { sum += parseInt(element) });
    document.getElementById("PassiveSummary").innerHTML = "Сумма пасивов: " + sum; 
	return sum
}

function calculateTotal() {
	var activeSum = сalculateActive();
	var passiveSum = calculatePassive();
	var totalSum = activeSum - passiveSum;

    document.getElementById("TotalSummary").innerHTML = "Итоговый баланс: " + totalSum; 
	
}

    function delAll()
    {
        var actbody = document.getElementById('active_body');
		var pasbody = document.getElementById('passiv_body');
		var resPas = document.getElementById('PassiveSummary');
		var resAct = document.getElementById('ActiveSummary');
		var resForm = document.getElementById('TotalSummary');

		var itogbody = document.getElementById('itog_body');
        var rowCount = actbody.rows.length;
        var Count = pasbody.rows.length;
		var rowCount_itog = itogbody.rows.length;

		document.getElementById("deliteAct").innerHTML = "";
		sum = 0;
		document.getElementById("itog_body").innerHTML = "";
		sum = 0;
		

        for (var i = 1; i <rowCount; i++) {
            actbody.deleteRow(1);
        }
        for (var i = 1; i <Count; i++) {
            pasbody.deleteRow(1);
        }
		
        resAct.innerHTML = 'Сумма активов: 0';
        resPas.innerHTML = 'Сумма пасивов: 0';
        resForm.innerHTML = 'Итоговый баланс: 0';
        return;
    }



	  











