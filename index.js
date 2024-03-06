let data = JSON.parse(localStorage.getItem("studentdata"));
if (data === null) {
  data = [];
}

display(data);

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let enterName = document.querySelector("#name").value;
  let enterEmail = document.querySelector("#email").value;
  let enterMob = document.querySelector("#number").value;
  let enterStream = document.querySelector("#stream").value;

  if(enterName=="" || enterEmail=="" || enterMob=="" || enterStream ==""){
      alert("Please fill all the details")
  }else{

  let obj = {
    enterName,
    enterEmail,
    enterMob,
    enterStream,
  };

  data.push(obj);

  localStorage.setItem("studentdata", JSON.stringify(data));

  display(data);

  }

});

function display(data) {
  document.getElementById("tbody").innerHTML = null;

  data.forEach((element) => {
    let tableR = document.createElement("tr");

    let col1 = document.createElement("td");

    col1.innerText = element.enterName;

    let col2 = document.createElement("td");

    col2.innerText = element.enterEmail;

    let col3 = document.createElement("td");

    col3.innerText = element.enterMob;

    let col4 = document.createElement("td");

    col4.innerText = element.enterStream;

    let col5 = document.createElement("td");

    col5.innerText = "Delete";

  

    tableR.append(col1, col2, col3, col4, col5);

    document.getElementById("tbody").append(tableR);


    col5.addEventListener("click", function () {
           
            let newdata=[]

            data.forEach(function(el,i){
                if(element!==el){
                  newdata.push(el)
                }
            })
          
            document.getElementById("tbody").innerHTML=null
            display(newdata)
            localStorage.setItem("studentdata",JSON.stringify(newdata))

    });


  });


}

display(data);
