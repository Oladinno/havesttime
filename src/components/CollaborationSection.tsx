"use client";

import { FormEvent, useState } from "react";
import Icon from "./Icon";
import { CONTACT_EMAIL } from "@/lib/site";

const SEGMENTS = [
  {
    icon: "science",
    iconColor: "text-primary",
    title: "Food Scientists & Labs",
    description: "Joint formulation research, clinical validation & co-authored nutritional trials.",
  },
  {
    icon: "bakery_dining",
    iconColor: "text-secondary",
    title: "Commercial Bakeries",
    description: "Fortification of bread lines without raising shelf price or degrading loaf crumb.",
  },
  {
    icon: "grain",
    iconColor: "text-primary",
    title: "Cereal Millers",
    description:
      "Micronutrient premixing for high-volume regional maize and sorghum processing.",
  },
  {
    icon: "local_shipping",
    iconColor: "text-secondary",
    title: "Distributors & Retail",
    description:
      "Direct access to packaged branded lines (JUNABLEND™) and institutional staples.",
  },
];

const INTEREST_OPTIONS = [
  "JUNABLEND™ Distribution",
  "FLOURVANT™ Bakery Trials",
  "Functional Seeds (Ogbono / Dawadawa)",
  "CEREVANT™ Porridge Matrix",
  "Academic / Clinical R&D",
];

export default function CollaborationSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    alert("Inquiry received. A HarvestTime technical representative will contact you within 24 hours.");
    event.currentTarget.reset();
  }

  return (
    <section className="w-full bg-surface-container-lowest py-24 px-margin" id="collaboration">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        {/* Left column: pitch + segments */}
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs text-secondary font-spec-data text-spec-data uppercase tracking-wider">
            <Icon className="text-[18px]" name="group_add" />
            <span>Open Innovation Ecosystem</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Partner With HarvestTime to Reshape Everyday Nutrition
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Scale demands collective commitment. HarvestTime collaborates with industrial leaders,
            agronomic cooperatives, and pioneering institutions at every node of the value chain.
          </p>

          {/* Segment list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-sm">
            {SEGMENTS.map((segment) => (
              <div className="flex items-start gap-space-sm" key={segment.title}>
                <Icon className={`text-[20px] mt-0.5 ${segment.iconColor}`} name={segment.icon} />
                <div>
                  <h5 className="font-label-lg text-label-lg text-on-surface font-bold">
                    {segment.title}
                  </h5>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {segment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: contact form */}
        <div className="lg:col-span-6 bg-surface-container rounded-2xl p-space-xl shadow-lg flex flex-col gap-space-md">
          <h3 className="font-headline-md text-headline-md text-primary font-bold">
            Discuss a Collaboration
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Connect directly with our Agronomic & Food Technology commercial desk in Lagos.
          </p>
          <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="collab-name">
                Full Name & Organization
              </label>
              <input
                className="w-full bg-surface-container-lowest px-4 py-2.5 rounded-lg text-on-surface font-body-md border-0 focus:ring-2 focus:ring-primary shadow-sm"
                id="collab-name"
                placeholder="Dr. / Engr. / Ms. Full Name"
                required
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="collab-email">
                  Corporate Email
                </label>
                <input
                  className="w-full bg-surface-container-lowest px-4 py-2.5 rounded-lg text-on-surface font-body-md border-0 focus:ring-2 focus:ring-primary shadow-sm"
                  id="collab-email"
                  placeholder="name@organization.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="collab-interest">
                  Collaboration Interest
                </label>
                <select
                  className="w-full bg-surface-container-lowest px-4 py-2.5 rounded-lg text-on-surface font-body-md border-0 focus:ring-2 focus:ring-primary shadow-sm"
                  id="collab-interest"
                >
                  {INTEREST_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="collab-scope">
                Project Scope or Inquiry
              </label>
              <textarea
                className="w-full bg-surface-container-lowest px-4 py-2.5 rounded-lg text-on-surface font-body-md border-0 focus:ring-2 focus:ring-primary shadow-sm"
                id="collab-scope"
                placeholder="Outline raw material parameters, required batch volume, or technical questions..."
                rows={3}
              />
            </div>
            <button
              className="w-full mt-space-xs py-3.5 rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all flex items-center justify-center gap-space-xs"
              type="submit"
            >
              <span>{submitted ? "Inquiry Sent — Thank You" : "Submit Technical Inquiry"}</span>
              <Icon className="text-[18px]" name="send" />
            </button>
          </form>
          <div className="flex items-center justify-between pt-space-xs font-spec-data text-spec-data text-on-surface-variant">
            <span>
              Direct Desk:{" "}
              <a className="text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </span>
            <span>Response SLA: 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
