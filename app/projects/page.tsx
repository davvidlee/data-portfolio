"use client";

import { title } from "@/components/primitives";
import Image from "next/image";
import Link from "@heroui/link";
import { GithubIcon } from "@/components/icons";

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <h1
        className={title({ class: "text-center mb-5 pb-5", color: "violet" })}
      >
        Data Analysis Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Project Card */}
        <div className="flex flex-col gap-4">
          <Image
            src="/images/baseball.jpg"
            alt="Baseball Analytics"
            width={200}
            height={150}
            className="rounded-md object-cover"
            unoptimized
          />
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Baseball Analytics</h2>
            <a
              href="https://github.com/davvidlee/baseball-analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <GithubIcon />
            </a>
          </div>
          <p className="text-gray-750 text-md">
            Technologies Used: Python, Pandas, NumPy, scikit-learn, NMF,
            Matplotlib
          </p>
          <p className="text-gray-750 text-sm">
            Used Python, Pandas, and NMF to analyze 345,000+ MLB at-bats and
            identify swing style clusters. Developed custom metrics for swing
            speed and length and built visualizations to highlight differences
            between contact and power hitters. This work emphasized the value of
            unsupervised learning for pattern detection in high-dimensional
            sports data.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Image
            src="/images/facebook.png"
            alt="Facebook Social Circles"
            width={200}
            height={150}
            className="rounded-md object-cover"
            unoptimized
          />
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Facebook Ego Networks</h2>
            <a
              href="https://github.com/davvidlee/facebook-ego-networks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <GithubIcon />
            </a>
          </div>
          <p className="text-gray-750 text-md">
            Technologies Used: Python, NetworkX, Matplotlib, Pandas
          </p>
          <p className="text-gray-750 text-sm">
            Analyzed Facebook ego networks using Stanford&apos;s dataset to reveal
            how geography and personal attributes shape social group formation.
            Built interactive network graphs and heatmaps to visualize patterns
            in social clustering. Found that geographic proximity—like hometown,
            locale, and location—was the most consistent factor in community
            structure.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Image
            src="/images/obesity.jpg"
            alt="Facebook Social Circles"
            width={200}
            height={150}
            className="rounded-md object-cover"
            unoptimized
          />
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">
              Obesity and Food Affordability Analysis
            </h2>
            <a
              href="https://github.com/davvidlee/obesity-foodaffordability"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <GithubIcon />
            </a>
          </div>
          <p className="text-gray-750 text-md">
            Technologies Used: Python, pandas, BeautifulSoup, requests, Altair
          </p>
          <p className="text-gray-750 text-sm">
            Analyzed food price data, GDP (PPP), and obesity rates across 90+
            countries to explore how affordability influences public health.
            Found that cheaper fast food relative to income strongly correlates
            with higher obesity rates, while grocery staples showed weaker
            links.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Image
            src="/images/chat.png"
            alt="Climate Change in LA County"
            width={200}
            height={150}
            className="rounded-md object-cover"
            unoptimized
          />
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">
              Climate Change in LA County
            </h2>
            <a
              href="https://github.com/davvidlee/chat-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <GithubIcon />
            </a>
          </div>
          <p className="text-gray-750 text-md">
            Technologies Used: Python, Pandas, NumPy, Matplotlib, Seaborn,
            Plotly, Geopy, CensusGeocode
          </p>
          <p className="text-gray-750 text-sm">
            Used Python to geocode U.S. locations and enrich them with Census
            demographic data. Combined tools like Geopy and the Census Geocoder
            API to convert place names to coordinates, then mapped trends with
            Pandas, Seaborn, and Plotly. Enabled visualization of geographic
            patterns between climate change/pollution and income, education, and
            population across neighborhoods.
          </p>
        </div>
      </div>

      <h1
        className={title({ class: "text-center mt-24 pb-5", color: "violet" })}
      >
        Other Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/milkhoney.jpg"
            alt="Milk and Honey"
            width={200}
            height={150}
            className="rounded-md object-cover"
            unoptimized
          />
          <h2 className="text-xl font-semibold">Milk and Honey (SaaS)</h2>
          <p className="text-gray-750 text-md">
            Technologies Used: React, TypeScript, Firebase, Tailwind CSS
          </p>
          <p className="text-gray-750 text-sm">
            Led frontend development for a restaurant SaaS platform. Built a
            React-based ordering interface that streamlined real-time menu
            updates and improved customer wait times. Integrated Firebase for
            backend operations, authentication, and live sync. Collaborated with
            a team to design UI flows and resolve performance bottlenecks.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Image
            src="/images/drumbeat.png"
            alt="Drum Beat VR"
            width={200}
            height={150}
            className="rounded-md object-cover"
            unoptimized
          />
          <h2 className="text-xl font-semibold">Drum Beat VR</h2>
          <p className="text-gray-750 text-md">
            Technologies Used: Unity, C#, Oculus Integration SDK
          </p>
          <p className="text-gray-750 text-sm">
            Built a virtual reality rhythm game using Unity and C# for Oculus
            Quest 2. Developed precise hit detection and controller-based input
            mechanics. Focused on immersive sound design and rhythmic feedback
            to enhance the player&apos;s sensory engagement. The project highlights
            cross-disciplinary experience in real-time interaction and game
            development.
          </p>
        </div>
      </div>
    </section>
  );
}
