import Image from "next/image";

const projects = [
  {
    title: "UBC Clubs Hiring Platform",
    tag: "React Native, Node.js, SQL, Expo, JavaScript",
    description:
      "Built a full-stack hiring platform to centralize UBC club job postings, with REST APIs, input validation, a normalized PostgreSQL schema on Supabase, RLS policies, and Vercel CI/CD deployment.",
    links: [
      {
        label: "Project",
        href: "https://ubc-club-hiring-platform-s.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/ss0ph1/UBC-Club-Hiring-Platform",
      },
    ],
  },
  {
    title: "InsightUBC",
    tag: "TypeScript, Node.js, Express, REST APIs, Testing",
    description:
      "Implemented a dataset ingestion pipeline and paginated REST API for course and facilities exploration, supporting advanced query operations, async processing, and black-box regression testing.",
    links: [],
  },
  {
    title: "HoopCoach AI",
    tag: "AI, Basketball Training, Full-Stack Development",
    description:
      "Built an AI-powered basketball coaching app that generates personalized workouts from player goals, available time, skill level, equipment, and feedback.",
    links: [
      {
        label: "Project",
        href: "https://hoopcoach-ai-frontend.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/ss0ph1/HoopCoach-AI",
      },
    ],
  },
  {
    title: "Planetz Android App",
    tag: "Android, Java, XML, Firebase, JUnit",
    description:
      "Developed a habit-tracking Android application in a 5-person Agile team with registration, search, recommendations, notifications, progress tracking, and 100 percent test coverage on registration and login.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ss0ph1/PlanetZ",
      },
    ],
  },
];

const toolkit = [
  "Java",
  "Python",
  "C",
  "JavaScript",
  "TypeScript",
  "SQL",
  "MySQL",
  "React",
  "React Native",
  "Node.js",
  "Express",
  "Android SDK",
  "Docker",
  "Firebase",
  "Git",
  "JIRA",
];

const experience = [
  {
    role: "Android Frontend Engineer Intern",
    company: "Six Degrees LLC",
    period: "Jun 2025 - Aug 2025",
    points: [
      "Implemented 28 Android UI pages and interactive flows in Java using Android SDK, MVVM, and Jetpack.",
      "Integrated Google Maps API and Amazon Kinesis Video Streams with WebRTC for location and real-time communication features.",
      "Wrote JUnit tests for core registration and login features and supported UI testing to improve app quality.",
    ],
  },
];

const education = [
  {
    school: "University of British Columbia",
    detail: "Bachelor of Science, Computer Science Major",
    meta: "Vancouver, BC • Sep 2025 - Present • Expected graduation: Apr 2028",
  },
  {
    school: "University of Toronto",
    detail: "International Scholar Scholarship • Cumulative GPA: 3.85",
    meta: "Toronto, ON • 2023 - 2025",
  },
];

const developerTools = [
  "Git",
  "Docker",
  "GitHub",
  "Visual Studio Code",
  "Android Studio",
  "Firebase",
  "JIRA",
  "REST APIs",
  "JUnit",
];

const hobbies = ["Basketball", "Volleyball", "Guitar"];

