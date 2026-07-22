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
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-complete-agentic-ai-engineering-course-2025",
          title: 'The Complete Agentic AI Engineering Course (2025)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/agentic-ai/";
            },},{id: "books-atomic-habits",
          title: 'Atomic Habits',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/atomicHabits/";
            },},{id: "books-aws-certified-machine-learning-engineer-associate",
          title: 'AWS Certified Machine Learning Engineer Associate',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/aws/";
            },},{id: "books-designing-data-intensive-applications",
          title: 'Designing Data Intensive Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ddia/";
            },},{id: "books-deep-learning-with-python",
          title: 'Deep Learning with Python',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dl/";
            },},{id: "books-good-to-great",
          title: 'Good to Great',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodToGreat/";
            },},{id: "books-hands-on-machine-learning-with-scikit-learn-keras-and-tensorflow",
          title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/homl/";
            },},{id: "books-machine-learning-system-design-interview",
          title: 'Machine Learning System Design Interview',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ml-sd/";
            },},{id: "books-speech-and-language-processing",
          title: 'Speech and Language Processing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/nlp/";
            },},{id: "books-power-of-now",
          title: 'Power of Now',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/powerOfNow/";
            },},{id: "books-stanford-cs224n-nlp-with-deep-learning",
          title: 'Stanford CS224N NLP with Deep Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/stanford-nlp/";
            },},{id: "books-deeplearning-ai-tensorflow-developer-professional-certificate",
          title: 'DeepLearning.AI TensorFlow Developer Professional Certificate',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tensorflow/";
            },},{id: "news-landed-in-south-korea-for-my-double-degree-exchange-program-looking-forward-to-an-exciting-two-years-of-learning-and-growth",
          title: 'Landed in South Korea for my double degree exchange program. Looking forward to...',
          description: "",
          section: "News",},{id: "news-excited-to-start-my-first-research-internship-at-the-intelligent-signal-processing-lab-i-ll-be-working-on-facial-emotion-recognition-using-deep-learning-and-can-t-wait-to-dive-into-ai-research-until-october-31-2021",
          title: 'Excited to start my first research internship at the Intelligent Signal Processing Lab!...',
          description: "",
          section: "News",},{id: "news-published-an-international-conference-paper-foreground-extraction-based-facial-emotion-recognition-using-deep-learning-xception-model-at-the-2021-twelfth-international-conference-on-ubiquitous-and-future-networks-icufn-in-jeju-island-korea-excited-to-share-our-work",
          title: 'Published an international conference paper, Foreground Extraction Based Facial Emotion Recognition Using Deep...',
          description: "",
          section: "News",},{id: "news-beginning-my-internship-at-the-center-for-high-energy-physics-assisting-with-data-extraction-from-particle-physics-experiments-and-training-neural-networks-to-classify-photons-from-background-signals",
          title: 'Beginning my internship at the Center for High Energy Physics, assisting with data...',
          description: "",
          section: "News",},{id: "news-joined-the-vision-and-intelligent-systems-lab-conducting-research-and-developing-deep-learning-models-for-videofluoroscopic-swallowing-studies-vfss-to-enhance-ai-driven-rehabilitation",
          title: 'Joined the Vision and Intelligent Systems Lab. Conducting research and developing deep learning...',
          description: "",
          section: "News",},{id: "news-thrilled-to-have-graduated-from-christ-university-with-a-bachelor-of-technology-in-computer-science-and-engineering-earning-first-class-with-distinction",
          title: 'Thrilled to have graduated from Christ University with a Bachelor of Technology in...',
          description: "",
          section: "News",},{id: "news-graduated-from-kyungpook-national-university-with-a-bachelor-of-science-in-engineering-in-the-school-of-computer-science-and-engineering",
          title: 'Graduated from Kyungpook National University with a Bachelor of Science in Engineering in...',
          description: "",
          section: "News",},{id: "news-joining-usc-to-pursue-my-master-of-science-in-computer-science",
          title: 'Joining USC to pursue my Master of Science in Computer Science.',
          description: "",
          section: "News",},{id: "news-my-first-author-journal-paper-comparative-analysis-of-deep-learning-architectures-for-penetration-and-aspiration-detection-in-videofluoroscopic-swallowing-studies-is-now-published-in-ieee-access",
          title: 'My first-author journal paper, Comparative Analysis of Deep Learning Architectures for Penetration and...',
          description: "",
          section: "News",},{id: "news-started-working-at-usc-neuroimaging-and-informatics-institute-loni-focusing-on-ml-for-white-matter-hyperintensity-segmentation-to-aid-alzheimer-s-detection-adni-i-will-be-there-until-july-31-2024",
          title: 'Started working at USC Neuroimaging and Informatics Institute (LONI), focusing on ML for...',
          description: "",
          section: "News",},{id: "news-just-graduated-from-usc",
          title: 'Just graduated from USC! 🎓',
          description: "",
          section: "News",},{id: "news-excited-to-start-a-software-engineer-for-analytics-internship-at-easley-dunn-productions-inc-contributing-to-the-mediverse-vr-project-i-ll-be-working-on-building-analytics-pipelines-and-turning-vr-data-into-actionable-insights",
          title: 'Excited to start a Software Engineer for Analytics internship at Easley Dunn Productions,...',
          description: "",
          section: "News",},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-gan-driven-facial-expression-augmentation",
          title: 'GAN-Driven Facial Expression Augmentation',
          description: "Animating static facial images using a First Order Motion GAN model for photorealistic facial expression augmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/GAN/";
            },},{id: "projects-ai-research-agent-rag-system",
          title: 'AI Research Agent (RAG System)',
          description: "An agentic RAG pipeline integrating multiple LLMs with LangChain, RESTful APIs, and custom tools for automated research workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RAG_Agent/";
            },},{id: "projects-robinhood-clone-stock-trading-platform",
          title: 'Robinhood Clone (Stock Trading Platform)',
          description: "Full-stack stock trading platform with real-time market data, portfolio management, and simulated trading.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Robinhood_Clone/";
            },},{id: "projects-depression-detection-with-audio-text-transformers",
          title: 'Depression Detection with Audio-Text Transformers',
          description: "Multi-modal transformer approach for detecting depression from audio and text.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/depression-detection/";
            },},{id: "projects-sentiment-analysis-with-distilbert",
          title: 'Sentiment Analysis with DistilBERT',
          description: "Finetuning DistilBERT for sentiment classification using PyTorch and Hugging Face Transformers with custom training pipelines.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sentiment-analysis/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%69%6E%74%68%61%6C@%75%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sreya8", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37088966640/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sreyareddy", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BbmbQMoAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-resume_url',
        title: 'Resume_url',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },];
