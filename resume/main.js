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

var mainContInfo = [
	{
		name: "Education",
		icon: "fa-book-open",
		values: [
			{
				name: "Michigan State University, East Lansing",
				caption: "Majoring in Computational Mathematics, Mathematics.\nMinoring in Computer Science",
				date: "2018-2022",
				desc: "Cumulative GPA: 3.91"
			}
		]
	},
	{
		name: "Skills",
		icon: "fa-wrench",
		values: [
			{
				name: "Programming",
				caption: "Software engineering",
				date: "Since 2014",
				desc: "Fluent in HTML, CSS, JavaScript, Python, C, C++. Can pick up languages and libraries with ease. Full-stack web app developer, experience in bash scripting, and deep learning." 
			},
			{
				name: "System Administrator",
				caption: "Server setup and maintenance.",
				date: "Since 2014",
				desc: "Proficient in maintaining and configuring up servers, and organizing network systems. Can secure implementations of server applications with industry standard cybersecurity."
			},
			{
				name: "User Interface Design",
				caption: "Interface, logo, and background design",
				date: "Since 2012",
				desc: "Proficient with GIMP and Blender for front-end web interfaces" 
			}
		]
	},
	{
		name: "Projects",
		icon: "fa-list-ol",
		values: [
			{
				name: "Video Compression Research",
				caption: "Compression through multi-dimensional transform analysis.",
				date: "Since 2018",
				desc: "Personal research into new compression techniques through extended applications of wave transforms, spatial and temporal data rearrangement, and component analysis."
			},
			{
				name: "VR Arm Tracking Device",
				caption: "Virtual reality hardware development",
				date: "2016",
				desc: "Arm tracking done through gyroscope IMUs, with 9 degrees of freedom. A testing game was created to demonstrate tracking capabilities." 
			},
			{
				name: "Haptic Feedback Through Wave Interference",
				caption: "Mathematical investigation of applications of wave interference",
				date: "2017",
				desc: "A mathematical proof and experimentation of controllable wave interference to induce correct superposition. Explored multiple applications including a possibility of simulating highly accurate haptic feedback." 
			},
			{
				name: "BinBin",
				caption: "Cloud storage web interface application",
				date: "2016",
				desc: "Cloud database web app created to ease file downloading and storage for servers, with accounts and sharing systems." 
			},
			{
				name: "Hourglass",
				caption: "Collaborative school-wide online planner",
				date: "2017",
				desc: "Online planning web app designed for academic use. Enabled users to have a collaborative planner specific to individual classes and teachers. " 
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
mainItems();
