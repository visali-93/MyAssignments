let mark =35;
function score(mark){
 switch (true) {
    case (mark>=70):
       console.log("print A");
    break;
    case (mark>=60):
    console.log("print B");
    break;
    default:
        console.log("fail");
        
         break;
 }

}
score(mark)