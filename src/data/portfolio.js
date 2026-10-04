export const profile = {
  name: "Ritik Kumar",
  role: "Technical Business Analyst moving into Product Management",
  intro:
    "I find the problem worth solving, prioritise it, and help ship it. Six years of turning messy stakeholder needs into delivered outcomes, now ready to own the product.",
  about: [
    "I am a Business Analyst and Process Consultant with more than six years of experience, based in New Delhi. I work where business goals meet technical delivery: running requirements workshops, modelling processes, writing user stories and making sure what ships is what was needed.",
    "I started in IT services resource management, where reengineering a slow workflow took turnaround from 25 days to 10. Since 2022 I have worked at Mott MacDonald on Agile delivery, owning a backlog of 500+ user stories and improving process cycle time by 20%.",
    "Increasingly I look at the work through a product lens: who the user is, what problem matters most, and how to prioritise and measure the result. I am a Certified ScrumMaster and I am looking to take on product management responsibilities alongside business analysis."
  ],
  facts: [
    ["Current role", "Business Analyst – Process Consultant, Mott MacDonald"],
    ["Experience", "6+ years"],
    ["Education", "B.E. Computer Science, Chandigarh University"],
    ["Certification", "Certified ScrumMaster (CSM)"],
    ["Based in", "New Delhi, India"]
  ]
};

export const skills = [
  {
    title: "Business analysis",
    type: "ba",
    items: [
      "Requirements elicitation and workshops",
      "BRDs, FRDs and user stories",
      "Acceptance criteria and UAT",
      "As-Is and To-Be gap analysis",
      "BPMN process modelling",
      "Requirements traceability"
    ]
  },
  {
    title: "Product thinking",
    type: "pm",
    items: [
      "Backlog ownership and refinement",
      "Prioritisation with MoSCoW",
      "Customer journey mapping",
      "Business goals into technical specs",
      "Scalable solution recommendations"
    ]
  },
  {
    title: "Delivery and leadership",
    type: "pm",
    items: [
      "Scrum ceremonies for distributed teams",
      "Release readiness and sign-off",
      "Sprint metrics for planning",
      "Change management",
      "Coaching and mentoring"
    ]
  }
];

export const toolkit = [
  ["Data and analysis", ["SQL", "Python", "Power BI", "Advanced Excel"]],
  ["Delivery tools", ["Azure DevOps", "Jira"]],
  ["Design and prototyping", ["Figma", "Miro"]],
  ["Process modelling", ["BPMN", "Signavio", "Camunda", "ARIS", "MS Visio"]],
  ["Methods", ["Agile (Scrum)", "Waterfall", "MoSCoW", "CSM certified"]]
];

export const experienceFilters = [
  { group: "All", filters: ["All"] },
  {
    group: "Product management",
    filters: ["Product Strategy", "Backlog & Prioritisation", "Agile Delivery"]
  },
  {
    group: "Business analysis",
    filters: ["Requirements", "Process Analysis", "Validation & UAT"]
  },
  {
    group: "Both roles",
    filters: ["Stakeholders & Leadership", "Data & Insights"]
  }
];

