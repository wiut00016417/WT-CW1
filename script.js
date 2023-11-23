function showCategories () {
    var x = document.getElementById("layer")
    if (x.style.display == "block") {
        x.style.display = "none"
    } else {x.style.display = "block"}
}

function ascending () {
    var y = document.getElementById("phones")
    y.style.flexDirection = "column"
}

function descending () {
    var z = document.getElementById("phones")
    z.style.flexDirection = "column-reverse"
}

