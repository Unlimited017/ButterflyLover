function RevealVideo() {

    if (document.getElementById("HiddenVideo").style.display == 'none') {
      document.getElementById("HiddenVideo").style.display = 'block';
      document.getElementById("Hiddentable").style.display = 'none';
    }else {
      document.getElementById("HiddenVideo").style.display = 'none';
    }
}
function RevealTable() {

  if (document.getElementById("Hiddentable").style.display == 'none') {
    document.getElementById("Hiddentable").style.display = 'table';
    document.getElementById("HiddenVideo").style.display = 'none';
  }else {
    document.getElementById("Hiddentable").style.display = 'none';
  }
}

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);

}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("Aboutpage").style.display = "block";
}
