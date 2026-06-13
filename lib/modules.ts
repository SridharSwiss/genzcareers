/* ══════════════════════════════════════════════════════════════════
   GenzCareers Learning Platform — Module Data (all 19 modules)
   ══════════════════════════════════════════════════════════════════ */

import type { Module } from './types';

export const MODULES: Module[] = [

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
},

// MODULE 13 — Oxford View of Strategy (PAID)
{
  id: 13, free: false, cat: 'strategy',
  icon: '🎓', duration: '3.5 hrs', lessons: 7,
  title: 'Unlocking Strategy – The Oxford View',
  tagline: 'Explore your organisation\'s strategic potential using the Oxford view of strategy.',
  overview: `<p>Strategy is not a plan. A plan describes how to achieve a goal in a predictable environment. Strategy is required precisely when the environment is unpredictable, when competitors respond to your moves, when the future is fundamentally uncertain. The Oxford view of strategy — developed at Saïd Business School — takes this uncertainty seriously rather than pretending it away with five-year financial models.</p><br>
<p>The Oxford approach to strategy is distinctive in three ways. It treats strategy as a set of choices about where to play and how to win, not as a document or a planning process. It integrates analysis and creativity — the best strategies are analytically rigorous and imaginatively distinctive. And it is deeply empirical, grounded in how strategy actually works in organisations rather than how the models say it should work.</p><br>
<p>This module introduces the core frameworks of the Oxford view: resource-based theory, dynamic capabilities, the positioning school, and integrative approaches that recognise no single framework captures the full complexity of strategic reality. You will apply these frameworks to your own organisation, developing both analytical skill and strategic judgment.</p>`,
  objectives: [
    'Apply the resource-based view to identify your organisation\'s most valuable strategic assets.',
    'Distinguish between competitive positioning and resource-based strategy and identify when each is more relevant.',
    'Explain the Oxford view\'s integrated approach to strategy and why it differs from single-framework approaches.',
    'Conduct a VRIN analysis (Valuable, Rare, Inimitable, Non-substitutable) of a core organisational capability.',
    'Develop a strategic narrative that integrates analysis with a distinctive organisational point of view.',
  ],
  concepts: [
    { title: 'Strategy as Choice: Where to Play and How to Win', body: 'Roger Martin\'s framing — strategy as a set of integrated choices about where to play (which markets, customers, geographies?) and how to win (what distinctive value will you create, for whom, better than alternatives?) — cuts through strategic fog more effectively than most frameworks. The test of a real strategy: can you articulate clearly where you have chosen NOT to play, and why? Most "strategies" are aspirations ("be the best," "lead the market") without the hard choices about trade-offs that make them real strategies. Every genuine strategic choice creates something you cannot do — and that constraint is part of the strategy\'s power.' },
    { title: 'Resource-Based View: Strategy from the Inside Out', body: 'The resource-based view (RBV), associated with Barney, Penrose, and Wernerfelt, argues that competitive advantage comes from inside the firm — from resources and capabilities that are Valuable (they enable a strategy that creates value for customers), Rare (competitors don\'t have them), Inimitable (competitors can\'t easily copy or acquire them), and Non-substitutable (no alternative resource produces the same strategic effect). The VRIN framework is the practical tool. Key insight: the most durable competitive advantages are rooted in organisational capabilities — culture, knowledge, routines, relationships — not physical assets, because capabilities are hardest to imitate.' },
    { title: 'Competitive Positioning: Strategy from the Outside In', body: 'Michael Porter\'s positioning school argues that strategic advantage comes from the structure of the industry and your position within it. The Five Forces analysis (competitive rivalry, buyer power, supplier power, threat of substitutes, threat of new entrants) reveals the structural drivers of industry profitability. Generic strategies (cost leadership, differentiation, focus) describe the positions from which firms can earn superior returns. The positioning school is most useful in stable, clearly bounded industries where structural forces change slowly. Its limitation: it describes the industry as it is, not how it might be reshaped by a resourceful challenger.' },
    { title: 'Dynamic Capabilities and the Teece Framework', body: 'David Teece\'s dynamic capabilities framework bridges RBV and competitive positioning by adding time. In a fast-changing environment, the resources that give competitive advantage today may be obsolete tomorrow. The question is not just "what resources do we have?" but "can we reconfigure our resources as the environment changes?" Dynamic capabilities comprise three clusters: Sensing (identifying and assessing opportunities and threats), Seizing (mobilising resources to capture opportunities), and Reconfiguring/Transforming (continuously renewing and recombining assets). Firms with strong dynamic capabilities thrive in turbulence; firms with only ordinary capabilities tend to be disrupted.' },
    { title: 'The Oxford Integrative Approach', body: 'The Oxford view resists the tendency of strategy scholarship to elevate one framework as universally superior. Instead, it treats strategy as a multi-lens discipline: Porter\'s positioning framework is most useful for understanding industry structure and competitive dynamics. RBV is most useful for identifying the internal sources of advantage. Dynamic capabilities are most useful for navigating change. Institutional theory is most useful for understanding how regulation, norms, and social pressures shape strategic options. Game theory is most useful for anticipating competitor response. The sophisticated strategist applies all lenses, using each where it illuminates most, rather than mechanically applying one framework to every situation.' },
  ],
  caseStudy: {
    company: 'Amazon Web Services — The Accidental Strategic Pivot',
    title: 'How Internal Capability Became the World\'s Largest Cloud Business',
    body: `In 2002, Amazon CTO Werner Vogels mandated that all internal teams must expose their capabilities as services accessible via an API — and that these APIs must be designed as if external developers would use them. This "API mandate" was an internal engineering discipline decision, not a strategic plan to enter cloud computing.<br><br>
By 2006, Amazon had built such robust internal infrastructure to support its e-commerce platform that it realised — from a classic RBV lens — it possessed a resource that was Valuable (companies everywhere needed scalable compute), Rare (few could build it), Inimitable (years of operational experience, massive capital investment), and Non-substitutable (no equivalent alternative existed). AWS launched in 2006. By 2023, it generated $90.8 billion in revenue and became the foundation of the modern startup ecosystem. The strategy emerged from operational capability, not from a planning process.`,
    result: 'AWS controls ~31% of the global cloud market ($90.8B revenue in 2023), generating over 60% of Amazon\'s total operating income — making it one of the most valuable business pivots in corporate history, emerging from an internal IT policy rather than strategic intent.',
    discussion: [
      'AWS was not planned as a strategy; it emerged from internal capability. What internal capabilities does your organisation have that might be valuable to external customers or partners?',
      'Apply VRIN analysis to AWS in 2006: Was it Valuable? Rare? Inimitable? Non-substitutable? How does this analysis explain why competitors (Microsoft Azure, Google Cloud) took 5+ years to mount a serious response?',
      'The Oxford view would say AWS demonstrates "emergent strategy." How do you create conditions in your organisation for good emergent strategies to surface, rather than being killed by planning processes?',
    ]
  },
  exercise: {
    title: 'Oxford Strategic Analysis of Your Organisation',
    intro: 'Apply three strategic lenses to your organisation and synthesise them into a strategic assessment.',
    steps: [
      'Outside-In (Porter): List your top 3 competitors. For each of Porter\'s Five Forces, rate the intensity (1–5) in your industry. Which force is most structurally unfavourable? Which is most favourable? What does this tell you about where profitability comes from in your industry?',
      'Inside-Out (VRIN): List 5 capabilities your organisation possesses. Apply VRIN to each: Is it Valuable? Rare? Inimitable? Non-substitutable? Score each dimension 1–3. Which capability has the highest total VRIN score? This is your primary strategic asset.',
      'Dynamic: Assess your organisation\'s dynamic capabilities. Rate 1–5: How effectively do you Sense new opportunities and threats? How effectively do you Seize them? How effectively can you Reconfigure your resources in response to change?',
      'Synthesise into a one-page Strategic Summary: Where we play → How we win → Our primary strategic asset (VRIN winner) → Our biggest structural threat (Five Forces) → Our most critical dynamic capability gap.',
    ]
  },
  quiz: [
    { q: 'Roger Martin\'s definition of strategy centres on:', opts: ['A long-term financial plan with 5-year projections','A set of integrated choices about where to play and how to win','The organisation\'s mission, vision, and values statement','A competitive response plan to known threats'], ans: 1 },
    { q: 'In the VRIN framework, "Inimitable" means the resource is:', opts: ['Infinitely valuable in any market context','Difficult or impossible for competitors to copy or replicate','Not available for purchase or licensing','Used only internally, not exposed to customers'], ans: 1 },
    { q: 'Porter\'s Five Forces framework is most useful for:', opts: ['Understanding internal organisational capabilities','Assessing your organisation\'s culture and values alignment','Analysing the structural drivers of profitability in an industry','Forecasting technology disruption over the next decade'], ans: 2 },
    { q: 'In Teece\'s dynamic capabilities framework, "Seizing" refers to:', opts: ['Scanning the environment for emerging opportunities','Mobilising resources to capture an identified opportunity','Restructuring the organisation after a strategic change','Protecting existing competitive advantages from imitation'], ans: 1 },
    { q: 'The Oxford integrative approach to strategy is distinctive because it:', opts: ['Prioritises Porter\'s positioning school as the most rigorous framework','Treats strategy as primarily a financial planning exercise','Uses multiple frameworks as complementary lenses rather than elevating any single framework','Focuses exclusively on the internal organisational factors that drive performance'], ans: 3 },
  ]
},

