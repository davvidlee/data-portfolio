import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Resume</h1>
      <iframe
        src="Resume - David Lee.pdf"
        className="w-[620px] h-[800px] border rounded-md mt-6"
        title="David Lee Resume"
      />
    </div>
  );
}
