/* Modules 7–12: Innovation */
MODULES.push(

// MODULE 7 — Primer on Innovation (PAID)
{
  id: 7, free: false, cat: 'innovation',
  icon: '💡', duration: '3 hrs', lessons: 6,
  title: 'A Primer on Innovation',
  tagline: 'Challenge popular myths about innovation and understand the language and types of innovation.',
  overview: `<p>Innovation is one of the most overused and under-understood words in business. It is invoked to justify everything from a new product launch to a reorganisation of the stationery cupboard. This conceptual inflation makes it harder, not easier, to drive genuine innovation — when everything is innovation, nothing is.</p><br>
<p>This module strips back the mythology. You will encounter and challenge the dominant cultural narratives: the lone genius, the disruptive startup, the pivot as salvation. In their place, you will build a rigorous vocabulary — distinguishing incremental from radical, product from process, sustaining from disruptive innovation — and understand why the type of innovation you choose determines the organisational approach you need.</p><br>
<p>Crucially, you will learn that innovation is not an event but a system. Organisations that innovate consistently do not rely on inspiration; they build processes, structures, and cultures that make innovation routine rather than exceptional.</p>`,
  objectives: [
    'Distinguish between at least four types of innovation and identify appropriate organisational responses to each.',
    'Deconstruct three popular innovation myths and explain why they mislead strategic decision-making.',
    'Apply the innovation language framework to evaluate proposals and investments in your organisation.',
    'Describe the key components of an innovation system and assess your organisation against them.',
    'Identify one structural change that would most improve your organisation\'s innovation output.',
  ],
  concepts: [
    { title: 'Types of Innovation: Beyond the Product', body: 'Most people think innovation means new products. In fact, the innovation landscape is far richer. Product innovation: new or improved goods and services. Process innovation: new ways of making or delivering products (often invisible to customers but highly valuable). Business model innovation: changing the logic of how you create, deliver, and capture value (the most disruptive form — Uber didn\'t invent the car, it invented the business model). Social innovation: new approaches to social problems. Understanding which type applies determines which capabilities, resources, and organisational structures you need.' },
    { title: 'Sustaining vs. Disruptive Innovation', body: 'Clayton Christensen\'s disruption theory remains the most cited — and most misunderstood — framework in innovation strategy. Sustaining innovations improve existing products for existing customers along dimensions they already value (a better camera on an iPhone). Disruptive innovations start at the low end or in new markets, initially inferior to incumbents on established metrics, but superior on new ones (simpler, cheaper, more accessible) — and eventually move upmarket and displace the incumbents. Key insight: incumbents are rationally motivated to ignore disruptors because disruption initially targets customers they don\'t want to serve.' },
    { title: 'The Innovation Myths', body: 'Three myths distort innovation strategy. Myth 1: Innovation requires genius — research consistently shows that most innovation comes from disciplined process and diverse teams, not individual genius. Myth 2: Startups are more innovative than established firms — startups have fewer constraints but also fewer resources, distribution, and customer relationships. The question is which constraints matter for your innovation type. Myth 3: Innovation is primarily about technology — the most valuable innovations in the last decade include financial products, organisational models, and regulatory arbitrage, none of which are "technology" in the engineering sense.' },
    { title: 'The Innovation System', body: 'Consistent innovation requires five system components working together: Strategy (a clear point of view on where and how to innovate), Portfolio (a balanced mix of incremental, adjacent, and radical bets), Process (repeatable methods for ideation, experimentation, and scaling), Resources (dedicated people, funding, and time — not borrowed from operations), and Culture (psychological safety, tolerance for failure, and rewarding learning over results). Organisations that are serious about innovation address all five. Those that run "innovation theatre" — hackathons with no follow-through, innovation labs without authority — are missing at least three.' },
    { title: 'Building an Innovation Pipeline', body: 'The McKinsey "three horizons" model provides a practical portfolio framework. Horizon 1: defending and extending the core business (60-70% of innovation investment, short-term returns). Horizon 2: emerging opportunities that will become tomorrow\'s core (20-30% investment, medium-term). Horizon 3: creating options for the future (10-20%, long-term, highest uncertainty). The fatal mistake most organisations make: cutting Horizon 2 and 3 investment under short-term pressure, leaving them with no pipeline when Horizon 1 matures. Apple\'s pipeline management — iPhone (H1), Apple Watch (H2), Vision Pro (H3) — is the textbook exemplar.' },
  ],
  caseStudy: {
    company: 'Apple — iPhone as Business Model Innovation',
    title: 'Why the iPhone Was Not Primarily a Technology Innovation',
    body: `The iPhone launched in 2007 was remarkable technology. But its most consequential innovation was its business model. Apple redefined who captured value in the mobile ecosystem: by controlling the App Store and taking 30% of all app revenue, Apple created a platform where third-party developers — unpaid employees, essentially — built the value that made the device indispensable. The device was the razor; the App Store was the blades.<br><br>
Prior to the iPhone, Nokia and BlackBerry were technology leaders. They were disrupted not because they couldn\'t build touchscreens, but because their entire business model — hardware margins, carrier partnerships, enterprise contracts — was incompatible with the platform model Apple invented. They were sustaining innovators in a world that had just changed the definition of what needed to be sustained.`,
    result: 'The App Store generated $1.1 trillion in developer billings in 2022 alone. Apple\'s services revenue — almost entirely a function of the platform business model innovation of 2007 — now exceeds $80 billion annually.',
    discussion: [
      'Nokia was the world\'s leading mobile phone manufacturer in 2007. What did their business model incentivise them to do when iPhone launched? What should they have done differently?',
      'Identify one business model innovation in your industry in the last decade. Who captured value, who lost it, and why?',
      'Where in your own value chain is there an opportunity for business model innovation — changing not what you sell but how you capture value from it?',
    ]
  },
  exercise: {
    title: 'Innovation Vocabulary Audit',
    intro: 'Build a shared innovation vocabulary in your team by auditing how the word is actually used.',
    steps: [
      'Collect 10 uses of the word "innovation" from your organisation in the last 3 months: presentations, strategy documents, press releases, internal communications.',
      'For each, classify: What TYPE of innovation is actually described? (Product, Process, Business Model, Social, Technology). Is it Sustaining or Disruptive? Is it Incremental, Adjacent, or Radical?',
      'Identify the gaps: Which innovation types are over-represented? Which are missing entirely? What does this tell you about your organisation\'s innovation strategy?',
      'Draft a one-page "Innovation Charter" for your team or organisation: Define what innovation means in your context, the three priority innovation types for the next 3 years, and the one myth your organisation most needs to abandon.',
    ]
  },
  quiz: [
    { q: 'A company redesigning its delivery logistics to cut costs without changing its product is an example of:', opts: ['Product innovation','Process innovation','Business model innovation','Disruptive innovation'], ans: 1 },
    { q: 'According to Christensen\'s disruption theory, disruptive innovations typically begin by:', opts: ['Targeting premium customers with superior products','Serving low-end or new markets with simpler, cheaper solutions','Acquiring the incumbent\'s core technology','Receiving large government subsidies to compete'], ans: 1 },
    { q: 'The McKinsey "three horizons" model allocates the LARGEST portion of innovation investment to:', opts: ['Horizon 3: future options and moonshots','Horizon 2: emerging opportunities','Horizon 1: defending and extending the core business','Equally across all three horizons'], ans: 2 },
    { q: 'Apple\'s most consequential iPhone innovation in 2007 was primarily:', opts: ['The touchscreen interface','The superior camera technology','The App Store business model that captured value from third-party developers','The cellular network integration'], ans: 2 },
    { q: 'Which component of an innovation system provides the repeatable methods for ideation and experimentation?', opts: ['Strategy','Portfolio','Process','Culture'], ans: 2 },
  ]
},

// MODULE 8 — Organising for Innovation (PAID)
{
  id: 8, free: false, cat: 'innovation',
  icon: '🏗️', duration: '3.5 hrs', lessons: 7,
  title: 'Organising for Innovation',
  tagline: 'Explore organisational design and the structural and cultural elements that make innovation routine.',
  overview: `<p>The hardest part of innovation is not having ideas — it is building an organisation that consistently turns ideas into value. Most large organisations are optimised for efficiency, repeatability, and risk reduction — the very opposite of what innovation requires. The question is not whether to innovate, but how to build innovation capability without destroying operational excellence.</p><br>
<p>This module explores the structural and cultural choices that determine whether innovation thrives or atrophies in an organisation. You will study the ambidextrous organisation — the concept of simultaneously exploiting today\'s business and exploring tomorrow\'s — and examine how leading firms structure innovation teams, allocate resources, and create incentives that reward the right behaviours.</p><br>
<p>The key insight is that innovation and operations require fundamentally different management systems. Trying to apply operational management principles to innovation — rigorous planning, variance minimisation, efficiency optimisation — kills it. Effective innovation leaders know when to apply which system and how to protect each from the other.</p>`,
  objectives: [
    'Explain the ambidextrous organisation concept and why it is structurally challenging to achieve.',
    'Compare at least three structural models for organising innovation (labs, venture arms, embedded teams).',
    'Identify the cultural elements — psychological safety, tolerance for failure, learning orientation — that enable innovation.',
    'Design an incentive structure that rewards innovation behaviour rather than only innovation outcomes.',
    'Apply the division of labour framework to decide what innovation activities your core organisation should own vs. outsource.',
  ],
  concepts: [
    { title: 'The Ambidextrous Organisation', body: 'Charles O\'Reilly and Michael Tushman\'s concept of organisational ambidexterity — simultaneously exploiting the current business and exploring new opportunities — is the central challenge of corporate innovation. Exploitation requires efficiency, standardisation, and short time horizons. Exploration requires experimentation, variation, and long time horizons. These demands conflict at almost every management decision: budget allocation, performance metrics, talent profiles, risk appetite. The successful resolution is structural separation with senior leadership integration — keeping exploration units structurally distinct but connected at the top to prevent both starvation and contamination.' },
    { title: 'Structural Models: Labs, Ventures, Embedded Teams', body: 'Three common structural models for corporate innovation: Innovation Labs (separate units with dedicated resources — best for radical innovation but risk becoming isolated "zoos" disconnected from the real business), Corporate Venture Capital (investment in external startups — best for gaining optionality and market intelligence but rarely drives internal capability building), and Embedded Innovation Teams (small cross-functional teams within business units — best for incremental and adjacent innovation but vulnerable to operational pressure). Most sophisticated organisations use all three in combination, matching the structural model to the innovation horizon.' },
    { title: 'Division of Labour in Innovation', body: 'Not all innovation activities belong inside the organisation. The division of labour question — what do we do internally vs. what do we source externally? — applies as much to innovation as to any other function. Activities that should stay internal: deep customer understanding, core technology that is a competitive differentiator, integration of new capabilities into business processes. Activities that can be sourced externally: early-stage research, specialist technical capabilities, market experiments in new geographies. Getting this division wrong — trying to do everything internally, or outsourcing core capabilities — is a consistent source of innovation failure.' },
    { title: 'Psychological Safety: The Cultural Foundation', body: 'Amy Edmondson\'s research at Harvard shows that psychological safety — the shared belief that it is safe to take interpersonal risks, speak up, and admit mistakes — is the single strongest predictor of team innovation and learning. Organisations where people fear punishment for failure, ridicule for unconventional ideas, or marginalisation for challenging leadership get incremental thinking and hidden problems. Creating psychological safety is primarily a leadership behaviour problem: leaders who model intellectual humility, openly discuss their own failures, and respond to bad news with curiosity rather than blame create cultures where others can do the same.' },
    { title: 'Incentive Design for Innovation', body: 'You get what you measure. Standard corporate incentive systems — annual bonuses tied to short-term financial performance, promotion based on successful project delivery, peer recognition for efficiency — actively punish innovation risk-taking. Effective innovation incentive design separates process metrics (ideas generated, experiments run, learnings documented, pivots made) from outcome metrics (revenue from new products). It rewards the right learning from a failed experiment. It celebrates the team that killed a project early because the evidence said to, rather than the team that continued a bad project because they were too invested to stop.' },
  ],
  caseStudy: {
    company: 'Google — 20% Time and X (Moonshot Factory)',
    title: 'Two Structural Approaches to Innovation at the World\'s Most Valuable Technology Company',
    body: `Google\'s "20% time" policy allowed engineers to spend 20% of their working hours on self-directed projects. Gmail, Google News, and AdSense all emerged from 20% time — products that collectively generate tens of billions in annual revenue. But as Google scaled, 20% time became harder to sustain: managers under delivery pressure discouraged it, and without organisational support, most 20% projects never shipped.<br><br>
X (formerly Google X) takes the opposite structural approach: a fully separate entity with its own building, leadership, culture, and budget. X explicitly hunts for moonshots — projects 10x better than the current best solution to a massive global problem — and employs a "rapid evaluation" process designed to kill projects that lack evidence as quickly as possible. Projects that graduate from X become independent companies (Waymo, Verily). X\'s defining innovation is the innovation process itself.`,
    result: 'Gmail alone generates an estimated $2-3B in annual revenue. Waymo (autonomous vehicles), launched from X, is valued at $30B+ as an independent entity — suggesting the structural separation model creates more durable value than embedded innovation.',
    discussion: [
      '20% time succeeded when Google was small but struggled at scale. What does this tell you about the relationship between organisational size and informal innovation?',
      'X kills projects deliberately and rapidly. How would you introduce this "kill early" culture in an organisation where projects have political owners?',
      'Which structural model — embedded (20% time) or separate entity (X) — is more appropriate for your organisation? What would the transition require?',
    ]
  },
  exercise: {
    title: 'Organisational Innovation Audit',
    intro: 'Assess your organisation\'s innovation infrastructure against five structural dimensions.',
    steps: [
      'Score your organisation 1–5 on each dimension: (1) Dedicated resources — is there protected time/budget for innovation not borrowed from operations? (2) Structural separation — is exploratory innovation shielded from operational performance pressure? (3) Senior sponsorship — does innovation have a champion with real authority and budget? (4) Psychological safety — can people propose ideas and report failures without fear? (5) Incentive alignment — are innovation behaviours (experiments, pivots, early kills) rewarded?',
      'Calculate your total score out of 25. Benchmark: <10 = innovation theatre, 10–15 = emerging, 16–20 = functional, 21–25 = innovation-grade.',
      'For your two lowest-scoring dimensions, identify one concrete action (a structural change, a policy change, or a leadership behaviour change) that would move each score up by 1 point.',
      'Design a 90-day experiment: What one structural change could you test in the next quarter to improve innovation output? What metrics would you use to evaluate it?',
    ]
  },
  quiz: [
    { q: 'The ambidextrous organisation concept refers to:', opts: ['An organisation with two separate CEOs for efficiency and innovation','Simultaneously exploiting the current business while exploring new opportunities','Using both qualitative and quantitative methods in innovation research','Balancing domestic and international innovation activities'], ans: 1 },
    { q: 'Which structural model for innovation is BEST suited for radical, long-horizon moonshots?', opts: ['Embedded cross-functional teams within business units','20% self-directed time for all employees','A fully separate innovation lab or entity with independent leadership and budget','Corporate venture capital investing in external startups'], ans: 2 },
    { q: 'Psychological safety, as defined by Amy Edmondson, refers to:', opts: ['Physical safety in the workplace','The belief that it is safe to take interpersonal risks — to speak up, admit mistakes, and propose unconventional ideas — without fear of punishment','Having health insurance and job security','A risk management framework for innovation projects'], ans: 1 },
    { q: 'Standard corporate incentive systems (short-term financial bonuses, project delivery metrics) tend to:', opts: ['Encourage risk-taking and experimentation','Punish innovation behaviours like running experiments that fail','Reward learning and pivoting','Align well with innovation timelines'], ans: 1 },
    { q: 'Google\'s 20% time policy struggled to scale primarily because:', opts: ['The projects it produced were not commercially valuable','Engineers lacked creative ideas','Managers under delivery pressure discouraged it and organisational support was inconsistent','Google ran out of budget to support the policy'], ans: 2 },
  ]
},

// MODULE 9 — Drivers of Innovation (PAID)
{
  id: 9, free: false, cat: 'innovation',
  icon: '⚙️', duration: '3 hrs', lessons: 6,
  title: 'Drivers of Innovation: Technology and Beyond',
  tagline: 'Explore models of innovation beyond disruption — technology S-curves, market dynamics, and firm capabilities.',
  overview: `<p>What makes innovation happen? The popular answer — technology — is incomplete. Technology creates possibility, but markets, regulations, organisational capabilities, and cultural readiness determine whether that possibility becomes reality. Understanding the full range of innovation drivers gives leaders a more powerful analytical toolkit than "wait for the next technology wave."</p><br>
<p>This module examines innovation drivers through multiple lenses. You will study technology S-curves — the characteristic lifecycle of a technology from emergence to maturity — and learn to identify where a technology sits on its curve. You will explore the interplay between technology push and market pull, and understand why neither alone is sufficient. And you will move beyond technology entirely to examine how regulatory change, demographic shifts, and changing social norms drive innovation as powerfully as any new technology.</p><br>
<p>The module closes with a capabilities-based view: innovation does not happen in an industry, it happens in firms with specific combinations of resources and capabilities. Understanding your own capability endowment — and the gaps — is the most honest starting point for any innovation strategy.</p>`,
  objectives: [
    'Apply the technology S-curve to assess where a technology is in its lifecycle and what it implies for strategy.',
    'Distinguish between technology push and market pull and give examples of each in your industry.',
    'Identify at least three non-technology drivers of innovation and assess their impact in a specific context.',
    'Apply the dynamic capabilities framework to evaluate your organisation\'s ability to innovate.',
    'Map the innovation driver landscape for your industry for the next 5 years.',
  ],
  concepts: [
    { title: 'Technology S-Curves', body: 'Technologies follow a characteristic S-shaped performance curve over time. The early phase is slow — high investment, low performance improvement. As the technology matures, performance improves rapidly (the steep middle section). Eventually, performance plateaus as the technology approaches its physical limits. The strategic implication: firms that invest at the inflection point — when the curve steepens — gain massive advantage. Those that invest in a maturing technology that is about to plateau are optimising a dying horse. The art is identifying inflection points before they are obvious — when the evidence is still ambiguous.' },
    { title: 'Technology Push vs. Market Pull', body: 'Two fundamental models of innovation: Technology Push starts from a new capability and asks "What problems could this solve?" Market Pull starts from an unmet customer need and asks "What technology could satisfy it?" Pure technology push often produces solutions looking for problems (Google Glass). Pure market pull produces incremental improvements to existing solutions. The most powerful innovations occur at the intersection: a genuine unmet need that existing technology cannot adequately serve, met by a new capability that has just crossed the feasibility threshold. Post-It Notes emerged from a failed adhesive (technology push) that solved a need (bookmark without damaging pages) that was not articulated until someone tried it.' },
    { title: 'Beyond Technology: The Full Driver Landscape', body: 'Regulatory change drives innovation as powerfully as technology. The EU\'s GDPR created a privacy technology industry worth $6 billion. The Paris Agreement created a clean energy investment wave. Demographic change — ageing populations, urbanisation, middle-class expansion in emerging markets — creates structural demand shifts that technology can meet. Cultural change — changing attitudes to privacy, sustainability, work-life balance — creates new value propositions. Firms focused only on technology miss three-quarters of the innovation driver landscape.' },
    { title: 'Dynamic Capabilities', body: 'David Teece\'s dynamic capabilities framework argues that sustained competitive advantage comes not from static resources (what you have today) but from the ability to sense new opportunities, seize them by mobilising resources, and transform the organisation as the environment evolves. A firm with strong dynamic capabilities scans the environment continuously, experiments rapidly, and reconfigures assets without becoming paralysed by legacy structures. The contrast with ordinary capabilities — the ability to do existing things efficiently — is crucial: firms that only have ordinary capabilities are optimised for stability in a changing world.' },
    { title: 'Platform Ecosystems as Innovation Accelerators', body: 'Platforms — two-sided or multi-sided markets that connect producers and consumers — are extraordinary innovation accelerators because they externalise innovation to the ecosystem. Apple\'s App Store platform means that Apple benefits from the innovations of 34 million registered developers who bear the development risk. Amazon\'s marketplace means Amazon benefits from the product innovations of 2 million third-party sellers. Platform orchestrators can grow their innovation output by orders of magnitude beyond what internal R&D could produce, while shifting risk to ecosystem participants. Understanding platform dynamics is essential to both building and competing against platforms.' },
  ],
  caseStudy: {
    company: 'Tesla — Driving the EV Ecosystem',
    title: 'How One Company Moved a Whole Industry by Addressing Non-Technology Barriers',
    body: `Electric vehicles had existed since the 1880s. The technology was not the barrier in 2008 when Tesla launched — battery energy density, charging speed, and range were genuine technical limitations, but the deeper barriers were economic (high cost), infrastructure (no charging network), and behavioural (range anxiety). Tesla\'s innovation was not purely technical; it was a multi-driver strategy: attack each barrier simultaneously.<br><br>
Tesla built the Supercharger network (infrastructure), positioned EVs as premium desirable objects rather than compromise vehicles (cultural shift), released patents openly to accelerate the charging standard (ecosystem play), and vertically integrated battery manufacturing to drive down costs. By 2023, EV adoption crossed 10% globally — the typical inflection point that precedes rapid mainstream adoption. Tesla didn\'t just build a car; it moved a technology S-curve and reshaped regulatory, cultural, and infrastructure conditions simultaneously.`,
    result: 'Tesla\'s market cap peaked at $1.2 trillion — more than Toyota, Volkswagen, Stellantis, and Ford combined — before competitors could respond at scale. The entire auto industry has since committed $526 billion to EV investment by 2030.',
    discussion: [
      'Tesla identified that the EV S-curve was at its inflection point in 2008. What signals suggested this? What signals did incumbents miss?',
      'Tesla released its patents to accelerate the ecosystem. Why would a company share its technology with competitors? What did they gain?',
      'Identify one S-curve in your industry that you believe is approaching its inflection point. What would a "Tesla-style" multi-driver innovation strategy look like?',
    ]
  },
  exercise: {
    title: 'Innovation Driver Mapping',
    intro: 'Build a comprehensive map of the innovation drivers in your industry for strategic planning.',
    steps: [
      'Create a driver map with five columns: Technology, Regulatory, Demographic, Cultural, and Economic. In each column, list 3 forces that will drive change in your industry in the next 5 years.',
      'For each of your 15 drivers, assess: Direction (does it open new opportunities or close existing ones?), Magnitude (1–5: how significant is the change?), and Certainty (1–5: how confident are you this will materialise?).',
      'Identify the three drivers with the highest Magnitude × Certainty score. These are the forces your innovation strategy must address first.',
      'For each of your top 3 drivers, generate two innovation responses: one defensive (how do you protect your current business?) and one offensive (how do you build a new business on this driver?).',
    ]
  },
  quiz: [
    { q: 'A technology S-curve\'s "inflection point" refers to:', opts: ['The moment when a technology is invented','The steep phase where performance improves rapidly relative to investment','The plateau where performance approaches physical limits','The point where a technology becomes obsolete'], ans: 1 },
    { q: 'Post-It Notes were an example of which innovation dynamic?', opts: ['Pure market pull — 3M conducted customer research revealing the need','Pure technology push — a failed adhesive created a product no one initially asked for but found useful','Platform ecosystem innovation','Regulatory-driven innovation'], ans: 1 },
    { q: 'David Teece\'s "dynamic capabilities" concept emphasises that sustained competitive advantage comes from:', opts: ['Owning unique physical assets and technology patents','The ability to sense opportunities, seize them, and transform the organisation as the environment changes','Having the lowest cost structure in the industry','Building proprietary data assets'], ans: 1 },
    { q: 'Apple\'s App Store is an example of platform innovation because:', opts: ['It sells apps to consumers at a markup','Third-party developers bear innovation risk while Apple captures value from the ecosystem','Apple builds all apps internally before releasing them','The App Store is open source'], ans: 1 },
    { q: 'Tesla\'s most important innovation in launching the EV market was:', opts: ['Inventing the lithium-ion battery','A purely technical breakthrough in motor efficiency','A multi-driver strategy addressing infrastructure, culture, cost, and regulatory barriers simultaneously','Receiving government subsidies that competitors did not'], ans: 3 },
  ]
},

// MODULE 10 — 4IR Ethics and Governance (PAID)
{
  id: 10, free: false, cat: 'innovation',
  icon: '⚖️', duration: '3.5 hrs', lessons: 7,
  title: '4IR Technology: Ethics and Governance',
  tagline: 'Grapple with the ethics and governance considerations prompted by Fourth Industrial Revolution technologies.',
  overview: `<p>The Fourth Industrial Revolution (4IR) — characterised by the fusion of digital, physical, and biological systems — presents ethical challenges that previous industrial revolutions did not. Steam power and electrification changed how physical work was done. The 4IR changes what it means to be human: who makes decisions about you, what is known about your body and mind, and where the boundary between human and machine lies.</p><br>
<p>CRISPR gene editing can eliminate hereditary diseases — or engineer designer babies. Brain-computer interfaces can restore function to paralysed patients — or enable mass cognitive surveillance. Autonomous weapons can save soldiers\' lives — or lower the threshold for starting wars. These are not science fiction scenarios; they are decisions being made now in laboratories, boardrooms, and legislatures worldwide.</p><br>
<p>This module gives you the philosophical and practical frameworks to engage with these questions. You are not expected to resolve them — humanity hasn\'t. But business leaders who engage thoughtfully with the ethics of 4IR technologies build more trustworthy products, make better long-term decisions, and contribute to governance frameworks that benefit society.</p>`,
  objectives: [
    'Define the Fourth Industrial Revolution and explain how it differs from previous technological transitions.',
    'Apply three ethical frameworks (utilitarian, deontological, virtue ethics) to a real 4IR technology dilemma.',
    'Compare AI governance approaches across the EU, US, and China and identify their key trade-offs.',
    'Assess the ethical risks in a proposed technology deployment in your own context.',
    'Contribute meaningfully to a governance framework for a high-stakes 4IR technology decision.',
  ],
  concepts: [
    { title: 'What Distinguishes the Fourth Industrial Revolution', body: 'Klaus Schwab coined "4IR" to describe the current era\'s distinct character: technologies that do not merely augment human capabilities but integrate with biological and social systems in ways that blur traditional boundaries. Three convergences define it: digital-physical (IoT, robotics, autonomous systems — digital intelligence acting in the physical world), digital-biological (genomics, synthetic biology, brain-computer interfaces — digital tools reshaping life itself), and physical-biological (bionic enhancements, lab-grown meat, exoskeletons — physical technology integrated with biology). The combination creates capabilities — and risks — qualitatively different from any previous technological era.' },
    { title: 'Ethical Frameworks for Technology Decisions', body: 'Three philosophical traditions offer distinct lenses. Utilitarianism evaluates actions by their consequences: does this technology produce the greatest good for the greatest number? Powerful but struggles with distribution — whose good counts, and how do you weigh harms to a minority against benefits to a majority? Deontology evaluates actions by whether they respect fundamental rights and duties: some actions are wrong regardless of outcomes — a surveillance system that produces better public safety outcomes might still violate an inherent right to privacy. Virtue ethics asks what a person of good character would do: not just "is this legal?" but "is this the kind of company we want to be?" All three are necessary; none is sufficient alone.' },
    { title: 'Responsible AI: Principles into Practice', body: 'The major AI governance frameworks — EU AI Act, OECD AI Principles, IEEE Ethically Aligned Design, Google\'s AI Principles — converge on a common set of values: Fairness (avoid discrimination), Explainability (decisions should be understandable), Accountability (clear responsibility for outcomes), Privacy (data minimisation and consent), and Safety (robust testing before deployment). The gap between principles and practice is wide: most organisations have adopted principles documents without the governance mechanisms to implement them. The practical questions are: Who has authority to veto a product launch on ethical grounds? How are ethical reviews conducted? Who is accountable when something goes wrong?' },
    { title: 'Facial Recognition: A Governance Case Study', body: 'Facial recognition technology illustrates the governance challenge concretely. The same technology enables: unlocking your phone (benign, consensual), finding missing children in crowded spaces (potentially lifesaving), identifying shoplifters (contested — high error rates for dark-skinned faces), tracking citizens at protests (clearly authoritarian). The technology is identical; the governance choices determine the ethical outcome. The EU AI Act bans real-time biometric surveillance in public spaces by governments (with narrow exceptions). China mandates it. The US has no federal standard. San Francisco banned government use entirely. There is no consensus — which means every organisation deploying the technology is making a governance choice, explicitly or by default.' },
    { title: 'Governance Models for Emerging Technology', body: 'Four governance approaches exist on a spectrum. Self-regulation: industry sets its own standards (historically weak — the social media experience shows that self-regulation under commercial pressure tends to the lowest common denominator). Co-regulation: government sets principles, industry fills in details (the EU AI Act model). Command-and-control: government specifies detailed rules (appropriate for highest-risk applications, but can stifle innovation). Liability-based: government creates clear legal liability for harm rather than prescribing behaviour (encourages caution without specifying how). Effective 4IR governance likely requires all four in different combinations for different risk levels.' },
  ],
  caseStudy: {
    company: 'Clearview AI — The Limits of Facial Recognition Governance',
    title: 'When Technology Outpaced Every Governance Framework',
    body: `Clearview AI scraped 30 billion facial images from public websites and social media without consent, building the world\'s largest facial recognition database. It then sold access to law enforcement agencies in the US, Canada, Australia, and elsewhere — enabling officers to identify anyone photographed in public, even if they had no criminal record.<br><br>
The technology is extraordinary: it has reportedly identified suspects in murder cases and child exploitation investigations. It has also been used to identify protesters, immigration enforcement targets, and individuals who have done nothing wrong. It operates in a complete legal grey zone in the US. The EU fined Clearview in France, Italy, and Greece — up to $100M — and banned its database under GDPR. Canada declared it illegal. The Australian Privacy Commissioner ordered all data on Australian citizens deleted. The same technology is simultaneously a law enforcement tool and a mass surveillance system — governance determines which.`,
    result: 'Clearview has processed over 1 million searches by US law enforcement alone, aided in criminal investigations, and been banned or fined in six countries — all with the same database and technology.',
    discussion: [
      'Clearview\'s data was "publicly available" — scraped from social media profiles people had made public. Does public availability equal ethical permission to use? Where would you draw the line?',
      'Apply all three ethical frameworks: Is Clearview ethical under utilitarianism (crime-solving benefits vs. privacy harms)? Deontology (right to privacy regardless of consequences)? Virtue ethics (what kind of company does this)?',
      'If your organisation were approached by a law enforcement agency to license a similarly powerful identification tool, what governance process would you follow before deciding?',
    ]
  },
  exercise: {
    title: 'Technology Ethics Impact Assessment',
    intro: 'Apply the three-framework ethics analysis to a real technology decision in your context.',
    steps: [
      'Select one technology your organisation uses or is considering that has significant ethical dimensions — an AI decision system, a surveillance tool, a data collection practice, a biological application.',
      'Apply Utilitarian analysis: List the benefits (to whom, how large, how certain?) and the harms (to whom, how large, how probable?). Does the aggregate benefit outweigh aggregate harm? Who bears the harm — is it the same people who receive the benefit?',
      'Apply Deontological analysis: Does this technology respect the fundamental rights of all people it affects — to privacy, to equal treatment, to contest decisions about them, to informed consent? Are there any "bright lines" this crosses regardless of consequences?',
      'Apply Virtue ethics: Would the founders of your organisation be proud of this decision? Would you be comfortable if every employee, customer, and regulator could see exactly how and why you use this technology?',
      'Synthesise: Based on all three lenses, what governance requirements should accompany this technology? Who should have authority to approve or veto its use? What would trigger a review?',
    ]
  },
  quiz: [
    { q: 'The Fourth Industrial Revolution is characterised by:', opts: ['Steam power and mechanised manufacturing','Electricity and mass production','Computers and the internet','The fusion of digital, physical, and biological systems'], ans: 3 },
    { q: 'A deontological ethical framework evaluates technology decisions by:', opts: ['Calculating total benefits minus total harms across all stakeholders','Whether the technology respects fundamental rights and duties, regardless of outcomes','Whether the decision reflects the character of a virtuous person','The long-term social welfare consequences over multiple generations'], ans: 1 },
    { q: 'The EU AI Act classifies real-time biometric surveillance of citizens in public spaces as:', opts: ['Minimal risk — no regulation required','Limited risk — transparency disclosures only','High risk — requiring human oversight','Prohibited — banned with narrow exceptions'], ans: 3 },
    { q: 'Clearview AI\'s facial recognition database was built primarily by:', opts: ['Voluntary data contribution from partnering organisations','Government-provided law enforcement databases','Scraping 30 billion facial images from public websites without consent','Licensed photos from professional photography agencies'], ans: 2 },
    { q: 'Which governance model requires industry to fill in detailed rules within government-set principles?', opts: ['Self-regulation','Co-regulation','Command-and-control','Liability-based governance'], ans: 1 },
  ]
},

// MODULE 11 — Corporate Innovation Strategies and Platforms (PAID)
{
  id: 11, free: false, cat: 'innovation',
  icon: '🏢', duration: '3.5 hrs', lessons: 7,
  title: 'Corporate Innovation Strategies and Platforms',
  tagline: 'Understand how corporate platforms organise market competition and shape the nature of innovation.',
  overview: `<p>We are living in the age of the platform. Amazon, Apple, Google, Meta, Microsoft, Alibaba, Tencent — the most valuable companies in history are platform businesses. They do not primarily make things; they orchestrate ecosystems of producers and consumers, taking a share of the value created by interactions they enable but do not directly produce.</p><br>
<p>Understanding platforms is not optional for any business leader. If you compete in a market where a platform exists, the platform is both a potential distribution channel and an existential threat. If you have assets — data, customer relationships, proprietary infrastructure — that could form the basis of a platform, you face strategic choices about whether and how to build one.</p><br>
<p>This module also examines how large corporations beyond the tech giants structure their innovation portfolios, make build-buy-partner decisions at the portfolio level, and manage the governance and metrics of innovation investment. You will leave with a framework for assessing any company\'s innovation strategy — including your own.</p>`,
  objectives: [
    'Explain the economics of platforms — network effects, multi-sidedness, and winner-take-all dynamics.',
    'Assess the competitive implications of a platform player entering your market.',
    'Evaluate whether your organisation has the assets to build a platform and what the strategic requirements are.',
    'Apply the corporate innovation portfolio framework to evaluate and design an innovation investment mix.',
    'Design metrics for innovation that balance short-term accountability with long-term optionality.',
  ],
  concepts: [
    { title: 'Platform Economics: Network Effects and Winner-Take-All', body: 'A platform\'s value grows with the number of participants on each side — this is a network effect. Uber becomes more valuable to riders as more drivers join (shorter wait times), and more valuable to drivers as more riders join (less idle time). The crucial implication: platforms benefit from winner-take-all or winner-take-most dynamics. Once a platform achieves critical mass on both sides, the leading platform is nearly impossible to displace — switching costs are high, and the value gap versus smaller competitors grows with scale. This explains why platform competition tends to produce monopolies or duopolies, and why first-mover advantage is so valuable in platform markets.' },
    { title: 'Multi-Sided Markets and Value Creation', body: 'Traditional "pipeline" businesses create value by moving a product or service through a linear value chain: design → manufacture → distribute → sell. Platform businesses create value by facilitating interactions between two or more distinct user groups — without controlling the inventory, the sellers, or the production. Airbnb doesn\'t own hotels. Uber doesn\'t own cars. Apple\'s App Store doesn\'t write apps. The platform\'s job is to attract both sides (the "cold start problem"), set governance rules, and extract a share of the value created by interactions. Platform businesses can scale at near-zero marginal cost — which is why they generate extraordinary returns on capital.' },
    { title: 'Corporate Venturing and M&A as Innovation Strategy', body: 'Large corporations have three inorganic options for accessing innovation: Corporate Venture Capital (CVC) — investing minority stakes in startups for strategic intelligence and option value; Strategic Partnerships — co-development, licensing, or distribution agreements that bring external capability inside; and Acquisitions — buying companies to internalise their technology, talent, and customer relationships. Each has different risk-return profiles. CVC gives optionality at low commitment but rarely builds internal capability. Acquisitions bring capability but integration risk is high and "acqui-hires" — buying a company for its team — have mixed track records. The most effective corporate innovators use all three strategically, matching the vehicle to the purpose.' },
    { title: 'Innovation Portfolio Governance', body: 'How do you decide how much to invest in Horizon 1 vs. Horizon 2 vs. Horizon 3? And how do you hold innovation teams accountable without killing the exploration mindset with premature financial discipline? Leading practice uses stage-gate processes that apply different governance logic to different horizons: H1 investments are managed like operations — budgets, milestones, financial accountability. H2 investments are managed like venture investments — teams receive funding to achieve learning milestones (not revenue milestones), and face periodic portfolio reviews to continue or kill. H3 investments are managed like an option portfolio — small bets with defined review triggers and clear criteria for additional investment.' },
    { title: 'Innovation Metrics That Do Not Kill Innovation', body: 'Standard financial metrics — NPV, IRR, payback period — are deeply hostile to innovation. An honest NPV calculation for a true innovation will be negative or zero, because the future cash flows are deeply uncertain and the development cost is front-loaded. Innovation metrics must match the horizon. For H1: revenue from improved products/services, cost reduction from process improvements. For H2: customer validation metrics (conversion rates, retention, NPS), strategic milestones, learning rate. For H3: number of experiments run, optionality value, strategic positioning indicators. The cardinal sin: applying H1 metrics to H3 projects and defunding them for "underperformance."' },
  ],
  caseStudy: {
    company: 'Amazon — The Platform Flywheel',
    title: 'How Jeff Bezos Designed a Self-Reinforcing Innovation Engine',
    body: `Amazon\'s "flywheel" — sketched by Bezos on a napkin in 2001 — is perhaps the most elegant strategic design of the digital era. The logic: lower prices attract more customers → more customers attract more third-party sellers → more sellers create selection and competition → lower prices → more customers. The flywheel accelerates itself. AWS — Amazon\'s cloud computing business — emerged from internal infrastructure built to support this flywheel and became a $90B/year business, serendipitously enabling thousands of Amazon\'s own competitors to scale on Amazon\'s infrastructure.<br><br>
Amazon\'s innovation structure is equally distinctive: the "two-pizza rule" (teams small enough to be fed by two pizzas), "working backwards" from a press release written before the product is built (forcing clarity of customer value), and the "six-page memo" instead of PowerPoint presentations (forcing rigorous thinking rather than bullet-point approximation). Innovation at Amazon is not a department; it is a management operating system.`,
    result: 'Amazon\'s flywheel produced a company that simultaneously dominates e-commerce (38% US market share), cloud computing (31% global cloud share), digital advertising (7% global digital ad market), and logistics — an unprecedented multi-industry dominance from a single strategic logic.',
    discussion: [
      'AWS now earns 60%+ of Amazon\'s operating profit, yet it was a by-product of internal infrastructure. What does this tell you about the value of operational excellence as a source of new platform opportunities?',
      'The flywheel creates a barrier that is nearly impossible to replicate. What\'s the equivalent flywheel logic in your industry? What would a self-reinforcing system look like?',
      'Amazon uses metrics (two-pizza rule, working backwards) as cultural engineering tools. What metric or process in your organisation could you redesign to engineer a different behaviour?',
    ]
  },
  exercise: {
    title: 'Platform Strategy Assessment',
    intro: 'Evaluate your organisation\'s exposure to platform dynamics and assess your strategic options.',
    steps: [
      'Identify every platform that currently operates in your market or adjacent markets — either as a distribution channel your customers use or as a competitive threat. List the platforms and their current role.',
      'For each platform, assess your vulnerability: Does your business depend on this platform for distribution? Could it disintermediate you (go direct to your customers)? Could it replicate your offering? Score each 1–5 on dependence and threat.',
      'Platform opportunity scan: Does your organisation have any of these assets? (a) A large network of users with repeat interactions, (b) Data that becomes more valuable at scale, (c) Infrastructure other players in your ecosystem need, (d) Transaction relationships that currently go through intermediaries. If yes to any, map a potential platform play.',
      'Write a one-page "Platform Strategy Brief": Current exposure (which platforms threaten you and how?) → Defensive response (how do you reduce dependence?) → Offensive opportunity (do you have the assets for a platform play? What would it require?).',
    ]
  },
  quiz: [
    { q: 'A network effect in a platform business refers to:', opts: ['The ability to build networks of corporate partnerships','The phenomenon where the platform\'s value increases as more participants join','The technical infrastructure (internet, broadband) that enables the platform','The marketing network used to acquire new users'], ans: 1 },
    { q: 'The "cold start problem" in platform businesses refers to:', opts: ['Technical difficulty launching in cold climates','The challenge of attracting initial participants to each side of a two-sided market before network effects kick in','Managing the governance of a platform during rapid growth','The high upfront cost of platform infrastructure'], ans: 1 },
    { q: 'Amazon Web Services (AWS) is best described as an example of:', opts: ['A deliberate diversification into cloud computing as part of Amazon\'s 10-year strategy','Internal infrastructure built for Amazon\'s e-commerce platform that became an external product','An acquisition that gave Amazon cloud capability','A joint venture with Microsoft'], ans: 1 },
    { q: 'Applying NPV and payback period metrics to Horizon 3 innovation projects is problematic because:', opts: ['These metrics are too complex for innovation teams to calculate','The future cash flows are deeply uncertain, making NPV negative or zero even for valuable investments','Finance teams don\'t understand innovation','These metrics are only appropriate for manufacturing, not services'], ans: 1 },
    { q: 'Amazon\'s "two-pizza rule" is a tool for engineering which organisational behaviour?', opts: ['Cost control in catering for company meetings','Keeping teams small enough to maintain speed, autonomy, and accountability','Standardising team sizes across the organisation','Reducing meeting frequency'], ans: 1 },
  ]
},

// MODULE 12 — Innovation in Practice (PAID)
{
  id: 12, free: false, cat: 'innovation',
  icon: '🎯', duration: '4 hrs', lessons: 8,
  title: 'Innovation in Practice',
  tagline: 'Develop skills in leading for innovation and build your personal innovation playbook.',
  overview: `<p>Theory becomes leadership capacity only when it is tested in practice. This module synthesises everything from the preceding innovation modules and translates it into actionable leadership tools. What does it actually look like to lead an innovation initiative? How do you run an experiment? How do you kill a project gracefully? How do you maintain team motivation through repeated failure? How do you build the organisational case for continued investment when results are uncertain?</p><br>
<p>You will work through the full innovation lifecycle — from opportunity identification through experimentation, validation, scaling, and eventually sunsetting — with frameworks drawn from design thinking, lean startup, and agile methodology. You will also examine the future of innovation: how AI is changing the innovation process itself, how open innovation and ecosystem collaboration are reshaping the boundaries of the firm, and what the next wave of innovation leadership requires.</p><br>
<p>The module concludes with a personal innovation playbook that integrates your learning into a set of commitments, tools, and practices you will actually use.</p>`,
  objectives: [
    'Apply design thinking principles to reframe a problem and generate novel solution options.',
    'Design a minimum viable product (MVP) experiment with clear learning objectives and success criteria.',
    'Lead an innovation team through failure, learning, and pivoting without losing momentum.',
    'Build the internal business case for continuing or scaling an uncertain innovation investment.',
    'Articulate your personal innovation leadership philosophy and three concrete commitments.',
  ],
  concepts: [
    { title: 'Design Thinking: Starting with the Human', body: 'Design thinking — popularised by IDEO and the Stanford d.school — is a human-centred innovation process that starts with deep understanding of the people you are designing for, not the technology you have available. The five-stage process: Empathise (observe and interview to understand needs, not just stated preferences), Define (reframe the problem — the best innovations often solve a different problem than the one initially defined), Ideate (generate many ideas before committing to one — quantity before quality), Prototype (build cheap, fast representations to test assumptions), Test (with real users, expecting to learn rather than validate). The non-linear reality: great design thinkers cycle rapidly between stages rather than following them sequentially.' },
    { title: 'Lean Startup: Validated Learning at Speed', body: 'Eric Ries\' Lean Startup methodology is the most widely adopted framework for disciplined experimentation. Its core concept: before building anything, identify your riskiest assumption — the assumption that, if wrong, would invalidate your entire business model. Then build the minimum viable product (MVP) needed to test that assumption, measure the result, and learn. The build-measure-learn loop, run rapidly, is the fastest path to validated learning. The critical discipline: an MVP is not a "version 1" product. It is the smallest experiment that could test your riskiest assumption — which might be a landing page, a concierge service, or a wizard-of-Oz demo, not a built product at all.' },
    { title: 'Leading Through Failure and the Pivot', body: 'Innovation involves failure — not as an exception, but as the primary mechanism of learning. The leader\'s job is not to prevent failure but to create conditions where failure is fast, cheap, and informative rather than slow, expensive, and hidden. The pivot — a structured course correction based on what experiments revealed — is the innovation leader\'s most important tactical tool. A pivot is not giving up; it is the application of learning. YouTube pivoted from a video dating site. Slack pivoted from a game. Twitter pivoted from a podcasting platform. The difference between a successful pivot and a chaotic change of direction is the quality of the learning that motivated it and the clarity of the new hypothesis.' },
    { title: 'Scaling Innovation: The Hardest Part', body: 'Most organisations can run pilots. The graveyard of corporate innovation is full of successful pilots that never scaled. The scaling gap has five common causes: Lack of executive sponsorship (the champion who approved the pilot left or moved on), Operational incompatibility (the innovation requires process changes that operations resists), Regulatory barriers not anticipated at pilot scale, Technology that works at pilot scale but breaks under load, and Economic unit economics that are positive at small scale but negative at large scale. Explicitly stress-testing each of these before declaring a pilot a success and committing to scale saves enormous waste.' },
    { title: 'The Future of Innovation Leadership', body: 'Three forces are reshaping what innovation leadership requires. AI-augmented innovation: AI is becoming a collaborator in the ideation, experimentation, and synthesis stages — leaders who know how to work with AI tools will have disproportionate creative output. Open innovation: the closed, internal R&D model is giving way to ecosystems of universities, startups, customers, and even competitors collaborating on shared challenges — leading open innovation requires a fundamentally different management style. Sustainability as driver: the transition to a low-carbon, circular economy is the largest innovation opportunity in human history — leaders who can navigate the intersection of sustainability and business model innovation are the most valuable innovators of the next decade.' },
  ],
  caseStudy: {
    company: 'IDEO — Human-Centred Design in Practice',
    title: 'How the World\'s Most Influential Design Firm Reinvented the Hospital Patient Experience',
    body: `When Kaiser Permanente, the US healthcare giant, wanted to improve the patient experience in its hospitals, it hired IDEO — not a hospital management consultancy, not a technology firm. IDEO\'s team spent weeks embedded in Kaiser hospitals: shadowing nurses for full shifts, interviewing patients in recovery, observing handoff processes between shifts. The ethnographic research revealed something no survey had: the most stressful moment for patients was the nurse shift change — when a nurse they trusted left and a stranger arrived, with no visible information transfer.<br><br>
The IDEO team designed an entirely new shift-change process: nurses conducted handoffs at the patient\'s bedside rather than at the nursing station, explicitly including patients in the conversation, reviewing the care plan together. The patient went from observer of a transition to participant in their own care. Patient satisfaction scores improved dramatically. The insight came not from data analysis or management theory — it came from watching people.`,
    result: 'Kaiser\'s new nurse handoff process, spread across its 39 hospitals, delivered measurable improvements in patient satisfaction scores and a reduction in medical errors — demonstrating that design thinking applied to service processes creates measurable business outcomes.',
    discussion: [
      'IDEO\'s most important insight came from direct observation, not data analysis. When was the last time you or your team directly observed — not surveyed — the people you are designing for?',
      'The "pivot" in this case was redesigning the process rather than adding technology. What assumptions were challenged by the fieldwork that would not have been visible in hospital management data?',
      'How would you apply the five stages of design thinking to a service or process problem in your own organisation?',
    ]
  },
  exercise: {
    title: 'Build Your Personal Innovation Playbook',
    intro: 'Synthesise your innovation learning into a personal leadership toolkit that you will actually use.',
    steps: [
      'Innovation Leader Self-Assessment: Rate yourself 1–5 on: Comfort with ambiguity, Ability to maintain team motivation through failure, Skill at killing projects that aren\'t working, Effectiveness at building internal cases for uncertain investments, Personal experimentation habits (how often do you run small experiments in your own work?). Total score out of 25.',
      'Design one MVP experiment for a real challenge in your current role. Define: The riskiest assumption, the minimum experiment to test it, how you will measure success, and what you will do if the result is positive vs. negative. Commit to running it within 30 days.',
      'Write your Innovation Leadership Philosophy (max 200 words): What do you believe about how innovation happens? What is your role as a leader in creating the conditions for it? What are you willing to protect and what are you willing to sacrifice?',
      'Three Innovation Commitments: Identify three specific, observable behaviours you commit to changing or starting based on this programme. Make them specific (not "be more innovative" but "run one experiment per month, share the result — positive or negative — in my team meeting").',
    ]
  },
  quiz: [
    { q: 'In design thinking, the "Define" stage involves:', opts: ['Generating as many solution ideas as possible','Reframing the problem based on empathy research — often arriving at a different problem than was initially stated','Building the first prototype to test with users','Setting project timelines and resources'], ans: 1 },
    { q: 'In Lean Startup, a "Minimum Viable Product" (MVP) is:', opts: ['A basic version 1.0 product with core features only','The smallest experiment that tests the riskiest assumption in your business model','A product launched to the minimum viable customer segment','A low-cost prototype that will later be replaced by the real product'], ans: 1 },
    { q: 'A "pivot" in innovation practice is best described as:', opts: ['Abandoning an innovation project due to failure','A structured course correction based on what experiments revealed, with a new hypothesis','Changing the team structure mid-project','Reducing the scope of a project to meet budget constraints'], ans: 1 },
    { q: 'IDEO\'s most important insight in the Kaiser hospital case came from:', opts: ['Analysis of patient satisfaction survey data','Benchmarking competitor hospital processes','Direct ethnographic observation — shadowing nurses and interviewing patients','Technology assessment of existing hospital systems'], ans: 2 },
    { q: 'The "scaling gap" in corporate innovation most often results from:', opts: ['Technology that cannot handle large volumes','Lack of market demand at scale','A combination of executive sponsorship loss, operational incompatibility, and unit economics that don\'t scale','Regulatory barriers in all markets'], ans: 2 },
  ]
}

); // end MODULES.push for modules 7–12
