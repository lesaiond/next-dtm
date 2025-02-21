import { JobCard } from "@/components/job-card";

export default function SettingsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {jobListings.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

const jobListings = [
  {
    id: 1,
    company: "Dribble",
    postedAgo: "18 days ago",
    title: "Senior Motion Designer",
    tags: ["Contract", "Remote", "Full-time"],
    rate: "$85/hr",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    company: "Figma",
    postedAgo: "12 days ago",
    title: "UI/UX Designer",
    tags: ["Part-time", "Remote"],
    rate: "$75/hr",
    location: "New York, NY",
  },
  {
    id: 3,
    company: "Adobe",
    postedAgo: "10 days ago",
    title: "Graphic Designer",
    tags: ["Full-time", "On-site"],
    rate: "$95/hr",
    location: "Los Angeles, CA",
  },
  {
    id: 4,
    company: "Notion",
    postedAgo: "5 days ago",
    title: "Product Designer",
    tags: ["Contract", "Remote"],
    rate: "$80/hr",
    location: "Seattle, WA",
  },
  {
    id: 5,
    company: "Spotify",
    postedAgo: "20 days ago",
    title: "Brand Designer",
    tags: ["Full-time", "Hybrid"],
    rate: "$70/hr",
    location: "Chicago, IL",
  },
  {
    id: 6,
    company: "Airbnb",
    postedAgo: "15 days ago",
    title: "Visual Designer",
    tags: ["Freelance", "Remote"],
    rate: "$100/hr",
    location: "Austin, TX",
  },
  {
    id: 7,
    company: "Dropbox",
    postedAgo: "8 days ago",
    title: "Interaction Designer",
    tags: ["Full-time", "Remote"],
    rate: "$85/hr",
    location: "Boston, MA",
  },
  {
    id: 8,
    company: "Slack",
    postedAgo: "3 days ago",
    title: "Motion Designer",
    tags: ["Contract", "Hybrid"],
    rate: "$90/hr",
    location: "Denver, CO",
  },
  {
    id: 9,
    company: "Twitter",
    postedAgo: "1 day ago",
    title: "Digital Designer",
    tags: ["Part-time", "On-site"],
    rate: "$60/hr",
    location: "Miami, FL",
  },
];