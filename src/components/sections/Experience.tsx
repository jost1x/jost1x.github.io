"use client";

import { Calendar } from "lucide-react";

const experience = [
  {
    title: "Profesional de Apoyo",
    company: "Universidad de Atacama",
    period: "Dic 2022 - Actualidad",
    description:
      "Diseño, desarrollo y despliegue de sistemas IoT para diversos proyectos de investigación.",
  },
  {
    title: "Freelance",
    company: "Electrotech",
    period: "2019 - 2022",
    description:
      "Desarrollo de soluciones tecnológicas personalizadas para clientes.",
  },
  {
    title: "Ayudante Académico",
    company: "Universidad de Atacama",
    period: "2018 - 2019",
    description:
      "Apoyo en laboratorios y clases de electrónica y programación.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4">
          Experiencia Laboral
        </p>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12">
          Trayectoria profesional
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-white/8" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <article key={index} className="relative pl-8 md:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/30" />

                <div className="p-5 rounded-xl border border-white/6 bg-white/3 backdrop-blur-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-foreground font-medium">
                        {job.title}
                      </h3>
                      <p className="text-primary text-sm">{job.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {job.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
