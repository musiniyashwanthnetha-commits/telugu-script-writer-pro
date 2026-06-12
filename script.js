function saveScript() {

    const text = document.getElementById("scriptArea").value;

    localStorage.setItem("teluguScript", text);

    alert("Script Saved Successfully!");
}

function clearScript() {

    document.getElementById("scriptArea").value = "";

    localStorage.removeItem("teluguScript");
}

window.onload = function () {

    const saved = localStorage.getItem("teluguScript");

    if (saved) {
        document.getElementById("scriptArea").value = saved;
    }
};
