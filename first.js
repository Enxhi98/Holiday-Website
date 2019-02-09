function Validation() {
           
           var x, text;//Variables used in this statement//
           x = document.getElementById("name").value;
           if (x == ""){
               text="This field is required*";
           }//If the field is empty the above message will be displayed//
           else {
               text="";
              
           }
           document.getElementById("error1").innerHTML = text;
           
           var y, text;//Variables used in this statement//
           y = document.getElementById("last").value;
           if (y == ""){
               text= "This field is required*";
           }//If the field is empty the above message will be displayed//
           else {
               text="";
           }
           document.getElementById("error2").innerHTML = text;
           
           var a, text;//Variables used in this statement//
           a = document.getElementById("number").value;
           if (a == ""){
               text= "This field is required*";
           }//If the field is empty the above message will be displayed//
           else {
               if (isNaN(a)){
               text="Only numbers are allowed in this field.";
               }//If the input includes any characters other than numbers the above message will be displayed//
               else { text=""
               }
           }
           document.getElementById("error3").innerHTML = text;
           
           
           var b, text;//Variables used in this statement//
           b = document.getElementById("email").value;
           if (b == ""){
               text= "This field is required*";
           }//If the field is empty the above message will be displayed//
           else {
               
               var re=/^\w+([\.-]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
               
               if (!re.test(b)){ 
               text="Sorry, your email is invalid !";
               }//I have used a regular expression to define the type of input in the textfield//
               else {
               text="";
               }
           }
           document.getElementById("error4").innerHTML = text;
        
           var c, text;//Variables used in this statement//
           c = document.getElementById("passengers").value;
           if (c == ""){
               text="This field is required*";
           }//If the field is empty the above message will be displayed//
           else {
               text="";
              
           }
           document.getElementById("error5").innerHTML = text;
           
           var d, text;//Variables used in this statement//
           d = document.getElementById("from").value;
           if (d == ""){
               text="This field is required*";
           }//If the field is empty the above message will be displayed//
           else {
               text="";
              
           }
           document.getElementById("error6").innerHTML = text;
           
           var e, text;//Variables used in this statement//
           e = document.getElementById("destination").value;
           if (e == ""){
               text="This field is required*";
           }//If the field is empty the above message will be displayed//
           else {
               text="";
              
           }
           document.getElementById("error7").innerHTML = text;
           
           var f, text;//Variables used in this statement//
           f = document.getElementById("date1").value;
           if (f == ""){
               text= "This field is required*";
           }//If the field is empty the above message will be displayed//
           else {
               
               var re1=/^(?=.*?[1-9])[0-9()-]+$/;
               
               if (!re1.test(f)){ 
               text="Invalid date, please try again !";
               }//This regular expression allows only numbers and chracters in the date text field//
               else {
               text="";
               }
           }
           document.getElementById("error8").innerHTML = text;
           
           var g, text;//Variables used in this statement//
           g = document.getElementById("date2").value;
           if (g == ""){
               text= "This field is required*";
           }//If the field is empty the above message will be displayed//
           else {
               
               var re2=/^(?=.*?[1-9])[0-9()-]+$/;
               
               if (!re2.test(g)){ 
               text="Invalid date, please try again !";
               }//This is the same case as the first date field//
               else {
               text="";
               }
           }
           document.getElementById("error9").innerHTML = text;
       
           
          
           if (text == "") {
               return true;
           }//If no error messages are displayed the functions returns a true boolean//
           else {
               return false;
           }//If any error messages are displayed the form cannot be submitted//

           
       }