export const experience = [
  {
    title: "Business Analyst – Process Consultant",
    company: "Mott MacDonald",
    location: "Noida, U.P.",
    period: "June 2022 – Present",
    description: "Global engineering, management & development consultancy",
    pmSkills: [
      "Backlog ownership",
      "Prioritisation",
      "Roadmap to sprint execution",
      "Stakeholder alignment",
      "Data-driven decisions",
      "Release launch"
    ],
    bullets: [
      ["Agile Delivery", "pm", "Agile Delivery & Governance:", "Orchestrated the end-to-end lifecycle of 500+ User Stories within Azure DevOps, leveraging custom queries and real-time dashboards to optimize team velocity and burn-down accuracy."],
      ["Requirements", "ba", "Requirements Elicitation & Documentation:", "Led requirements gathering workshops with cross-functional stakeholders to author BRDs, FRDs, and 500+ user stories in Azure DevOps, maintaining full traceability from business need to delivered solution."],
      ["Process Analysis", "ba", "Process Engineering:", "Conducted As-Is/To-Be gap analysis and BPMN process modeling (Signavio) to surface inefficiencies, informing solution designs that cut process cycle time by 20%."],
      ["Backlog & Prioritisation", "pm", "Backlog Ownership & Prioritization:", "Owned backlog refinement and prioritized high-value requirements using MoSCoW, reducing sprint spillover by 15% and improving requirement clarity for development teams."],
      ["Validation & UAT", "ba", "Solution Validation:", "Defined acceptance criteria, coordinated UAT cycles, and triaged defects in Azure DevOps, securing stakeholder sign-off prior to production release."],
      ["Data & Insights", "both", "Data-Driven Reporting:", "Built SQL queries and Azure DevOps dashboards to track delivery metrics and surface trends that informed sprint planning decisions."],
      ["Stakeholders & Leadership", "both", "Stakeholder Integration:", "Acted as the lead bridge between business units and technical engineering teams, translating high-level business objectives into actionable, detailed technical specifications."],
      ["Agile Delivery", "pm", "Scrum Facilitation:", "Directed core Agile ceremonies including Daily Stand-ups, Sprint Reviews, and Retrospectives for distributed teams to drive transparency and a culture of continuous iteration."],
      ["Product Strategy", "pm", "Strategic Solutioning:", "Drove organizational improvement by mapping end-to-end customer journeys, identifying critical pain points and recommending scalable IT architectural solutions."],
      ["Requirements", "ba", "Technical Documentation:", "Authored high-fidelity documentation (BRDs, FRDs), ensuring seamless alignment between overarching corporate goals and technical implementation."],
      ["Validation & UAT", "ba", "Quality Assurance & UAT:", "Managed the User Acceptance Testing (UAT) phase, overseeing defect triage in Azure DevOps, tester coordination, and securing formal sign-offs for production deployments."],
      ["Process Analysis", "ba", "Knowledge Management:", "Established comprehensive Standard Operating Procedures (SOPs) derived from finalized process maps to systematically identify and resolve workflow redundancies."]
    ]
  },
  {
    title: "Resource Manager",
    company: "American CyberSystems, Inc.",
    location: "Noida, U.P.",
    period: "Jan 2019 – June 2022",
    description: "Global IT solutions & services provider",
    pmSkills: ["Process ownership", "Change leadership", "Cross-functional coordination", "Coaching"],
    bullets: [
      ["Process Analysis", "ba", "Gap Analysis:", "Conducted comprehensive gap analysis and reengineered legacy workflows, reducing process turnaround time by 60% (25 to 10 days)."],
      ["Process Analysis", "ba", "Process Mapping:", "Partnered with workforce management teams to develop detailed process maps, identifying precise opportunities for automation."],
      ["Stakeholders & Leadership", "both", "Change Management:", "Led team-acquisition transitions independently, earning leadership commendation for maintaining stability and performance during organizational change."],
      ["Stakeholders & Leadership", "both", "Cross-Functional Coordination:", "Assessed internal process issues with management and coordinated with Legal, Sales, and Finance to implement agreement changes that improved workflow efficiency."],
      ["Stakeholders & Leadership", "both", "Team Development:", "Coached and mentored team members to build ownership and accountability, ensuring consistent achievement of objectives."]
    ]
  }
];

export const education = {
  degree: "Bachelor of Engineering, Computer Science",
  school: "Chandigarh University, Punjab, India · 2015 – 2019",
  certification: "Certified ScrumMaster® (CSM)"
};

export const projects = [
  {
    title: "Workflow Automation & Internal Tool Modernization",
    context:
      "The operations team was bottlenecked by legacy manual processing, resulting in high error rates and delayed turnaround times. The business needed a streamlined internal tool to automate decision routing, but existing requirements were scattered and lacked technical feasibility.",
    transition:
      "Shifted from strictly analyzing the current-state business problems to owning the solution's vision, defining the MVP, and guiding the engineering team through iterative delivery.",
    actions: [
      ["Process Modeling & Vision", "Conducted deep-dive discovery sessions and utilized BPMN tools (Signavio and Camunda) to map complex AS-IS and TO-BE workflows, ensuring the product vision aligned with business strategy."],
      ["Backlog Ownership", "Translated conceptual workflow models into an actionable product backlog within Azure DevOps, authoring over 200 detailed user stories with clear acceptance criteria."],
      ["Agile Delivery", "Led backlog refinement and sprint planning sessions as a ScrumMaster and proxy Product Owner, continually balancing stakeholder requests against team velocity."],
      ["Validation & Launch", "Orchestrated full User Acceptance Testing (UAT), tracking and triaging defects, and managing final release communications."]
    ],
    impact:
      "Successfully launched the automated workflow engine, reducing manual processing time by 40% and virtually eliminating routing errors within the first quarter of deployment.",
    tags: ["BPMN", "Signavio", "Camunda", "Azure DevOps", "UAT"]
  },
  {
    title: "Data-Driven Dashboard & Reporting Suite Launch",
    context:
      "Stakeholders lacked real-time visibility into core performance metrics, relying on outdated monthly spreadsheets that delayed critical business decisions.",
    transition:
      "Leveraged strong analytical skills to not just gather data requirements, but to define product features, build prototypes, and prioritize development based on user impact and root cause analysis.",
    actions: [
      ["Root Cause Analysis (RCA)", "Queried legacy databases using SQL and Python to identify data latency issues and understand exactly where users were abandoning the old reporting process."],
      ["Prototyping & MVP", "Built high-fidelity, interactive prototypes using Power BI and Advanced Excel to validate user needs and secure stakeholder buy-in before engineering resources were committed."],
      ["Feature Prioritization", "Managed the development lifecycle in Jira, slicing the reporting suite into iterative releases (MVP first, advanced predictive analytics second)."],
      ["User Enablement", "Conducted training sessions and gathered post-launch user feedback to drive continuous iteration of the product."]
    ],
    impact:
      "Delivered a self-serve reporting product that saw a 35% increase in weekly active users among internal leadership and reduced ad-hoc data requests to the engineering team by 60%.",
    tags: ["SQL", "Python", "Power BI", "Advanced Excel", "Jira"]
  },
  {
    title: "Scaled Agile Delivery & Multi-Project Backlog Management",
    context:
      "The organization struggled with misaligned priorities and siloed development efforts across concurrent projects. With multiple engineering teams working independently, resource bottlenecks, cross-team dependencies, and duplicated efforts were frequently delaying strategic product releases.",
    transition:
      "Transitioned from capturing requirements for a single workstream to managing portfolio-level priorities, taking ownership of the broader product vision and ensuring strategic alignment across multiple cross-functional teams.",
    actions: [
      ["Cross-Team Orchestration", "Centralized and managed the product backlog across multiple distributed teams using Azure DevOps, establishing consistent Agile practices and ensuring high-level roadmaps translated into executable sprint increments."],
      ["Backlog Scale & Prioritization", "Audited, groomed, and prioritized a massive repository of over 500 user stories. Facilitated rigorous backlog refinement sessions to maintain a healthy pipeline that constantly met the “Definition of Ready.”"],
      ["Capacity & Velocity Planning", "Monitored team velocity and balanced workloads across concurrent initiatives. Proactively identified technical dependencies between teams and mitigated delivery risks before they could derail sprint commitments."],
      ["Stakeholder Alignment", "Acted as the primary bridge between business leadership and the various technical squads, managing competing stakeholder priorities and utilizing clear data to defend product decisions and say “no” when necessary."]
    ],
    impact:
      "Successfully synchronized delivery cycles across multiple teams, significantly improving sprint predictability and maintaining a consistently prioritized, transparent backlog that kept all teams focused on the highest-ROI features.",
    tags: ["Azure DevOps", "Scaled Agile", "Backlog management", "Stakeholder alignment"]
  }
];

