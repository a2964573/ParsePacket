const input_inOccursNum         = document.getElementById("inOccursNum");
const input_outOccursNum        = document.getElementById("outOccursNum");

const rabtn_load                = document.getElementById("load");
const rabtn_input               = document.getElementById("input");

const cb_header                 = document.getElementById("header");
const cb_inbound                = document.getElementById("inbound");
const cb_outbound               = document.getElementById("outbound");

const ragrp_headerType          = document.getElementById("headerType");

const div_inputHeader           = document.getElementById("inputHeader");
const div_inputHeaderFile       = document.getElementById("inputHeaderFile");
const div_inputInbound          = document.getElementById("inputInbound");
const div_inputOutbound         = document.getElementById("inputOutbound");
const div_inboundOccurs         = document.getElementById("inboundOccurs");
const div_outboundOccurs        = document.getElementById("outboundOccurs");
const div_inputInboundOccurs    = document.getElementById("inputInboundOccurs");
const div_inputOutboundOccurs   = document.getElementById("inputOutboundOccurs");

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

const getSelectRabtnValue = (div) => {
    const raBtnList = [];
    getChildElement(div).forEach((element) => {
        if(element?.type !== "radio") return;

        raBtnList.push(element);
    });

    if(raBtnList.length <= 0){
        console.log("No radio button");
        return "error";
    }

    let selectedValue = "";

    raBtnList.forEach((raBtn) => {
        if(!raBtn.checked) return;

        selectedValue = raBtn.value;
    });

    if(!selectedValue){
        console.log("No selected radio button");
        return "error";
    }

    return selectedValue;
};

const setShowFlexDisplay = (element, isShow) => {
    element.style.display = isShow ? "flex" : "none";

    return element.style.display && element.style.display !== "none";
};

////////////////////////////////////////////////////////////////////////////////////////////

(function init(){
    ragrp_headerType.style.width = cb_header.checked ? "auto" : "0";

    setShowFlexDisplay(div_inputHeaderFile, cb_header.checked && rabtn_load.checked);
    setShowFlexDisplay(div_inputHeader, cb_header.checked && rabtn_input.checked);

    setShowFlexDisplay(div_inputInbound, cb_inbound.checked);
    setShowFlexDisplay(div_inboundOccurs, cb_inbound.checked);
    setShowFlexDisplay(div_inputInboundOccurs, cb_inbound.checked);
    setShowFlexDisplay(input_inOccursNum, getSelectRabtnValue(div_inboundOccurs) !== "error");

    setShowFlexDisplay(div_inputOutbound, cb_outbound.checked);
    setShowFlexDisplay(div_outboundOccurs, cb_outbound.checked);
    setShowFlexDisplay(div_inputOutboundOccurs, cb_outbound.checked);
    setShowFlexDisplay(input_outOccursNum, getSelectRabtnValue(div_outboundOccurs) !== "error");
})();

////////////////////////////////////////////////////////////////////////////////////////////

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

cb_header.addEventListener("change", (event) => {
    const isChecked = event.target.checked;

    if(isChecked){
        ragrp_headerType.style.width = "auto";
    }else{
        ragrp_headerType.style.width = "0";

        div_inputHeaderFile.style.display = "none";
        div_inputHeader.style.display = "none";

        getChildElement(ragrp_headerType).forEach((child) => {
            if(child.checked !== undefined && child.checked){
                child.checked = false;
            }
        });
    }
});

cb_inbound.addEventListener("change", (event) => {
    const isChecked = event.target.checked;

    setShowFlexDisplay(div_inputInbound, isChecked);
    setShowFlexDisplay(div_inboundOccurs, isChecked);
    
    if(!isChecked){
        setShowFlexDisplay(div_inputInboundOccurs, isChecked);

        getChildElement(div_inboundOccurs).forEach((child) => {
            if(child.checked !== undefined && child.checked){
                child.checked = false;
            }
        });
    }
});

cb_outbound.addEventListener("change", (event) => {
    const isChecked = event.target.checked;

    setShowFlexDisplay(div_inputOutbound, isChecked);
    setShowFlexDisplay(div_outboundOccurs, isChecked);
    
    if(!isChecked){
        setShowFlexDisplay(div_inputOutboundOccurs, isChecked);

        getChildElement(div_outboundOccurs).forEach((child) => {
            if(child.checked !== undefined && child.checked){
                child.checked = false;
            }
        });
    }
});

div_inboundOccurs.addEventListener("click", () => {
    const rabtnValue = getSelectRabtnValue(div_inboundOccurs);

    if(rabtnValue === "error"){
        return -1;
    }

    setShowFlexDisplay(input_inOccursNum, rabtnValue === "inOccursY");
    setShowFlexDisplay(div_inputInboundOccurs, rabtnValue === "inOccursY");
});

div_outboundOccurs.addEventListener("click", () => {
    const rabtnValue = getSelectRabtnValue(div_inboundOccurs);

    if(rabtnValue === "error"){
        alert(rabtnValue);
        return -1;
    }

    setShowFlexDisplay(input_outOccursNum, rabtnValue === "outOccursY");
    setShowFlexDisplay(div_inputOutboundOccurs, rabtnValue === "outOccursY");
});

input_inOccursNum.addEventListener("change", (event) => {
    console.log(event.target.value);
});