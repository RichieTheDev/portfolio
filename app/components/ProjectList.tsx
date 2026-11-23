"use client";

import { useState } from "react";
import type { Project } from "../data";
import { PlusIcon } from "./Icons";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState<Set<string>>(() => new Set(projects.length ? [projects[0].slug] : []));

  const toggle = (slug: string) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  return (
    <ol className="border-t border-night-line">
      {projects.map((project, index) => {
        const isOpen = open.has(project.slug);
        const panelId = `project-${project.slug}`;
        const buttonId = `${panelId}-button`;
        return (
          <li key={project.slug} className="border-b border-night-line">
            <div className="relative grid gap-x-8 gap-y-3 py-7 transition-colors duration-150 has-[button:active]:bg-night-raised/60 sm:py-9 md:grid-cols-[3.5rem_minmax(0,1fr)_14rem]">
              <span aria-hidden="true" className="font-mono text-sm text-paper-muted md:pt-1.5">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-lg font-medium leading-snug sm:text-xl">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(project.slug)}
                    className="group text-left after:absolute after:-inset-x-3 after:inset-y-0 after:content-[''] focus-visible:ring-0 [&:focus-visible]:after:rounded-lg [&:focus-visible]:after:ring-2 [&:focus-visible]:after:ring-amber"
                  >
                    <span className="transition-colors duration-150 group-hover:text-amber">{project.title}</span>
                  </button>
                </h3>
                <p className="mt-2 text-sm text-paper-muted">
                  <span className="text-paper">{project.role}</span>
                  <span aria-hidden="true"> · </span>
                  <span className="sr-only">, </span>
                  {project.scope}
                </p>
                <p className="mt-4 max-w-[62ch] leading-relaxed text-paper/90">{project.summary}</p>
              </div>

              <div className="flex items-end justify-between gap-6 md:flex-col md:items-end md:justify-start md:text-right">
                <p className="md:max-w-[14rem]">
                  <span className="block font-mono text-2xl font-medium tracking-tight text-amber sm:text-[1.75rem]">
                    {project.metric.value}
                  </span>
                  <span className="mt-1 block text-sm text-paper-muted">{project.metric.label}</span>
                </p>
                <span
                  aria-hidden="true"
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-night-line text-paper-muted transition-transform duration-300 ease-fluid md:mt-auto ${
                    isOpen ? "rotate-45 border-paper-muted text-paper" : ""
                  }`}
                >
                  <PlusIcon className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-fluid ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-9 md:ml-[calc(3.5rem+2rem)] lg:mr-[calc(14rem+2rem)]">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-paper-muted">The problem</h4>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-paper/85">{project.problem}</p>
                  <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-paper-muted">What I did</h4>
                  <ul className="mt-3 space-y-3">
                    {project.actions.map((action) => (
                      <li key={action} className="flex gap-3 leading-relaxed text-paper/85">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-amber" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-mono text-[13px] leading-relaxed text-paper-muted">
                    <span className="sr-only">Tools: </span>
                    {project.stack.join("  ·  ")}
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
