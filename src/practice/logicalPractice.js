import React from 'react'

function LogicalPractice() {
function givenTask(){
    console.log("logical operator")
    
    var a =55;
    var b =80;
    var c =110

    console.log("And operator")

   if ((a<b)&&(b>c)){
        console.log("a is greater than b")
    }
    else{
        console.log("a is less than b")

    }

    console.log("or opeartor")

    if((a<b)||(b>c)){
        console.log("any one is correct")
    }else{
        console.log("both are wrong")
    }

    console.log("not oprator")

    if(!(a>b)){
        console.log ("false ")
    }else{
        console.log("true")
    }

    console.log("assignment operator ")

    var x = 10;
    var y = 20;

    x+=y;
    console.log(x)
    x-=y;
    console.log(x)
    x*=y;
    console.log(x)

    console.log(x)
    x/=y;
    console.log(x)

    x%=y
    console.log(x)

    console.log("Conditional operator ")

    let cond1 =55;
    let cond2 = 60;

    let result =(cond1+cond2===115)? "true":"false";
    console.log(result)

let percentage = 60 ;

let results2 =(percentage>50)? "pass":"fail";
console.log(results2)
    

var sample ="sttring";
console.log(typeof(sample))
}
givenTask()
  return (
    <div>
       

    </div>
  )
}

export default LogicalPractice