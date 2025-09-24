export const workshops = [
  {
    id: 1,
    title: "Advanced Project Management Workshop",
    organization: "PMI Institute",
    status: "Approved",
    statusColor: "green",
    duration: "8 hours",
    date: "12/1/2025",
    type: "Workshop/Training Course",
    description:
      "Comprehensive workshop covering Agile and Lean project management methodologies...",
    attachments: 2,
  },
  {
    id: 2,
    title: "Leadership in Tech Conference",
    organization: "Tech Leaders Assoc.",
    status: "Pending",
    statusColor: "yellow",
    duration: "6 hours",
    date: "5/15/2025",
    type: "Conference",
    description:
      "Conference focused on leadership skills in the rapidly evolving tech world...",
    attachments: 1,
  },
  {
    id: 3,
    title: "Data Analytics Bootcamp",
    organization: "DataCamp Academy",
    status: "Rejected",
    statusColor: "red",
    duration: "12 hours",
    date: "7/22/2025",
    type: "Bootcamp",
    description:
      "Hands-on training in data visualization, SQL, and Python for analytics...",
    attachments: 3,
  },
  {
    id: 4,
    title: "Agile Scrum Certification",
    organization: "Scrum Alliance",
    status: "Approved",
    statusColor: "green",
    duration: "10 hours",
    date: "9/10/2025",
    type: "Certification Course",
    description:
      "Certification course to validate your Agile Scrum Mastery skills...",
    attachments: 2,
  },
];

export const activities = [
  {
    id: 1,
    title: "Course approved",
    description: "Advanced Project Management - 2 hours ago",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          d="M10.5 11.666C13.2614 11.666 15.5 9.42744 15.5 6.66602C15.5 3.90459 13.2614 1.66602 10.5 1.66602C7.73858 1.66602 5.5 3.90459 5.5 6.66602C5.5 9.42744 7.73858 11.666 10.5 11.666Z"
          stroke="#22C55E"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3982 10.7422L14.6673 18.3339L10.5007 15.8339L6.33398 18.3339L7.60315 10.7422"
          stroke="#22C55E"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "New assignment uploaded",
    description: "Leadership Skills - 30 minutes ago",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          d="M13.0007 1.66602H5.50065C5.05862 1.66602 4.6347 1.84161 4.32214 2.15417C4.00958 2.46673 3.83398 2.89065 3.83398 3.33268V16.666C3.83398 17.108 4.00958 17.532 4.32214 17.8445C4.6347 18.1571 5.05862 18.3327 5.50065 18.3327H15.5007C15.9427 18.3327 16.3666 18.1571 16.6792 17.8445C16.9917 17.532 17.1673 17.108 17.1673 16.666V5.83268L13.0007 1.66602Z"
          stroke="#F59E0B"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.166 1.66602V4.99935C12.166 5.44138 12.3416 5.8653 12.6542 6.17786C12.9667 6.49042 13.3907 6.66602 13.8327 6.66602H17.166"
          stroke="#F59E0B"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 12.5007L9.66667 14.1673L13 10.834"
          stroke="#F59E0B"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Certificate issued",
    description: "Team Collaboration Workshop - 1 day ago",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <circle cx="10.5" cy="6" r="4" stroke="#F59E0B" strokeWidth="1.66667" />
        <path
          d="M10.5 10V18"
          stroke="#F59E0B"
          strokeWidth="1.66667"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
