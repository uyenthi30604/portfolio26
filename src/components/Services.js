import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
// services data
const services = [
  {
    name: "Front-end devloper",
    description: "Exo have won numerous awards, including five consecutive Album of the Year awards at the MAMA Awards and two consecutive Artist of the Year awards at the Melon Music Awards, and have performed over 100 concerts across four headlining tours and multiple joint tours.",
    link: "Learn more",
  },
  {
    name: "Back-end devloper",
    description: "Exo have won numerous awards, including five consecutive Album of the Year awards at the MAMA Awards and two consecutive Artist of the Year awards at the Melon Music Awards, and have performed over 100 concerts across four headlining tours and multiple joint tours.",
    link: "Learn more",
  },
  {
    name: "Customer support",
    description: "Exo have won numerous awards, including five consecutive Album of the Year awards at the MAMA Awards and two consecutive Artist of the Year awards at the Melon Music Awards, and have performed over 100 concerts across four headlining tours and multiple joint tours.",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section className="section" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg-mb-0">
            <h2 className="h2 text-accent">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 2 years of
              experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.7}} className="flex-1">
            {/* services list */}
            <div>
              {services.map((service,index) =>{
                // destructure service
                const {name, description, link} = service;
                return(
                  <div className="border-b border-white/20 h-[260px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading tight">{description}</p>
                    </div>
                    <div>
                      <a href="" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight/>
                      </a>
                      <a href="" className="text-gradient text-sm">{link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
