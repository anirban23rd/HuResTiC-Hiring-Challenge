function displayOutput() {
            var input1 = document.getElementById("name").value;
            if (input1.length === 0) {
                alert("Please enter a valid input");
                return;
            }
			
			var input2 = document.getElementById("psw").value;
            if (input2.length === 0) {
                alert("Please enter a valid input");
                return;
            }
			
           document.getElementById("result").innerHTML = " Username : " + input1 + "<br>" + " Password   : " + input2;
}
