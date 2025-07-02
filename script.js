function change() {
    const ele = document.getElementsByTagName("h1")
    ele[0].innerHTML = "Hello World"
    const ele2 = document.getElementById("main")
    ele2.innerHTML = "No lorem Here I hope  "
    ele[0].style.backgroundColor = "red"
    const ele3 = document.getElementsByClassName("head")
    ele3[0].style.color="yellow"
}

