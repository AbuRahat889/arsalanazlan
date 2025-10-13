export const CourseType = [
  { value: "", label: "All" },
  { value: "STANDARD", label: "STANDARD" },
  { value: "ADVANCED", label: "ADVANCED" },
  { value: "FELLOW", label: "FELLOW" },
];
export const Locations = [
  { value: "", label: "All" },
  { value: "France", label: "France" },
  { value: "Germany", label: "Germany" },
  { value: "Australia", label: "Australia" },
  { value: "Canada", label: "Canada" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States", label: "United States" },
  { value: "Others", label: "Others" },
];

export const TimeZone = [
  { value: "", label: "All" },
  { value: "UTC-8 (PST)", label: "UTC-8 (PST)" },
  { value: "UTC-5 (EST)", label: "UTC-5 (EST)" },
  { value: "UTC-0 (GMT)", label: "UTC-0 (GMT)" },
  { value: "UTC-1 (CET)", label: "UTC-1 (CET)" },
  { value: "UTC-2 (EET)", label: "UTC-2 (EET)" },
  { value: "UTC-8 (CST)", label: "UTC-8 (CST)" },
  { value: "UTC-10 (AEST)", label: "UTC-10 (AEST)" },
];

export const ProfessionalSector = [
  { value: "", label: "All" },
  {
    value: "Engineering",
    label: "Engineering",
    children: [
      { value: "Mechanical", label: "Mechanical Engineering" },
      { value: "Electrical", label: "Electrical Engineering" },
      { value: "Civil", label: "Civil Engineering" },
      { value: "Software", label: "Software Engineering" },
    ],
  },
  {
    value: "Agriculture/ Environment",
    label: "Agriculture/ Environment",
    children: [
      { value: "Agriculture", label: "Agriculture" },
      { value: "Environmental Science", label: "Environmental Science" },
      { value: "Forestry", label: "Forestry" },
    ],
  },
  {
    value: "Creative /Cultural",
    label: "Creative /Cultural",
    children: [
      { value: "Design", label: "Design" },
      { value: "Art", label: "Art" },
      { value: "Media", label: "Media" },
    ],
  },
  {
    value: "Education Training",
    label: "Education Training",
    children: [
      { value: "Teaching", label: "Teaching" },
      { value: "Research", label: "Research" },
      { value: "Instructional Design", label: "Instructional Design" },
    ],
  },
  {
    value: "Business/ Finance",
    label: "Business/ Finance",
    children: [
      { value: "Accounting", label: "Accounting" },
      { value: "Marketing", label: "Marketing" },
      { value: "HR", label: "Human Resources" },
      { value: "Finance", label: "Finance" },
    ],
  },
  {
    value: "Science/Technology",
    label: "Science/Technology",
    children: [
      { value: "Research", label: "Research" },
      { value: "IT", label: "Information Technology" },
      { value: "Biotech", label: "Biotechnology" },
    ],
  },
  {
    value: "Health care",
    label: "Health care",
    children: [
      { value: "Medicine", label: "Medicine" },
      { value: "Nursing", label: "Nursing" },
      { value: "Pharmacy", label: "Pharmacy" },
    ],
  },
];

export const ActivityType = [
  { value: "", label: "All" },
  { value: "Workshop", label: "Workshop" },
  { value: "Seminar", label: "Seminar" },
  { value: "Conference", label: "Conference" },
  { value: "Webinar", label: "Webinar" },
  { value: "Training", label: "Training" },
  { value: "ResearchPresentation", label: "Research Presentation" },
  { value: "FieldActivity", label: "Field Activity" },
  { value: "OnlineCourse", label: "Online Course" },
];
