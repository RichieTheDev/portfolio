import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "./components/Icons";
import { about, highlights, profile, projects, skills } from "./data";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <section id="top" aria-labelledby="hero-title" className="hero-sky flex min-h-[92svh] items-end pt-16">
          <div className="page pb-16 sm:pb-24">
            <p className="text-[15px] text-paper-muted">
              {profile.role} <span aria-hidden="true">/</span> {profile.location}
            </p>
            <h1
              id="hero-title"
              className="mt-4 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]"
            >
              Richie
              <br />
              Momodu
            </h1>
            <p className="mt-7 max-w-[38rem] text-lg leading-relaxed text-paper/90 sm:text-xl">{profile.intro}</p>
            <ul aria-label="Highlights" className="mt-8 flex max-w-3xl flex-wrap gap-x-6 gap-y-2.5 font-mono text-[13px] text-paper sm:text-sm">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#work" className="btn-solid">
                See the work
              </a>
              <a href={`mailto:${profile.email}`} className="btn-line">
                Email me
              </a>
            </div>
            <p className="mt-8 flex items-center gap-2.5 text-sm text-paper-muted">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
              {profile.availability}
            </p>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title" className="py-20 sm:py-28">
          <div className="page">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="work-title" className="heading">
                Selected work
              </h2>
              <p className="max-w-md text-paper-muted sm:text-right">
                Ten projects from the last two years as the only DevOps engineer on regulated fintech platforms. Client
                names are left out.
              </p>
            </div>
            <div className="mt-10 sm:mt-14">
              <ProjectList projects={projects} />
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="border-t border-night-line bg-night-raised/40 py-20 sm:py-28">
          <div className="page grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
            <h2 id="about-title" className="heading">
              About
            </h2>
            <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-paper/90">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title" className="border-t border-night-line py-20 sm:py-28">
          <div className="page grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
            <h2 id="skills-title" className="heading">
              What I work with
            </h2>
            <dl className="divide-y divide-night-line border-y border-night-line">
              {skills.map((skill) => (
                <div key={skill.group} className="grid gap-1 py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
                  <dt className="font-medium text-paper">{skill.group}</dt>
                  <dd className="leading-relaxed text-paper-muted">{skill.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="border-t border-night-line py-24 sm:py-32">
          <div className="page">
            <h2 id="contact-title" className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Need someone
              <br />
              to run your platform?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/90">
              I&apos;m looking for senior DevOps, SRE or platform roles, remote or with relocation. Email is the
              quickest way to reach me.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="press group mt-10 inline-flex min-h-[48px] max-w-full items-center gap-3 break-all font-display text-xl font-medium text-amber sm:text-3xl"
            >
              {profile.email}
              <ArrowUpRightIcon className="h-6 w-6 shrink-0 transition-transform duration-200 ease-fluid group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <ul className="mt-10 flex flex-wrap gap-3" aria-label="Profiles">
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-line">
                  <LinkedInIcon className="h-[18px] w-[18px]" /> LinkedIn
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-line">
                  <GitHubIcon className="h-[18px] w-[18px]" /> GitHub
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-night-line">
        <div className="page flex flex-col justify-between gap-2 py-8 text-sm text-paper-muted sm:flex-row">
          <p>
            © {year} {profile.name}
          </p>
          <p>{profile.location}</p>
        </div>
      </footer>
    </>
  );
}