// MODULE 14 — Working with Futures (PAID)
{
  id: 14, free: false, cat: 'strategy',
  icon: '🔭', duration: '3 hrs', lessons: 6,
  title: 'Working with Futures – Addressing Changing Environments',
  tagline: 'Consider the importance of broader environments and futures in formulating strategy.',
  overview: `<p>The single most dangerous assumption in strategic planning is that the future will resemble the past. Most strategy processes analyse historical performance, benchmark against current competitors, and extrapolate trends. This produces excellent strategy for a world that is already changing — and leaves organisations blind to the shifts that will matter most.</p><br>
<p>Working with futures is a distinct strategic discipline: not forecasting (predicting a single future) but scenario planning (preparing for multiple plausible futures). It requires different mental habits — peripheral vision to detect weak signals before they become obvious trends, comfort with ambiguity rather than false precision, and the imagination to think in plausible narratives rather than probability distributions.</p><br>
<p>This module draws on the tradition established by Royal Dutch Shell — whose scenario planning in the 1970s made it one of the only oil companies prepared for the 1973 oil crisis — and on contemporary foresight practice. You will develop the habits and tools of a strategic futurist: not to predict the future, but to be better prepared for whichever future arrives.</p>`,
  objectives: [
    'Distinguish between forecasting, scenario planning, and strategic foresight and understand when each is appropriate.',
    'Conduct a PESTLE analysis and identify the three forces most likely to reshape your industry.',
    'Build and apply two contrasting scenarios for your organisation\'s strategic planning.',
    'Develop the habit of "peripheral vision" — sensing weak signals before they become obvious trends.',
    'Evaluate your organisation\'s current strategy against multiple future scenarios.',
  ],
  concepts: [
    { title: 'Why Forecasting Fails and Scenarios Work', body: 'Economic and business forecasts are persistently, systematically wrong for predictable reasons: they anchor on current trends, extrapolate linearly in a nonlinear world, and ignore discontinuities — the unexpected events that reshape everything. Scenario planning does not claim to predict; it prepares you for multiple plausible futures by forcing rigorous thinking about the uncertainties that matter most. Shell\'s scenario team in the early 1970s built scenarios exploring what would happen if OPEC restricted oil supply. When the 1973 oil crisis arrived, Shell was the only major oil company with plans in place — not because they predicted the crisis, but because they had prepared for it as one of several plausible futures.' },
    { title: 'PESTLE: Mapping the Macro Environment', body: 'PESTLE (Political, Economic, Social, Technological, Legal, Environmental) is the foundational environmental scanning framework. The power is not in the framework itself but in the discipline it imposes: systematically scanning outside your industry\'s usual focus of attention for forces that could reshape your context. Political instability, demographic shifts, climate regulation, and new technologies rarely appear first in industry trade publications — they emerge in the periphery of your usual information diet. The PESTLE discipline forces peripheral vision: looking where you normally do not look, for signals you normally do not notice.' },
    { title: 'Scenario Construction: The Four Steps', body: 'Building useful scenarios follows four steps. (1) Identify the critical uncertainties — forces that will have large impact on your future but about which you cannot know the direction or magnitude. (2) Select two uncertainties that are both impactful and independent of each other to form the axes of a 2×2 scenario matrix. (3) Name and develop four scenarios — richly detailed plausible narratives, not thin "optimistic/pessimistic" plans. (4) Test your current strategy against each: Does it create value in all four scenarios? Does it require specific conditions that only one scenario provides? Strategies that only work under one scenario are fragile; strategies that create value across multiple scenarios are more robust.' },
    { title: 'Weak Signals and Strategic Peripheral Vision', body: 'Before a trend becomes obvious, it appears first as a weak signal: an anomaly, an outlier, a fringe behaviour that doesn\'t yet fit existing mental models. The internet was a weak signal in 1990. Airbnb seemed like a curiosity in 2009. COVID-19 was a weak signal in January 2020 to those outside epidemiology circles. Peripheral vision — the organisational habit of systematically scanning beyond your usual sources and questioning anomalies rather than dismissing them — is the early warning system for strategic surprises. It requires deliberate effort: diverse information diets, regular "what is changing around the edges?" conversations, and leaders who do not punish ambiguous or uncomfortable signals.' },
    { title: 'Wind Tunnelling: Testing Strategy Against Scenarios', body: '"Wind tunnelling" is the practice of subjecting your current strategy to each scenario — like testing an aircraft design in a wind tunnel under different conditions — to identify vulnerabilities and required adaptations. The test for each scenario: (1) Does our strategy still make sense? (2) What assumptions does it rely on that this scenario would invalidate? (3) What early indicators would tell us this scenario is developing? (4) What actions could we take now that would be valuable across multiple scenarios ("no-regret moves")? Wind tunnelling converts scenario planning from an intellectual exercise into a strategic planning tool with direct decision implications.' },
  ],
  caseStudy: {
    company: 'Shell — Scenario Planning and the 1973 Oil Crisis',
    title: 'How Strategic Foresight Made One Oil Company Prepared When Everyone Else Was Surprised',
    body: `In the early 1970s, Shell\'s Group Planning team, led by Pierre Wack, developed a set of scenarios exploring what would happen to the global oil market under different geopolitical conditions. One scenario explored an OPEC oil embargo — then considered by most industry analysts to be improbable. Shell\'s planners built it as a detailed, plausible narrative and asked: if this happened, what would we do?<br><br>
When the 1973 Arab oil embargo struck, the scenario that had seemed unlikely became reality. Shell had already worked through the strategic implications. While competitor oil companies were paralysed and governments were caught off guard, Shell had contingency plans in place. The company moved from the seventh-largest to the second-largest oil company in the world during the crisis decade — not because it predicted the crisis, but because it had prepared for it as a plausible future.`,
    result: 'Shell rose from 7th to 2nd in the global oil industry during the 1970s crisis decade, primarily attributed by its own leadership to scenario planning that prepared it for an outcome competitors had not considered.',
    discussion: [
      'Shell\'s scenario planning succeeded because senior leaders took the scenarios seriously enough to actually plan against them. How do you overcome the organisational tendency to treat scenario planning as an intellectual exercise rather than a strategic planning tool?',
      'The oil embargo scenario seemed "unlikely" in 1970. What scenarios in your industry seem unlikely today but would be catastrophic if they materialised? Have you planned for them?',
      'What are the three most important "critical uncertainties" in your strategic environment right now — forces you cannot control and cannot predict, but which will significantly shape your future?',
    ]
  },
  exercise: {
    title: '3-Scenario Strategic Planning Exercise',
    intro: 'Build and test two contrasting scenarios for your organisation\'s strategic environment.',
    steps: [
      'PESTLE Scan: Spend 20 minutes systematically listing forces in each PESTLE category that could affect your organisation in the next 5 years. Include forces you usually ignore. Identify the 6 most impactful.',
      'Select your two most impactful AND most uncertain forces. These become your scenario axes. Label each with two extreme outcomes (e.g. "AI regulation: highly permissive ←→ highly restrictive").',
      'Name and describe your four scenarios (the four quadrants of your 2×2 matrix). For each: Write a one-paragraph narrative describing what the world looks like in 5 years under this scenario. What has changed? Who are the winners and losers?',
      'Wind tunnel your current strategy: For each scenario, answer: Does our strategy create value here? What assumptions does it rely on that this scenario invalidates? Identify 2 "no-regret moves" — actions valuable under all four scenarios — and commit to one.',
    ]
  },
  quiz: [
    { q: 'Scenario planning differs from forecasting primarily because:', opts: ['Scenario planning uses more sophisticated mathematical models','Scenario planning prepares for multiple plausible futures rather than predicting a single most likely future','Scenario planning is conducted by external consultants rather than internal teams','Scenario planning only applies to 10+ year time horizons'], ans: 1 },
    { q: 'In scenario construction, the "axes" of a 2×2 scenario matrix should represent:', opts: ['The two most likely outcomes for your industry','Two forces that are both highly impactful and highly uncertain, and that are independent of each other','Your best-case and worst-case forecasts for revenue and profit','The two most important strategic choices your organisation faces'], ans: 1 },
    { q: 'Shell\'s success in the 1973 oil crisis is attributed primarily to:', opts: ['Having the best geopolitical intelligence network in the industry','Predicting the oil embargo through quantitative modelling','Scenario planning that had prepared plans for the embargo as one of several plausible futures','Superior financial reserves that allowed them to absorb the shock'], ans: 2 },
    { q: '"Wind tunnelling" in strategic planning refers to:', opts: ['Testing products in simulated customer environments','Stress-testing your strategy against each scenario to identify vulnerabilities and required adaptations','Rapidly iterating through strategic options in a time-limited workshop','Reducing strategic plans to their essential core elements'], ans: 1 },
    { q: 'A "weak signal" in strategic foresight is best described as:', opts: ['A minor competitor that is too small to matter currently','An early indicator of a potentially significant change that doesn\'t yet fit existing mental models','A financial metric that shows small but consistent decline','A strategic objective with low probability of achievement'], ans: 1 },
  ]
},

