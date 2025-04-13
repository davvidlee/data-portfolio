"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-4 py-10 px-4">
      {/* Intro Section */}
      <motion.div
        className="inline-block max-w-xl text-center justify-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className={title({ color: "foreground" })}>I am&nbsp;</span>
        <span className={title({ color: "cyan" })}>David Lee&nbsp;</span>
        <br /><br />
        <div className={subtitle({ class: "mt-4" })}>
        Recent Computer Science graduate from Pomona College. Hands-on experience in data analysis, backend development, and automation. Skilled in Python, SQL, and data visualization, with a strong focus on transforming complex data into actionable insights.
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-10 mt-60 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <Link
            href="/about"
            className="w-full"
          >
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          </Link>
          <p className="text-gray-400 text-lg">
            I'm passionate about uncovering patterns in data and turning them into meaningful stories. Whether it’s cleaning messy datasets, building backend systems, or visualizing trends, I enjoy working across the stack to create clean, intuitive, and impactful solutions.
          </p>
        </div>

        {/* Image */}
        <Link
            href="/about"
          >
        <motion.img
          src="/images/david1.jpg"
          alt="David Lee"
          className="w-40 h-40 rounded-full object-cover border border-gray-300 shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        </Link>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="w-full max-w-5xl mt-60 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Link href="/projects">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Projects
          </h2>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="border rounded-lg p-5 shadow hover:shadow-md transition">
              <div className="flex md:flex-row flex-col items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Baseball Analytics</h3>
                  <p className="text-gray-600 text-sm">
                  Used Python, scikit-learn, and NMF to analyze over 345,000 at-bats and cluster hitters based on swing data.
                  </p>
                </div>
              <div className="flex-shrink-0">
                  <img
                    src="/images/baseball.png"
                    className="w-28 h-28 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
            </motion.div>

            <motion.div
            className="flex-1"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="border rounded-lg p-5 shadow hover:shadow-md transition">
                <div className="flex md:flex-row flex-col items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Facebook Social Circles</h3>
                    <p className="text-gray-600 text-sm">
                    Analyzed Facebook ego networks to reveal how geography shapes social group formation through visualizations and clustering.                    </p>
                  </div>
                <div className="flex-shrink-0">
                    <img
                      src="/images/facebook.png"
                      className="w-28 h-28 object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
              </motion.div>

          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="border rounded-lg p-5 shadow hover:shadow-md transition">
              <div className="flex md:flex-row flex-col items-start gap-4">
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Milk and Honey (SaaS)</h3>
                  <p className="text-gray-600 text-sm">
                    React-based ordering system to improve restaurant UX, with real-time updates and Firebase integration.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <img
                    src="/images/milkhoney.jpg"
                    className="w-28 h-28 object-cover rounded-md"
                  />
                </div>
              </div>
          </div>
          </motion.div>



          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
          <div className="border rounded-lg p-5 shadow hover:shadow-md transition">
            <div className="flex md:flex-row flex-col items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Drum Beat VR</h3>
                <p className="text-gray-600 text-sm">
                Built a VR rhythm game using Unity and C# for Oculus Quest 2 with precise drumstick mechanics and immersive design.
                </p>
              </div>

              <div className="flex-shrink-0">
                <img
                  src="/images/drumbeat.png"
                  className="w-28 h-28 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
          </motion.div>
        </div>
        
        <div className="flex justify-end mt-6">
            <Link
              href="/projects"
              className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 transition"
            >
              See more →
            </Link>
          </div>
      </motion.div>

    </section>
  );
}
