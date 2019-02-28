function zero()
{
    document.getElementById("Calc").value += "0";
}

function dot()
{
    document.getElementById("Calc").value += ".";
}

function one()
{
    document.getElementById("Calc").value += "1";
}

function two()
{
    document.getElementById("Calc").value += "2";
}

function three()
{
    document.getElementById("Calc").value += "3";
}

function four()
{
    document.getElementById("Calc").value += "4";
}

function five()
{
    document.getElementById("Calc").value += "5";
}

function six()
{
    document.getElementById("Calc").value += "6";
}

function seven()
{
    document.getElementById("Calc").value += "7";
}


function eight()
{
    document.getElementById("Calc").value += "8";
}

function nine()
{
    document.getElementById("Calc").value += "9";
}

function plus()
{
    document.getElementById("Calc").value += " + ";
}

function minus()
{
    document.getElementById("Calc").value += " - ";
}

function multiply()
{
    document.getElementById("Calc").value += " * ";
}

function divide()
{
    document.getElementById("Calc").value += " / ";
}

function para1()
{
    document.getElementById("Calc").value += " ( ";
}

function para2()
{
    document.getElementById("Calc").value += " ) ";
}

function cube()
{
    document.getElementById("Calc").value = Math.cbrt(eval(document.getElementById("Calc").value));
}

function square()
{
document.getElementById("Calc").value = Math.sqrt(eval(document.getElementById("Calc").value));
}

function age()
{

var a= new Date;
var y = a.getFullYear();
var m= a.getMonth();
m+=1;
var d= a.getDate();
var year;
var month;
var days;

alert("ARE YOU CURIOUS TO SEE HOW OLD YOU ARE ?");

var your_name = prompt("ENTER YOUR NAME");

var your_Bdate = prompt("ENTER YOUR BIRTH DATE");

var your_Bmonth= prompt("ENTER YOUR BIRTH MONTH");

var your_Byear= prompt("ENTER YOUR BIRTH YEAR");

if(m == your_Bmonth)
{
 
if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12)
{
      if(your_Bdate > d)
      {
        days = 31 - (your_Bdate - d);
        month = 11;
        year = y - your_Byear-1;
      }
     
      else if(d > your_Bdate)
      {
        days =d - your_Bdate;
        month = 0;
        year = y - your_Byear;
      }
     
      else
      {
        days = 0;
        month = 0;
        year = y - your_Byear;
      }
      
}
      
else if(m==2)
{
      if(your_Bdate > d)
      {
        days =28 - (your_Bdate - d);
        month = 11;
        year = y - your_Byear-1;
      }
     
      else if(d > your_Bdate)
      {
        days =d - your_Bdate;
        month = 0;
        year = y - your_Byear;
      }
     
      else
      {
        days = 0;
        month = 0;
        year = y - your_Byear;
      }   
}      
      
else
{
      if(your_Bdate > d)
      {
        days =30 - (your_Bdate - d);
        month = 11;
        year = y - your_Byear-1;
      }
     
      else if(d > your_Bdate)
      {
        days = d - your_Bdate;
        month = 0;
        year = y - your_Byear;
      }
     
      else
      {
        days = 0;
        month = 0;
        year = y - your_Byear;
      }   
}

}
    
else if(m < your_Bmonth)
{
    
    year = y - your_Byear - 1
    
if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12)
{
      if(your_Bdate > d)
      {
        days = 31 - (your_Bdate - d);
        month = 12 - (your_Bmonth - m + 1);
      }
     
      else if(d > your_Bdate)
      {
        days = d - your_Bdate;
        month = 12 - (your_Bmonth - m);
      }
     
      else
      {
        days = 0;
        month = 12 - (your_Bmonth - m);
      }
}
      
else if(m==2)
{
      if(your_Bdate > d)
      {
        days = 28 - (your_Bdate - d);
        month = 12 - (your_Bmonth - m + 1);
      }
     
      else if(d > your_Bdate)
      {
        days = d - your_Bdate;
        month = 12 - (your_Bmonth - m);
      }
     
      else
      {
        days = 0;
        month  = 12 - (your_Bmonth - m);
      }   
}
      
else
{
      if(your_Bdate > d)
      {
        days = 30 - (your_Bdate - d);
        month  = 12 - (your_Bmonth - m + 1);
      }
     
      else if(d > your_Bdate)
      {
        days = d - your_Bdate;
        month = 12 - (your_Bmonth - m);
      }
     
      else
      {
        days = 0;
        month  = 12 - (your_Bmonth - m);
      }   
}

}
    
else if(your_Bmonth < m)
{
    year = y - your_Byear;
        
if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12)
{
      if(your_Bdate > d)
      {
        days = 31 - (your_Bdate - d);
        month = m - your_Bmonth  - 1;
      }
     
      else if(d > your_Bdate)
      {
        days = d - your_Bdate;
        month = m - your_Bmonth;
      }
     
      else
      {
        days = 0;
        month = 0;
      }
}
      
else if(m==2)
{
      if(your_Bdate > d)
      {
        days =28 - (your_Bdate - d);
        month = m - your_Bmonth  - 1;
      }
     
      else if(d > your_Bdate)
      {
        days =d - your_Bdate;
        month = m - your_Bmonth;
      }
     
      else
      {
        days = 0;
        month = 0;
      }   
}
      
else
{
      if(your_Bdate > d)
      {
        days =30 - (your_Bdate - d);
        month = m - your_Bmonth  - 1;
      }
     
      else if(d > your_Bdate)
      {
        days =d - your_Bdate;
        month = m - your_Bmonth;
      }
     
      else
      {
        days = 0;
        month = 0;
      }   
}

}


alert("Hii "+ your_name + " you are " + year + " years " + month + " month and " + days + " days old.");

alert("ALWAYS KEEP SMILING.");
}

function on()
{
document.getElementById("Calc").style.display = "block";
document.getElementById("Calc").value="";    
}

function clearLast()
{
var outputing = document.getElementById("Calc").value.substring(0,document.getElementById("Calc").value.length-1);
document.getElementById("Calc").value = outputing;
}

function off()
{
document.getElementById("Calc").style.display = "none";
document.getElementById("Calc").value="";
}

function equal()
{ 
document.getElementById("Calc").value = eval(document.getElementById("Calc").value);
}