const hobbyPhotos = [
  {
    src: "/hobbies/photo-1.jpg",
    alt: "Sophie with her basketball team.",
  },
  {
    src: "/hobbies/photo-2.JPG",
    alt: "Sophie with a basketball championship team photo.",
  },
  {
    src: "/hobbies/photo-3.JPG",
    alt: "A hobby photo selected by Sophie.",
  },
  {
    src: "/hobbies/photo-4.JPG",
    alt: "Sophie after volleyball practice.",
  },
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[var(--background)]">
      <div className="mesh mesh-one" />
      <div className="mesh mesh-two" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
        <header className="sticky top-4 z-20 mb-10">
          <div className="panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 text-sm">
            <a
              href="#top"
              className="text-base font-semibold tracking-[0.24em] text-[var(--text-strong)] uppercase sm:text-lg"
            >
              Sophie Zheng
            </a>
            <nav className="hidden items-center gap-6 text-[var(--text-muted)] md:flex">
              <a href="#hobbies" className="transition hover:text-[var(--text-strong)]">
                Hobbies
              </a>
              <a href="#experience" className="transition hover:text-[var(--text-strong)]">
                Experience
              </a>
              <a href="#projects" className="transition hover:text-[var(--text-strong)]">
                Projects
              </a>
              <a href="#education" className="transition hover:text-[var(--text-strong)]">
                Education
              </a>
              <a href="#skills" className="transition hover:text-[var(--text-strong)]">
                Skills
              </a>
              <a href="#contact" className="transition hover:text-[var(--text-strong)]">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <section
          id="top"
          className="grid flex-1 items-center gap-10 pb-16 pt-4 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-strong)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              CS Student
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Seeking software engineering opportunities
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.07em] text-[var(--text-strong)] sm:text-7xl lg:text-8xl">
                Sophie Zheng
              </h1>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--text-muted)] sm:text-base">
                Software Engineer • Full-Stack Engineer • Software Developer
              </p>
              <p className="max-w-2xl text-lg leading-8 text-[var(--text-soft)] sm:text-xl">
                I&apos;m Sophie Zheng, a computer science student at UBC with internship experience in Android
                development and hands-on project work across React Native, Node.js, Express, SQL, and REST APIs.
                I enjoy building products that are reliable, user-friendly, and supported by thoughtful engineering decisions.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a className="primary-button" href="mailto:sy.zheng9@gmail.com">
                Email Me
              </a>
              <a className="secondary-button" href="https://github.com/ss0ph1" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                className="secondary-button"
                href="https://www.linkedin.com/in/sophie-zheng-7387192b8/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,21,36,0.16)] to-transparent" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
              Snapshot
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-[var(--text-muted)]">Based in</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">
                  Vancouver, BC
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface-strong)] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                    Focus
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                    Full-stack applications, Android development, backend APIs, and data-backed product work.
                  </p>
                </div>
                <div className="rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface-strong)] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                    Strength
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                    Shipping quickly while still caring about architecture, validation, tests, and user experience.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-[color:var(--surface-border)] bg-[linear-gradient(180deg,rgba(214,204,153,0.34),rgba(255,248,241,0.72))] p-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  Current stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {toolkit.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(68,93,72,0.18)] bg-[rgba(255,255,255,0.92)] px-3 py-1 text-sm font-medium text-[var(--foreground)] shadow-[0_8px_22px_rgba(68,93,72,0.08)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="hobbies" className="py-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-4xl">
                Hobbies
              </h2>
              <ul className="mt-8 space-y-5 text-lg leading-8 text-[var(--text-soft)] sm:text-xl">
                {hobbies.map((hobby) => (
                  <li key={hobby} className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <span>{hobby}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid min-h-[20rem] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {hobbyPhotos.map((photo) => (
                <article key={photo.src} className="hobby-photo hobby-photo-landscape">
                  <div className="hobby-photo-image hobby-photo-image-landscape">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={1600}
                      height={1000}
                      sizes="(max-width: 640px) 90vw, (max-width: 1280px) 42vw, 24vw"
                      className="h-full w-full rounded-[0.7rem] object-cover"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-4xl">
              Experience
            </h2>
          </div>

          <div className="grid gap-6">
            {experience.map((item) => (
              <article key={item.role} className="panel rounded-[2rem] p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--text-muted)]">
                      {item.company}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-6 space-y-3 text-base leading-8 text-[var(--text-soft)]">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-4xl">
              Projects
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="panel group flex min-h-full flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1"
              >
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--text-muted)]">
                  Project {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--accent-soft)]">
                  {project.tag}
                </p>
                <p className="mt-6 text-base leading-8 text-[var(--text-soft)]">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {project.links.length > 0 ? (
                    project.links.map((link) => (
                      <a
                        key={`${project.title}-${link.label}`}
                        className="project-link"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <span className="project-link project-link-muted">Link coming soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-4xl">
              Skills
            </h2>
          </div>

          <div className="panel max-w-5xl rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--text-muted)]">
                  Languages and frameworks
                </p>
                <ul className="mt-5 space-y-3 text-base text-[var(--text-soft)]">
                  <li>Languages: Java, Python, C, JavaScript, TypeScript, SQL, MySQL, HTML, CSS, R</li>
                  <li>Frameworks: React, React Native, Node.js, Express, Android SDK</li>
                  <li>Additional coursework languages: Racket and Haskell</li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--text-muted)]">
                  Developer tools
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {developerTools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[color:var(--surface-border)] bg-[rgba(255,248,241,0.58)] px-3 py-1 text-sm text-[var(--text-soft)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-16">
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
              Education
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-4xl">
              Computer science studies across UBC and the University of Toronto.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.school} className="panel rounded-[2rem] p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                  {item.school}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">{item.detail}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                  {item.meta}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="panel rounded-[2rem] p-8 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-4xl">
              Open to software engineering, full-stack engineering, and software developer opportunities.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-soft)]">
              If your team values engineers who care about implementation quality, collaboration, and
              steady growth, I&apos;d love to connect.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a className="primary-button" href="mailto:sy.zheng9@gmail.com">
                sy.zheng9@gmail.com
              </a>
              <a className="secondary-button" href="tel:7788081806">
                778-808-1806
              </a>
              <a className="secondary-button" href="/resume.pdf">
                Resume PDF
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