// MODULE 15 — Making Strategy Purposeful (PAID)
{
  id: 15, free: false, cat: 'strategy',
  icon: '🧭', duration: '3 hrs', lessons: 6,
  title: 'Making Strategy Purposeful – Managing Plurality',
  tagline: 'Gauge the plurality of purposes driving your organisational strategy.',
  overview: `<p>The purpose of a business is to make a profit. Or is it? Milton Friedman\'s famous 1970 assertion — that the sole social responsibility of a business is to increase its profits — shaped four decades of corporate strategy and governance. The 2019 Business Roundtable statement, signed by 181 CEOs of America\'s largest companies, explicitly abandoned the Friedman doctrine, committing corporations to serve all stakeholders — employees, communities, suppliers, and customers — not just shareholders.</p><br>
<p>This shift is not merely ideological. Organisations with clear, authentic purpose demonstrably outperform those without: they attract and retain better talent, earn deeper customer loyalty, navigate regulatory scrutiny more effectively, and make better long-term decisions because they have a clearer criterion for trade-offs. The question is not whether your organisation should have a purpose beyond profit, but how to make that purpose substantive rather than performative.</p><br>
<p>This module examines the plurality of purposes that operate in any organisation — shareholder value, stakeholder wellbeing, environmental sustainability, and social contribution — and provides frameworks for navigating the genuine tensions between them. You will also grapple with the most important strategic question of our era: in a world of extreme inequality, climate change, and social fracture, what obligations do powerful organisations have?</p>`,
  objectives: [
    'Explain the evolution from shareholder primacy to stakeholder capitalism and the strategic implications of each.',
    'Identify the multiple purposes operating in your organisation and the tensions between them.',
    'Apply a stakeholder mapping framework to understand the strategic landscape of your organisation.',
    'Assess the authenticity and strategic coherence of a purpose statement.',
    'Design a strategic decision-making process that genuinely balances multiple stakeholder interests.',
  ],
  concepts: [
    { title: 'From Shareholder Primacy to Stakeholder Capitalism', body: 'Friedman\'s shareholder primacy doctrine argued that managers are agents of shareholders, who are the residual claimants of the firm. Maximising shareholder value provides clear accountability and aligns management incentives with ownership. Its critics — and there are many — argue that it encourages short-termism, externalises costs onto employees, communities, and the environment, and produces a narrow definition of corporate success that ignores the conditions that make economic activity possible. Stakeholder capitalism — the claim that corporations must create value for all stakeholders, not just shareholders — is intellectually older (Edward Freeman\'s stakeholder theory, 1984) but politically ascendant, driven by ESG investment, employee activism, and regulation.' },
    { title: 'Purpose Beyond Profit: Evidence and Scepticism', body: 'The evidence that purpose-driven organisations outperform is genuine but complicated. Firms with authentic, strategically integrated purpose — where purpose shapes decisions about what to do and what not to do — show higher employee engagement, lower turnover, stronger brand loyalty, and better long-run financial performance (research by EY Beacon Institute, Harvard Business School\'s IMPACT programme). The sceptical counterpoint: "purpose washing" — adopting purpose language without changing decisions or resource allocation — is rampant. Authentic purpose is revealed in what you sacrifice, not what you claim. Patagonia refuses growth opportunities that conflict with its environmental purpose. Most "purpose-driven" companies do not.' },
    { title: 'Stakeholder Mapping: Understanding Your Strategic Landscape', body: 'Stakeholder mapping identifies all actors who affect or are affected by your organisation and assesses their interests, power, and legitimacy. A standard mapping exercise classifies stakeholders on two dimensions: Interest (how significantly does your strategy affect them?) and Influence (how significantly can they affect your strategy?). High interest, high influence stakeholders are your primary strategic concern — they must be actively engaged and managed. Low interest, low influence stakeholders can be monitored. The most dangerous actors are those with high influence and a grievance you have not addressed. The most untapped strategic resource is often high interest stakeholders — employees, communities — who lack the organised influence to make their needs heard.' },
    { title: 'ESG: From Reporting to Strategy', body: 'Environmental, Social, and Governance (ESG) began as a reporting framework for institutional investors and has evolved into a strategic management discipline. Environmental: carbon emissions, water use, biodiversity impact, circular economy practices. Social: employee wellbeing, pay equity, supply chain labour standards, community investment. Governance: board composition, executive pay, anti-corruption, transparency. The strategic shift: ESG is no longer just about reporting and risk management. Leading organisations use ESG as a lens for identifying innovation opportunities (the sustainable products premium), talent strategy (purpose-driven employees), and supply chain resilience (ethical sourcing as quality control). The EU\'s Corporate Sustainability Reporting Directive (CSRD) from 2024 mandates disclosure for 50,000+ companies.' },
    { title: 'Navigating Genuine Purpose Tensions', body: 'Purpose tensions are real and sometimes irresolvable. Paying workers more may reduce shareholder returns in the short run. Reducing carbon emissions requires capital expenditure that competitors not making that investment do not incur. Closing a plant to reduce costs harms a community that has built its economic life around your employment. The leadership skill is not pretending these tensions away with purpose language, but making the genuine trade-offs transparent and principled. The test of purpose leadership: when commercial pressure is highest, do purpose commitments hold? Decisions made under pressure reveal authentic priorities more accurately than purpose statements made under none.' },
  ],
  caseStudy: {
    company: 'Unilever — Sustainable Living Plan',
    title: 'Can a Purpose-Driven Strategy Beat Shareholder Primacy at Its Own Game?',
    body: `In 2010, then-CEO Paul Polman announced that Unilever would double its revenue while halving its environmental footprint and improving the livelihoods of 1 billion people. He eliminated quarterly earnings guidance, signalling a shift to long-term value creation, and embedded sustainability into every brand strategy. By 2020, Unilever\'s "Sustainable Living Brands" — those with a defined social or environmental purpose — were growing 69% faster than the rest of the portfolio and delivering 75% of the company\'s total growth.<br><br>
The results challenged the Friedman doctrine empirically. But the story is nuanced: Polman faced a hostile takeover bid from Kraft Heinz in 2017, suggesting that even purpose-driven performance has limits in the face of short-term financial arbitrage. His successor has partially unwound some sustainability commitments under shareholder pressure — illustrating that purpose leadership is an ongoing battle, not a permanent transformation.`,
    result: 'Unilever\'s Sustainable Living Brands grew 69% faster than the rest of the portfolio from 2013–2020, generating 75% of company growth — providing the strongest large-company evidence that purpose-driven strategy creates commercial value.',
    discussion: [
      'Polman eliminated quarterly guidance to force long-term thinking. What would the equivalent signal be in your organisation — a decision that unambiguously signals a shift to longer-term purpose-driven strategy?',
      'Unilever\'s purpose commitments are being partially reversed under new leadership. What does this tell you about the durability of purpose-driven strategy in public companies? What governance structures would make it more durable?',
      'Map your organisation\'s actual purpose tensions: Where do genuine conflicts arise between shareholder value, employee wellbeing, environmental impact, and community benefit? Which tensions do you avoid discussing explicitly?',
    ]
  },
  exercise: {
    title: 'Purpose and Stakeholder Mapping',
    intro: 'Map your organisation\'s real purposes and stakeholder landscape to surface hidden strategic tensions.',
    steps: [
      'Purpose Audit: List every claim to purpose your organisation makes — in its mission statement, marketing, investor materials, and employee communications. For each, ask: Is this reflected in how we allocate budget? In decisions made under pressure? In what we refuse to do? Separate authentic purpose from aspiration.',
      'Stakeholder Map: List every group that affects or is affected by your organisation. Plot them on a 2×2 matrix: Interest (low–high) × Influence (low–high). Identify your top 5 priority stakeholders (high on both axes).',
      'For each priority stakeholder, document: What do they want from us? What do we want from them? Where do our interests align? Where do they conflict? What would a win-win look like?',
      'Identify your single most significant purpose tension: the trade-off that comes up most often in leadership discussions and is most avoided. Write a one-page brief: What is the tension? What are the arguments on each side? What would a principled resolution look like? Bring it to a leadership conversation.',
    ]
  },
  quiz: [
    { q: 'Milton Friedman\'s 1970 doctrine of shareholder primacy argued that:', opts: ['Corporations should balance the interests of all stakeholders equally','The sole social responsibility of a business is to increase its profits for shareholders','Corporations bear primary responsibility for solving social problems','Managers should pursue long-term value over short-term shareholder returns'], ans: 1 },
    { q: 'Authentic purpose in an organisation is most reliably revealed by:', opts: ['The quality of the purpose statement in the annual report','What the organisation sacrifices — what it chooses not to do — when commercial pressure is highest','The number of ESG frameworks the organisation reports against','The personal values of the CEO'], ans: 1 },
    { q: 'In stakeholder mapping, the most strategically important group comprises stakeholders who are:', opts: ['Well-organised and highly visible in public media','Low interest but high influence — they can affect your strategy but rarely choose to','High interest AND high influence — significantly affected by and able to affect your strategy','The organisation\'s largest financial investors'], ans: 2 },
    { q: 'Unilever\'s "Sustainable Living Brands" grew faster than the rest of its portfolio primarily because:', opts: ['They received preferential marketing budgets','They faced less regulatory scrutiny','Consumers and customers actively preferred brands with authentic social and environmental purpose','They were priced at a premium that other Unilever brands could not command'], ans: 2 },
    { q: 'The EU\'s Corporate Sustainability Reporting Directive (CSRD) requires:', opts: ['All businesses globally to adopt a net-zero carbon target by 2030','50,000+ companies to disclose Environmental, Social, and Governance performance data','Corporations to give employees representation on company boards','Shareholders to approve all corporate purpose statements'], ans: 1 },
  ]
},

