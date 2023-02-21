
function validuser() {
    let un = document.getElementById("U").value
    let y = /^\w{5,15}$/
    if (!un.match(y)) {
        document.getElementById("uerror").innerHTML = "USERNAME Not valid"
        document.getElementById("uerror").style.color = "red";
        document.getElementById("uerror").style.fontWeight = "bold";
    }
    else {

        document.getElementById("uerror").innerHTML = "Valid USERNAME"
        document.getElementById("uerror").style.color = "green";
        document.getElementById("uerror").style.fontWeight = "bold";
    }
}

function validpass() {
    let pa = document.getElementById("pass").value
    // let a = /^(?=<alpha>.*[a-zA-z]+)(?=<num>.*\d+)(?=<sc>.*[@$!%*?&]+){8,}$/
    // let a = /^(?=.*[a-zA-z]+)(?=.*\d+)(?=.*[@$!%*?&]+){8,}$/
    let a = /[a-z]+[A-Z]+/
    let b = /[0-9]+/
    let c = /[@$!%*?&#]+/
    let d = /^(?=.{8,}$).*$/
    if (!pa.match(d)) {
        document.getElementById("perr0").style.color = "red";
        document.getElementById("perr0").style.fontWeight = "bold";
    }
    else {
        document.getElementById("perr0").style.color = "green";
        document.getElementById("perr0").style.fontWeight = "bold";
    }
    if (!pa.match(a)) {
        document.getElementById("perr1").style.color = "red";
        document.getElementById("perr1").style.fontWeight = "bold";
    }
    else {
        document.getElementById("perr1").style.color = "green";
        document.getElementById("perr1").style.fontWeight = "bold";
    }
    if (!pa.match(b)) {
        document.getElementById("perr2").style.color = "red";
        document.getElementById("perr2").style.fontWeight = "bold";
    }
    else {
        document.getElementById("perr2").style.color = "green";
        document.getElementById("perr2").style.fontWeight = "bold";
    }
    if (!pa.match(c)) {
        document.getElementById("perr3").style.color = "red";
        document.getElementById("perr3").style.fontWeight = "bold";
    }
    else {
        document.getElementById("perr3").style.color = "green";
        document.getElementById("perr3").style.fontWeight = "bold";
    }
}

function conpass() {
    let cp = document.getElementById("cpid").value
    let cpa = document.getElementById("pass").value
    if (cp != cpa) {
        document.getElementById("cpop").innerHTML = "Password dosen't match";
        document.getElementById("cpop").style.color = "red";
        document.getElementById("cpop").style.fontWeight = "bold";
    }
    else {
        document.getElementById("cpop").innerHTML = "Correct Password";
        document.getElementById("cpop").style.color = "green";
        document.getElementById("cpop").style.fontWeight = "bold";
    }
}
function emailid() {
    let e = document.getElementById("emid").value
    let z = /^[A-Za-z0-9]+@[A-za-z]+\.[a-zA-Z]*\.*[A-Za-z]+$/

    if (!e.match(z)) {
        document.getElementById("emidop").innerHTML = "Email id Invalid";
        document.getElementById("emidop").style.color = "red";
        document.getElementById("emidop").style.fontWeight = "bold";
    }
    else {
        document.getElementById("emidop").innerHTML = "Valid";
        document.getElementById("emidop").style.color = "green";
        document.getElementById("emidop").style.fontWeight = "bold";
    }

}

function panno() {
    let p = document.getElementById("panid").value;
    let r = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
    if (!p.match(r)) {
        document.getElementById("panop").innerHTML = "Pancard Number Invalid";
        document.getElementById("panop").style.color = "red";
        document.getElementById("panop").style.fontWeight = "bold";
    }
    else {
        document.getElementById("panop").innerHTML = "Valid";
        document.getElementById("panop").style.color = "green";
        document.getElementById("panop").style.fontWeight = "bold";
    }
}

function adhno() {
    let a = document.getElementById("adhid").value;
    let r = /^[0-9]{12}$/
    if (!a.match(r)) {
        document.getElementById("adhop").innerHTML = "Aadhar Number Invalid";
        document.getElementById("adhop").style.color = "red";
        document.getElementById("adhop").style.fontWeight = "bold";
    }
    else {
        document.getElementById("adhop").innerHTML = "Valid";
        document.getElementById("adhop").style.color = "green";
        document.getElementById("adhop").style.fontWeight = "bold";
    }
}
function phnof() {
    let a = document.getElementById("phid").value;
    let r = /^[0-9]{10}$/
    if (!a.match(r)) {
        document.getElementById("phno").innerHTML = "Phone Number Invalid";
        document.getElementById("phno").style.color = "red";
        document.getElementById("phno").style.fontWeight = "bold";

    }
    else {
        document.getElementById("phno").innerHTML = "Valid";
        document.getElementById("phno").style.color = "green";
        document.getElementById("phno").style.fontWeight = "bold";
    }
}
function validate() {
    let cb1 = document.getElementById("cb1")
    let cb2 = document.getElementById("cb2")
    let cb3 = document.getElementById("cb3")
    let c1 = cb1.checked || cb2.checked || cb3.checked
    console.log(c1)

    if (c1 == false) {
        document.getElementById("cbxop").innerHTML = "Please select atleast one checkbox"
        document.getElementById("cbxop").style.color = "red";
        document.getElementById("cbxop").style.fontWeight = "bold";
    }
    else {
        document.getElementById("cbxop").innerHTML = ""
    }
    let r1 = document.getElementById("rb1")
    let r2 = document.getElementById("rb2")
    let r3 = document.getElementById("rb3")
    let r = r1.checked || r2.checked || r3.checked


    if (r == false) {
        document.getElementById("rbop").innerHTML = "Please select atleast one"
        document.getElementById("rbop").style.color = "red";
        document.getElementById("rbop").style.fontWeight = "bold";
    }
    else {
        document.getElementById("rbop").innerHTML = ""
    }

    let d1 = document.getElementById("dd1")
    let d2 = document.getElementById("dd2")
    let d3 = document.getElementById("dd3")
    let d4 = document.getElementById("dd4")
    let d = d1.selected || d2.selected || d3.selected || d4.selected
    console.log("d", d)
    if (d == false) {

        console.log("d")
        document.getElementById("ddop").innerHTML = "Please select atleast one"
        document.getElementById("ddop").style.color = "red";
        document.getElementById("ddop").style.fontWeight = "bold";
    }
    else {
        document.getElementById("ddop").innerHTML = ""
    }


}