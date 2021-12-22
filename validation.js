
let form1 = document.getElementById('formEdit')
let nameCity1 = document.getElementById('namecity1');
let description1 = document.getElementById('description1');
// let gdp1 = document.getElementById('gdp1');
// let area1 = document.getElementById('area1');
// let population1 = document.getElementById('population1');

let form = document.getElementById('formNew')
let nameCity = document.getElementById('namecity');
let description = document.getElementById('description');
// let gdp = document.getElementById('gdp');
// let area = document.getElementById('area');
// let population = document.getElementById('population');




    nameCity1.addEventListener("input", function (event) {
            //kiểm tra khi user bắt đầu nhập
            if (nameCity.validity.valid && description.validity.valid) {
                //nếu valid, remove
                error.innerHTML = "";
                error.className = "error";
            }
        }, false
    );

    form.addEventListener("submit", function (event) {
        //kiểm tra khu user click submit
        if (!nameCity.validity.valid || !description.validity.valid) {
            error.innerHTML = "hey Babe, dot let input blank";
            error.className = "error active";
            event.preventDefault();
        }
    }, false);



    nameCity.addEventListener("input", function (event) {
            //kiểm tra khi user bắt đầu nhập
            if (nameCity1.validity.valid && description1.validity.valid) {
                //nếu valid, remove
                error.innerHTML = "";
                error.className = "error";
            }
        }, false
    );

    form1.addEventListener("submit", function (event) {
        //kiểm tra khu user click submit
        if (!nameCity.validity.valid || !description.validity.valid) {
            error.innerHTML = "hey Babe, dot let input blank";
            error.className = "error active";
            event.preventDefault();
        }
    }, false);



function c() {
    if (nameCity.validity.valid && description.validity.valid) {
        return true;
    } else {
        return false;
    }
}
function d() {
    if (nameCity1.validity.valid && description1.validity.valid) {
        return true;
    } else {
        return false;
    }
}

// function myFunctionNameCity() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("namecity1").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (!nameCity.validity.valid) {
//         text = "Input not valid";
//     } else {
//         text = "";
//     }
//     document.getElementById("error").innerHTML = text;
//
// }
// function myFunctionDescription() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("description1").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (!description.validity.valid) {
//         text = "Input not valid";
//     } else {
//         text = "";
//     }
//     document.getElementById("error1").innerHTML = text;
//
// }
//
// function myFunctionGdp() {
//     let text;
//     if (!gdp.validity.valid) {
//         text = "Input not valid";
//     } else {
//         text = "";
//     }
//     document.getElementById("error2").innerHTML = text;
//
// }
//
// function myFunctionArea() {
//     let text;
//     if (!area.validity.valid) {
//         text = "Input not valid";
//     } else {
//         text = "";
//     }
//     document.getElementById("error3").innerHTML = text;
//
// }
//
// function myFunctionPopulation() {
//     let text;
//     if (!population.validity.valid) {
//         text = "Input not valid";
//     } else {
//         text = "";
//     }
//     document.getElementById("error4").innerHTML = text;
//
//
// }
