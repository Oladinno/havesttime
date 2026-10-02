import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for HarvestTime — agriculture, food science, nutrition and commercial innovation.",
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-margin py-24">
      <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold">
        Terms of Use
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
        By accessing or using the HarvestTime website, you agree to these Terms of Use.
      </p>

      <section className="mt-space-xl">
        <h2 className="font-headline-md text-headline-md text-primary font-bold">
          Website Information
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          The information provided on this website is for general informational and business
          purposes.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          While HarvestTime aims to provide accurate current information, content may be
          updated, changed or removed without notice.
        </p>

        <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mt-space-md">
          Products and Projects
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Products, technologies, research areas and concepts described on this website may:
        </p>
        <ul className="font-body-md text-body-md text-on-surface-variant mt-space-sm list-disc list-inside">
          <li>be in research or development</li>
          <li>be undergoing testing or validation</li>
          <li>be available only in selected markets</li>
          <li>be subject to regulatory approval</li>
          <li>be modified before commercialization</li>
          <li>be discontinued or replaced</li>
        </ul>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Information on this website should not be interpreted as a guarantee of product
          availability.
        </p>

        <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mt-space-md">
          Nutrition and Health Information
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Information relating to nutrition, ingredients, food functionality or health is
          provided for general educational and product-development purposes.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          It is not intended as medical advice, diagnosis or treatment.
        </p>

        <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mt-space-md">
          Intellectual Property
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Unless otherwise stated, website content, brand names, product concepts, technology
          names, text, graphics and other materials are owned by or used with authorization by
          HarvestTime.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          No material from this website may be copied, reproduced, distributed or commercially
          used without appropriate authorization.
        </p>

        <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mt-space-md">
          Trademarks
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Names and marks displayed on this website, including HarvestTime product and
          technology names, may be trademarks, pending trademarks or proprietary commercial
          identifiers.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Use of these names without authorization is prohibited where protected by applicable
          law.
        </p>

        <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mt-space-md">
          External Links
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          This website may contain links to third-party websites or resources.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          HarvestTime is not responsible for the content, security, privacy practices or
          availability of third-party websites.
        </p>

        <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mt-space-md">
          Limitation of Liability
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          To the extent permitted by applicable law, HarvestTime will not be responsible for
          losses or damages arising solely from reliance on general information presented on
          this website.
        </p>

        <h3 className="font-headline-sm text-headline-sm text-on-surface-variant mt-space-md">
          Governing Terms
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          These Terms of Use may be updated periodically.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Continued use of the website after changes are published constitutes acceptance of
          the revised terms.
        </p>

        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
          For legal or website-related enquiries, contact:
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          <a
            className="text-primary underline"
            href={`mailto:${process.env.CONTACT_EMAIL || "info@harvesttime.com"}`}
          >
            info@harvesttime.com
          </a>
        </p>
      </section>

      <section className="mt-space-xl border-t border-surface-container-low pt-space-xl">
        <h2 className="font-headline-md text-headline-md text-primary font-bold">
          Contact
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          For general enquiries, partnerships, research collaboration, manufacturing,
          agricultural supply or commercial opportunities, please contact us.
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Email: info@harvesttime.com
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Website: www.harvesttime.com
        </p>
      </section>
    </div>
  );
}
