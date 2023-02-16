import { Disclosure } from "@headlessui/react";
import React from "react";
import { BsChevronUp } from "react-icons/bs";

export interface AccordionItemPropTypes {
  heading: string;
  subheading?: string;
  date?: string;
  description: string[];
}

const AccordionItem = ({
  heading,
  subheading,
  description,
  date,
}: AccordionItemPropTypes) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`px-5 py-2 flex items-center justify-between w-full ${
              open ? "" : "border-b"
            }`}
          >
            <div className="flex flex-col items-start">
              <h2 className="text-base font-semibold leading-normal text-gray-900">
                {heading}
              </h2>
              {subheading && !open ? (
                <p className="text-sm font-normal leading-normal text-gray-600">
                  {subheading}
                </p>
              ) : null}
            </div>
            <div className="flex flex-row space-x-4 items-center">
              {date ? (
                <p className="text-base font-medium leading-normal text-gray-600">
                  {date}
                </p>
              ) : null}
              <BsChevronUp
                color="#000000"
                className={open ? "rotate-180 transform" : ""}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className={`px-5 pb-2 ${open ? "border-b" : ""}`}>
            {description?.length
              ? description.map((row, idx) => (
                  <p className="text-xs font-normal leading-normal" key={idx}>
                    {row}
                  </p>
                ))
              : null}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

AccordionItem.defaultProps = {
  date: "",
  subheading: "",
};

export default AccordionItem;
