import React from "react";
import Badge from "../Badge";
import { HiOutlineClipboardCheck } from "react-icons/hi";

export interface RequestCardPropsType
  extends React.HTMLAttributes<HTMLDivElement> {
  companyName: string;
  personName: string;
  designation: string;
  email: string;
  joinDate: string;
  formType: string;
  badgeVariant: "pink" | "purple" | "green" | "yellow" | "blue";
  requestType: string;
}

const RequestCard = ({
  companyName,
  personName,
  designation,
  email,
  joinDate,
  formType,
  badgeVariant,
  requestType,
}: RequestCardPropsType) => {
  return (
    <div className="min-w-[391px] w-fit font-inter p-4 flex flex-col justify-center items-start bg-white border border-[#e5e7eb] shadow-sm rounded-lg">
      <h2 className="text-xl leading-[30px] font-bold pb-[10px]">
        {companyName}
      </h2>
      <div className="py-4 flex justify-between items-center w-full">
        <div className="flex flex-col items-start">
          <h3 className="text-base font-semibold leading-normal mb-1">
            {personName}
          </h3>
          <div className="flex flex-col items-start">
            <div className="text-sm font-medium text-[#6b7280]">
              {designation}, {companyName}
            </div>
            <div className="text-sm font-normal leading-normal text-[#1c64f2]">
              {email}
            </div>
            <div className="text-xs font-medium leading-normal text-[#6B7280]">
              Joined: {joinDate}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end gap-[21px]">
          <div className="flex items-center space-x-[2px]">
            <HiOutlineClipboardCheck color="#048848" size="16px" />
            <span className="text-xs font-medium leading-[18px]">
              {formType}
            </span>
          </div>
          <Badge variant={badgeVariant} text={requestType} />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
