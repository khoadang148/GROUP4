import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ReportHistory({sidebar}) {
// thiếu truyền props sidebar để ml theo side bar

  return (
    <div className=" w-[1600] relative ">
      <div className="h-[75vh] bg-[#F7F7F7]  mt-0   ">
        <div className="bg-[#F7F7F7] p-8 rounded-lg "> //w-full
          {" "}
          
          <div className="flex mt-16 py-2 px-1 gap-2">
            <FontAwesomeIcon icon={faFlag} className="mr-2 mt-1" />
            <h1 className="text-[20px] font-medium">Report history</h1>
          </div>
          <p className="mb-4 text-[16px] py-[10px] font-medium">
            Thanks for reporting
          </p>
          <p className="mb-4 text-sm text-gray-500">
            Any member of the Cursus community can flag content to us that they
            believe violates our Community Guidelines. When something is
            flagged, it’s not automatically taken down. Flagged content is{" "}
            <br /> reviewed in line with the following guidelines:
          </p>
          <ul className="list-disc list-inside mb-4 text-sm font-normal text-gray-500">
            <li className="text-gray-500">
              Content that violates our{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-gray-500 no-underline hover:underline"
              >
                Community Guidelines
              </a>{" "}
              is removed from Edututs+.
            </li>
            <li className="text-gray-500">
              Content that may not be appropriate for all younger audiences may
              be age-restricted.
            </li>
          </ul>
          <div className="py-[15px]">
            <a
              href="#"
              className="text-blue-500 font-normal hover:text-gray-500 no-underline hover:underline "
            >
              Learn more about reporting content on Cursus.
            </a>
          </div>
          <div className="mt-6 text-gray-500 text-center py-[50px]">
            You haven't submitted any reports.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportHistory;
