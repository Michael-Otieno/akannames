   
   
   
   
   
   
   
   
   
   
   
   















































   
   // let dayOfBirth = document.querySelector('.day');
    // let monthOfBirth = document.querySelector('.month');
    // let yearOfBirth = document.querySelector('.year');

        // spliting full-year into century and year
    // let year = yearOfBirth.toString()
    // let cc = parseInt(year.slice(0,2));
    // let yy = parseInt(year.slice(2,4));


// function getName() {
//     alert('I am a placeholder');
//   }
  
// var getName = function (){
   
//     let dayOfBirth = document.getElementsById('day').value;
//     let monthOfBirth = document.getElementsById('month').value;
//     let yearOfBirth = document.getElementsById('year').value;

//         // spliting full-year into century and year
//     let year = yearOfBirth.toString()
//     let cc = parseInt(year.slice(0,2));
//     let yy = parseInt(year.slice(2,4));

//     let day = (((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(monthOfBirth+1)/10)) + dayOfBirth )%7;

//     let birthday = parseInt(day);

//     // radio button controls validation
//     let male = document.getElementsById('male').checked
//     let female = document.getElementsById('female').checked

//     // form validation

//     //radio buttons validation
//     if(male==false && female==false){
//         alert('Select gender')
//         return false;
//     }
    
//     // date of birth
//     if(dayOfBirth < 1 || dayOfBirth > 31){
//         alert('Enter a valid date')
//         return false;
//     }

//     // month of birth
//     if(monthOfBirth < 1 || monthOfBirth > 12){
//         alert('Enter a valid month')
//         return false
//     }

//     // month of birth with 30 days
//     if((monthOfBirth==4 || monthOfBirth==6 || monthOfBirth==9 || monthOfBirth==11) && dayOfBirth > 30){
//         alert('Enter a valid date')
//         return false
//     }

//     // month of february
//     if((monthOfBirth==2 && dayOfBirth>28) && (yearOfBirth%4 != 0)){
//         alert('February has 28 days')
//         return false
//     }

//     if((monthOfBirth==2 && yearOfBirth%4 != 0) && (dayOfBirth>29)){
//         alert('February has 29 days')
//         return false
//     }

//     // year validation
//     if(yearOfBirth.length < 4  || yearOfBirth.length > 4){
//         alert('Enter a valid year')
//         return false
//     }

//     if(cc>=21){
//         alert('Enter a 21st century year')
//         return false;
//     }

//     var weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//     var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//        // Assigning names using if statement

//     // Males

//     if( birthday == 0 && male == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[0]+", \nyour Akan name is: "+maleNames[0]);
//     };

//     if( birthday == 1 && male == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[1]+", \nyour Akan name is: "+maleNames[1]);
//     };

//     if( birthday == 2 && male == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[2]+", \nyour Akan name is: "+maleNames[2]);
//     };

//     if( birthday == 3 && male == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[3]+", \nyour Akan name is: "+maleNames[3]);
//     };

//     if( birthday == 4 && male == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[4]+", \nyour Akan name is: "+maleNames[4]);
//     };

//     if( birthDay == 5 && male == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[5]+", \nyour Akan name is: "+maleNames[5]);
//     };

//     if( birthday == 6 && male == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[6]+", \nyour Akan name is: "+maleNames[6]);
//     };

//     // Females

//     if( birthday == 0 && female == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[0]+", \nyour Akan name is: "+femaleNames[0]);
//     };

//     if( birthday == 1 && female == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[1]+", \nyour Akan name is: "+femaleNames[1]);
//     };

//     if( birthday == 2 && female == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[2]+", \nyour Akan name is: "+femaleNames[2]);
//     };

//     if( birthday == 3 && female == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[3]+", \nyour Akan name is: "+femaleNames[3]);
//     };

//     if( birthday == 4 && female == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[4]+", \nyour Akan name is: "+femaleNames[4]);
//     };

//     if( birthday == 5 && female == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[5]+", \nyour Akan name is: "+maleNames[5]);
//     };

//     if( birthday == 6 && female == true){
//         alert ("Hello "+", \nYou were born on: "+weekDays[6]+", \nyour Akan name is: "+maleNames[6]);
//     };

// }