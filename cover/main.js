var titleInfo = {
	name: "Kenneth Jao",
	caption: "Engineer and Developer",
	image: null
};

var sidebarInfo = [
	{
		name: "Info",
		subsections: [
			{
				name: "Name",
				value: "Kenneth Jao",
				icon: "fas fa-user"
			},
			{
				name: "Address",
				value: ["Lansing", "Michigan USA"],
				icon: "fas fa-map-marker-alt"
			},
			{
				name: "Phone",
				value: "+1-(248)-749-3439",
				icon: "fas fa-phone"
			},
			{
				name: "Email",
				value: ["kennethjao01 at gmail.com", "jaokenne at msu.edu"],
				icon: "fas fa-envelope"
			}
		]
	},
	{
		name: "Social",
		subsections: [
			{
				name: "GitHub",
				value: "https://github.com/ksjdragon",
				icon: "fab fa-github"
			}
		]
	}
];

var sidebarTop = document.querySelectorAll("#sidebar .topCont")[0];
var sidebarMid = document.querySelectorAll("#sidebar .midCont")[0];
var mainTop = document.querySelectorAll("#mainCont .topCont")[0];
var mainMid = document.querySelectorAll("#mainCont .midCont")[0];

function titleItems() {
	var name = el("h1", titleInfo.name.toUpperCase());
	mainTop.appendChild(name);
	var caption = el("h2", titleInfo.caption.toUpperCase());
	mainTop.appendChild(caption);
}

function mainItems() {
	mainContInfo.forEach(function(ele) {
		var subsection = el("div", "", "", "subsection");
		var circle = el("div", "", "", "subCircle");
		circle.appendChild(el("i", "", "", "fas " + ele.icon));
		subsection.appendChild(circle);
		subsection.appendChild(el("h2", ele.name.toUpperCase(), "", "subTitle"));
		ele.values.forEach(function(item) {
			var subValue = el("div", "", "", "subValue");
			subValue.appendChild(el("h3", item.date, "", ""));
			subValue.appendChild(el("h3", item.name, "", ""));
			subValue.appendChild(el("h3", item.caption, "", ""));
			subValue.appendChild(el("h3", item.desc, "", ""));
			subsection.appendChild(subValue);
		});
		mainMid.appendChild(subsection);
	});
}

function sidebarItems() {
	sidebarInfo.forEach(function(ele) {
		var subsection = el("div", "", "", "subsection");
		subsection.appendChild(el("h2", ele.name.toUpperCase(), "", "subTitle"));
		ele.subsections.forEach(function(item) {
			var subValue = el("div", "", "", "subValue");
			subValue.appendChild(el("i", "", "", item.icon));
			subValue.appendChild(el("h3", item.name, "", ""));
			if(Array.isArray(item.value))  {
				item.value.forEach(function(val, index) {
					subValue.appendChild(el("h3", val, "", ""));
					if(item.value.length != index+1) subValue.appendChild(el("br"));
				});
			} else {
				subValue.appendChild(el("h3", item.value, "", ""));
			}
			subsection.appendChild(subValue);
		});
		sidebarMid.appendChild(subsection);
	});
}

function el(DOM, textNode, id, className) {
	id = id || "";
	className = className || "";
	textNode = textNode || "";
	var element = document.createElement(DOM);
	if(id.length != 0) element.id = id;
	if(className.length != 0) element.className = className;
	if(textNode.length != 0) element.appendChild(document.createTextNode(textNode));
	return element;
}

titleItems();
sidebarItems();
