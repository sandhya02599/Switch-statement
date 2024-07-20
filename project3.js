

let Name = prompt("Please Enter your Name");

let Marks = prompt("Enter your Marks")

switch(true){
    case Marks > 90 && Marks <= 100:
        result = "Great your the Topper"
        break;
    case Marks > 65 && Marks <= 90:
        result = "Congratulation yor got first class"
        break; 
        
    case Marks >=40 && Marks <65:
        result = "You got second class"
        break;

    case Marks >=30 && Marks <=40:
        result = "You got a third class"
        break;
    case Marks < 30:
        result = "Sorry you are failed Better luck Next Time"
        break; 
    default:
        result = "Please Enter your marks"       

}
document.write("Hello"  + Name + "<h2>" + result + "</h2>")



