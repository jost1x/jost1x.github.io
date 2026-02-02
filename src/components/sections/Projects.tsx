"use client"

import { Cpu, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Plataforma Industria 4.0",
    category: "IIoT / Full Stack",
    year: "2024",
    description: "Sistema de monitoreo industrial con dashboards en tiempo real, integración de sensores y análisis de datos.",
    image: "/projects/industria40.jpg",
    tags: ["Next.js", "InfluxDB", "MQTT", "Docker"],
  },
  {
    title: "MABIOMET - Sistema de Monitoreo",
    category: "IoT / Hardware",
    year: "2022 - Act",
    description: "Infraestructura de monitoreo ambiental con estaciones meteorológicas y transmisión de datos en tiempo real.",
    image: "/projects/mabiomet.jpg",
    tags: ["Raspberry Pi", "PostgreSQL", "Grafana"],
  },
  {
    title: "FIC Turismo - Rio Clarillo",
    category: "IoT / Infraestructura",
    year: "2021 - 2023",
    description: "Red de sensores para monitoreo ambiental en reserva natural, con dashboard público de visualización.",
    image: "/projects/fic-turismo.jpg",
    tags: ["ESP32", "LoRa", "TimescaleDB"],
  },
  {
    title: "FIC Coopeumo",
    category: "Industria Inteligente",
    year: "2019 - 2021",
    description: "Implementación de soluciones IoT para optimización de procesos en cooperativa agrícola.",
    image: "/projects/coopeumo.jpg",
    tags: ["Arduino", "AWS", "Python"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4">
          Proyectos
        </p>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12">
          Trabajos destacados
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative rounded-2xl border border-white/6 bg-white/3 backdrop-blur-sm overflow-hidden hover:border-primary/20 transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-linear-to-br from-primary/10 via-accent/5 to-transparent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                  <Cpu className="w-12 h-12" />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {project.category} · {project.year}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" />
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-md bg-white/4 text-muted-foreground border border-white/6"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