export const boardCards = [
  ["Journey map", "pm", 0],
  ["Workshops", "ba", 0],
  ["Gap analysis", "ba", 0],
  ["BRD and FRD", "ba", 1],
  ["SQL metrics", "tech", 1],
  ["MoSCoW", "pm", 1],
  ["UAT sign-off", "ba", 2],
  ["Dashboards", "tech", 3]
];

export const posts = [
  {
    id: "ac",
    title: "Writing acceptance criteria developers can test",
    date: "2026-09-15",
    tags: ["Requirements", "Agile"],
    body: [
      "Acceptance criteria are the contract between the business and the team. If two people can read the same criterion and disagree on whether it passed, it is not finished.",
      ["Start with the outcome", "Write what the user can do or see when the story is done, not how the system should build it. “The approver sees pending requests sorted by date” beats “add an ORDER BY clause”."],
      ["Make each one testable", "Every criterion should have a clear pass or fail. Use specific values, states and limits. If a tester has to ask a question, add the answer to the story."],
      ["Review them together", "Read the criteria aloud in refinement with a developer and a tester. Ten minutes here saves a defect cycle later."]
    ]
  },
  {
    id: "map",
    title: "Three questions to ask before mapping a process",
    date: "2026-08-28",
    tags: ["Process", "BPMN"],
    body: [
      "A process map is only worth the time if someone uses it to decide something. Before drawing a single box, I ask three questions.",
      ["What decision will this map inform?", "A map for automation needs more detail than a map for a training guide. Knowing the decision sets the level of detail."],
      ["Who actually does the work?", "The documented process and the real one often differ. Sit with the people doing the work and note the workarounds."],
      ["Where does work wait?", "Cycle time is mostly waiting, not working. Mark handoffs and queues first, because that is where redesign pays off."]
    ]
  },
  {
    id: "mos",
    title: "Using MoSCoW without everything becoming a Must",
    date: "2026-08-05",
    tags: ["Prioritisation", "Agile"],
    body: [
      "MoSCoW is simple, which is why it gets abused. Within a week, most backlogs are full of Musts.",
      ["Define Must by consequence", "A Must is something whose absence means the release cannot go live or breaks a legal or safety need. Agree that definition before you start."],
      ["Cap the Musts", "Set a rough ceiling, such as 60% of capacity. It forces the real conversation about trade-offs."],
      ["Revisit each sprint", "Priorities change. Re-rank at refinement so the top of the backlog always reflects what matters now."]
    ]
  }
];

export const contact = {
  phone: "+91 85957 70307",
  phoneHref: "tel:+918595770307",
  email: "ritik199727@gmail.com",
  linkedin: "linkedin.com/in/ritiksk",
  linkedinHref: "https://linkedin.com/in/ritiksk"
};
