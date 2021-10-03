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
			},
			{
				name: "LinkedIn",
				value: "https://linkedin.com/in/kjao",
				icon: "fab fa-linkedin"
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
				name: "Michigan State University (MSU), East Lansing",
				caption: "Majoring in Computational Mathematics, Mathematics.\nMinoring in Computer Science",
				date: "2018-2022",
				desc: "Cumulative GPA: 3.9401"
			},
			{
				name: "Dean's List",
				caption: "Michigan State University",
				date: "2018-2021",
				desc: "Cumulative GPA higher than 3.5 for the year. Achieved for 3 years."
			}
		]
	},
	{
		name: "Work Experience",
		icon: "fa-briefcase",
		values: [
			{
				name: "Undergraduate Learning Assistant (ULA)",
				caption: "Assistant to the professor (10 hours per week)",
				date: "Fall 2021",
				desc: "For the class 'CMSE/MTH 314 Matrix Algebra with Computational Applications', I aided in facilliating an interactive classroom, alongside grading assignments and hosting office hours."
			},
			{
				name: "Undergraduate Researcher in Mathematics",
				caption: "Researched with Keith Promislow, chairperson of the Mathematics Department at MSU.",
				date: "2021-2022",
				desc: "Conducted theoretical mathematical research into soft packing problems, modeling with Partial Differential Equations.\n Wrote programs for all of the numerical simulations and analysis, along with a Python package. [https://github.com/ksjdragon/squish]"
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
				desc: "Fluent in Python, C, C++, HTML, CSS, and JavaScript. Can pick up languages and libraries with ease. Full-stack web app developer, experience in bash scripting, and deep learning."
			},
			{
				name: "System Administrator",
				caption: "Server setup and maintenance.",
				date: "Since 2014",
				desc: "Proficient in maintaining and configuring up servers, and organizing network systems. Can secure implementations of server applications with industry standard cybersecurity."
			}		]
	},
	{
		name: "Projects",
		icon: "fa-list-ol",
		values: [
			{
				name: "Google FooBar Challenge",
				caption: "Coding challenge hosted by Google.",
				date: "Summer 2020",
				desc: "Completed all 5 levels of Google Foobar challenge."
			},
			{
				name: "Virtual Synthesizer",
				caption: "Designed custom synthesizer programs for self-use in music production",
				date: "Fall 2020",
				desc: "Using signal processing concepts and studying historical circuits, recreated virtual synthesizers."
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
				desc: "Investigated more complex haptic feedback through wave interference using linear resonant actuators."
			},
			{
				name: "Cloud Storage Web Application",
				caption: "Server side programming and account management with file security",
				date: "2016",
				desc: "Cloud database web app created to ease file downloading and storage for servers, with accounts and sharing systems. [https://github.com/ksjdragon/binbin]"
			},
			{
				name: "Collaborative Online Planner",
				caption: "Database management and responsive and reactive web design",
				date: "2017",
				desc: "Online planning web app designed for academic use. Enabled users to have a collaborative planner specific to individual classes and teachers. [https://github.com/ksjdragon/hourglass]"
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
