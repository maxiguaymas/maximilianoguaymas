'use client';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <h3 className="text-3xl font-bold tracking-tight sticky top-32">Sobre mí</h3>
        
        <div className="space-y-6 text-muted leading-relaxed text-lg">
          <p>
            Como <span className="text-foreground">Analista de Sistemas</span>, mi enfoque principal es la creación de software que no solo funcione, sino que sea escalable y fácil de mantener. Me apasiona resolver problemas complejos mediante código limpio.
          </p>
          <p>
            Mi stack principal incluye <span className="text-accent">React, TypeScript y Node.js</span>, con una sólida base en backend utilizando <span className="text-foreground">Django</span> para sistemas de gestión robustos.
          </p>
          <div className="pt-6 border-t border-white/5">
            <p className="text-sm italic">
              "La disciplina en el código es un reflejo de la disciplina en la vida."
            </p>
            <p className="mt-4">
              Fuera de la pantalla, mantengo mi constancia entrenando pesas 4 veces por semana. 
              Esta rutina no solo fortalece mi cuerpo, sino que entrena mi mente para la perseverancia 
              y el enfoque que aplico en cada línea de código que escribo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}