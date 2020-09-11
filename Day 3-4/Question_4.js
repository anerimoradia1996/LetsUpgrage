let student = 
[
    {
        name: "Aneri",
        age: 24,
        country: "India",
        hobbies: 
        [
            "Cyclicng","Trekking","Painting"
        ]
    },

    {
        name: "Yugma",
        age: 27,
        country: "USA",
        hobbies: 
        [
            "Stitching","Trekking","Painting"
        ]
    },

    {
        name: "Rahil",
        age: 20,
        country: "India",
        hobbies: 
        [
            "Driving","Cricket","Cooking"
        ]
    },

    {
        name: "Kunj",
        age: 24,
        country: "Canada",
        hobbies: 
        [
            "Cyclicng","Hiking","Studying"
        ]
    },

    {
        name: "Geeta",
        age: 44,
        country: "India",
        hobbies: 
        [
            "Cooking","Cleaning","Studying"
        ]
    },

    {
        name: "Asha",
        age: 34,
        country: "UK",
        hobbies: 
        [
            "Gardening","Researching","Studying"
        ]
    }
];

//To display objects having age less than 30
for(let x = 0; x < 6; x++)
{
    if(student[x].age < 30 )
    {
        console.log(student[x]);
    }
}

//To display object having country as India
for( let y = 0; y < 6; y++)
{
    if(student[y].country == "India")
    {
        console.log(student[y]);
    }
}
