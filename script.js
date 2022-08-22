// variables are declared here
let i = 0;
let x;
displayCD(i);

// made a function for checkin stages and open folder for sending a request
function displayCD() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            Myfunction(this, i);
        }
    };
    // xml file path accessed here using GET method
    xmlhttp.open("GET", "import.xml", true);
    xmlhttp.send();
}

// This function is made for diaplaying values in html from XML file
Myfunction = (xml, i) => {
    let xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("CD");
    document.getElementById("ShowCD").innerHTML =
        "Artist :- " +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "<br>Title :- " +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "<br>Year :- " +
        x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;

}

// This function is for previys button
let previus = () => {
    if (i > 0) {
        i--;
        displayCD(i);
    }
}
// This function is for next button
let next = () => {
    if (i < x.length - i) {
        i++;
        displayCD(i);
    }
}