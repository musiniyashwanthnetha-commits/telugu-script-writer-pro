function generateScript(){

let script =

`TITLE :
${document.getElementById("title").value}

WRITTEN BY :
${document.getElementById("writtenby").value}

AUTHOR :
${document.getElementById("author").value}

PHONE :
${document.getElementById("phone").value}

EMAIL :
${document.getElementById("email").value}

---

FADE IN:
${document.getElementById("fadein").value}

SEQUENCE NO :
${document.getElementById("sequence").value}

SCENE NO :
${document.getElementById("scene").value}

INT. / EXT. :
${document.getElementById("intext").value}

DAY / NIGHT :
${document.getElementById("daynight").value}

TIME :
${document.getElementById("time").value}

LOCATION :
${document.getElementById("location").value}

CHARACTERS :
${document.getElementById("characters").value}

EMOTION / MOOD :
${document.getElementById("emotion").value}

---

SCENE HEADING :
${document.getElementById("sceneheading").value}

ACTION DESCRIPTION :
${document.getElementById("action").value}

---

CHARACTER NAME :
${document.getElementById("charactername").value}

DIALOGUE :
${document.getElementById("dialogue").value}

---

CAMERA :
${document.getElementById("camera").value}

SHOT TYPE :
${document.getElementById("shottype").value}

MOVEMENT :
${document.getElementById("movement").value}

---

SFX :
${document.getElementById("sfx").value}

BGM :
${document.getElementById("bgm").value}

---

TRANSITION :
${document.getElementById("transition").value}

CUT TO :
${document.getElementById("cutto").value}

DISSOLVE TO :
${document.getElementById("dissolve").value}

FADE OUT :
${document.getElementById("fadeout").value}

---

NEXT SCENE :
${document.getElementById("nextscene").value}
`;

document.getElementById("output").textContent = script;

}

function downloadScript(){

let text = document.getElementById("output").textContent;

if(text.trim() === ""){
alert("Please Generate Script First");
return;
}

let blob = new Blob([text], {type:"text/plain"});

let a = document.createElement("a");

a.href = URL.createObjectURL(blob);

a.download = "Telugu_Movie_Script.txt";

a.click();

}

function clearForm(){

document.querySelectorAll("input, textarea").forEach(field=>{
field.value="";
});

document.getElementById("output").textContent="";

}

function printScript(){

let content = document.getElementById("output").innerText;

let win = window.open("", "", "width=800,height=900");

win.document.write("<pre>"+content+"</pre>");

win.print();

win.close();

}
