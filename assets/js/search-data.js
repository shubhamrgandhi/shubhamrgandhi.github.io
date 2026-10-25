// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order. * denotes equal contribution. See also my Google Scholar profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Last updated September 2026. Click the PDF icon for the full two-page CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-paper-on-strong-weak-model-collaboration-for-repo-level-code-generation-is-accepted-to-emnlp-2025",
          title: 'Our paper on strong-weak model collaboration for repo-level code generation is accepted to...',
          description: "",
          section: "News",},{id: "news-when-agents-go-astray-on-course-correcting-swe-agents-with-process-reward-models-is-accepted-at-the-sea-workshop-at-neurips-2025",
          title: 'When Agents go Astray, on course-correcting SWE agents with process reward models, is...',
          description: "",
          section: "News",},{id: "news-completed-my-m-s-in-intelligent-information-systems-at-cmu",
          title: 'Completed my M.S. in Intelligent Information Systems at CMU.',
          description: "",
          section: "News",},{id: "news-leading-the-cmu-red-team-in-the-amazon-nova-ai-challenge-2026-trusted-software-agents-track-our-team-received-a-250k-research-grant",
          title: 'Leading the CMU red team in the Amazon Nova AI Challenge 2026, Trusted...',
          description: "",
          section: "News",},{id: "news-hybrid-gym-on-training-coding-agents-to-generalize-across-tasks-is-accepted-to-icml-2026",
          title: 'Hybrid-Gym, on training coding agents to generalize across tasks, is accepted to ICML...',
          description: "",
          section: "News",},{id: "news-started-my-ph-d-in-language-technologies-at-cmu-tada",
          title: 'Started my Ph.D. in Language Technologies at CMU! :tada:',
          description: "",
          section: "News",},{id: "news-evaluating-code-slop-in-long-horizon-coding-agents-is-accepted-at-the-workshop-on-agent-behavior-at-colm-2026",
          title: 'Evaluating Code Slop in Long-Horizon Coding Agents is accepted at the Workshop on...',
          description: "",
          section: "News",},{id: "news-steer-don-t-solve-on-training-small-critic-models-for-large-code-agents-is-accepted-to-emnlp-2026-as-an-oral-presentation",
          title: 'Steer, Don’t Solve, on training small critic models for large code agents, is...',
          description: "",
          section: "News",},{id: "news-new-preprint-from-my-ibm-research-internship-draco-fine-grained-credit-assignment-with-dynamic-rubrics-for-long-horizon-agent-training",
          title: 'New preprint from my IBM Research internship: DRACO, fine-grained credit assignment with dynamic...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%72%67%61%6E%64%68%69@%61%6E%64%72%65%77.%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=F3_vmWUAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shubhamrgandhi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shubham-gandhi-70536619a", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Shubham_Gandhi_CV.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
