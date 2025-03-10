import React from "react";
import Navbar from "./Navbar";
import { motion, useAnimation } from "motion/react"
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Card2 from "../Card2";
import members from "../Team";
import Footer from "./Footer";


function createCard2(member) {
    return (
        <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.5, z: -200 }}
            whileInView={{ opacity: 1, scale: 1, z: 0 }} // Move to the normal position
            viewport={{ once: false, amount: 0.2 }} // Trigger animation every time it's scrolled into view
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
            style={{
                perspective: 1000, // Optional: Adds perspective for a more realistic effect
            }}
        >
            <Card2
                img={member.imgURL}
                name={member.name}
            />
        </motion.div>
    );
}
function Aboutus2() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const controls = useAnimation(); // Animation controller
    const sectionRef = useRef(null); // Reference to the section

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible"); // Start animation when visible
                } else {
                    controls.start("hidden"); // Reset when out of view
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [controls]);

    const listVariants = {
        hidden: { opacity: 0, y: 50 }, // Start below with opacity 0
        visible: (i) => ({
            opacity: 1,
            y: 0, // Bounce up into position
            transition: {
                type: "spring", // Bouncy spring effect
                stiffness: 300,
                damping: 15,
                delay: i * 0.2, // Stagger each item
            },
        }),
    };

    return (
        <div className="aboutus2-container">
            <div className="box">
                <Navbar />
                <div className="aboutus2-SecImg">
                    <motion.img
                        src="/aboutus.jpeg"
                        alt="img1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </div>
                <motion.div
                    className="aboutus2-desc"
                    initial={{ opacity: 0, x: 50 }} // Start slightly off-screen
                    animate={{ opacity: 1, x: 0 }}   // Move to its natural position
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                >
                    <p>About Us</p>
                    <p>
                        Explore a wide range of top-quality motor and vehicle components
                        designed to ensure unmatched performance and durability.
                    </p>
                </motion.div>
            </div>
            <div className="our-story">
                <h2>OUR STORY</h2>
                <p>Quality Services for All Your Motor Repair Needs</p>
                <div className="our-story-img">
                    <img src="/storyimg.webp" alt="" />
                    <motion.div
                        className="company-history"
                        ref={ref}
                        initial={{ opacity: 0, scale: 0.9, y: 50 }} // Start slightly off-screen
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }} // Re-trigger animation
                        transition={{ duration: 1, ease: "easeInOut" }} // Longer duration for smoother animation
                    >
                        <p>
                            Mysore Motors is a company specializing in the supply and distribution of motor and vehicle parts. It serves as a key player in the automotive industry, offering a wide range of high-quality components essential for the maintenance and repair of various vehicles. The company is known for its commitment to reliability, providing both standard and specialized parts to meet the needs of customers, from individual vehicle owners to businesses in the automotive service sector. Mysore Motors ensures its customers have access to durable, high-performance products, making it a trusted name in the industry.
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="choose-us" ref={sectionRef}>
                <div className="left">
                    <h1>WHY CHOOSE US?</h1>
                    <p>We're the Best Choice for Your Automotive Needs</p>
                    <ul>
                        {[
                            {
                                title: "Expertise You Can Trust",
                                description:
                                    "Our team is composed of experienced professionals who specialize in motor and vehicle parts, ensuring you get the best advice and products.",
                            },
                            {
                                title: "Premium Quality Products",
                                description:
                                    "We provide only top-notch, durable automotive parts. Our commitment to quality guarantees customer satisfaction every time.",
                            },
                            {
                                title: "Customer-Centric Service",
                                description:
                                    "We prioritize your needs with fast, friendly, and efficient service, making your experience with us seamless and enjoyable.",
                            },
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                custom={index} // Pass index to customize delay
                                variants={listVariants}
                                initial="hidden"
                                animate={controls} // Controlled by intersection observer
                            >
                                <h2>{item.title}</h2>
                                {item.description}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="right">
                    <p>
                        At Mysore Motors, we understand the importance of reliable and
                        high-quality automotive parts. Here's why we're your trusted partner.
                    </p>
                    <div className="right-SecImg">
                        <img src="/chooseus.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="team">
                <p>OUR TEAMS</p>
                <h3>Meet The Mysore Motors Team</h3>
                <div className="member-container">
                    {members.map(createCard2)}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Aboutus2;