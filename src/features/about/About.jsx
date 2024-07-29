import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import person_image from "../../assets/images/person_image.jpg";
import mongodb_icon from "../../assets/icons/mongodb_icon.svg"; // Add MongoDB icon
import express_icon from "../../assets/icons/express_icon.svg"; // Add Express icon
import nodejs_icon from "../../assets/icons/nodejs_icon.svg"; // Add Node.js icon
import postman_icon from "../../assets/icons/postman_icon.svg"; // Add Postman icon
import github_icon from "../../assets/icons/github_icon.svg"; // Add GitHub icon

function About() {
  const techStack = [
    html_icon,
    css_icon,
    js_icon,
    react_icon,
    tailwind_icon,
    mongodb_icon, // Add MongoDB icon
    express_icon, // Add Express icon
    nodejs_icon, // Add Node.js icon
    postman_icon, // Add Postman icon
    github_icon, // Add GitHub icon
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Srikanth's Portfolio</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center gap-y-4 p-8 text-textColor xl:gap-y-8">
        <div className="flex flex-col items-center gap-x-48 xl:flex-row">
          <div className="xl:order-2">
            <div
              className="box border-4 border-accentColor xl:h-[300px] xl:w-[300px]"
              style={{
                backgroundImage: `url(${person_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Full stack <br /> MERN Developer
            </h1>
            <h2 className="text-xl max-sm:hidden">
              Hi, I'm Srikanth. A passionate MERN stack Developer <br />{" "}
            </h2>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-24">
          <div className="order-1 space-y-4 text-center xl:w-1/2">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
              Aspiring web developer seeking a position in a dynamic and
              competitive environment where I can leverage my skills in front
              end development and backend development programming to contribute
              to organizational growth and advance my professional career.
            </p>
          </div>
          <div className="xl:w-1/2">
            <h3 className="my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl">
              Tech Stack{" "}
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
              {techStack.map((item, i) => {
                return (
                  <img
                    className="h-14 w-14 cursor-pointer rounded-full p-2 shadow-md shadow-accentColor"
                    key={i}
                    src={item}
                    alt="tech-stack"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default About;
