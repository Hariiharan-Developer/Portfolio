import React from "react";
import project1 from "../../../assets/swiggy-logo-hd.png";
import project2 from "../../../assets/logo.png";
import project3 from "../../../assets/task.png";

const projects = [
  {
    title: "Swiggy Clone",
    desc: "Full-stack food ordering platform with cart management and payment integration.",
    live: "https://food-online-order-frontend.onrender.com",
    code: "https://github.com/Hariiharan-Developer/Food-Online-Order",
    img: project1,
  },
  {
    title: "Netflix Clone",
    desc: "React-based UI clone with TMDB API integration for dynamic movie data.",
    live: "https://netfilx-clone-we5a.onrender.com/",
    code: "https://github.com/Hariiharan-Developer/Netfilx-clone",
    img: project2,
  },
  {
    title: "Task Manager App",
    desc: "MERN task manager with authentication, CRUD operations, and responsive UI.",
    live: "https://mern-stack-todo-application-frontend.onrender.com",
    code: "https://github.com/Hariiharan-Developer/MERN-Stack-ToDo-Application",
    img: project3,
  },
  {
    title: "Auth.O Authentication",
    desc: "Secure authentication system with OTP verification, JWT, and protected routes.",
    live: "https://auth-controller-fsd.onrender.com",
    code: "https://github.com/Hariiharan-Developer/Auth-Controller",
    img: '/auth.png'
  },
  {
    title: "Gate Pass System",
    desc: "Digital visitor management system with CRUD operations and REST APIs.",
    live: "https://gate-pass-4l5s.onrender.com",
    code: "https://github.com/Hariiharan-Developer/Axios-Mern-project",
    img: '/gatepass.jpg',
  },
  {
    title: "Number Guess Game",
    desc: "Interactive game built using JavaScript with simple UI logic.",
    live: "https://guess-the-number-awtl.onrender.com",
    code: "https://github.com/Hariiharan-Developer/Guess-the-number",
    img: '/guess.jpg',
  },
  {
    title: "Instagram UI Clone",
    desc: "Responsive Instagram UI clone built with React and modern design patterns.",
    live: "https://instagram-ui-hz21.onrender.com",
    code: "https://github.com/Hariiharan-Developer/Instagram",
    img: '/instagram.png',
  },
  {
    title: "React CRUD App",
    desc: "CRUD application using fake API with full React state management.",
    live: "https://react-crud-application-jvme.onrender.com",
    code: "https://github.com/Hariiharan-Developer/Axios-Mern-project",
    img: '/react.jpg',
  },
  {
  title: "ToDo Application",
  desc: "Task management app allowing users to create, update, delete, and track daily tasks with a clean responsive UI.",
  live: "https://todolist-using-localstorage-with-js-only.onrender.com",
  code: "https://github.com/Hariiharan-Developer/Todolist--using-localstorage-with-js-only/tree/main",
  img: "/todo.jpg"
},
{
  title: "Currency Converter App",
  desc: "Real-time currency converter using API integration with dynamic exchange rate updates and responsive UI.",
  live: "https://currencyconvertor-r768.onrender.com",
  code: "https://github.com/Hariiharan-Developer/CurrencyConvertor-/tree/main",
  img: "/currency.jpg"
}
];

const Project = () => {
  return (
    <section className="py-5 text-light" style={{ background: "#0f0f0f" }}>
      <div className="container text-center">

        {/* Heading */}
        <h2 className="fw-bold mb-2" style={{ color: "#FFD700" }}>
          My Projects
        </h2>
        <p className="text-secondary mb-5">
          Selected works built using <span style={{ color: "#FFD700" }}>MERN Stack</span> & Frontend Technologies
        </p>

        {/* GRID */}
        <div className="row g-4">
          {projects.map((p, index) => (
            <div className="col-md-4" key={index}>

              <div className="card h-100 border-0 shadow-lg text-light"
                style={{
                  background: "#151515",
                  borderRadius: "12px",
                  overflow: "hidden"
                }}
              >

                <img
                  src={p.img}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "contain",
                    padding: "10px",
                    background: "#111",
                    borderRadius: "10px"
                  }}
                />

                <div className="card-body">

                  <h5 className="fw-bold" style={{ color: "#FFD700" }}>
                    {p.title}
                  </h5>

                  <p className="text-secondary small">
                    {p.desc}
                  </p>

                  <div className="d-flex justify-content-center gap-2 mt-3">

                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-warning btn-sm fw-bold"
                    >
                      Live
                    </a>

                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-warning btn-sm fw-bold"
                    >
                      Code
                    </a>

                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* PROJECT REFERENCE SECTION (after 4th project idea you asked) */}
        <div className="mt-5 p-4 rounded"
          style={{
            background: "#1a1a1a",
            border: "1px solid #333"
          }}
        >
          <h4 style={{ color: "#FFD700" }} className="fw-bold">
            Project Highlights
          </h4>
          <p className="text-secondary mb-0">
            These projects demonstrate full-stack development skills including authentication systems,
            CRUD operations, REST API integration, and responsive UI design.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Project;