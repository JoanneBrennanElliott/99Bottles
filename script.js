/* Student Name: Joanne Brennan Elliott 
 Student Number: X23410001
 Web Design and Client Side Scripting 
Week 9 Lab 16.11.2025  
Bottles of beer on the wall song in a for loop
.........*/


function count(){	 
	    for ( i=99; i>=0; i--) {
			
			const current =i;
			const next = i-1;
			
			document.getElementById("main").innerHTML+="<br />"+current+" bottles of beer on the wall. " +current+ " bottles of beer!";
		
			if (next >=0) {
				document.getElementById("main").innerHTML+="<br />Take one down off, and pass it around, now "+next+" bottles of beer!";
	
			} 
			else {
				document.getElementById("main").innerHTML+="<br />No more bottles of beer!";
			}
		}
				document.getElementById("main").innerHTML+="<br />Go to the shop and buy some more!";
}
