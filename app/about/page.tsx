import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className={title({ class: "text-center mb-12", color: "violet" })}>
        About
      </h1>

      <div className="space-y-8 text-lg text-gray-750">
        <p>
          I&apos;m a recent Computer Science graduate from Pomona College, with
          a deep interest in data analytics, backend systems, and the
          intersection of technology and real-world impact. My work centers
          around extracting meaningful stories from data, whether it&apos;s
          using machine learning to cluster MLB swing styles or visualizing how
          climate and pollution intersect with demographic inequality.
        </p>

        <p>
          My technical toolkit includes Python, SQL, JavaScript, React, and
          tools like Pandas, scikit-learn, Firebase, and Plotly. I’m especially
          drawn to projects that involve thoughtful data wrangling and clear,
          effective presentation, whether the goal is improving efficiency or
          addressing broader social issues.
        </p>

        <h2 className={title({ class: "text-center mb-12", color: "violet" })}>
          How It Started
        </h2>
        <p>
          I’ve had a passion for data and numbers since middle school, when I
          found myself inputting farm rate data from my Minecraft world to
          optimize efficiency. That early interest in measuring and improving
          systems has stayed with me and gradually evolved into a deeper focus
          on data science and analytics.
        </p>

        <p>
          As I developed my skills in programming and statistical analysis, I
          became increasingly drawn to projects that combine technical rigor
          with real-world relevance.
        </p>

        <h2 className={title({ class: "text-center mb-12", color: "violet" })}>
          My Work
        </h2>
        <p>
          I’ve worked on projects exploring food affordability and obesity
          trends, and built tools to visualize income and education data
          alongside environmental factors. These experiences helped me think
          critically about how data directly impacts people and communities.
        </p>

        <p>
          Looking ahead, I hope to continue contributing to data-driven projects
          that make a tangible impact. I’m excited to grow as an analyst by
          collaborating with teams who are equally committed to using data for
          insight, action, and positive change.
        </p>

        <h2 className={title({ class: "text-center mb-12", color: "violet" })}>
          Outside of Work
        </h2>
        <p>
          Outside of coding, I enjoy playing tennis (beginner level), cooking,
          and chatting with friends — things that keep me grounded and curious
          in new ways. I&apos;m always looking to grow, whether by picking up
          new technical skills or collaborating on something meaningful.
        </p>

        <p>
          If you&apos;re curious about my work or want to connect, feel free to
          reach out!
        </p>
      </div>
    </section>
  );
}
