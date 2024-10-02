/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery

      Date:   10/2/24

      Filename: project03-02.js
*/

let captions = new Array(14);
captions[0]="International Space Station fourth expansion [2009]";
captions[1]="Assembling the International Space Station [1998]";
captions[2]="The Atlantis docks with the ISS [2001]"; 
captions[3]="The Atlantis approaches the ISS [2000]"; 
captions[4]="The Atlantis approaches the ISS [2000]"; 
captions[5]="International Space Station over Earth [2002]";
captions[6]="The International Space Station first expansion [2002]";
captions[7]="Hurricane Ivan from the ISS [2008]";
captions[8]="The Soyuz spacecraft approaches the ISS [2005]";
captions[9]="The International Space Station from above [2006]";
captions[10]="Maneuvering in space with the Canadarm2 [2006]";
captions[11]="The International Space Station second expansion [2006]";
captions[12]="The International Space Station third expansion [2007]";
captions[13]="The ISS over the Ionian Sea [2007]";

//declare htmlCode undefined
let htmlCode = "";
//loop over captions
for (let i = 0; i < captions.length; i++) {
      // Pull caption and apply photo id to source
      htmlCode += "<figure> <img alt='' src='slide"+i+".jpg' /> <figcaption>"+captions[i]+"</figcaption> </figure>";
      
}
//write photos to gallery
document.getElementById("gallery").innerHTML = htmlCode;


