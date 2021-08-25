const popup_entry_point = document.createElement("div");
let reactJS_script = document.createElement("script");

blogs_entry_point.id = "blogs";
reactJS_script.src = "blogs.bundle.js";

blogs_entry_point.appendChild(reactJS_script);

document.querySelector("body").appendChild(blogs_entry_point);
