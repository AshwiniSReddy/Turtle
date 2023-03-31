
//   let aTurtle, bTurtle;
//   let n = 6;
//   let sequence;
//   let angle;

//   function setup() {
//     const canvas = createCanvas(400, 400);
//     canvas.parent("canvas-container");

//     angle = radians(60);
//     aTurtle = new Turtle(width / 4, height / 2, -Math.PI / 2);
//     bTurtle = new Turtle(3 * width / 4, height / 2, Math.PI / 2);

//     sequence = thueMorse(n);
//     drawTurtlePattern();
//   }
// setup();
// var result;
// function generate(){
    
// // JavaScript Program to find nth
// // term of Thue-Morse sequence.
 
//     // Return the complement
//     // of the binary string.
//     function complement(s)
//     {
//         let comps = "";
       
//         // finding the complement
//         // of the string.
//         for (let i = 0; i < s.length; i++)
//         {
       
//             // if character is 0,
//             // append 1
//             if (s[i] == '0')
//                 comps += '1';
       
//             // if character is 1,
//             // append 0.
//             else
//                 comps += '0';
//         }
       
//         return comps;
//     }
       
//     // Return the nth term
//     // of Thue-Morse sequence.
//     function nthTerm(n)
//     {
//         // Initializing the
//         // string to 0
//         let s = "0";
       
//         // Running the loop
//         // for n - 1 time.
//         for (let i = 1; i < n; i++)
       
//             // appending the complement of
//             // the string to the string.
//             s += complement(s);
           
       
//         return s;
//     }
 
// // Driver program
// let  n=document.getElementById("patternsize");
 
//         // let n = 4;
//    result=nthTerm(n.value);
//    console.log(result)


   


// }


// let turtle;
//   //  const canvas = document.getElementById("turtlecanvas");
//   //     const width = canvas.width = 400;
//   //     const height = canvas.height = 400;
//    if(result){
//     result=result.split("")
//     for (let bit of result) {
//       if (bit == "0") {
//         penDown();
//         forward(5);
//       } else {
//         left(Math.PI / 3);
//       }
//     }
  

//   function turnTurtleLeft(angle) {
//     left(angle);
//   }
//    }
      
// // setSpeed(200);

// // width(5);
// // color("blue");
// // forward(120);

// // width(1);
// // left(65);
// // color("red");
// // forward(150);

// // goto(184,-208);
// // width(2);
// // right(100);
// // color("green");
// // forward(150);

const canvas = document.getElementById('canvas');
const turtle = new Turtle(canvas);

turtle.penSize = 2;
turtle.penColor = 'black';
turtle.moveTo(canvas.width / 2, canvas.height / 2);
turtle.heading = 0;

function thueMorse(n) {
  if (n === 0) {
    return '0';
  } else {
    const prev = thueMorse(n - 1);
    return prev + prev.replace(/0/g, '1').replace(/1/g, '0');
  }
}

const sequenceLength = 8;
const sequence = thueMorse(sequenceLength);
const segmentLength = 10;
const angle = 45;

for (let i = 0; i < sequence.length; i++) {
const character = sequence.charAt(i);

turtle.forward(segmentLength);
if (character === '0') {
turtle.turnRight(angle);
} else {
turtle.turnLeft(angle);
}
}