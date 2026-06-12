let autoSceneNumber = 1;
let characterStats = {};
let shotListData = [];

// ADD TO SCRIPT

function generateScript() {

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    document.getElementById("coverTitle").textContent =
    title || "UNTITLED";

    document.getElementById("coverAuthor").textContent =
    author || "AUTHOR";

    document.getElementById("coverPhone").textContent =
    phone || "";

    document.getElementById("coverEmail").textContent =
    email || "";

    const sequence =
    document.getElementById("sequence").value;

    const sceneNo =
    document.getElementById("sceneno").value ||
    autoSceneNumber;

    const intext =
    document.getElementById("intext").value;

    const daynight =
    document.getElementById("daynight").value;

    const location =
    document.getElementById("location").value;

    const characters =
    document.getElementById("characters").value;

    const emotion =
    document.getElementById("emotion").value;

    const action =
    document.getElementById("action").value;

    const camera =
    document.getElementById("camera").value;

    const shottype =
    document.getElementById("shottype").value;

    const movement =
    document.getElementById("movement").value;

    const sfx =
    document.getElementById("sfx").value;

    const bgm =
    document.getElementById("bgm").value;

    const dialogueCharacter =
    document.getElementById("dialogueCharacter").value;

    const dialogue =
    document.getElementById("dialogue").value;

    const transition =
    document.getElementById("transition").value;

    const nextscene =
    document.getElementById("nextscene").value;

    const sceneId = "scene_" + sceneNo;

    // Character Stats

    if(dialogueCharacter){

        if(!characterStats[dialogueCharacter]){
            characterStats[dialogueCharacter] = 0;
        }

        characterStats[dialogueCharacter]++;
    }

    // Shot List

    shotListData.push({
        scene: sceneNo,
        heading: `${intext} ${location} - ${daynight}`,
        shot: shottype,
        movement: movement
    });

    // Screenplay

    document.getElementById("scriptContent").innerHTML += `

    <div id="${sceneId}" class="scene-block">

        <div class="sequence">
        SEQUENCE NO : ${sequence}
        </div>

        <div class="scene-heading">
            <span>${sceneNo}</span>
            <span>${intext} ${location} - ${daynight}</span>
            <span>${sceneNo}</span>
        </div>

        <div class="action">
${action}
        </div>

        <div>
            <strong>CHARACTERS:</strong>
            ${characters}
        </div>

        <div>
            <strong>EMOTION:</strong>
            ${emotion}
        </div>

        <br>

        <div>
            <strong>CAMERA:</strong>
            ${camera}
        </div>

        <div>
            <strong>SHOT TYPE:</strong>
            ${shottype}
        </div>

        <div>
            <strong>MOVEMENT:</strong>
            ${movement}
        </div>

        <div>
            <strong>SFX:</strong>
            ${sfx}
        </div>

        <div>
            <strong>BGM:</strong>
            ${bgm}
        </div>

        <div class="character-name">
            ${dialogueCharacter}
        </div>

        <div class="dialogue-block">
            ${dialogue}
        </div>

        <div class="transition">
            ${transition}
        </div>

        <div class="nextscene">
            ${nextscene}
        </div>

        <hr>

    </div>
    `;

    // Scene Navigator

    const sceneList =
    document.getElementById("sceneList");

    if(sceneList){

        sceneList.innerHTML += `
        <li onclick="document.getElementById('${sceneId}').scrollIntoView()">
        Scene ${sceneNo}
        </li>
        `;
    }

    updateStatistics();
    updateCharacterReport();

    autoSceneNumber++;
}

// NEW SCENE

function newScene(){

    document.getElementById("location").value = "";
    document.getElementById("characters").value = "";
    document.getElementById("emotion").value = "";
    document.getElementById("action").value = "";
    document.getElementById("camera").value = "";
    document.getElementById("dialogueCharacter").value = "";
    document.getElementById("dialogue").value = "";
}

// STATISTICS

function updateStatistics(){

    const content =
    document.getElementById("scriptContent").innerText;

    const words =
    content.trim().split(/\s+/).filter(Boolean).length;

    const scenes =
    document.querySelectorAll(".scene-block").length;

    document.getElementById("projectStat").textContent =
    document.getElementById("title").value || "UNTITLED";

    document.getElementById("sceneCount").textContent =
    scenes;

    document.getElementById("characterCount").textContent =
    Object.keys(characterStats).length;

    document.getElementById("dialogueCount").textContent =
    Object.values(characterStats)
    .reduce((a,b)=>a+b,0);

    document.getElementById("pageCount").textContent =
    Math.max(1,Math.ceil(words/250));

    document.getElementById("wordCount").textContent =
    words;
}

// CHARACTER REPORT

function updateCharacterReport(){

    const report =
    document.getElementById("characterReportList");

    report.innerHTML = "";

    Object.entries(characterStats)
    .forEach(([name,count])=>{

        report.innerHTML += `
        <div>
        ${name} - ${count} Dialogues
        </div>
        `;
    });
}

// SHOT LIST

function generateShotList(){

    let output = "";

    shotListData.forEach(item=>{

        output += `
SCENE ${item.scene}

${item.heading}

SHOT TYPE : ${item.shot}

MOVEMENT : ${item.movement}

-------------------------

`;
    });

    document.getElementById("shotListOutput")
    .textContent = output;
}

// DOWNLOAD SHOT LIST

function downloadShotList(){

    const content =
    document.getElementById("shotListOutput")
    .textContent;

    const blob =
    new Blob([content],{
        type:"text/plain"
    });

    const a =
    document.createElement("a");

    a.href =
    URL.createObjectURL(blob);

    a.download =
    "Shot_List.txt";

    a.click();
}

// PDF

function downloadPDF(){

    html2pdf()
    .from(document.getElementById("scriptPage"))
    .save("TSW_PRO_Screenplay.pdf");
}

// PRINT

function printScript(){
    window.print();
}

// SAVE PROJECT

function saveProject(){

    const data = {
        screenplay:
        document.getElementById("scriptContent").innerHTML
    };

    localStorage.setItem(
        "tsw_project",
        JSON.stringify(data)
    );

    alert("Project Saved");
}

// OPEN PROJECT

function openProject(){

    const data =
    localStorage.getItem("tsw_project");

    if(data){

        document.getElementById("scriptContent")
        .innerHTML =
        JSON.parse(data).screenplay;
    }
}

// RESET

function resetScript(){

    if(confirm("Reset Script?")){

        document.getElementById("scriptContent")
        .innerHTML = "";

        characterStats = {};
        shotListData = [];

        updateCharacterReport();
        updateStatistics();
    }
}function generateAIScene(){

    let location =
    document.getElementById("aiLocation").value;

    let characters =
    document.getElementById("aiCharacters").value;

    let emotion =
    document.getElementById("aiEmotion").value;

    let output = `
EXT. ${location.toUpperCase()} - NIGHT

${characters.split(",")[0]} ${emotion} ga
parigeduthu vastundi.

${characters.split(",")[0].toUpperCase()}

Amma ekkada unnava?

${characters.split(",")[1]?.trim().toUpperCase() || "MOTHER"}

Kitchen lo unna ra.
`;

    document.getElementById("action").value = output;
}
