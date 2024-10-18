import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

// Import Animation
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { pageAnimation } from "../animation";

//Data Project
import { ProjectsState } from "../Projectstate";
function Projects() {
  const imageRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [projectSelected, setProjectSelected] = useState(null);
  const isLopTop = useMediaQuery({ query: "(max-width: 1300px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 980px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  const isMobileSmall = useMediaQuery({ query: "(max-width: 420px)" });

  function changeScale() {
    if (isLopTop && !isTablet) return 3;
    if (isTablet && !isMobile) return 2;
    if (isMobile && !isMobileSmall) return 1.3;
    if (isMobileSmall) return 1.1;
    return 4;
  }

  useEffect(() => {
    setIsImageLoaded(false);
  }, [projectSelected]);

  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <section className="projects">
        <AnimateSharedLayout>
          {ProjectsState().map((project, index) => (
            <motion.div
              onClick={() => setProjectSelected(project.id)}
              className={`project ${index % 2 !== 0 ? "odd-project" : ""}`}
              key={project.id}
            >
              <motion.div
                layoutId={`item-${project.id}`}
                style={{
                  width: "313px",
                  height: "150px",
                  scale: "1",
                  position: "relative",
                  zIndex: "3",
                }}
              >
                <img src={project.mainImg} alt={project.altImg} />
              </motion.div>
              <div className="detail">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="circle-project"></div>
              <div className="line-project"></div>
              <div className="circle-project circle-project-left"></div>
            </motion.div>
          ))}

          {/*  */}
          <AnimatePresence>
            {projectSelected && (
              <>
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "black",
                    zIndex: 10,
                  }}
                  onClick={() => setProjectSelected(null)}
                />

                {/* Image Modal */}
                <motion.div
                  layoutId={`item-${projectSelected}`}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                  }}
                  animate={
                    isImageLoaded ? { opacity: 1, scale: changeScale() } : {}
                  }
                  exit={{ opacity: 0, scale: 1 }}
                  style={{
                    position: "fixed",
                    width: "313px",
                    height: "150px",
                    overflow: "hidden",
                    top: "50%",
                    left: "50%",
                    marginLeft: "-155px",
                    marginTop: "-75px",
                    zIndex: 20,
                  }}
                  // onClick={() => setProjectSelected(null)}
                >
                  <motion.div>
                    {ProjectsState()
                      .filter((item) => item.id === projectSelected)
                      .map((item) => (
                        <motion.img
                          initial={{ y: 0 }}
                          animate={
                            isImageLoaded
                              ? {
                                  y: `calc(-100% + 154px)`,
                                  transition: {
                                    delay: 1,
                                    duration: 8,
                                    repeat: Infinity,
                                  },
                                }
                              : {}
                          }
                          exit={{
                            scale: 1,
                            y: 0,
                            transition: {
                              duration: 1,
                            },
                          }}
                          key={item.id}
                          src={item.secondaryImg}
                          ref={imageRef}
                          alt={item.altImg}
                          onLoad={() => setIsImageLoaded(true)}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ))}
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, bottom: "-5%" }}
                  transition={{
                    duration: 1,
                  }}
                  animate={{ opacity: 1, bottom: "8%" }}
                  exit={{ opacity: 0, bottom: "-5%" }}
                  style={{
                    position: "fixed",
                    bottom: "8%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: "30",
                  }}
                >
                  <a
                    target="_blank"
                    href={ProjectsState()
                      .filter((item) => item.id === projectSelected)
                      .map((item) => item.urlWebsite)}
                    className="btn-project"
                  >
                    Live Preview
                  </a>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </section>
    </motion.div>
  );
}

export default Projects;
