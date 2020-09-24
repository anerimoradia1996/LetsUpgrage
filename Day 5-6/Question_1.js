let personInfo = [
    {
        name: "Aneri Patel",
        age: 23,
        city: "Mumbai",
        salary: "25LPA"
    },
    {
        name: "Yugma Patel",
        age: 27,
        city: "San Francisco",
        salary: "70LPA"
    },
    {
        name: "Kunj Patel",
        age: 23,
        city: "Toronto",
        salary: "30LPA"
    },
    {
        name: "Rahil Patel",
        age: 25,
        city: "Surat",
        salary: "55LPA"
    },
    {
        name: "Fairy Patel",
        age: 20,
        city: "London",
        salary: "12LPA"
    },
];


function display(superarray)
{
    let tabledata = "";

    superarray.forEach(function(person,index){
        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
        <td>${person.salary}</td>
        <td>
        <button onclick = 'deletePersonInfo(${index})'>Delete </button>
        </td>
        </tr>`

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
display(personInfo);


function searchByName()
{
    let searchValue = document.getElementById("searchPerson").value;

    let newName = personInfo.filter(function
        (personname){
            return(
                personname.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
            );
        });        
        display(newName);
}

function searchByCity()
{
    let searchvalue = document.getElementById("searchCity").value;

    let newCity = personInfo.filter(function
        (cityname){
            return(
                cityname.city.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1
            );
        });
        display(newCity);
}

function deletePersonInfo(index){
    personInfo.splice(index, 1);
    display(personInfo);
}

