function kirjaudu() {


var kayttajanimi = document.getElementById("knimi").value;
var sahkoposti = document.getElementById("sposti").value;
var salis = document.getElementById("salasana").value;


if (kayttajanimi == "" || sahkoposti == "" || salis == "") {

  alert ("Täytä kaikki kentät!");

} else {

  alert ("Valmista!");

window.open("omaakuankka.html",'_blank')

}
}