// MODULE 16 — Engaging Players (PAID)
{
  id: 16, free: false, cat: 'strategy',
  icon: '📣', duration: '3 hrs', lessons: 6,
  title: 'Engaging Players – Developing Strategy Statements That Count',
  tagline: 'Engage and communicate with a breadth of players to make your strategy count.',
  overview: `<p>A strategy that is not understood, believed, and acted upon is not a strategy — it is a document. The single most consistent failure in strategic management is the strategy that looks excellent in the boardroom and dies in translation. Leaders spend months crafting strategic plans and minutes communicating them, then are puzzled when organisations do not change direction.</p><br>
<p>Effective strategy communication is not a downstream activity — it is a core strategic capability. The organisations that execute strategy most consistently — Apple, Amazon, Netflix, Berkshire Hathaway — share a disciplined approach to strategic narrative: a clear, compelling story of where they are going, why it matters, and what each person\'s role is in getting there.</p><br>
<p>This module gives you the tools of strategic communication: how to craft a strategy statement that actually guides decisions, how to engage different stakeholder groups in the strategy, how to use OKRs and other alignment tools, and how to maintain strategic clarity through the noise and distraction of daily operations.</p>`,
  objectives: [
    'Write a strategy statement that is specific enough to guide real decisions and memorable enough to be used.',
    'Apply the "strategic narrative" framework to communicate your strategy compellingly to different audiences.',
    'Design an OKR (Objectives and Key Results) system that aligns team activities with strategic priorities.',
    'Identify the three most important audiences for your strategy communication and tailor the message for each.',
    'Evaluate the communication effectiveness of an existing strategy statement using a structured rubric.',
  ],
  concepts: [
    { title: 'The Anatomy of an Effective Strategy Statement', body: 'An effective strategy statement has three components: Objective (the end goal — what will we achieve and when?), Scope (the domain — where will we play, and where explicitly will we not?), and Advantage (the reason we will win in our chosen domain — what do we do better or differently than alternatives?). It should be: specific enough to guide trade-off decisions (if it is consistent with any decision, it is not a strategy statement), memorable enough to be recalled without reference, and motivating enough to inspire. The test: Can every employee in your organisation recite it? Do their decisions reflect it? If not, you do not have a strategy statement — you have a mission statement, which is a different and less useful thing.' },
    { title: 'Strategic Narrative: Making Strategy a Story', body: 'Humans understand and remember information as narrative — character, challenge, journey, resolution — far better than they understand and remember logical arguments or data. The most effective strategy communicators translate strategic analysis into compelling narratives. The structure: Where we have been (establishing the starting point), Why the world is changing (the external challenge that requires strategic response), What we are doing about it (the strategic choices we have made), Why this makes us better positioned than alternatives (the distinctive advantage), and What it means for you (the invitation to each stakeholder group to contribute). The Netflix culture deck — a 125-slide document that described Netflix\'s values and operating principles — is the canonical example: it has been viewed over 20 million times because it tells a coherent, honest story.' },
    { title: 'OKRs: Aligning the Organisation with Strategy', body: 'Objectives and Key Results (OKRs) — popularised by Intel\'s Andy Grove and Google\'s John Doerr — provide a framework for translating strategy into team and individual commitments. An Objective is a qualitative direction ("Create a world-class customer experience"). Key Results are 3-5 quantitative measures that would prove the Objective is achieved ("NPS rises from 42 to 65," "First response time drops from 24hrs to 2hrs"). OKRs cascade from corporate strategy through teams to individuals, creating alignment without micromanagement. The non-intuitive feature: OKRs should be set ambitiously enough that achieving 70% is considered success — 100% means your goal was too conservative. This design encourages stretch without punishing "failure" of bold goals.' },
    { title: 'Tailoring Strategy Communication to Audiences', body: 'No single strategy communication works for every audience. Board and investors: focus on strategic logic, competitive positioning, financial trajectory, and governance implications — quantitative, analytical, forward-looking. Employees: focus on purpose, their specific role, what will change in their day-to-day work, and what support is available — personal, concrete, honest about disruption. Customers and partners: focus on the value you are creating for them and why your strategic direction makes you a better partner — benefit-led, relationship-oriented. Regulators and public stakeholders: focus on societal contribution, compliance, and long-term legitimacy — responsible, evidence-based. The core strategic message must be consistent; the emphasis and language adapt.' },
    { title: 'The Cascading Strategy Conversation', body: 'Strategy communication is not a broadcast — it is a conversation at scale. The most effective approach: leaders communicate the strategic direction clearly, then invite genuine response — not compliance theatre. Each team translates the strategy into their own context, surfacing conflicts, gaps, and opportunities that senior leadership cannot see from the top. This "cascading conversation" both improves alignment (people commit more deeply to strategies they have helped shape) and improves the strategy itself (front-line knowledge corrects strategic assumptions). The leadership skills required: genuine listening, comfort with critique, and the ability to distinguish strategic feedback from operational noise.' },
  ],
  caseStudy: {
    company: 'Netflix — Culture Deck as Strategic Communication',
    title: 'The 125-Slide Presentation That Became the Most Influential HR Document in Silicon Valley',
    body: `In 2009, Netflix published its internal culture document — 125 slides describing its values, operating principles, hiring philosophy, and performance management approach — publicly on SlideShare. Sheryl Sandberg called it "the most important document to come out of Silicon Valley." It has been viewed over 20 million times.<br><br>
The document\'s power comes from its honesty. It says things that most companies think but never publish: "Adequate performance gets a generous severance package." "We want to work with people who are great at their jobs." "We pay top-of-market salaries and do not apologise for it." This radical transparency — saying the actual thing rather than the polished corporate version — created a self-selection system: people who shared Netflix\'s values applied; people who didn\'t, self-selected out. The culture deck is strategic communication doing its deepest work: shaping who joins the organisation, how they behave inside it, and what they expect from it.`,
    result: 'Netflix\'s culture document is credited with creating the cultural foundation for its transformation from DVD rental to $33B/year streaming giant — by ensuring that every hire understood and embraced the operating principles that made the transformation possible.',
    discussion: [
      'Netflix\'s culture deck is brutally honest — including things most companies would not say publicly. What would your organisation\'s equivalent honest culture document say that your current materials do not?',
      'The document creates strategic alignment by being a self-selection tool — people join because they agree with it. What is your current hiring process communicating about your organisation\'s real culture (not intended culture)?',
      'Apply the strategy statement framework: What is Netflix\'s Objective, Scope, and Advantage as expressed in the culture deck? Is it specific enough to guide real decisions?',
    ]
  },
  exercise: {
    title: 'Craft Your Strategy Statement and Narrative',
    intro: 'Write a strategy statement and two-minute narrative that would actually guide decisions in your organisation.',
    steps: [
      'Write a draft strategy statement using the three-component framework: Objective (end goal, time horizon), Scope (where you play and explicitly where you do not), Advantage (why you will win in your chosen scope). Max 75 words. Then apply the test: Would this rule out any real decision? If not, make it more specific.',
      'Identify your three most important strategic communication audiences. For each: What do they care about most? What do they fear most? What do they need to DO differently as a result of the strategy? Write one key message for each audience.',
      'Draft your two-minute strategic narrative using the five-part structure: Where we have been → Why the world is changing → What we are doing about it → Why this positions us better → What it means for you. Then deliver it out loud and time it.',
      'Design the OKR for your team for the next quarter: one Objective aligned to the strategy, three Key Results that would prove the Objective is achieved. Ask: Are these ambitious enough that 70% would require real effort? Do they connect directly to the strategic priority?',
    ]
  },
  quiz: [
    { q: 'An effective strategy statement must include which three components?', opts: ['Mission, vision, and values','Objective, scope, and advantage','SWOT analysis, financial targets, and action plan','Purpose, stakeholders, and KPIs'], ans: 1 },
    { q: 'Netflix\'s culture deck is considered effective strategic communication primarily because:', opts: ['It was beautifully designed by a top branding agency','Its radical honesty created self-selection — attracting people who shared Netflix\'s values','It was released publicly on social media, gaining viral attention','It contained a detailed 5-year financial plan'], ans: 1 },
    { q: 'In an OKR system, Key Results should be set at a level where achieving 70% is considered success because:', opts: ['This reduces pressure on teams and improves morale','It accounts for inevitable external disruptions to plans','It encourages ambitious goal-setting without punishing the failure of stretch targets','It creates room for management to override targets mid-year'], ans: 2 },
    { q: 'When communicating strategy to employees (vs. investors), the emphasis should shift towards:', opts: ['Financial returns and shareholder value','Competitive positioning and market share gains','Personal role, day-to-day impact, purpose, and support available during the change','Regulatory compliance and risk management'], ans: 2 },
    { q: 'The "cascading strategy conversation" model differs from traditional strategy communication because:', opts: ['It restricts strategy communication to senior leadership only','It translates strategy into financial targets at each level','It invites genuine response from each level, improving both alignment and the strategy itself','It eliminates the need for written strategy documents'], ans: 2 },
  ]
},

