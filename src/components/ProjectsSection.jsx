import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import epass from '../../public/projects/E Pass.png';
import EMP from '../../public/projects/EMP.png';
import pos from '../../public/projects/pos sysytem.png';
import water from '../../public/projects/automatic watering system.jpg';
import car from '../../public/projects/robot car.jpg';
import download from "../../public/projects/Wallpaper Downloder.png";

const projects = [
  {
    id: 1,
    title: "E-Passport System",
    description:
      "Built a secure, workflow-based passport application platform with OTP verification (email/SMS), appointment booking, payment stubs and status tracking.",
    image: epass,
    tags: ["MERN (React, Node/Express, MongoDB)", "Twilio", "SendGrid"],
    demoUrl: "#",
    githubUrl: "https://github.com/sana1211/E-Passport-Booking-System",
  },
  {
    id: 2,
    title: "Employee Management System",
    description:
      "This image depicts the user interface of an Employee Management System (EMS) built using C# with Windows Forms and SQL Server Express LocalDB for data storage. The dashboard displays real-time statistics, including the total number of employees, active employees, and inactive employees. Key navigation options, such as Dashboard, Add Employee, and Salary,are organized in a sidebar for efficient access.",
    image: EMP,
    tags: ["C#", "SQL Server Express LocalDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "POS System",
    description:
      "Developed a full-stack retail billing and inventory management system using the MERN stack (React, Node.js, Express, MongoDB). The system supports product management, barcode-based checkout, and real-time stock updates. Integrated Razorpay for payments, JWT authentication, and used Redux Toolkit with React Query for fast, reliable data handling and offline support.",
    image: pos,
    tags: ["Stack: MERN", "Redux Toolkit", "React Query"],
    demoUrl: "#",
    githubUrl: "https://github.com/sana1211/POS-System",
  },
  {
    id: 4,
    title: "Automatic Plant Watering System",
    description:
      "Built an IoT-based system to automate plant watering using sensors and Arduino.",
    image: water,
    tags: ["Arduino"],
    demoUrl: "#",
    githubUrl: "https://github.com/sana1211/Automatic_Plant_Watering_System",
  },
  {
    id: 5,
    title: "Arduino Bluetooth Robot Car with Remote Control.",
    description:
      "This project utilizes an Arduino Uno programmed in the Arduino language, incorporating sensors, servo motors, DC 3-6V gear motors, and Bluetooth control. The Bluetooth module (e.g., HC-05) allows wireless communication with a smartphone app, enabling the control of the robotic car. The DC gear motors provide movement, while the servo motor and sensors enhance functionality, such as obstacle detection or direction control",
    image: car,
    tags: ["Arduino"],
    demoUrl: "#",
    githubUrl: "https://github.com/sana1211/Arduino-Bluetooth-Robot-Car-with-Remote-Control",
  },
  {
    id: 6,
    title: "Mobile Wallpaper Downloader WebSite",
    description:
      "This image illustrates a responsive Wallpaper Download Gallery webpage built using HTML, CSS, and JavaScript. The gallery showcases a collection of visually appealing wallpapers organized in a grid layout. HTML structures the content, CSS provides the design and styling, and JavaScript can enhance interactivity, such as dynamic image loading or download functionality.",
    image: download,
    tags: ["HTML", "JavaScript", "CSS"],
    demoUrl: "https://sana1211.github.io/Wallpaper-4k/",
    githubUrl: "https://github.com/sana1211/Wallpaper-4k",
  },
];

export const ProjectsSection = () => {
  // show only a few initially; “See more” reveals all
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 3;

  const displayed = showAll ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {(Array.isArray(project.tags) ? project.tags : String(project.tags).split(",")).map(
                    (tag) => (
                      <span
                        key={tag.trim()}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag.trim()}
                      </span>
                    )
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more / See less button */}
        {projects.length > VISIBLE_COUNT && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
            >
              {showAll ? "See less" : "See more"}
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sana1211"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
