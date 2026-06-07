/* ══════════════════════════════════════════════════════════════════
   AI Mastery Platform — Module Data
   Modules 1–19: full educational content
   ══════════════════════════════════════════════════════════════════ */

const MODULES = [

// ════════════════════════════════════════
// MODULE 1 — AI Ecosystem (FREE)
// ════════════════════════════════════════
{
  id: 1, free: true, cat: 'ai',
  icon: '🌐', duration: '3 hrs', lessons: 6,
  title: 'Artificial Intelligence Ecosystem',
  tagline: 'Trace the history of AI and deduce its trajectory in your organisation.',
  overview: `<p>Artificial intelligence has evolved from a niche academic discipline to the defining technology of our era. In the 1950s, Alan Turing asked whether machines could think. Seventy years later, AI systems write code, diagnose cancer, drive vehicles, and generate art. Understanding this trajectory is not optional for modern business leaders — it is existential.</p><br>
<p>This module traces AI from its symbolic roots through two "winters" of disappointment, the deep-learning revolution sparked by ImageNet in 2012, and into the generative AI explosion of the 2020s. You will learn why each breakthrough happened when it did — always at the intersection of better algorithms, more data, and cheaper compute.</p><br>
<p>By the end, you will be able to place any AI initiative in historical context, predict where the technology is likely to go next, and make informed decisions about where AI can create — or destroy — value in your own organisation.</p>`,
  objectives: [
    'Trace the major milestones in AI history from 1950 to the present day.',
    'Distinguish between narrow AI, general AI, and the myths surrounding artificial general intelligence.',
    'Explain the three enabling factors — algorithms, data, and compute — behind each AI breakthrough.',
    'Analyse a real-world organisation and identify where AI is creating or threatening value.',
    'Develop a framework for assessing AI readiness in any industry context.',
  ],
  concepts: [
    { title: 'Narrow AI vs. General AI', body: 'Every AI system in production today is "narrow" — it performs one specific task exceptionally well but cannot transfer that skill to another domain. GPT can write essays but cannot drive a car. AlphaFold predicts protein structures but cannot recommend a movie. AGI — artificial general intelligence that matches human cognitive flexibility — remains theoretical. Understanding this distinction prevents both hype and dismissiveness when evaluating AI investments.' },
    { title: 'AI Winters and Why They Ended', body: 'The field experienced two major winters (1974–1980, 1987–1993) when funding dried up and optimism collapsed. Each followed a pattern: overpromised capabilities, underdelivered results, disappointed sponsors. What ended each winter was not a single eureka moment but the slow accumulation of better hardware, more labelled data, and architectural innovations. The third wave — deep learning — succeeded because all three converged simultaneously around 2012.' },
    { title: 'The Data Paradigm Shift', body: 'Classical AI relied on hand-crafted rules encoded by human experts. The machine learning shift replaced rules with patterns extracted automatically from data. The critical insight: with enough high-quality labelled data, a model can discover rules that no human would think to write. This makes data — not algorithms — the primary competitive moat in most AI applications. Companies that control proprietary data gain durable advantage.' },
    { title: 'Computing Power as Enabler', body: 'The 2012 ImageNet breakthrough was only possible because NVIDIA GPUs — designed for gaming — happened to be perfectly suited for the matrix multiplication at the heart of neural networks. Since then, specialised AI chips (TPUs, Neural Processing Units) have followed Moore\'s Law on steroids. Cloud computing democratised access: a startup can now rent supercomputer-class GPUs by the hour, collapsing barriers to entry that once protected incumbents.' },
    { title: 'AI in the Value Chain', body: 'AI creates value in three ways: automating repetitive cognitive tasks (cost reduction), enhancing human decisions with better predictions (quality improvement), and enabling entirely new products or services (revenue expansion). It destroys value by displacing human labour and by enabling competitors to scale faster. Mapping your value chain and honestly assessing AI\'s role in each step is the starting point for any AI strategy.' },
  ],
  caseStudy: {
    company: 'Netflix — Personalization at Scale',
    title: 'How a DVD Rental Company Built a $1B/Year AI Engine',
    body: `Netflix launched its recommendation engine in 2000, initially as a simple rule-based system. As streaming scaled to hundreds of millions of users, the company invested heavily in machine learning models that analyse viewing history, time of day, device type, and even how long users pause before pressing play. The algorithm now surfaces personalised thumbnails — yes, the cover art you see is chosen by AI specifically for you based on your taste profile.<br><br>
The business impact is staggering: Netflix estimates that its recommendation system, combined with personalised search, is worth approximately $1 billion per year in retained subscriptions — users who would have cancelled because they couldn\'t find something to watch are kept engaged by the engine surfacing the right content at the right moment.`,
    result: 'Netflix saves ~$1B/year in churn prevention through AI-driven personalisation — demonstrating that AI\'s highest value is often not cost-cutting but revenue retention.',
    discussion: [
      'What data does Netflix collect that smaller companies cannot easily replicate? Is this moat permanent?',
      'If you were a traditional broadcaster (e.g. BBC, NBC), how would you respond to this AI advantage?',
      'Where in your own organisation could a recommendation-style AI create similar retention value?',
    ]
  },
  exercise: {
    title: 'Industry AI Trajectory Map',
    intro: 'Map the AI disruption potential in your industry using the framework below. This exercise produces a one-page asset you can use in leadership conversations.',
    steps: [
      'Identify your top 5 competitors and list one AI initiative each has publicly announced in the last 12 months.',
      'Draw a 2×2 matrix: X-axis = Data Availability (low → high), Y-axis = Process Repeatability (low → high). Plot 10 key activities from your value chain.',
      'For each activity in the top-right quadrant (high data, high repeatability), estimate: What % of the task could AI handle within 3 years?',
      'Write a 3-sentence "AI trajectory statement" for your organisation: where you are today, the biggest AI risk you face, and one AI opportunity worth pursuing.',
    ]
  },
  quiz: [
    { q: 'What primarily ended the second AI Winter and sparked the modern deep learning era?', opts: ['Better rule-based algorithms','Government defence funding','The convergence of big data, cheaper GPUs, and improved neural architectures','Academic publications on symbolic AI'], ans: 2 },
    { q: '"Narrow AI" is best described as:', opts: ['AI less intelligent than humans in all domains','AI designed and optimised for a specific task only','AI that processes small datasets','Early-generation AI from the 1980s'], ans: 1 },
    { q: 'Which event is widely credited as the breakthrough moment for deep learning in image recognition?', opts: ['IBM Deep Blue beating Kasparov','Google\'s AlphaGo defeating a Go champion','The 2012 ImageNet competition, where AlexNet dramatically outperformed all rivals','The release of GPT-1 in 2018'], ans: 2 },
    { q: 'According to the module, what is the PRIMARY competitive moat in most modern AI applications?', opts: ['Proprietary algorithms','Access to data','Number of PhDs on staff','Cloud computing contracts'], ans: 1 },
    { q: 'Netflix estimates its recommendation engine saves approximately how much per year in churn prevention?', opts: ['$100 million','$250 million','$1 billion','$5 billion'], ans: 2 },
  ]
},

// ════════════════════════════════════════
// MODULE 2 — ML Black Box (FREE)
// ════════════════════════════════════════
{
  id: 2, free: true, cat: 'ai',
  icon: '🧠', duration: '3.5 hrs', lessons: 7,
  title: 'AI and Machine Learning: Understanding the Black Box',
  tagline: 'Delve into the three types of machine learning and why the black box matters.',
  overview: `<p>Machine learning is frequently described as a "black box" — you feed in data, algorithms learn patterns, and predictions emerge, without humans explicitly writing the rules. This opacity makes many business leaders nervous, and rightly so. Decisions made by black-box models carry real consequences: denied loans, missed cancer diagnoses, skewed hiring.</p><br>
<p>This module opens the box. You will learn the three foundational paradigms of machine learning: supervised learning (learning from labelled examples), unsupervised learning (finding hidden structure), and reinforcement learning (learning through trial, error, and reward). Understanding which paradigm applies to which problem is a core skill for any AI strategy.</p><br>
<p>You will also grapple with the bias-variance tradeoff — the central tension in all ML — and develop intuition for when a "dumb" simple model outperforms a complex one, and why. By the end, you will be able to evaluate AI vendor claims with healthy scepticism and identify which type of machine learning is best suited to a given business problem.</p>`,
  objectives: [
    'Explain the three main machine learning paradigms and give a business example of each.',
    'Describe what "features" are in ML and why feature engineering matters.',
    'Articulate the bias-variance tradeoff in non-technical terms for a board-level audience.',
    'Identify when a problem is best suited to supervised, unsupervised, or reinforcement learning.',
    'Critically evaluate AI vendor claims about model accuracy and generalisation.',
  ],
  concepts: [
    { title: 'Supervised Learning: Learning from Labels', body: 'In supervised learning, a model is trained on input-output pairs — thousands or millions of examples where the "right answer" is known. Email spam filters learn from messages humans have labelled as spam or not-spam. Credit risk models learn from historical loan data with known default outcomes. The model learns to map inputs to outputs, then generalises to unseen examples. The critical dependency: you need labelled data, and labelling is expensive, slow, and sometimes impossible.' },
    { title: 'Unsupervised Learning: Finding Hidden Structure', body: 'No labels? Unsupervised learning finds patterns in raw data without being told what to look for. Clustering algorithms group customers by behaviour — the model discovers segments you didn\'t know existed. Anomaly detection flags unusual transactions without needing examples of every fraud type. Dimensionality reduction compresses 1,000 variables into 10 meaningful ones. The power is discovering structure you didn\'t know to look for; the challenge is that without ground truth, it\'s hard to know if the patterns are meaningful.' },
    { title: 'Reinforcement Learning: Learning Through Reward', body: 'Reinforcement learning trains an "agent" through a reward signal — it takes actions, receives feedback (reward or penalty), and learns to maximise cumulative reward. This is how DeepMind\'s AlphaGo learned to play Go better than any human: by playing millions of games against itself. It\'s also how recommendation algorithms learn to maximise engagement — which raises important ethical questions about what behaviour we\'re actually rewarding.' },
    { title: 'The Bias-Variance Tradeoff', body: 'Bias is error from wrong assumptions (a model too simple to capture the true pattern — "underfitting"). Variance is error from too much sensitivity to training data (a model so complex it memorises noise — "overfitting"). Every ML model lives on this spectrum. A linear model predicting house prices from square footage only is high-bias: it misses the neighbourhood effect. A model with 10,000 features may perfectly predict training prices but fail on new houses. The practical lesson: always validate on held-out data you didn\'t train on.' },
    { title: 'Feature Engineering: Teaching Machines What Matters', body: 'Raw data rarely tells a model what\'s important. Feature engineering is the human craft of transforming raw inputs into representations that make patterns learnable. A raw timestamp means little; "hour of day," "is weekend," and "days until payday" are far more predictive for retail sales. Before deep learning, feature engineering was the dominant skill in ML. Even with deep learning, domain knowledge encoded in features dramatically improves performance — and interpretability.' },
  ],
  caseStudy: {
    company: 'DeepMind — AlphaGo',
    title: 'Reinforcement Learning Conquers the Game Humans Thought Was Safe from AI',
    body: `Go — the ancient Chinese board game — has more possible positions than atoms in the observable universe. For decades it was considered the last major game safe from AI: too complex for brute-force search, too intuitive for rule-based systems. DeepMind\'s AlphaGo changed that in 2016 when it defeated Lee Sedol, one of the world\'s best players, 4–1.<br><br>
AlphaGo used a combination of supervised learning (learning from 30 million human-expert moves) and reinforcement learning (playing millions of games against itself, guided by a reward signal for winning). AlphaZero — its successor — skipped the human games entirely and learned solely through self-play, achieving superhuman performance in Go, Chess, and Shogi simultaneously. It discovered strategies that had never appeared in human play in 3,000 years of Go history.`,
    result: 'AlphaZero defeated the world\'s best specialised Go AI by 100 games to 0 — after 34 hours of self-play, having started from zero knowledge of the game.',
    discussion: [
      'AlphaGo\'s reward signal was simple: win the game. In business, what\'s your "winning" signal, and could optimising for it have unintended consequences?',
      'AlphaZero discovered novel strategies humans never found in 3,000 years. Where in your organisation might an unsupervised or RL model find patterns you\'re blind to?',
      'The "black box" concern is real here: AlphaGo cannot explain why it makes a move. When is explainability critical vs. when is performance sufficient?',
    ]
  },
  exercise: {
    title: 'ML Paradigm Classifier',
    intro: 'Practice matching real business problems to the right ML paradigm. This builds the pattern-recognition skill you need to evaluate AI proposals intelligently.',
    steps: [
      'List 10 data problems or decisions in your organisation (e.g. "predict customer churn," "segment the marketing database," "optimise delivery routes").',
      'For each problem, classify it: Supervised (you have labelled examples of the outcome), Unsupervised (you want to discover hidden structure), or Reinforcement (an agent takes sequential actions toward a goal).',
      'For your top 3 supervised learning candidates: What labels do you already have? What additional labelling would you need? Estimate cost and time.',
      'Write one-sentence "ML brief" for each: "We want to train a [supervised/unsupervised/RL] model using [data source] to [predict/discover/optimise] [outcome], improving [business metric] by an estimated [X]%."',
    ]
  },
  quiz: [
    { q: 'Which type of machine learning requires labelled training data?', opts: ['Reinforcement learning','Unsupervised learning','Supervised learning','Transfer learning'], ans: 2 },
    { q: 'A model that performs perfectly on training data but poorly on new data is suffering from:', opts: ['Bias (underfitting)','Variance (overfitting)','Data leakage','Feature collapse'], ans: 1 },
    { q: 'DeepMind\'s AlphaZero primarily used which learning paradigm?', opts: ['Supervised learning from grandmaster games','Unsupervised clustering of board positions','Reinforcement learning through self-play','Rule-based expert systems'], ans: 2 },
    { q: 'Customer segmentation — finding natural groups in purchase behaviour — is best approached with:', opts: ['Supervised learning','Reinforcement learning','Unsupervised learning','Semi-supervised learning'], ans: 2 },
    { q: 'Feature engineering refers to:', opts: ['Building the hardware that runs ML models','Transforming raw inputs into representations that help models learn patterns','Designing the reward function in RL','Labelling training data'], ans: 1 },
  ]
},

// ════════════════════════════════════════
// MODULE 3 — Deep Learning (FREE)
// ════════════════════════════════════════
{
  id: 3, free: true, cat: 'ai',
  icon: '🔬', duration: '4 hrs', lessons: 8,
  title: 'Understanding Deep Learning and Neural Networks',
  tagline: 'Understand what deep learning is and how it powers the modern approach to AI.',
  overview: `<p>Deep learning is the engine behind every modern AI breakthrough — voice assistants, self-driving cars, protein folding, large language models, image generators. It works by stacking layers of mathematical operations ("neurons") that progressively learn more abstract representations of data, from raw pixels to edges to shapes to objects to concepts.</p><br>
<p>The key insight of deep learning — that hierarchical representation learning works far better than hand-crafted features for unstructured data like images, audio, and text — was known as early as the 1980s. It only became practical when GPUs provided the compute, ImageNet provided the data, and researchers like Hinton, LeCun, and Bengio refined the training techniques.</p><br>
<p>This module demystifies neural networks without requiring mathematics. You will understand how backpropagation works conceptually, why "depth" matters, what convolutional networks see, and why the Transformer architecture — invented in 2017 — now underlies almost every state-of-the-art AI system, from GPT to AlphaFold to DALL-E.</p>`,
  objectives: [
    'Explain what a neural network is and how it learns using backpropagation.',
    'Describe why "deep" (many-layer) networks outperform shallow ones for complex unstructured data.',
    'Distinguish between CNNs, RNNs, and Transformers and identify appropriate use cases.',
    'Understand how large language models like GPT are trained and what they are actually doing.',
    'Evaluate when deep learning is the right tool vs. simpler ML approaches.',
  ],
  concepts: [
    { title: 'The Artificial Neuron: Mathematical Inspiration from Biology', body: 'A biological neuron receives signals through dendrites, processes them in the cell body, and fires an output along the axon if the combined signal exceeds a threshold. An artificial neuron does the same mathematically: it takes numerical inputs, multiplies each by a weight, sums them, adds a bias, and passes the result through an "activation function" that determines whether and how strongly the neuron fires. A single neuron is useless; networks of billions create intelligence.' },
    { title: 'Why Depth Matters: Hierarchical Representation', body: 'A single-layer network can only learn linear relationships. Add layers, and each layer learns to represent increasingly abstract features. For image recognition: Layer 1 learns edges and colour gradients. Layer 2 combines edges into shapes. Layer 3 assembles shapes into textures. Deeper layers detect eyes, faces, and finally identities. This hierarchy is why deep networks excel at unstructured data — the world\'s information naturally exists in hierarchical structure that depth can capture.' },
    { title: 'Backpropagation: How Networks Learn from Mistakes', body: 'Training a neural network is an optimisation problem: adjust millions of weights so the network\'s predictions match the training data. Backpropagation (backprop) solves this by computing how much each weight contributed to the error, then nudging each weight in the direction that reduces error — a process called gradient descent. Run this loop millions of times on millions of examples and the network gradually improves. The elegance is that this one algorithm, with enough data and compute, learns to do tasks no programmer explicitly coded.' },
    { title: 'Convolutional Neural Networks: Teaching Machines to See', body: 'CNNs are the architecture behind image recognition, video analysis, and medical imaging AI. Their core innovation: instead of connecting every neuron to every input, convolutions apply a small filter that slides across the image, detecting the same feature regardless of where it appears. This "translational invariance" massively reduces parameters and embeds useful prior knowledge (that a cat\'s ear looks the same whether it\'s in the top-left or bottom-right of the image). CNNs are why your phone\'s camera can recognise faces.' },
    { title: 'Transformers: The Architecture Behind GPT', body: 'Introduced in the 2017 paper "Attention is All You Need," the Transformer solved a key limitation of prior sequence models: the inability to relate distant parts of a sequence efficiently. Its "attention mechanism" allows every element to attend to (weigh) every other element simultaneously. This made it dramatically better at language — where a pronoun\'s meaning can depend on a noun 500 words earlier — and parallelisable on GPUs. GPT, BERT, T5, PaLM, Claude, and virtually every modern language model is a Transformer.' },
  ],
  caseStudy: {
    company: 'DeepMind — AlphaFold 2',
    title: 'Deep Learning Solves Biology\'s 50-Year Grand Challenge',
    body: `The "protein folding problem" — predicting a protein\'s 3D structure from its amino acid sequence — had stumped scientists for 50 years. Structure determines function; knowing a protein\'s shape accelerates drug discovery, vaccine development, and disease research. Traditional methods (X-ray crystallography, cryo-electron microscopy) take months per protein and cost millions of dollars.<br><br>
In 2020, DeepMind\'s AlphaFold 2 — built on the Transformer architecture with evolutionary sequence data — achieved accuracy comparable to experimental methods in a fraction of the time and at near-zero marginal cost. By 2022, DeepMind released predicted structures for over 200 million proteins — virtually the entire known protein universe. The computational biology field that had taken 50 years of effort was transformed in months.`,
    result: 'AlphaFold 2 achieved a median accuracy of 92.4 GDT (near experimental quality) at CASP14 — a result the scientific community described as a "revolution" that will accelerate drug discovery by decades.',
    discussion: [
      'AlphaFold solved a problem that had resisted human expertise for 50 years. What problems in your field might have similar characteristics — where pattern recognition in large datasets could outperform human reasoning?',
      'DeepMind released AlphaFold freely. What are the strategic implications of open-sourcing a transformative AI capability?',
      'The protein folding problem had huge amounts of evolutionary sequence data but limited structural labels. How did this shape the technical approach, and what does that tell you about data strategy?',
    ]
  },
  exercise: {
    title: 'Deep Learning Opportunity Scan',
    intro: 'Identify where deep learning — specifically its ability to find patterns in unstructured data — could create value in your context.',
    steps: [
      'List the unstructured data your organisation currently collects or has access to: images, audio, text, video, sensor streams, documents. Quantity estimate for each.',
      'For each data type, identify one specific task where pattern recognition could create value (e.g. "analysing customer support call recordings to detect frustration before escalation").',
      'Use this filter: Deep learning is appropriate when (a) data volume is large (>10,000 examples), (b) the pattern is too complex for humans to articulate explicit rules, and (c) accuracy matters more than explainability. Mark which of your candidates pass this filter.',
      'For your top candidate, draft a one-page "deep learning brief": problem statement, data available, success metric, risk factors, and estimated value if successful.',
    ]
  },
  quiz: [
    { q: 'The "Transformer" architecture is primarily known for solving which limitation?', opts: ['Image recognition on small datasets','Efficiently relating distant elements in a sequence using attention','Reducing the compute required for training','Making neural networks explainable'], ans: 1 },
    { q: 'Backpropagation in neural networks refers to:', opts: ['The process of feeding data forward through the network','Computing each weight\'s contribution to error and adjusting weights to reduce it','Removing unnecessary neurons to simplify the model','Transferring a pre-trained model to a new task'], ans: 1 },
    { q: 'Why are Convolutional Neural Networks (CNNs) particularly well-suited for image tasks?', opts: ['They process pixels faster than other architectures','They encode translational invariance — detecting features regardless of position','They require fewer training examples than other networks','They are the only architecture that supports colour images'], ans: 1 },
    { q: 'AlphaFold 2 primarily used which type of data to predict protein structures?', opts: ['X-ray crystallography images','Evolutionary amino acid sequence data','Simulated molecular dynamics','Manually labelled protein conformations'], ans: 1 },
    { q: 'Deep learning is most appropriate when:', opts: ['You have fewer than 1,000 labelled examples','You need a fully explainable decision for regulatory purposes','You have large volumes of unstructured data and complex patterns','Your data is primarily structured and tabular'], ans: 2 },
  ]
},

// ════════════════════════════════════════
// MODULE 4 — Generative AI (PAID)
// ════════════════════════════════════════
{
  id: 4, free: false, cat: 'ai',
  icon: '✨', duration: '3.5 hrs', lessons: 7,
  title: 'Beyond Prediction: Making the Most of Generative AI',
  tagline: 'Explore generative AI and the organisational impact of AI that creates rather than predicts.',
  overview: `<p>For decades, AI was primarily predictive — it could classify emails, recommend products, or forecast demand. Generative AI represents a fundamental shift: machines that create. From text to images, code to music, 3D models to video, generative models are rewriting what's possible and compressing the cost of content creation by orders of magnitude.</p><br>
<p>The 2022-2023 emergence of ChatGPT, DALL-E 3, Midjourney, and GitHub Copilot forced every organisation to confront the same questions simultaneously: How do we use this? What do we protect? What are we risking? This module gives you the frameworks to answer those questions from first principles.</p><br>
<p>You will understand how the key generative architectures work conceptually, master the emerging skill of prompt engineering, explore real organisational deployments across industries, and grapple with the ethics, copyright, and risk questions that boards and regulators are wrestling with worldwide.</p>`,
  objectives: [
    'Explain how GANs, diffusion models, and large language models generate new content.',
    'Write effective prompts for business use cases using established prompting frameworks.',
    'Identify high-value generative AI applications in your own organisational context.',
    'Assess the risks — hallucination, copyright, data privacy, deepfakes — and corresponding mitigations.',
    'Build a simple governance framework for generative AI deployment in your organisation.',
  ],
  concepts: [
    { title: 'Generative Adversarial Networks (GANs)', body: 'Introduced in 2014, GANs consist of two neural networks in competition: a Generator that creates fake content, and a Discriminator that tries to detect fakes. Through adversarial training, the Generator gets better at fooling the Discriminator, producing ever-more-realistic outputs. GANs powered the first wave of AI-generated faces (thispersondoesnotexist.com), deepfakes, and synthetic data generation. Their main limitation — training instability — led to the rise of diffusion models.' },
    { title: 'Diffusion Models: Creating by Denoising', body: 'Diffusion models (powering DALL-E 3, Midjourney, Stable Diffusion) learn to generate by learning the reverse of a destruction process. Training adds random noise to images step by step until they\'re pure static; the model learns to reverse each step, gradually recovering the original. To generate new images, you start from noise and apply the learned denoising process, guided by a text prompt. This approach is more stable than GANs and produces astonishing image quality. The same principle now applies to video, 3D, and audio.' },
    { title: 'Large Language Models: Predicting the Next Token', body: 'GPT-4, Claude, Gemini, and Llama are all "next-token predictors" at their core. Trained on hundreds of billions of words from the internet, they learn the statistical patterns of language so deeply that predicting the next word requires understanding syntax, semantics, facts, reasoning, and style. The emergent capabilities — writing code, explaining concepts, arguing multiple sides of a debate — arise from scale. This is also the source of hallucination: the model confidently generates the statistically plausible next token, which is not always the factually correct one.' },
    { title: 'Prompt Engineering: The New Programming', body: 'A prompt is your interface to a generative AI model. Prompt engineering — the craft of designing prompts that reliably produce high-quality outputs — has become a critical business skill. Key techniques: Role prompting ("You are a senior financial analyst..."), Chain-of-thought ("Think step by step..."), Few-shot examples (showing the model 2-3 examples of the output format you want), and Output constraints ("Respond in JSON with fields: summary, risk, recommendation"). The difference between a mediocre and excellent prompt can mean the difference between useless and transformative output.' },
    { title: 'Responsible Generative AI: Copyright, Hallucination, Misuse', body: 'Generative AI introduces risks that require active governance. Hallucination: models generate plausible-sounding falsehoods — always verify factual claims. Copyright: training on copyrighted content and generating derivative works creates legal exposure currently being litigated worldwide. Data privacy: sending confidential data to third-party LLM APIs may violate GDPR, HIPAA, or trade secret laws. Deepfakes and disinformation: generative models make synthetic media trivially easy to produce at scale. Each risk has mitigations, but none is zero-cost.' },
  ],
  caseStudy: {
    company: 'Coca-Cola — Generative AI in Marketing',
    title: 'How the World\'s Most Recognised Brand Uses AI to Personalise at Impossible Scale',
    body: `Coca-Cola partnered with Bain & Company and OpenAI to deploy generative AI across its marketing operations. The "Create Real Magic" campaign invited consumers to create original artwork using DALL-E and GPT-4, generating user content at a scale no traditional campaign could match. Internally, the company uses AI to draft marketing copy in 20+ languages simultaneously, generate hundreds of creative variations for A/B testing, and personalise digital ads dynamically.<br><br>
More significantly, Coca-Cola uses generative AI to compress the time from campaign brief to first creative draft from 3 weeks to 3 hours. Designers now spend time on strategy, direction, and refinement rather than production. The company reports 50-60% reduction in creative production time with no reduction in creative quality as measured by engagement metrics.`,
    result: '50-60% reduction in creative production time; "Create Real Magic" generated over 120,000 user-created artworks in the first week, with zero paid media required for that engagement.',
    discussion: [
      'Coca-Cola shifted designers from production to direction. How would you manage this transition in a creative team that may resist AI involvement?',
      'When 120,000 users create AI art with your brand assets, what are the brand consistency risks and how would you mitigate them?',
      'The "Create Real Magic" platform used consumers as prompt engineers. What other ways could you co-create with customers using generative AI?',
    ]
  },
  exercise: {
    title: 'Generative AI Use Case Canvas',
    intro: 'Identify and evaluate 3 generative AI applications for your organisation using a structured canvas.',
    steps: [
      'Brainstorm 10 content-heavy or creative tasks in your organisation that currently require significant human time (copywriting, report drafting, image creation, code generation, data summarisation, presentations, translation, customer emails).',
      'For each, score on two dimensions: Volume potential (1–5: how many instances per month?) and Time saved per instance (1–5: how many hours saved?). Focus on the top 3 by combined score.',
      'For each of your top 3, complete the canvas: Current state (who does it, how long, what it costs) → AI-augmented state (what the AI does, what the human does, what changes) → Value created (time saved × cost rate, quality improvement, new capability).',
      'Identify the single highest-risk element of each use case (hallucination risk? copyright? data privacy?) and write one mitigation for each. This is your governance starting point.',
    ]
  },
  quiz: [
    { q: 'Diffusion models generate images by:', opts: ['Pitting a generator against a discriminator in adversarial training','Learning to reverse a noise-addition process, starting from random noise','Sampling from a database of training images and interpolating between them','Translating text descriptions directly into pixel values'], ans: 1 },
    { q: 'The primary cause of "hallucination" in large language models is:', opts: ['Insufficient training data','Models generating statistically plausible next tokens regardless of factual accuracy','Poorly written prompts','Models trained on deliberately false information'], ans: 1 },
    { q: '"Chain-of-thought" prompting instructs a model to:', opts: ['Generate multiple outputs and select the best','List its training data sources','Think step-by-step through a problem before giving the final answer','Use fewer tokens to reduce cost'], ans: 2 },
    { q: 'Which architecture powers most modern image generators like DALL-E 3 and Midjourney?', opts: ['Generative Adversarial Networks (GANs)','Convolutional Neural Networks (CNNs)','Diffusion models','Recurrent Neural Networks (RNNs)'], ans: 2 },
    { q: 'A company sending customer data to a third-party LLM API most directly risks violating:', opts: ['Antitrust regulations','Data privacy laws (GDPR, HIPAA)','Intellectual property norms only','No regulations — data sent to AI is not covered'], ans: 1 },
  ]
},

// ════════════════════════════════════════
// MODULE 5 — AI and Society (PAID)
// ════════════════════════════════════════
{
  id: 5, free: false, cat: 'ai',
  icon: '🌍', duration: '3 hrs', lessons: 6,
  title: 'AI and Society',
  tagline: 'Understand the impacts that AI has on the way we live and work.',
  overview: `<p>AI is not a neutral technology. Every deployment reflects choices — about what to optimise, whose data to use, which outcomes to value. These choices have consequences that ripple through employment, privacy, equality, democracy, and power. Business leaders who understand only the technical or commercial dimensions of AI are operating with blind spots that create regulatory, reputational, and ethical risk.</p><br>
<p>This module examines AI's societal impacts honestly and rigorously. Labour displacement is real but uneven — which roles are most vulnerable, and which are being augmented rather than replaced? Algorithmic bias can propagate and amplify historic discrimination at industrial scale. AI-powered surveillance is reshaping the social contract between citizens, companies, and governments.</p><br>
<p>The goal is not to make you pessimistic about AI, but to make you a more responsible deployer of it. Leaders who engage with these questions proactively build better products, avoid expensive failures, and earn the trust of employees, customers, and regulators.</p>`,
  objectives: [
    'Analyse which jobs and skills are most and least vulnerable to AI automation.',
    'Explain how algorithmic bias arises and identify it in real-world AI deployments.',
    'Assess the privacy implications of different AI data collection practices.',
    'Compare approaches to AI governance across major jurisdictions (EU, US, China).',
    'Apply an ethics framework to a proposed AI initiative in your own context.',
  ],
  concepts: [
    { title: 'Labour Displacement: Who Is Most at Risk?', body: 'The McKinsey Global Institute estimates AI and automation could displace 400 million to 800 million workers globally by 2030. But displacement is highly uneven. Roles involving routine cognitive tasks (data entry, basic analysis, routine customer service) face the highest risk. Roles requiring physical dexterity, emotional intelligence, creativity, and complex judgment are more resilient. The paradox: many at-risk jobs are held by workers who can least afford disruption, while the productivity gains accrue to capital owners and high-skill workers — potentially the largest wealth transfer in history.' },
    { title: 'Algorithmic Bias: Discrimination at Scale', body: 'ML models learn from historical data. If that data reflects historical discrimination — in hiring, lending, criminal justice — the model encodes and perpetuates it. Worse, because AI operates at scale, it can discriminate against millions in seconds where a human would discriminate against dozens. Amazon\'s experimental hiring algorithm downgraded resumes from women (trained on a male-dominated hiring history). COMPAS — used by US courts for recidivism prediction — was found to be twice as likely to falsely flag Black defendants as high risk. Bias in AI is not a technical accident; it is a social problem requiring social and technical solutions simultaneously.' },
    { title: 'Privacy: Data as Power', body: 'Modern AI systems require vast personal data. The commercial logic — collect more data, build better models, improve the product, attract more users — creates systems of surveillance that individuals largely cannot opt out of. Beyond corporate collection, AI dramatically lowers the cost of state surveillance: facial recognition across public spaces, real-time emotion detection, predictive policing. The question is not just "is this data technically available?" but "should this power exist, and who should control it?"' },
    { title: 'AI and Democracy: Information Ecosystems', body: 'Generative AI can produce disinformation — fake images, videos, and text — at a cost that approaches zero. Algorithmic recommendation systems on social platforms are optimised for engagement, which correlates with emotional arousal and outrage rather than truth or nuance. The 2016 and 2020 US elections, Brexit, and the COVID-19 infodemic all showed how AI-amplified misinformation can destabilise democratic discourse. Leaders in any organisation need to understand their potential complicity in these dynamics through the platforms they use and the content they create.' },
    { title: 'AI Governance Landscape', body: 'Regulation is moving fast but unevenly. The EU AI Act (2024) establishes a risk-tiered framework: some AI uses are banned outright (social scoring by governments, real-time biometric surveillance in public), high-risk uses (hiring, credit, healthcare) require human oversight and explainability, and general-purpose AI must disclose training data and comply with copyright law. The US has taken a lighter, principles-based approach through Executive Order. China regulates algorithm recommendations and generative AI with heavy state oversight. Multinational organisations face a patchwork — and the EU standard is likely to become the de facto global baseline.' },
  ],
  caseStudy: {
    company: 'Amazon — Hiring Algorithm Bias',
    title: 'How an AI Designed to Remove Bias Introduced It Systematically',
    body: `In 2014, Amazon built an ML model to automate CV screening, hoping to eliminate human bias in hiring decisions. Trained on 10 years of historical hiring data — a period when Amazon, like most tech companies, hired predominantly men — the model learned to penalise signals associated with women. It downgraded CVs that included the word "women\'s" (as in "women\'s chess club"), and downgraded graduates of all-women\'s colleges.<br><br>
Amazon\'s engineers discovered the bias in 2015 and attempted to fix it, but found it impossible to guarantee the model would not find other proxy signals for gender. They quietly disbanded the team in 2017. The project was never used in actual hiring. But the lesson is stark: a well-resourced, technically sophisticated team, explicitly trying to reduce bias, failed — because the problem was in the training data, not the algorithm.`,
    result: 'Amazon disbanded the project, concluding that the model could not be reliably de-biased given its historical training data. The case is now the canonical example of "garbage in, garbage out" at the ethical level.',
    discussion: [
      'Amazon\'s training data reflected historical bias that was not the model\'s "fault." Who bears responsibility for the outcome — the algorithm, the engineers, the executives who approved the project, or the historical practices that created the biased data?',
      'What data do you currently use to train any automated decision systems? What historical biases might be embedded in that data?',
      'The EU AI Act would classify automated hiring decisions as "high risk." What governance requirements would this impose on your organisation?',
    ]
  },
  exercise: {
    title: 'AI Ethics Impact Assessment',
    intro: 'Apply a structured ethics assessment to an AI initiative in your organisation (real or proposed).',
    steps: [
      'Choose one AI system your organisation currently uses or is considering — a chatbot, a predictive model, an automated decision, a recommendation engine.',
      'Complete the Stakeholder Map: List all groups who are affected by this AI\'s decisions. For each: What is the potential benefit? What is the potential harm? Do they have any recourse or ability to contest decisions?',
      'Run the Bias Audit: What data was this model trained on? What historical patterns might it encode? What proxy variables might correlate with protected characteristics (gender, race, age)?',
      'Write a one-page "AI Ethics Brief": What the system does → Who it affects → Identified risks → Three mitigations → Proposed governance (who reviews it, how often, what triggers re-evaluation).',
    ]
  },
  quiz: [
    { q: 'Which type of worker is generally MOST at risk of AI-driven displacement?', opts: ['Medical surgeons requiring fine motor skills','Workers performing routine cognitive tasks like data entry and basic analysis','Art directors and creative strategists','Plumbers and electricians'], ans: 1 },
    { q: 'Amazon\'s hiring algorithm was biased against women primarily because:', opts: ['It was deliberately programmed to prefer men','It was trained on historical hiring data from a male-dominated period','The engineers who built it were predominantly male','Amazon\'s job requirements discriminated against women'], ans: 1 },
    { q: 'Under the EU AI Act, automated hiring decisions are classified as:', opts: ['Prohibited AI — banned outright','High-risk AI — requiring human oversight and explainability','Minimal risk — no specific regulation','Limited risk — requiring only transparency disclosures'], ans: 1 },
    { q: 'The primary reason AI recommendation algorithms on social media amplify outrage and misinformation is:', opts: ['They are deliberately programmed to spread false information','Engagement optimisation rewards emotional arousal, which correlates with outrage rather than truth','Social media companies do not have enough data to train better models','Government regulations require them to show controversial content'], ans: 1 },
    { q: 'Which approach best describes the EU\'s regulatory framework for AI?', opts: ['A blanket ban on most commercial AI applications','A risk-tiered framework banning some uses, heavily regulating high-risk uses, and allowing light oversight for low-risk uses','A voluntary, principles-based approach with no legal enforcement','Full government oversight of all AI applications'], ans: 1 },
  ]
},

// ════════════════════════════════════════
// MODULE 6 — Driving AI in Business (PAID)
// ════════════════════════════════════════
{
  id: 6, free: false, cat: 'ai',
  icon: '🚀', duration: '4 hrs', lessons: 8,
  title: 'How to Drive AI in Your Business',
  tagline: 'Identify AI opportunities, build the business case, and lead the implementation.',
  overview: `<p>Understanding AI conceptually and implementing it strategically are two entirely different skills. Most AI initiatives fail — not because the technology doesn't work, but because organisations underestimate the operational, cultural, and data infrastructure changes required. They start with the technology and work backwards to the problem, rather than starting with the business problem and selecting technology to fit.</p><br>
<p>This module gives you the practitioner's toolkit for AI strategy. You will work through a structured approach to identifying the highest-value AI opportunities in your specific context, building a rigorous business case, assessing your data readiness, and leading the organisational change that AI adoption demands.</p><br>
<p>Drawing on frameworks used by McKinsey, BCG, and leading AI-native organisations, this module bridges the gap between "AI is exciting" and "here is our AI roadmap with clear ROI, milestones, and governance."</p>`,
  objectives: [
    'Apply the AI opportunity identification framework to find high-value, high-feasibility use cases.',
    'Build a business case for an AI initiative including data, cost, ROI, and risk components.',
    'Assess your organisation\'s AI maturity across data, talent, infrastructure, and culture.',
    'Distinguish when to build, buy, or partner for AI capabilities.',
    'Design a change management approach for AI-driven transformation of existing roles.',
  ],
  concepts: [
    { title: 'AI Opportunity Identification: The Value-Feasibility Matrix', body: 'Not all AI opportunities are worth pursuing. The Value-Feasibility Matrix helps prioritise: plot each opportunity on two dimensions — Business Value (revenue impact, cost reduction, risk mitigation) and Technical Feasibility (data availability, maturity of relevant AI technology, organisational capability to execute). Focus on high-value, high-feasibility opportunities ("quick wins") first to build momentum and credibility. High-value, low-feasibility opportunities are "moonshots" worth longer-term investment. Low-value opportunities in either dimension should be deprioritised regardless of enthusiasm.' },
    { title: 'AI Maturity Assessment', body: 'Before investing in AI capabilities, honest self-assessment is critical. The AI Maturity Model spans five levels: (1) AI Aware — understanding the landscape, (2) AI Active — pilot projects running, (3) AI Operational — AI in production at limited scale, (4) AI Systemic — AI integrated into core business processes, (5) AI Transformative — AI as a source of competitive differentiation. Most organisations overestimate their maturity. The most common blocker is not technology but data quality: AI is only as good as the data you feed it.' },
    { title: 'Build vs. Buy vs. Partner', body: 'The make-or-buy decision in AI is nuanced. Building proprietary models makes sense when: you have unique data that gives a moat, the use case is core to competitive differentiation, and you have (or can hire) world-class ML talent. Buying (SaaS AI tools, APIs) makes sense when: the use case is generic (document processing, customer service chatbots), speed to value matters, and proprietary advantage is low. Partnering with specialised AI firms makes sense for complex, domain-specific problems where neither building nor buying off-the-shelf works. The right answer varies by use case, not by company.' },
    { title: 'Data Strategy for AI', body: 'Data is the fuel of AI. A data strategy for AI must address four layers: Collection (what data, from what sources, in what formats?), Storage and governance (where does it live, who can access it, how is it secured?), Quality (is it accurate, complete, consistent, and timely?), and Labelling (for supervised learning, who labels the training data, how, and to what quality standard?). Organisations that invest in data infrastructure before AI projects succeed; those that treat data as an afterthought fail repeatedly.' },
    { title: 'Change Management for AI Adoption', body: 'AI implementation is a change management problem as much as a technical one. People who fear AI-driven job loss will resist adoption, withhold data, and undermine pilots. Effective AI change management: (1) Communicate honestly about what will change and why, (2) Involve frontline workers in designing AI workflows — they know the problems best, (3) Reframe AI as augmentation rather than replacement wherever true, (4) Invest in reskilling proactively rather than reactively, (5) Celebrate early wins visibly to build organisational confidence. Skipping these steps is the primary reason AI pilots fail to scale.' },
  ],
  caseStudy: {
    company: 'JPMorgan Chase — COIN',
    title: 'How the World\'s Largest Bank Automated 360,000 Hours of Legal Work Annually',
    body: `JPMorgan Chase's Contract Intelligence (COIN) platform, launched in 2017, uses ML to interpret commercial loan agreements — work that previously required 360,000 hours of lawyer and loan officer time per year. The system reviews documents in seconds that previously took an average of 2 minutes each for trained lawyers, and makes fewer errors.<br><br>
The build decision was deliberate: loan agreement review is core to JPMorgan's business, they had decades of proprietary contract data, and the competitive advantage of speed and accuracy in lending is real. They invested $10+ billion in technology annually and built a team of 50,000 technologists. COIN was not a quick win — it took years of data labelling and model development. But the ROI is structural and durable.`,
    result: 'COIN reviews 12,000 annual commercial credit agreements in seconds, saving 360,000 lawyer-hours per year with higher accuracy than manual review — a direct cost saving of tens of millions annually.',
    discussion: [
      'JPMorgan chose to build rather than buy. What proprietary data advantages did they have that justified this? What would have been different about a smaller bank?',
      'The 360,000 hours saved came from lawyers and loan officers. How did JPMorgan manage the change management challenge? What would you have done differently?',
      'COIN makes fewer errors than humans on this specific task. What governance is still appropriate when AI outperforms humans?',
    ]
  },
  exercise: {
    title: 'AI Opportunity Canvas',
    intro: 'Develop a prioritised AI roadmap for your organisation using the opportunity canvas.',
    steps: [
      'Run a structured brainstorm (30 minutes, ideally with your team): List every decision, prediction, or process in your organisation that (a) involves large volumes of data and (b) follows discernible patterns. Aim for 20+ candidates.',
      'Plot each on the Value-Feasibility Matrix (2×2 grid). Focus your analysis on the top-right quadrant (high value, high feasibility).',
      'For your top 3 opportunities, complete the AI Opportunity Canvas: Problem statement → Data available (volume, quality, accessibility) → AI approach → Build/Buy/Partner decision → Success metric → Estimated ROI → Key risks → Timeline.',
      'Assess your AI Maturity Level (1–5) honestly for each of the four dimensions: Data, Talent, Infrastructure, Culture. Identify the single biggest gap and propose one concrete action to close it.',
    ]
  },
  quiz: [
    { q: 'In the Value-Feasibility Matrix for AI opportunity prioritisation, "quick wins" are located in which quadrant?', opts: ['High value, low feasibility','Low value, high feasibility','High value, high feasibility','Low value, low feasibility'], ans: 2 },
    { q: 'JPMorgan\'s COIN system primarily demonstrates which type of AI value creation?', opts: ['Revenue expansion through new products','Cost reduction by automating high-volume cognitive tasks','Risk mitigation through predictive analytics','Customer personalisation at scale'], ans: 1 },
    { q: 'Building a proprietary AI model (rather than buying) is most justified when:', opts: ['AI is new to your industry and competitors haven\'t started yet','You have unique proprietary data that gives a competitive moat and the use case is core to differentiation','Your organisation has fewer than 500 employees','The use case is generic, like customer service chatbots'], ans: 1 },
    { q: 'The most common reason AI pilots fail to scale in organisations is:', opts: ['The underlying AI technology is not mature enough','Insufficient computing infrastructure','Organisational resistance, poor change management, and data quality problems','Regulatory barriers'], ans: 2 },
    { q: 'Which layer of data strategy addresses "who can access it and how is it secured?"', opts: ['Collection','Storage and governance','Quality','Labelling'], ans: 1 },
  ]
},

]; // End of MODULES array — more modules appended by subsequent data files