// MODULE 17 — Building Partnerships (PAID)
{
  id: 17, free: false, cat: 'strategy',
  icon: '🤝', duration: '3 hrs', lessons: 6,
  title: 'Building Partnerships – Collaborating and Competing',
  tagline: 'Leverage the value of collaboration and competition in networked strategy.',
  overview: `<p>No organisation competes alone. Every strategy is embedded in a network of suppliers, customers, complementors, regulators, and sometimes direct competitors who are simultaneously rivals and partners. The ability to build and manage strategic relationships — to collaborate effectively without losing competitive edge — is among the most valuable and least taught strategic capabilities.</p><br>
<p>Co-opetition — the simultaneous collaboration and competition between firms — has become the norm in technology, pharmaceuticals, standards development, and sustainability. Apple and Samsung compete fiercely in smartphones; Samsung supplies $15 billion of components to Apple annually. Pharmaceutical companies share clinical trial data to win regulatory approval while competing intensely for market share. The skill is not choosing between competition and collaboration — it is managing both simultaneously.</p><br>
<p>This module covers the full spectrum of partnership strategy: from informal knowledge-sharing and standards collaboration, through formal alliances and joint ventures, to platform ecosystem orchestration. You will develop frameworks for deciding when to collaborate, with whom, on what terms, and how to manage the governance and trust challenges that all partnerships face.</p>`,
  objectives: [
    'Explain the co-opetition framework and identify examples of simultaneous collaboration and competition.',
    'Apply the alliance portfolio framework to evaluate a set of strategic partnerships.',
    'Design governance structures for a strategic alliance that balance flexibility with accountability.',
    'Identify the conditions under which ecosystem orchestration creates more value than vertical integration.',
    'Assess the network effects in your industry and develop a partnership strategy to leverage them.',
  ],
  concepts: [
    { title: 'Co-opetition: The Competitive Collaboration Paradox', body: 'Adam Brandenburger and Barry Nalebuff coined "co-opetition" to describe the game-theoretic reality that firms can simultaneously be competitors (in the market for customers) and complementors (in the creation of value that benefits both). Apple and Samsung — fierce smartphone competitors — have co-opeted for years: Samsung\'s OLED displays, processors, and memory chips are essential to Apple\'s products, generating billions for Samsung. The strategic insight: the pie can be grown (value creation) and divided (value capture) simultaneously, and the best competitive strategies often involve growing the pie with others before competing for a larger slice of it.' },
    { title: 'Alliance Portfolio Management', body: 'Most large organisations manage dozens of simultaneous alliances, from loose information-sharing agreements to deep joint ventures. Alliance portfolio management requires viewing relationships not in isolation but as a system: Are alliances complementary or overlapping? Do they collectively cover the capability gaps in your strategy? Are you over-dependent on any single partner? Are some alliances preventing you from doing better deals with their competitors? The portfolio perspective also reveals learning opportunities: firms with larger alliance portfolios develop superior alliance management capabilities — skills in partner selection, contract design, governance, and relationship maintenance — that become a source of competitive advantage.' },
    { title: 'Ecosystem Orchestration vs. Vertical Integration', body: 'Vertical integration — owning more of the value chain — was the dominant 20th century strategic logic: control critical inputs and distribution. Ecosystem orchestration — governing a network of partners who co-create value — is the dominant 21st century logic for scalable businesses. The choice between them hinges on four questions: How fast is the environment changing? (Fast → ecosystem, because internal capabilities cannot adapt quickly enough.) How important is proprietary control of the capability? (Critical differentiator → keep internal. Generic → partner.) How strong are the network effects in the ecosystem? (Strong → orchestrate.) What is your governance capability? (Poor alliance management → consider integration.) Amazon and Apple orchestrate ecosystems with millions of partners. Tesla vertically integrates batteries and software because they are core to differentiation.' },
    { title: 'Alliance Governance: Balancing Trust and Contracts', body: 'Alliances fail most commonly for governance reasons, not strategic ones. The three most common failures: misaligned incentives (partners benefit unequally from the alliance over time), capability leakage (partners inadvertently transfer capabilities to partners who become competitors), and relationship decay (initial champion-level relationships atrophy as the alliance matures and is managed at lower levels). Effective alliance governance combines formal mechanisms (contracts, governance boards, performance metrics, exit clauses) with relational mechanisms (executive sponsorship, regular touchpoints, joint team identity). Neither alone is sufficient: contracts without trust become adversarial; trust without contracts is fragile when interests diverge.' },
    { title: 'Network Effects and Partnership Strategy', body: 'In markets with strong network effects — where the product or platform becomes more valuable as more people use it — partnership strategy can accelerate scale dramatically. Microsoft\'s dominance of PC software in the 1980s was achieved not just by building Windows, but by partnering with hardware manufacturers (IBM first, then the entire PC ecosystem) so that Windows was available everywhere, increasing its value through ubiquity. Establishing your technology, protocol, or platform as the ecosystem standard through aggressive partnering — even at the cost of short-term margin — can create winner-take-most dynamics. The open-source strategy of giving away core technology to build ecosystem lock-in is the modern version of this playbook.' },
  ],
  caseStudy: {
    company: 'Spotify & Apple — Co-opetition in Streaming',
    title: 'When Your Biggest Distribution Partner Is Also Your Fiercest Competitor',
    body: `Spotify needs Apple\'s App Store to reach iPhone users — Apple\'s iPhone accounts for approximately 50% of Spotify\'s premium subscribers. Apple takes 30% of all App Store subscription revenue in year one and 15% thereafter. Apple Music is a direct competitor to Spotify. Apple deliberately restricts what Spotify can do in its app (no in-app purchase links that bypass the App Store, limiting communication about pricing differences). Spotify has filed antitrust complaints with the EU against Apple, which fined Apple €1.8 billion for competition law violations in the Spotify case.<br><br>
Yet the relationship continues, because neither can afford to walk away: Spotify cannot reach half its potential market without the App Store; Apple cannot afford to remove the app that is one of the most downloaded on its platform. This is co-opetition at its most extreme — a relationship that is simultaneously essential, exploitative, and adversarial.`,
    result: 'The EU fined Apple €1.8 billion in March 2024 for its anti-competitive behaviour in the Spotify case — the first major regulatory enforcement of co-opetition governance in the streaming era.',
    discussion: [
      'Spotify\'s strategic dilemma — needing Apple\'s platform while Apple competes with it — has no clean solution. What options does Spotify have to reduce this dependence without abandoning the iPhone market?',
      'Apple argues that the App Store fee is fair compensation for the platform investment it made. Spotify argues it creates an unfair disadvantage. How should regulators weigh platform investment returns against competitive fairness?',
      'Map a co-opetition dynamic in your own industry: Who are you simultaneously collaborating with and competing against? Is the balance of the relationship sustainable? What would change it?',
    ]
  },
  exercise: {
    title: 'Partnership Canvas',
    intro: 'Design a structured analysis of your current and potential strategic partnerships.',
    steps: [
      'Partnership audit: List all significant relationships your organisation has — suppliers, customers, distributors, technology partners, joint ventures, industry associations, academic collaborators. For each, categorise: Pure supplier, Pure customer, Complementor, Co-opetitor, or Ecosystem partner.',
      'For your top 5 partnerships, assess: Strategic importance (1–5), Relationship health (1–5), Alignment of interests (1–5), Governance quality (1–5). Identify the one partnership where strategic importance is high but health/alignment is low — this is your priority.',
      'Identify one partnership you should build that you currently do not have: a complementor whose capabilities would accelerate your strategy. Define what value you offer them and what value you need from them.',
      'Design a governance blueprint for your most important existing partnership: What are the performance metrics? How are conflicts resolved? What is the exit clause? Who are the executive sponsors on each side? When do you review the relationship? Use this as a template for upgrading the governance of your other key alliances.',
    ]
  },
  quiz: [
    { q: 'Co-opetition describes the situation where two organisations:', opts: ['Compete aggressively in all markets they share','Collaborate on all activities while avoiding competition','Simultaneously compete for customers and collaborate as complementors to create value','Merge their operations to eliminate competition between them'], ans: 2 },
    { q: 'The most common reason strategic alliances fail is:', opts: ['Technology incompatibility between partner systems','Poor governance — misaligned incentives, capability leakage, or relationship decay','Regulatory prohibition of the partnership','Cultural differences that prevent collaboration'], ans: 1 },
    { q: 'Ecosystem orchestration is generally preferred over vertical integration when:', opts: ['The environment is stable and capabilities are core differentiators','The organisation has poor alliance management capability','The environment is fast-changing, network effects are strong, and speed of capability access matters','Capital is available and the supply chain is unreliable'], ans: 2 },
    { q: 'Microsoft\'s PC software dominance in the 1980s is a classic example of:', opts: ['Vertical integration eliminating reliance on partners','Using aggressive partnering with hardware manufacturers to establish Windows as the ecosystem standard','Acquiring competitors before they could challenge Windows','Government-supported monopoly through regulatory capture'], ans: 1 },
    { q: 'The EU fined Apple €1.8 billion in 2024 primarily related to:', opts: ['Data privacy violations under GDPR','Anti-competitive behaviour that disadvantaged Spotify in the App Store','Misleading environmental claims about iPhone manufacturing','Tax avoidance in European markets'], ans: 1 },
  ]
},

