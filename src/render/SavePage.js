const cb_header = document.getElementById("header");
const ragrp_headerType = document.getElementById("headerType");
const rabtn_load = document.getElementById("load");
const rabtn_input = document.getElementById("input");
const div_inputHeader = document.getElementById("inputHeader");
const div_inputHeaderFile = document.getElementById("inputHeaderFile");
const div_inputInbound = document.getElementById("inputInbound");
const div_inputOutbound = document.getElementById("inputOutbound");

////////////////////////////////////////////////////////////////////////////////////////////

const getChildElement = (motherElement) => {
    const elements  = [];
    const children  = motherElement.children;
    const length    = children.length;

    for(let pos = 0; pos < length; pos++){
        elements.push(children.item(pos));
    }

    return elements;
};

////////////////////////////////////////////////////////////////////////////////////////////

(function init(){
    ragrp_headerType.style.width = cb_header.checked ? "auto" : "0";
    div_inputHeaderFile.style.display = cb_header.checked && rabtn_load.checked ? "flex" : "none";
    div_inputHeader.style.display = cb_header.checked && rabtn_input.checked ? "flex" : "none";
})();

////////////////////////////////////////////////////////////////////////////////////////////

cb_header.addEventListener("change", (event) => {
    const isChecked = event.target.checked;

    if(isChecked){
        ragrp_headerType.style.width = "auto";
    }else{
        ragrp_headerType.style.width = "0";

        getChildElement(ragrp_headerType).forEach((child) => {
            if(child.checked !== undefined && child.checked){
                child.checked = false;
                div_inputHeaderFile.style.display = "none";
                div_inputHeader.style.display = "none";
            }
        });
    }
});

ragrp_headerType.addEventListener("change", (event) => {
    const type = event.target.value;

    switch(type){
        case "load":
            div_inputHeaderFile.style.display = "flex";
            div_inputHeader.style.display = "none";
        break;
        case "input":
            div_inputHeaderFile.style.display = "none";
            div_inputHeader.style.display = "flex";
        break;
        default:
        break;
    }
});