/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/
/*
showGrid(20);      
forward(distance)  
right(angle)       
left(angle) 	   
goto(x,y) 	       
clear() 	       
penup() 	       
pendown() 	       
reset() 	       
angle(angle)	   
width(width)       

color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/

var patternNo,rotateangle,result;

   

function generate(){
    patternNo=document.getElementById("patternsize")
    rotateangle=document.getElementById("angle")
    function complement(s)
    {
        let comps = "";
       
        // finding the complement
        // of the string.
        for (let i = 0; i < s.length; i++)
        {
       
            // if character is 0,
            // append 1
            if (s[i] == '0')
                comps += '1';
       
            // if character is 1,
            // append 0.
            else
                comps += '0';
        }
       
        return comps;
    }
       
    // Return the nth term
    // of Thue-Morse sequence.
    function nthTerm(n)
    {
        // Initializing the
        // string to 0
        let s = "0";
       
        // Running the loop
        // for n - 1 time.
        for (let i = 1; i < n; i++)
       
            // appending the complement of
            // the string to the string.
            s += complement(s);
           
       
        return s;
    }
 
// Driver program
 
        
        result=nthTerm(parseInt(patternNo.value));
        console.log(result)


        result=result.split("")
        console.log(result)
        
          

// width(5);
// color("blue");
// forward(120);

// width(1);
// left(65);
// color("red");
// forward(150);

// goto(184,-208);
// width(2);
// right(100);
// color("green");
// forward(150);
    //    if(result[i]=="0"){
    //     forward(20);

    //    }else if(result[i]=="1"){
    //       angle(rotateangle)
    //       forward(30)
    //    }
    //     }

// console.log(result.length)
if(result){
    setSpeed(200)
penup();
goto(-150, 0);
pendown();
}
console.log(rotateangle)
if(result){
    for(let i=0;i<result.length;i++){

        if(result[i]==0){
            color("white")
             forward(15)
            // right(145)
            width(2)
            
        }else if(result[i]==1){
            color("white")
            forward(15)
            left(parseInt(rotateangle.value))

        }
       
        
     }
    //  for(let i=result.length/2;i<result.length;i++){
    //     if(result[i]==0){
    //         color("white")
    //         forward(15)
    //         // right(rotateangle.value)
            
    //     }else if(result[i]==1){
    //         color("white")
    //         forward(15)
    //         left(parseInt(rotateangle.value))

    //     }
       
    //  }
}






 
//  width(5);
// color("blue");
// forward(120);

// width(1);
// left(65);
// color("red");
// forward(150);

// goto(184,-208);
// width(2);
// right(100);
// color("green");
// forward(150);

}
let back=document.getElementById("back")

back.addEventListener("click",goBack)

function goBack(){
    location.href = "index.html";
}