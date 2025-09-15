// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Projects powered by curiosity, 3D models, and too much Celsius.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume-cv",
          title: "Resume/CV",
          description: "This page is a snapshot of my journey so far — from the classes I’ve taken and projects I’ve worked on to the skills and experiences I’m building along the way. Feel free to download my full resume as a PDF using the button above if you want to take a closer look!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "Bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
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
      },{id: "books-507-mechanical-movements",
          title: '507 Mechanical Movements',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/507-mechanical-movements/";
            },},{id: "books-brave-new-world",
          title: 'Brave New World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/brave-new-world/";
            },},{id: "books-common-stocks-and-uncommon-profits-and-other-writings",
          title: 'Common Stocks and Uncommon Profits and Other Writings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/common-stocks-and-uncommon-profits/";
            },},{id: "books-deep-work",
          title: 'Deep Work',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/deep-work/";
            },},{id: "books-elon-musk",
          title: 'Elon Musk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/elon-musk/";
            },},{id: "books-essays-in-persuasion",
          title: 'Essays in Persuasion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/essays-in-persuasion/";
            },},{id: "books-factfulness-ten-reasons-we-re-wrong-about-the-world",
          title: 'Factfulness: Ten Reasons We’re Wrong About the World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/factfulness/";
            },},{id: "books-fundamentals-of-vehicle-dynamics",
          title: 'Fundamentals of Vehicle Dynamics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/fundamentals_of_vehicle_dynamics/";
            },},{id: "books-how-to-build-a-car",
          title: 'How to Build a Car',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/how_to_build_a_car/";
            },},{id: "books-i-will-teach-you-to-be-rich",
          title: 'I Will Teach You to Be Rich',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/i-will-teach-you-to-be-rich/";
            },},{id: "books-jane-eyre",
          title: 'Jane Eyre',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/jane-eyre/";
            },},{id: "books-kafka-on-the-shore",
          title: 'Kafka on the Shore',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/kafka-on-the-shore/";
            },},{id: "books-machinery-s-handbook",
          title: 'Machinery’s Handbook',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/machinerys-handbook/";
            },},{id: "books-man-s-search-for-meaning",
          title: 'Man’s Search for Meaning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mans-search-for-meaning/";
            },},{id: "books-never-let-me-go",
          title: 'Never Let Me Go',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/never-let-me-go/";
            },},{id: "books-norwegian-wood",
          title: 'Norwegian Wood',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/norwegian-wood/";
            },},{id: "books-power-play",
          title: 'Power Play',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/power-play/";
            },},{id: "books-sketching-drawing-techniques-for-product-designers",
          title: 'Sketching: Drawing Techniques for Product Designers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sketching_drawing_techniques/";
            },},{id: "books-skunk-works-a-personal-memoir-of-my-years-of-lockheed",
          title: 'Skunk Works: A Personal Memoir of My Years of Lockheed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/skunk-works/";
            },},{id: "books-superintelligence",
          title: 'Superintelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/superintelligence/";
            },},{id: "books-the-7-habits-of-highly-effective-people",
          title: 'The 7 Habits of Highly Effective People',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the-7-habits-of-highly-effective-people/";
            },},{id: "books-the-80-20-principle",
          title: 'The 80/20 Principle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the-80-20-principle/";
            },},{id: "books-the-beginning-of-infinity",
          title: 'The Beginning of Infinity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the-beginning-of-infinity/";
            },},{id: "books-the-design-of-everyday-things",
          title: 'The Design of Everyday Things',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the-design-of-everyday-things/";
            },},{id: "books-the-fault-in-our-stars",
          title: 'The Fault in Our Stars',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the-fault-in-our-stars/";
            },},{id: "books-the-leader-in-you",
          title: 'The Leader in You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the-leader-in-you/";
            },},{id: "books-the-snowball",
          title: 'The Snowball',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the-snowball/";
            },},{id: "books-the-wealth-of-nations",
          title: 'The Wealth of Nations',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the-wealth-of-nations/";
            },},{id: "books-the-devotion-of-suspect-x",
          title: 'The Devotion of Suspect X',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_devotion_of_suspect_x/";
            },},{id: "books-the-nvidia-way",
          title: 'The Nvidia Way',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_nvidia_way/";
            },},{id: "books-the-silent-patient",
          title: 'The Silent Patient',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_silent_patient/";
            },},{id: "books-to-kill-a-mockingbird",
          title: 'To Kill a Mockingbird',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/to-kill-a-mockingbird/";
            },},{id: "books-turtles-all-the-way-down",
          title: 'Turtles All the Way Down',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/turtles-all-the-way-down/";
            },},{id: "books-will-grayson-will-grayson",
          title: 'Will Grayson, Will Grayson',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/will-grayson-will-grayson/";
            },},{id: "books-zero-to-one",
          title: 'Zero to One',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/zero-to-one/";
            },},{id: "projects-universal-antenna-remounting-system-e004",
          title: 'Universal Antenna Remounting System E004',
          description: "High-precision GPS antenna mount for satellite and drone tracking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-hybrid-powered-go-kart",
          title: 'Hybrid-Powered Go-Kart',
          description: "A hybrid drivetrain go-kart integrating IC and electric motor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
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
            },},{id: "projects-tie-fighter-with-blender",
          title: 'TIE Fighter with Blender',
          description: "A CAD + Blender modeling project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/TIE_fighter/";
            },},{id: "projects-character-head-with-blender",
          title: 'Character Head with Blender',
          description: "A CAD + Blender modeling project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/character_head/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6F%6F%6E%79%6F%75%6E%67%6B%77%6F%6E%32%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/soonyoungkwon23", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/youngkprivate", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/soonyoungkwon", "_blank");
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
