import Image from "next/image";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import Link from "next/link";

interface Job {
  id: number;
  company: string;
  postedAgo: string;
  title: string;
  tags: string[];
  rate: string;
  location: string;
}

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="group hover:-translate-y-2 hover:shadow-lg w-full rounded-xl p-5 min-h-[380px] flex flex-col justify-between shadow">
      <div className="flex justify-between w-full">
        <div className="border border-input rounded-full p-2">
          <Image
            src="https://img.icons8.com/?size=512&id=17949&format=png"
            width={30}
            height={30}
            alt="Company Logo"
          />
        </div>
        <Button variant="ghost" className="border-2 h-9 active:bg-muted">
          Save
          <Bookmark className="active:text-foreground" />
        </Button>
      </div>
      <div className="w-full">
        <div className="flex items-center gap-3 mb-2">
          <span>{job.company}</span>
          <div className="text-muted-foreground">{job.postedAgo}</div>
        </div>
        <Link href={`exams/${job.id}`}>
          <h6 className="text-2xl mb-2 group-hover:text-secondary">{job.title}</h6>
        </Link>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-muted text-muted-foreground rounded-xl px-3 py-1"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full border-t border-input pt-4">
        <div>
          <span>{job.rate}</span>
          <div className="text-muted-foreground">{job.location}</div>
        </div>
        <Link href={`exams/${job.id}`}>
          <Button className="text-foreground">Apply now</Button>
        </Link>
      </div>
    </div>
  );
};
