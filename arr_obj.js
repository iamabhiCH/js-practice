// WAP that prints all the male people's name given a complex object

population = [
    {
        pName : "Abhishek Yadav",
        age: 21,
        gender: "Male",       
    },
    {
        pName : "Manish Yadav",
        age: 20,
        gender: "Male",       
    },
    {
        pName : "Akash M",
        age: 22,
        gender: "Male",       
    },
    {
        pName : "Akash S",
        age: 23,
        gender: "Male",       
    },
    {
        pName : "Abhinav",
        age: 20,
        gender: "Male",       
    },
    {
        pName : "Roshan",
        age: 20,
        gender: "Male",       
    },
    {
        pName : "Avanish",
        age: 23,
        gender: "Male",       
    },
    {
        pName : "Shahsi Yadav",
        age: 21,
        gender: "Male",       
    },
    {
        pName : "Sandeep",
        age: 23,
        gender: "Male",       
    },
    {
        pName : "Nitya",
        age: 24,
        gender: "Male",       
    },
    {
        pName : "Nithaya",
        age: 26,
        gender: "Female",       
    },
    {
        pName : "Deepak Yadav",
        age: 28,
        gender: "Male",       
    },
    {
        pName : "Anand Yadav",
        age: 21,
        gender: "Male",       
    },
    {
        pName : "Sonu",
        age: 27,
        gender: "Male",       
    },
    {
        pName : "Monu",
        age: 25,
        gender: "Male",       
    },
    {
        pName : "Mansi",
        age: 27,
        gender: "Female",       
    },
    {
        pName : "Diksha",
        age: 24,
        gender: "Female",       
    },
    {
        pName : "Pragati",
        age: 22,
        gender: "Female",       
    },
    {
        pName : "Parchi",
        age: 23,
        gender: "Female",       
    },
    {
        pName : "Ayushi",
        age: 20,
        gender: "Female",       
    }
]

for(let i=0; i < population.length; i++){
    if(population[i]["gender"] == "Male"){
        console.log(population[i]["pName"])
    }
}