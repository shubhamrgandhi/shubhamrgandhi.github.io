---
layout: about
title: about
permalink: /
subtitle: <a href="https://lti.cs.cmu.edu/">Language Technologies Institute, Carnegie Mellon University</a>. <a href="mailto:srgandhi@andrew.cmu.edu">srgandhi@andrew.cmu.edu</a>

profile:
  align: right
  image: myphoto.jpeg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Gates and Hillman Centers</p>
    <p>5000 Forbes Ave</p>
    <p>Pittsburgh, PA 15213, USA</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
---

I am a first-year Ph.D. student at the [Language Technologies Institute](https://lti.cs.cmu.edu/) of Carnegie Mellon University, where I am advised by [Carolyn Rosé](https://cp3a.github.io/) and work on **efficiency and reliability in LLM agents**. I completed my M.S. in Intelligent Information Systems at CMU in December 2025, and my B.E. in Computer Science at BITS Pilani, Goa.

I have spent two summers at [IBM Research](https://research.ibm.com/) working on process supervision for SWE agents. Before CMU, I was a Research Fellow at [TCS Research](https://www.tcs.com/what-we-do/research) and a Research Intern at [Microsoft Research India](https://www.microsoft.com/en-us/research/lab/microsoft-research-india/).

My research asks how to make long-horizon coding agents **reliable and secure**:

* **Process supervision for long-horizon agents.** I build process reward models and rubric-based credit assignment that course-correct agent trajectories at inference time and provide fine-grained training signal, and I study which training environments help coding agents generalize.<br>
[SWE-PRM](https://research.ibm.com/publications/when-agents-go-astray-course-correcting-swe-agents-with-prms) (SEA @ NeurIPS'25) · [DRACO](https://arxiv.org/abs/2609.04094) (preprint) · [Hybrid-Gym](https://openreview.net/pdf?id=2TVSJxxz9u) (ICML'26)

* **Efficiency and failure mitigation.** I design lightweight critics and strong-weak collaboration schemes that steer large code agents at a fraction of the cost, and I measure wasted effort such as code slop in agent-generated patches.<br>
[Steer, Don't Solve](https://arxiv.org/abs/2606.21811) (EMNLP'26) · [Strong-Weak Collaboration](https://aclanthology.org/2025.emnlp-main.1043/) (EMNLP'25) · [Code Slop](https://openreview.net/pdf/dc1c6406b6734eaf2f5cef6166f50cc863e6f9be.pdf) (WAB @ COLM'26)

* **Reliability and security of code generation.** I work on utility-preserving defenses for code LLMs, red-teaming of code agents, and detection and repair of security vulnerabilities, including as part of the CMU team in the [Amazon Nova AI Challenge](https://www.amazon.science/nova-ai-challenge) (Trusted AI '25 finalist, Trusted Software Agents '26 red team lead).<br>
[Secure and Useful Models are Reasonable](https://www.amazon.science/nova-ai-challenge/proceedings) (Amazon Nova '25) · ABSENTIA (under review) · [StaticFixer](https://arxiv.org/abs/2307.12465) (preprint)
