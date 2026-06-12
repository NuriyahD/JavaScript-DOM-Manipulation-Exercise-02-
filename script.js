const updateNameBtn = document.getElementById("updateNameBtn");
const profileName = document.getElementById("profileName");
const updateRoleBtn = document.getElementById("updateRoleBtn");
const profileRole = document.getElementById("profileRole");
const toggleStatusBtn = document.getElementById("toggleStatusBtn");
const status = document.querySelector(".active-status");
const changeImageBtn = document.getElementById("changeImageBtn");
const image = document.getElementById("profileImage");

updateNameBtn.addEventListener("click", ()=>{
    const updateName = prompt("Type your new name here");
    if (updateName !== null && updateName.trim() !== "") {
        profileName.textContent = updateName;
    }
});

updateRoleBtn.addEventListener("click", ()=> {
    const updateRole = prompt("Enter updated role here");
    if (updateRole !== null && updateRole.trim() !== "") {
        profileRole.textContent = updateRole;
    }
});

toggleStatusBtn.addEventListener("click", () => {
    if (status.textContent === "Status: Active"){
        status.textContent = "Status: Inactive";
        status.style.color = "darkred"
    }else{
        status.textContent = "Status: Active";
        status.style.color = "forestgreen"
    }
});

changeImageBtn.addEventListener("click", ()=>{
    const newImage = prompt("Enter image URL:");
    if (newImage){
      image.src = newImage
    }    
});