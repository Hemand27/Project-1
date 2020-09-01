var array=[
    {
        Name:"Ram",
        Age:40,
        Courses:['JAVA','CSS', 'ML']

    },

    {
        Name:"Caul",
        Age:30,
        Courses:['HTML','CSS', 'C++']

    }
]

var dataElem=document.getElementById("data");
var nameElem=document.getElementById("name");
var ageElem=document.getElementById("age");
var unElem=document.getElementById("course");

nameElem.textContent=array[0].Name
ageElem.textContent=array[0].Age
for(var i=0;i<array[0].Courses.length;i++){
    var liElem=document.createElement('li')
    liElem.textContent=array[0].Courses[i]
    unElem.appendChild(liElem)

}


