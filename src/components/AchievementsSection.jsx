// AchievementsSection.jsx
import { useState } from "react";
import { X } from "lucide-react";
import { ArrowRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa (CODL)",
    date: "Jun 01, 2022",
    src: "/Achievement/web.jpg",
  },
  {
    id: 2,
    title: "Amazon Q Developer Fundamentals Badge",
    issuer: "AWS Training & Certification",
    date: "Nov 01, 2025",
    src: "/Achievement/AWS.jpg",
  },
  {
    id: 3,
    title: "Sri Lanka Computer Competency License",
    issuer: "Ranaviru IT Training Institute",
    date: "Apr 08, 2019",
    src: "/Achievement/computer.jpg",
  },
  {
    id: 4,
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    date: "Oct 21, 2021",
    src: "/Achievement/google.jpg",
  },
  {
    id: 5,
    title: "Diploma in Ticketing Reservations & Marketing (Distinction)",
    issuer: "IAAC, Colombo — Sri Lanka",
    date: "Jan 09, 2023",
    src: "/Achievement/iaac.jpg",
  },
  {
    id: 6,
    title: "Python for Beginners",
    issuer: "University of Moratuwa (CSE)",
    date: "Jun 01, 2022",
    src: "/Achievement/python.jpg",
  },
];

export const AchievementsSection = () => {
  const [preview, setPreview] = useState(null); // {src, title} | null

  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My<span className="text-primary"> Achievements</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my certified trainings and achievements.
        </p>

        {/* Grid of certificate cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c) => (
            <div
              key={c.id}
              className="bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <button
                type="button"
                onClick={() => setPreview({ src: c.src, title: c.title })}
                className="relative group h-48 w-full overflow-hidden"
                aria-label={`Open ${c.title}`}
              >
                <img
                  src={c.src}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>

              <div className="p-4">
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {c.issuer}
                  {c.date ? ` • ${c.date}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Preview Modal (theme-safe) */}
      {preview && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative bg-card rounded-lg max-w-5xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-secondary text-secondary-foreground"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={preview.src}
              alt={preview.title}
              className="w-full h-auto object-contain max-h-[80vh]"
            />

            <div className="p-4 border-t">
              <p className="text-sm text-muted-foreground">{preview.title}</p>
            </div>
          </div>
        </div>
      )}
      
        {/* See more / See less button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/sankalpa-sithmina/"
          >
            Check My Linkedin <ArrowRight size={16} />
          </a>
        </div>
    </section>
  );
};
