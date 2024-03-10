//For Image-1


let randomNumber1 = Math.floor(Math.random() * 6);




 if(randomNumber1 == 1)
 {
    
    
    document.querySelector(".dice .img1").setAttribute("src","images/dice1.png");


}


else if(randomNumber1 == 2)
{
   
   
   document.querySelector(".dice .img1").setAttribute("src","images/dice2.png");


}


else if(randomNumber1 == 3)
{
   
  
   document.querySelector(".dice .img1").setAttribute("src","images/dice3.png");


}


else if(randomNumber1 == 4)
{
   
   
   document.querySelector(".dice .img1").setAttribute("src","images/dice4.png");


}


else if(randomNumber1 == 5)
{
   
   
   document.querySelector(".dice .img1").setAttribute("src","images/dice5.png");


}


else if(randomNumber1 == 6)
{
   
   
   document.querySelector(".dice .img1").setAttribute("src","images/dice6.png");


}




//-------------------------------------------------For image two


let randomNumber2 = Math.floor(Math.random() * 6);




if(randomNumber2 == 1)
{
   
   
   document.querySelector(".dice .img2").setAttribute("src","images/dice1.png");


}


else if(randomNumber2 == 2)
{
  
  
  document.querySelector(".dice .img2").setAttribute("src","images/dice2.png");


}


else if(randomNumber2 == 3)
{
  
 
  document.querySelector(".dice .img2").setAttribute("src","images/dice3.png");


}


else if(randomNumber2 == 4)
{
  
  
  document.querySelector(".dice .img2").setAttribute("src","images/dice4.png");


}


else if(randomNumber2 == 5)
{
  
  
  document.querySelector(".dice .img2").setAttribute("src","images/dice5.png");


}


else if(randomNumber2 == 6)
{
  
  
  document.querySelector(".dice .img2").setAttribute("src","images/dice6.png");


}


if(randomNumber1 > randomNumber2)
{

    $("h1").text("Player-1 Wins!!");


}

else if(randomNumber1 == randomNumber2)
{

    $("h1").text("Draw");


}

else
{

    $("h1").text("Player-2 Wins!!");


}









