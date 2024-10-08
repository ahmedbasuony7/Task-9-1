
function  addData  ( ) {

    //  get buttons 
    let tableHolder = document.querySelector('.tableHolder');

    //  get inputs 
    let nameele  =  document.getElementById("name").value;
    let ageeele  =  document.getElementById("age").value;
    let emailele  =  document.getElementById("email").value;

    if (nameele === '' ||  ageeele ===  '' ||  emailele === '' ) {
        console.log('empty');
    
    }  else {
            //  show table 
            tableHolder.classList.remove('hideTable');
            console.log('removed');
            //  show table 
            tableHolder.classList.add('showTable')
            console.log("added");
            
                // get body  
            let tobody = document.getElementById("tobody");
            let  trele = document.createElement("tr");

            // get message error 
            let warningMessage = document.querySelector('.warningMessage');
            console.log(warningMessage);

            //  check if the age between 10 - 70  or not
            if(ageeele < 10 || ageeele > 70 ) {
                warningMessage.style.display = "block";
            }
            else {
                warningMessage.style.display = "none"

                //  create new  celles 
                let  tdelename = document.createElement("td");
                let  tdeleage = document.createElement("td");
                let  tdeleemail = document.createElement("td");


                //  style
                tdelename.style.width="100px"
                tdeleage.style.width="200px"


                //   addingg data to cells  
                tdelename.innerText=`${nameele}`;
                tdeleage.innerText=`${ageeele}`;
                tdeleemail.innerText=`${emailele}`;

                console.log(tdelename);

                //  adding  td element to  tr
                trele.append(tdelename);
                trele.append(tdeleage);
                trele.append(tdeleemail);
                
                //  adding  tr element to tablebody
                tobody.append(trele)
            }
        }
    
}

