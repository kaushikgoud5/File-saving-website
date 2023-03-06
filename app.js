const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change",()=>{
    let Selectedoption=selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText=`Save As ${(Selectedoption.split(" ")[0])} File`;

});


saveBtn.addEventListener('click',()=>{
    const blob =new Blob([textarea.value],{type:selectMenu.value});
    const fileURL=URL.createObjectURL(blob);
    const link=document.createElement("a");
    link.download=fileNameInput.value;
    link.href=fileURL;
    link.click();
});
