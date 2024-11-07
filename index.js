function AddRow()
{
	var eng = document.getElementById('eng').value;
	eng=parseInt(eng);
	var urd = document.getElementById('urd').value;
	urd=parseInt(urd);
	var math = document.getElementById('math').value;
	math=parseInt(math);
	var sci = document.getElementById('sci').value;
	sci=parseInt(sci);
	var pak = document.getElementById('pak').value;
	pak=parseInt(pak);
	var mark=eng+urd+math+sci+pak;
	var per = ((mark/500)*100);
	var grade;
	
	
	if(per>=80){
		grade= 'A1';
	}
	
	else if(per>=70){
		grade='A';
	}
	
	else if(per>=60){
		grade='B';
	}
	
	else if(per>=50){
		grade='C';
	}
	else if(per>=40){
		grade='D';
	}
	
	else{
		grade='FAIL';
	}
	
	var table = document.getElementsByTagName('table')[0];
	
	var newRow = table.insertRow(1);
	
	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);
	var cel4 = newRow.insertCell(3);
	var cel5 = newRow.insertCell(4);
	var cel6 = newRow.insertCell(5);
	var cel7 = newRow.insertCell(6);
	var cel8 = newRow.insertCell(7);
	
	cel1.innerHTML = eng;
	cel2.innerHTML = urd;
	cel3.innerHTML = math;
	cel4.innerHTML = sci;
	cel5.innerHTML = pak;
	cel6.innerHTML = mark;
	cel7.innerHTML = per;
	cel8.innerHTML = grade;
}