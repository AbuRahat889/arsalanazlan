export const CourseType = [
  { value: "FCPD", label: "FCPD" },
  { value: "SCPD", label: "SCPD" },
  { value: "ACPD", label: "ACPD" },
];
export const Locations = [
  { value: "France", label: "France" },
  { value: "Germany", label: "Germany" },
  { value: "Australia", label: "Australia" },
  { value: "Canada", label: "Canada" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States", label: "United States" },
  { value: "Others", label: "Others" },
];
export const TimeZone = [
  { value: "UTC-8 (PST)", label: "UTC-8 (PST)" },
  { value: "UTC-5 (EST)", label: "UTC-5 (EST)" },
  { value: "UTC-0 (GMT)", label: "UTC-0 (GMT)" },
  { value: "UTC-1 (CET)", label: "UTC-1 (CET)" },
  { value: "UTC-2 (EET)", label: "UTC-2 (EET)" },
  { value: "UTC-8 (CST)", label: "UTC-8 (CST)" },
  { value: "UTC-10 (AEST)", label: "UTC-10 (AEST)" },
];



export const ProfessionalSector = [
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
