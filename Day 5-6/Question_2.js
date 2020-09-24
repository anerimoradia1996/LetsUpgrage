
    let buses = [
        {
            name : "",
            source :"",
            destination: "",
            busnumber: null,
            passengerCapacity:""
        }        
    ];

    if(localStorage.getItem("BusesInfo") == null)
    {
        localStorage.setItem("BusesInfo", JSON.stringify(buses));
    }    
    //console.log(localStorage.getItem("BusesInfo"));   


function display(superarray = undefined)
{
    let tabledata = "";
    
    let superBuses;
    if(superarray == undefined)
    {
        superBuses = JSON.parse(localStorage.getItem("BusesInfo"));
    }
    else
    {
        superBuses = superarray;
    }

    //superarray.forEach(function (superBus, index){
    superBuses.forEach(function (superBus, index){
        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${superBus.name}</td>
        <td>${superBus.source}</td>
        <td>${superBus.destination}</td>
        <td>${superBus.busnumber}</td>
        <td>${superBus.passengerCapacity}</td>
        </tr>`;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display();

function addBuses(event){
    event.preventDefault();
    let superBus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let busnumber = document.getElementById("bus_number").value;
    let passengerCapacity = document.getElementById("passenger_capacity").value;

    superBus.name = name;
    superBus.source = source;
    superBus.destination = destination;
    superBus.busnumber = busnumber;
    superBus.passengerCapacity = passengerCapacity;  
    
    let superBuses = JSON.parse(localStorage.getItem("BusesInfo"));
    superBuses.push(superBus);
    localStorage.setItem("BusesInfo", JSON.stringify(superBuses));

    display();

    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("bus_number").value = "";
    document.getElementById("passenger_capacity").value = "";
}


function searchBySource(){
    let searchValue = document.getElementById("searchSource").value;
    let superBus = JSON.parse(localStorage.getItem("BusesInfo")).value;
    
    let newSource  = buses.filter(function(bus_source)
    {
        return(
            bus_source.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        );        
    });

    display(newSource);
}

function searchByDestination(){
    let searchDestination = document.getElementById("searchDestination").value;
    let superBus = JSON.parse(localStorage.getItem("BusesInfo"));
    let newDestination = buses.filter(function
    (bus_destination){
        return(
            bus_destination.destination.toUpperCase().indexOf(searchDestination.toUpperCase()) != -1
        );        
    });

    display(newDestination);
}