// MODULE 18 — Broadening Strategy Processes (PAID)
{
  id: 18, free: false, cat: 'strategy',
  icon: '🔄', duration: '3 hrs', lessons: 6,
  title: 'Broadening Strategy Processes – Designing New Strategy Processes',
  tagline: 'Critically reflect on transforming your strategy processes to be more inclusive and transparent.',
  overview: `<p>Strategy has traditionally been made at the top and communicated downward — a small group of senior leaders, often aided by consultants, deliberating in strategy offsites to produce plans that are then cascaded through the organisation. This model has advantages: speed, coherence, confidentiality. And systematic disadvantages: it excludes the knowledge of frontline workers who understand customers and operations, creates compliance rather than commitment, and misses the diverse perspectives that produce better decisions.</p><br>
<p>A new generation of strategy process design — driven by digital tools, a more educated workforce, and evidence that participatory processes produce better strategies — is challenging the top-down orthodoxy. Open strategy, participatory strategy, and crowd-sourced strategy are not just idealistic notions: they are being practised by leading organisations to improve both the quality of strategy and the commitment to executing it.</p><br>
<p>This module gives you the frameworks and tools to critically evaluate your current strategy process and design a more inclusive, transparent alternative. It does not argue that everyone should make every strategic decision — but that the current process is almost certainly leaving significant value on the table.</p>`,
  objectives: [
    'Critically evaluate your current strategy process against criteria of inclusivity, transparency, and knowledge integration.',
    'Apply the open strategy framework to design a more participatory strategy process.',
    'Identify which elements of strategy-making benefit from broad participation and which require focused authority.',
    'Design a strategy process that integrates digital tools for distributed participation.',
    'Manage the political and cultural challenges of transitioning from closed to open strategy processes.',
  ],
  concepts: [
    { title: 'Open Strategy: From Closed to Inclusive', body: 'The "open strategy" movement, documented by academics at Munich and Cambridge, describes a spectrum from fully closed (strategy made by a small elite, communicated to others as directive) to fully open (strategy designed with broad participation across the organisation and beyond). Neither extreme is universally optimal: fully closed strategy misses distributed knowledge and generates compliance rather than commitment; fully open strategy risks incoherence, confidentiality breaches, and decision paralysis. The productive space is in between: selective openness, where specific strategy activities are opened to broad participation while ultimate decision authority remains clear.' },
    { title: 'Where Participation Adds Most Value', body: 'Research on participatory strategy shows consistent patterns in where broad involvement adds value and where it does not. Highest value for participation: Environmental scanning (frontline workers often see competitive and customer signals before leadership does), Problem identification (identifying what the real strategic challenges are, as opposed to leadership\'s assumptions), Generating options and ideas (diversity of perspective produces more and better strategic alternatives), and Commitment to execution (participation in strategy design correlates strongly with commitment to execution). Lowest value for broad participation: Final trade-off decisions (require accountability that distributed decision-making cannot provide), Confidential competitive intelligence, and Crisis response (speed requires central authority).' },
    { title: 'Digital Tools for Distributed Strategy', body: 'Digital platforms enable participatory strategy at a scale and speed previously impossible. Idea management platforms (IdeaScale, Brightidea, Microsoft Viva) allow thousands of employees to submit, vote on, and refine strategic ideas. Internal social networks (Yammer, Teams, Slack) enable distributed strategic conversations. Prediction markets allow employees to bet on the probability of strategic outcomes, aggregating distributed knowledge in a quantified form — often more accurate than expert forecasts. Strategy jams — intensive 72-hour online sessions where thousands of employees engage simultaneously on strategic questions — have been used by IBM, TELUS, and others to generate unprecedented breadth of strategic input.' },
    { title: 'Managing the Political Challenges of Openness', body: 'Open strategy is not only a design challenge — it is a political one. Leaders who have built power through information control face genuine loss if strategy processes become more transparent. Middle managers who serve as gatekeepers of strategic information face role erosion. Employees who participate in strategy and see their contributions ignored become more cynical than those who were never asked. The political challenges require explicit management: clear communication about what is and is not open for input, genuine feedback loops that close the loop on contributions, visible examples of ideas that shaped strategy, and leaders who demonstrate vulnerability by sharing strategic uncertainties publicly.' },
    { title: 'Inclusive Strategy and Organisational Performance', body: 'The evidence base for participatory strategy is growing. A 2019 Harvard Business Review study found that firms with more inclusive strategy processes — where employees had genuine voice in strategic decisions — had 27% higher profitability and 40% lower turnover than industry peers. McKinsey research consistently shows that diverse leadership teams make better strategic decisions. The mechanism: diverse participation surfaces a wider range of strategic options, challenge more assumptions, and identify more risks — and the commitment that comes from genuine participation improves execution quality. The business case for inclusive strategy is not ideological; it is empirical.' },
  ],
  caseStudy: {
    company: 'LEGO — Turnaround Through Inclusive Strategy',
    title: 'How a Near-Bankrupt Toymaker Rebuilt Its Strategy Through Fan and Employee Participation',
    body: `In 2003, LEGO was near bankruptcy. Its strategy had become unfocused — diversifying into theme parks, clothing, video games, and movies while losing its core identity. The turnaround began not with a McKinsey strategy report but with a radical act of openness: LEGO invited its most passionate adult fans — the LEGO Ambassador Network — into the product development process. Fan communities began proposing, voting on, and co-designing new LEGO sets through the LEGO Ideas platform.<br><br>
LEGO Ideas has produced bestselling sets including the NASA Apollo Saturn V, the Central Perk Friends set, and the Seinfeld apartment — all proposed by fans, voted on by the community, and then manufactured by LEGO with the original proposer receiving 1% of net sales. Internally, LEGO rebuilt its strategy process to involve employees from across the organisation in identifying innovation opportunities and customer insights. By 2015, LEGO was the world\'s most valuable toy brand.`,
    result: 'LEGO grew from near-bankruptcy in 2004 to the world\'s most valuable toy brand by 2015, with revenue growing from DKK 6.3 billion to DKK 35.8 billion — a 469% increase attributed significantly to the open co-creation strategy.',
    discussion: [
      'LEGO involved its most passionate external fans in product strategy. Which external stakeholders in your industry might have strategic knowledge that you are currently not accessing?',
      'LEGO Ideas gives creators 1% of net sales — a genuine economic stake in the outcome of their participation. What equivalent "stake in the outcome" could you give employees who contribute to strategy?',
      'What would it mean to make your organisation\'s strategy process 20% more open than it currently is? What one change would have the biggest impact?',
    ]
  },
  exercise: {
    title: 'Strategy Process Design Workshop',
    intro: 'Evaluate and redesign your organisation\'s strategy process using the open strategy framework.',
    steps: [
      'Current state audit: Map your current strategy process — who is involved at each stage (environmental scanning, option generation, decision-making, communication, execution monitoring)? Score each stage on inclusivity (1–5: 1 = one person decides, 5 = broadly participatory) and knowledge integration (1–5: 1 = leadership knowledge only, 5 = full organisational and external knowledge).',
      'Identify your highest-value openness opportunity: Which stage of the strategy process, if made more participatory, would most improve strategy quality? What mechanism would you use — idea platform, strategy jam, advisory board, frontline interview programme?',
      'Design a 90-day experiment in open strategy: Choose one specific strategic question to open up (not the whole strategy). Define who will participate, how contributions will be collected and evaluated, what the decision process looks like, and how you will give feedback to participants.',
      'Write a one-page "Political Management Plan" for your experiment: Who might resist more openness and why? What fears do you need to address? What signals will you send to demonstrate that participation is genuine rather than performative?',
    ]
  },
  quiz: [
    { q: 'The "open strategy" spectrum ranges from:', opts: ['Short-term operational planning to long-term strategic planning','Fully closed strategy (small elite, top-down) to fully open strategy (broad participation, distributed)','Informal strategy (values and culture) to formal strategy (plans and metrics)','Competitive strategy (positioning vs rivals) to collaborative strategy (ecosystem building)'], ans: 1 },
    { q: 'Research on participatory strategy shows the HIGHEST value for broad participation in which activity?', opts: ['Final trade-off decisions and strategic choices','Environmental scanning and option generation — activities that benefit from diverse distributed knowledge','Crisis response and rapid-decision situations','Competitive intelligence gathering and analysis'], ans: 1 },
    { q: 'LEGO\'s strategic turnaround from near-bankruptcy to the world\'s most valuable toy brand was significantly driven by:', opts: ['A major acquisition of a gaming company','Cutting product lines and refocusing exclusively on classic brick sets','Opening its product strategy to fan participation through the LEGO Ideas platform','A celebrity endorsement campaign that relaunched the LEGO brand'], ans: 2 },
    { q: 'Harvard Business Review research found that firms with more inclusive strategy processes had:', opts: ['Slower decision-making but higher decision quality','27% higher profitability and 40% lower turnover than industry peers','More consistent strategy over time but less responsiveness to market changes','Better short-term performance but weaker long-term strategic positioning'], ans: 1 },
    { q: 'The most significant political challenge of transitioning to open strategy is:', opts: ['The technology cost of implementing idea management platforms','Leaders who have built power through information control face genuine loss from greater transparency','Employees who lack strategic expertise providing low-quality strategic input','The time required to synthesise large volumes of strategic input'], ans: 1 },
  ]
},

