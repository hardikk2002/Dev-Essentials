const popup_entry_point = document.createElement("div");
let reactJS_script = document.createElement("script");

popup_entry_point.id = "popup";
reactJS_script.src = "popup.bundle.js";

popup_entry_point.appendChild(reactJS_script);

document.querySelector("body").appendChild(popup_entry_point);
