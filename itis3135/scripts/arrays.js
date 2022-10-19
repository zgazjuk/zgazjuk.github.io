window.onload = function(){
    document.getElementById("employee").focus();
}
const employees = [];
const salaries = [];

function addSalary(){
    const employee = document.getElementById("employee").value;
    const salary = parseFloat(document.getElementById("salary").value);

    if(isNaN(salary)){
        alert("Salay must be a number value!");
    }else{
        if(employees.includes(employee)){
            alert("This employee has already been logged.");
        }else{
            employees.push(employee);
            salaries.push(salary);
            document.getElementById("results").innerHTML = "Added: " + employee + " $" + salary; 
        }
    }
    document.getElementById("employee").focus();
}

function displayResults(){
    var average = 0;
    var maxSalary = 0;
    const result = document.getElementById('results');
    for (var i = 0; i < salaries.length; i++) {
        if (salaries[i] > maxSalary) {
            maxSalary = salaries[i];
        }
        average += salaries[i];
    }
    average = average / salaries.length;
    result.innerHTML = "<p>Average Salary: " + average.toFixed(2) + "</p>" + "<p>Max Salary: " + maxSalary.toFixed(2) + "</p>";
    document.getElementById("employee").focus();
}

function displaySalary(){
    var results_table = document.getElementById("results_table");

    var table_string = "<tr><th>Employee</th><th>Salary</th></tr>";

    for(var i = 0; i < employees.length; i++){
        table_string = table_string + "<tr><td>" + employees[i] + "</td><td>$" + salaries[i] + "</td></tr>";
    }

    results_table.innerHTML = "<table>" + table_string + "</table>";
    document.getElementById("employee").focus();
    
}