// MODULE 19 — Strategy into Practice (PAID)
{
  id: 19, free: false, cat: 'strategy',
  icon: '📋', duration: '4 hrs', lessons: 8,
  title: 'Strategy into Practice – Assembling Your Playbook',
  tagline: 'Leverage the full Oxford view of strategy into your organisation\'s strategy practice.',
  overview: `<p>This final module is your synthesis and your starting point. Over the preceding 18 modules, you have built a comprehensive toolkit: AI and machine learning fundamentals, the full landscape of innovation strategy, and the Oxford view of competitive and corporate strategy. The question now is not what you know — it is what you will do with it.</p><br>
<p>The gap between strategy knowledge and strategy practice is vast and well-documented. Every MBA graduate knows Porter\'s Five Forces; few can honestly say they use it to make better decisions. The same risk applies to this programme. The goal of this final module is to close that gap — to help you build a personal strategy practice, not just a strategy library.</p><br>
<p>You will integrate your learning into a comprehensive Strategy Playbook: a living document that captures your strategic assessment of your organisation, the strategic choices you are recommending or making, the tools you will use to communicate and execute, and the disciplines that will keep your thinking sharp as the world continues to change. This is not the end of the programme — it is the beginning of the practice.</p>`,
  objectives: [
    'Synthesise learning from all 19 modules into a coherent personal strategic framework.',
    'Complete a full strategic assessment of your organisation using the Oxford integrated view.',
    'Design a 90-day implementation plan for your highest-priority strategic recommendation.',
    'Build a personal strategy practice — habits, tools, and disciplines — that you will actually maintain.',
    'Articulate your personal leadership development priorities emerging from this programme.',
  ],
  concepts: [
    { title: 'The Oxford Strategy Playbook: An Integrated View', body: 'The Oxford view of strategy resists reduction to any single framework. Its power lies in integration: starting with environmental foresight (working with futures), understanding industry structure (positioning), identifying internal advantage (resource-based view and dynamic capabilities), setting clear choices (where to play and how to win), engaging stakeholders (purpose and plurality), communicating with clarity (strategy statements), building the ecosystem (partnerships), designing inclusive processes (open strategy), and ensuring execution (OKRs and cascading conversations). The sophisticated strategist uses all of these not as a checklist but as a set of lenses, applying each where it illuminates most.' },
    { title: 'Microsoft\'s Strategic Transformation: A Complete Case', body: 'When Satya Nadella became CEO of Microsoft in 2014, the company was widely regarded as past its peak — a PC-era company struggling in a mobile and cloud world. The strategic transformation Nadella led is the most complete recent example of the full Oxford strategy playbook in action: Environmental foresight (betting on cloud before it was obvious); Resource-based repositioning (Azure built on Microsoft\'s enterprise relationships and data centre infrastructure — VRIN capabilities); New strategic choices ("mobile-first, cloud-first" — a clear where-to-play decision); Purpose shift (from "a PC on every desk" to "empower every person and organisation on the planet"); Partnership revolution (open-sourcing software, partnering with former enemies like Linux, SAP, and Salesforce); and Cultural transformation (from "fixed mindset" (Stack ranking culture) to "growth mindset" (psychological safety and learning)).' },
    { title: 'AI and Strategy: The Intersection', body: 'This programme has run two parallel tracks — AI and strategy — that intersect in increasingly important ways. AI is not just a technology for the strategy to incorporate; it is beginning to change strategy itself. AI tools are being used for environmental scanning (processing vast amounts of competitive intelligence), scenario planning (running simulations of strategic options), stakeholder analysis (sentiment analysis at scale), and strategy communication (personalising strategic narratives for different audiences). The deeper intersection: as AI automates routine cognitive work, the comparative advantage of human leaders shifts toward judgment, creativity, ethical reasoning, and relationship-building — precisely the capabilities this programme has been developing.' },
    { title: 'Building a Personal Strategy Practice', body: 'Strategy is not a once-a-year planning exercise; it is a habit of thinking. The leaders with the strongest strategic judgment — those who consistently make better decisions than their peers — maintain disciplined practices that keep their thinking sharp. Regular practices of effective strategists: Weekly reading of at least one source outside their industry (peripheral vision). Monthly reflection on one assumption they are currently making that might be wrong. Quarterly review of their competitive landscape for weak signals of change. Annual review of their organisation\'s strategy against multiple scenarios. Ongoing dialogue with customers, frontline employees, and contrarian thinkers who challenge their dominant logic. These practices are individually simple and collectively transformative.' },
    { title: 'Your Strategy Playbook: A Living Document', body: 'A strategy playbook is not a plan — plans become obsolete. It is a set of strategic commitments (where we play and how we win), analytical tools (which frameworks we use and when), communication assets (our strategy statement, our narrative, our OKRs), relationship maps (our stakeholder and partnership landscape), and review disciplines (how often, with whom, using what data we review our strategic thinking). The key feature of a living playbook: it is updated continuously as the environment evolves, not rewritten annually. The goal is strategic agility — the ability to adjust while maintaining coherent direction — rather than strategic rigidity (never changing) or strategic volatility (changing constantly).' },
  ],
  caseStudy: {
    company: 'Microsoft — Strategic Transformation Under Satya Nadella',
    title: 'The Complete Oxford Strategy Playbook, Applied',
    body: `Microsoft in 2014: a $300B market cap company, dominant in a declining PC market, losing ground in mobile (no meaningful position), cloud (AWS was dominant), and consumer (Apple and Google had won). Every external analysis suggested structural decline. Nadella\'s transformation, in strategic terms: he identified that Microsoft\'s VRIN capabilities (enterprise relationships, Active Directory identity infrastructure, massive installed base) were the foundation for cloud, not a constraint from the past. He made a binary strategic choice: mobile-first, cloud-first — abandoning the defence of Windows PC dominance. He built an ecosystem through radical openness: open-sourcing .NET, buying GitHub (the developer community), partnering with Linux and Salesforce rather than fighting them. He changed the culture by replacing stack ranking (which rewarded individual competition at the expense of collaboration) with a growth mindset framework (which rewarded learning and collaboration).<br><br>
By 2024, Microsoft\'s market cap had grown from $300B to $3 trillion — the world\'s most valuable company — driven by Azure (cloud), Microsoft 365 (subscription), GitHub (developer community), and $13B in OpenAI partnership giving it a central position in the AI era.`,
    result: 'Microsoft grew from $300B market cap in 2014 to $3 trillion in 2024 — a 10x increase — through a complete strategic transformation that applied every dimension of the Oxford strategy view: foresight, resource-based repositioning, clear strategic choices, ecosystem partnerships, cultural transformation, and purposeful leadership.',
    discussion: [
      'Nadella reversed a decade of "Microsoft as the enemy of open source." What does this tell you about the permanence of strategic positions? What was the sequence of steps that made the reversal credible?',
      'Microsoft\'s $13B investment in OpenAI secured its position in the AI era. Evaluate this using the dynamic capabilities lens: Was it Sensing (recognising the AI opportunity), Seizing (moving faster than competitors), or Reconfiguring (integrating AI into all of Microsoft\'s products)?',
      'Of all the tools in the Oxford strategy playbook — from VRIN analysis to scenario planning to open strategy — which one do you think Nadella used most critically? Which one could you apply most immediately in your own context?',
    ]
  },
  exercise: {
    title: 'Build Your Complete Strategy Playbook',
    intro: 'Your final exercise: synthesise everything into a Strategy Playbook for your organisation or context. This is your programme capstone.',
    steps: [
      'Strategic Assessment (Oxford Integrated): Complete a one-page assessment integrating: PESTLE (3 most critical forces), Five Forces (industry profitability structure), VRIN (your 3 strongest capabilities), Stakeholder Map (top 5 priority stakeholders), and Dynamic Capability Rating (Sensing/Seizing/Reconfiguring, 1–5 each). What does the integration tell you?',
      'Strategic Choice: Write your organisation\'s strategy statement (Objective + Scope + Advantage, max 75 words). Identify 3 strategic choices this implies — decisions where pursuing this strategy means choosing one option over others. Confirm that each choice is real (it rules something out) not aspirational (it is consistent with everything).',
      'Implementation Plan: Choose your highest-priority strategic recommendation. Design a 90-day plan: Month 1 (build the case — what evidence do you need to gather?), Month 2 (engage stakeholders — who do you need to align and how?), Month 3 (pilot and measure — what is your MVP experiment and what does success look like?).',
      'Personal Strategy Practice: Write your personal strategy discipline commitments: (1) One practice you will do weekly, (2) One practice monthly, (3) One practice quarterly. Make each specific and observable. Share them with someone who will hold you accountable. Congratulations — you have completed the AI & Innovation Leadership Mastery Programme.',
    ]
  },
  quiz: [
    { q: 'When Satya Nadella became CEO in 2014, Microsoft\'s primary VRIN capability that formed the foundation for cloud strategy was:', opts: ['Its dominant position in mobile operating systems','Its gaming division (Xbox)','Enterprise relationships and Active Directory identity infrastructure built during the PC era','Its hardware manufacturing capability'], ans: 2 },
    { q: 'A "living strategy playbook" differs from a traditional strategic plan primarily because:', opts: ['It is shorter and more focused on key points','It is updated continuously as the environment evolves rather than rewritten annually','It is publicly shared with all employees from the start','It focuses on financial targets rather than strategic positioning'], ans: 1 },
    { q: 'The intersection of AI and strategy described in this module suggests that as AI automates routine cognitive work, the comparative advantage of human leaders shifts towards:', opts: ['Technical AI implementation and data science','Financial modelling and quantitative analysis','Judgment, creativity, ethical reasoning, and relationship-building','Operational management and process optimisation'], ans: 2 },
    { q: 'Microsoft\'s acquisition of GitHub and open-sourcing of .NET is best understood as:', opts: ['A cost-reduction initiative that eliminated proprietary development overhead','An ecosystem partnership strategy to build the developer community and reduce competitive resistance','A defensive move to prevent competitors from acquiring GitHub','A regulatory compliance response to antitrust concerns'], ans: 1 },
    { q: 'A personal strategy practice of reviewing your competitive landscape quarterly for weak signals is designed to develop which strategic capability?', opts: ['Dynamic reconfiguration — restructuring assets in response to change','Operational efficiency — executing current strategy faster','Strategic peripheral vision — sensing emerging opportunities and threats before they become obvious','Alliance management — identifying new partnership opportunities'], ans: 2 },
  ]
}

];

export const CATEGORIES = [
  { key: 'ai' as const,         label: 'AI & Machine Learning', ids: [1, 2, 3, 4, 5, 6] },
  { key: 'innovation' as const, label: 'Innovation',            ids: [7, 8, 9, 10, 11, 12] },
  { key: 'strategy' as const,   label: 'Strategy',              ids: [13, 14, 15, 16, 17, 18, 19] },
];

export function getModule(id: number): Module | undefined {
  return MODULES.find((m) => m.id === id);
}
