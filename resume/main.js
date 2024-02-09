var titleInfo = {
	name: "Kenneth Jao",
	caption: "Researcher, Engineer and Developer",
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
				value: ["Champaign", "Illinois USA"],
				icon: "fas fa-map-marker-alt"
			},
			{
				name: "Phone",
				value: "+1-(248)-749-3439",
				icon: "fas fa-phone"
			},
			{
				name: "Email",
				value: ["kennethjao01 at gmail.com", "ksjao2 at illinois.edu"],
				icon: "fas fa-envelope"
			}
		]
	},
	{
		name: "Social",
		subsections: [
			{
				name: "GitHub",
				value: ["https://github.com/ksjdragon", "https://git.acem.illinois.edu"],
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
                name: "University of Illinois Urbana-Champaign (UIUC), Champaign",
                caption: "MS in Electrical Engineering",
                date: "2022-2024",
                desc: "Cumulative GPA: 3.94"
            },
            {
                name: "Defects and frustration in the packing of soft balls",
                caption: "Jao, Kenneth, et al. “Defects and frustration in the packing of Soft Balls.” Physica D: Nonlinear Phenomena, vol. 445, Mar. 2023, p. 133631, https://doi.org/10.1016/j.physd.2022.133631.",
                date: "2022",
                desc: "First author publication coauthored with Keith Promislow, creating modeling for star polymers, eliciting a complex energy landscape despite a simple model."
            },
			{
				name: "Michigan State University (MSU), East Lansing",
				caption: "BS in Computational Mathematics. BS in Mathematics. Minor in Computer Science",
				date: "2018-2022",
				desc: "Cumulative GPA: 3.9401"
			}
		]
	},
	{
		name: "Work Experience",
		icon: "fa-briefcase",
		values: [
            {
                name: "Research Assistant in Electrical Engineering",
                caption: "Researched with Zhen Peng, professor of Electrical Engineering at UIUC.",
                date: "2022-2024",
                desc: [
                    "Researched topics in large-scale computational simulation, quantum computing applications, and surrogate model creation and optimization with Gaussian Processes and Machine Learning, primarily applied to EE.",
                    "Handled DevOps within the lab: automated dependency management, created build process and library for CPU/GPU targets for rapid testing, and managed local Git servers"
                ]
            },
			{
				name: "Undergraduate Researcher in Mathematics",
				caption: "Researched with Keith Promislow, chairperson of the Mathematics Department at MSU.",
				date: "2021-2022",
				desc: [
                    "Conducted theoretical mathematical research into soft packing problems, modeling with partial differential equations.",
                    "Wrote custom software for all of the numerical simulations and analysis, compile into a Python package. [https://github.com/ksjdragon/squish]"
                ]
			},
			{
				name: "Undergraduate Learning Assistant (ULA)",
				caption: "Assistant to the professor (10 hours per week)",
				date: "Fall 2021",
				desc: "For the class 'CMSE/MTH 314 Matrix Algebra with Computational Applications', I aided in facilitating an interactive classroom, alongside grading assignments and hosting office hours."
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
				desc: [
                    "Fluent in Python, C/C++, CUDA, HTML/CSS/JavaScript, JQuery, Git, Bash.",
                    "Full-stack web app developer, significant experience with large-scale GPU/HPCC software, complex build environments.",
                    "Experience with scripting web-crawlers, data (pre)processors, small server-side middleware between APIs."
                ]
			},
			{
				name: "(Linux) System Administrator",
				caption: "Server setup, maintenance, and application management",
				date: "Since 2014",
				desc: [
                    "Proficient in maintaining and configuring Linux servers, and organizing network systems. Can secure implementations of server applications with industry standard cybersecurity.",
                    "Utilized Docker/Podman, AWS, Git, and NGINX web servers, load balancing for production-level external-facing and internal-facing applications."
                ]
			}
        ]
	}
	// {
	// 	name: "Other",
	// 	icon: "fa-list-ol",
	// 	values: [
	// 		{
	// 			name: "Google FooBar Challenge",
	// 			caption: "Coding challenge hosted by Google for hiring",
	// 			date: "Summer 2020",
	// 			desc: "Completed all 5 levels of Google Foobar challenge."
	// 		}
	// 		{
	// 			name: "Virtual Synthesizer",
	// 			caption: "Designed custom synthesizer programs for self-use in music production",
	// 			date: "Fall 2020",
	// 			desc: "Using signal processing concepts and studying historical circuits, recreated virtual synthesizers."
	// 		},
	// 		{
	// 			name: "VR Arm Tracking Device",
	// 			caption: "Virtual reality hardware development",
	// 			date: "2016",
	// 			desc: "Arm tracking done through gyroscope IMUs, with 9 degrees of freedom. A testing game was created to demonstrate tracking capabilities."
	// 		},
	// 		{
	// 			name: "Haptic Feedback Through Wave Interference",
	// 			caption: "Mathematical investigation of applications of wave interference",
	// 			date: "2017",
	// 			desc: "Investigated more complex haptic feedback through wave interference using linear resonant actuators."
	// 		},
	// 		{
	// 			name: "Cloud Storage Web Application",
	// 			caption: "Server side programming and account management with file security",
	// 			date: "2016",
	// 			desc: "Cloud database web app created to ease file downloading and storage for servers, with accounts and sharing systems. [https:github.com/ksjdragon/binbin]"
	// 		},
	// 		{
	// 			name: "Collaborative Online Planner",
	// 			caption: "Database management and responsive and reactive web design",
	// 			date: "2017",
	// 			desc: "Online planning web app designed for academic use. Enabled users to have a collaborative planner specific to individual classes and teachers. [https:github.com/ksjdragon/hourglass]"
	// 		}

	// 	]
	// }
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

            if(Array.isArray(item.desc)) {
                item.desc.forEach(function(val, index) {
                    subValue.appendChild(el("h3", val, "", ""));
                });
            } else {
			    subValue.appendChild(el("h3", item.desc, "", ""));
            }
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
