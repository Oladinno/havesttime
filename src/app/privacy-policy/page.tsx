import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy practices for HarvestTime — agriculture, food science, nutrition and commercial innovation.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-margin py-24">
      <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold">
        Privacy Policy
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
        HarvestTime respects your privacy and is committed to handling personal information
        responsibly.
      </p>

      <section className="mt-space-xl">
        <h2 className="font-headline-md text-headline-md text-primary font-bold">
          Information we collect and how we use it
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          Information submitted through this website, including your name, email address,
          organization and enquiry details, may be used to:
        </p>
        <ul className="font-body-md text-body-md text-on-surface-variant mt-space-sm list-disc list-inside">
          <li>respond to your enquiry</li>
          <li>evaluate potential partnerships or business opportunities</li>
          <li>provide requested information</li>
          <li>improve our website and communications</li>
          <li>meet legal, regulatory or business requirements</li>
        </ul>

        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
          We do not intend to sell personal information submitted through this website.
        </p>

        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
          Information may be shared with service providers, professional advisers or relevant
          business partners where necessary to respond to an enquiry or support our operations,
          subject to appropriate confidentiality and data-protection requirements.
        </p>

        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
          Our website may use cookies or similar technologies to support website functionality,
          security and performance.
        </p>

        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
          By using this website or submitting information through it, you acknowledge the
          practices described in this Privacy Policy.
        </p>

        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
          For privacy-related enquiries, contact:
        </p>

        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
          <a
            className="text-primary underline"
            href={`mailto:${process.env.CONTACT_EMAIL || "info@harvesttime.com"}`}
          >
            info@harvesttime.com
          </a>
        </p>

        <p className="font-body-md text-body-md text-on-surface-variant mt-space-md">
          HarvestTime may update this Privacy Policy from time to time as our website,
          operations or legal requirements change.
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
