let firstName = document.getElementsByTagName("input")[0];
let secondName = document.getElementsByTagName("input")[1];
let adressLine1 = document.getElementsByTagName("input")[2];
let adressLine2 = document.getElementsByTagName("input")[3];
let country = document.getElementsByTagName("input")[4];
let sity = document.getElementsByTagName("input")[5];
let street = document.getElementsByTagName("input")[6];
let postIndex = document.getElementsByTagName("input")[7];
let phone = document.getElementsByTagName("input")[8];
let eMail = document.getElementsByTagName("input")[9];
let checkValue = document.getElementsByTagName("input");
let firstCheckbox = document.getElementsByName("one");
let secondCheckbox = document.getElementsByName("two");
let btn = document.getElementsByTagName("button")[0];
let btnShow = document.getElementsByClassName("showButton")[0];
let arr =[];


btn.addEventListener("click", ()=>{

          if(fillCheck(checkValue)*radioCheck(firstCheckbox, secondCheckbox) == 0){
        alert("fill form");
    }
    else{
        let user = new User(firstName.value, secondName.value, adressLine1.value, adressLine2.value, country.value, sity.value, street.value, postIndex.value, phone.value, eMail.value, firstCheckbox, secondCheckbox);
        arr.push(user);
        user.print();
    } 

})



  

class User {
    constructor(firstName, secondName, adressLine1, adressLine2, country, sity, street, postIndex, phone, eMail, firstCheckbox, secondCheckbox) {
        this.id = secondName +""+ count();
        this.firstName = firstName;
        this.secondName = secondName;
        this.adressLine1 = adressLine1;
        this.adressLine2 = adressLine2;
        this.country = country;
        this.sity = sity;
        this.street = street;
        this.postIndex = postIndex;
        this.phone = phone;
        this.eMail = eMail;
        this.skill1 = check(firstCheckbox);
        this.skill2 = check(secondCheckbox);
        
        this.interface = `
        <p>User ${this.id}:</p>  
        <p>name is ${this.firstName} ${this.secondName},</p>
        <p>adress is ${this.country}, ${this.sity},</p>
        <p>${this.postIndex}, ${this.street},</p>
        <p>${this.adressLine1},</p>
        <p>${this.adressLine2}.</p>
        <p></p>
        <p>Contact information:</p>
        <p>Phone - ${this.phone};</p>
        <p>E-Mail - ${this.eMail};</p>
        <p>Membership level: ${this.skill1}, ${this.skill2}.</p>
        <hr>
    `; 
    }

    print(){
        let container = document.getElementsByClassName("reg")[0];
        let elem = document.createElement("div");
        elem.classList.add("user");
        elem.innerHTML = this.interface;
        container.appendChild(elem);
       

    }
}



    const count = c();

    function c(){
        let i = 0;
        return function(){return i++}
    }



    function fillCheck(array){
        for (let index = 0; index < 9; index++) {
            if(array[index].value != ""){}
            else{
                return(0);  
            }
        }   
         return(1);
    }
   
    
function radioCheck(arr, array){    
    let a = 0;
    let b = 0;
for (let index = 0; index < array.length; index++) {
    if (array[index].checked == true) {
        a=1;
}}
for (let i = 0; i < arr.length; i++) {
    if (arr[i].checked == true) {
        b=1;
}}
return(a*b);}


    function check (array){
    for (let i = 0; i < array.length; i++) {
        if (array[i].checked == true) {
            return(array[i].value);
        }
    }
}