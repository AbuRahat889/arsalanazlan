export function MyPlansCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      {/* Header */}
      <div className="flex flex-col-reverse md:flex-row gap-5 items-start md:items-center justify-between mb-5">
        <h1 className="text-2xl font-semibold text-textColor">My Plans</h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2">
          Renew Plans
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Plan Information */}
      <div className="space-y-6">
        {/* Current Plan */}
        <div className="flex flex-col md:flex-row items-start gap-3 border-b pb-5">
          <span className="text-gray-700 font-medium min-w-[140px]">
            Current plan :
          </span>
          <span className="text-gray-600">
            Standard Certification (Monthly)
          </span>
        </div>

        {/* Name */}
        <div className="flex flex-col md:flex-row items-start gap-3">
          <span className="text-gray-700 font-medium min-w-[140px]">
            Name :
          </span>
          <span className="text-gray-600">Mahadi Hasan</span>
        </div>

        {/* Invoice Number */}
        <div className="flex flex-col md:flex-row items-start gap-3">
          <span className="text-gray-700 font-medium min-w-[140px]">
            Invoice no. :
          </span>
          <span className="text-gray-600">1224021248132</span>
        </div>

        {/* Next Billing Date */}
        <div className="flex flex-col md:flex-row items-start gap-3">
          <div className="flex items-center gap-2 min-w-[140px]">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                ry="2"
                strokeWidth={2}
              />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} />
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
            </svg>
            <span className="text-gray-700 font-medium">
              Next Billing Date :
            </span>
          </div>
          <span className="text-gray-600">25 Jun,2025</span>
        </div>

        {/* Current Status */}
        <div className="flex items-start gap-3">
          <div className="flex items-center gap-2 min-w-[140px]">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-gray-700 font-medium">Current Status :</span>
          </div>
          <span className="text-green-600 font-medium">Active</span>
        </div>
      </div>
    </div>
  );
}
