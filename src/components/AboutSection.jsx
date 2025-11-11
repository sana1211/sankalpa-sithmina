import { Code, User } from "lucide-react";
import cv from "../../public/CV/sankalpa sithmina.pdf";

export const AboutSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cv; // Place your CV file in the /public directory
    link.download = "My_CV.pdf"; // Optional: rename downloaded file
    link.click();
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              I am a Bachelor of Information Technology undergraduate at the University of 
              Moratuwa with a strong foundation in frontend development and a passion for 
              creating seamless digital experiences. Experienced in ReactJS, JavaScript, and 
              responsive web design, along with proficiency in UI/UX tools like Figma for intuitive 
              interface design. Adept at collaborating in team environments to deliver functional 
              solutions and eager to apply technical skills in a dynamic software 
              development role. Committed to continuous learning and leveraging technology 
              to solve real-world challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* Smooth scroll to contact section */}
              <a href="#ContactSection" className="cosmic-button">
                Get In Touch
              </a>

              {/* Trigger CV download */}
              <button
                onClick={handleDownloadCV}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
