export type LcsPbRecord = {
  id: string;
  date: string;
  type: "Invoice" | "Quote" | "Account" | "Migration" | "Evidence";
  title: string;
  source: string;
  amountExGst?: number;
  amountIncGst?: number;
  recoveredIncGst?: number;
  discountIncGst?: number;
  effort: number;
  reward: number;
  status: "quoted" | "invoiced" | "option" | "evidence";
  details: string[];
};

const rawLcsPbRecords = [
  {
    id: "invoice-1140-email-hosting",
    date: "2025-12-01",
    type: "Invoice",
    title: "Invoice 1140: annual Microsoft 365, email hosting, admin, support and redirects",
    source: "LCS Accounts 2025.xlsx / Emails",
    amountExGst: 972,
    amountIncGst: 1069.2,
    recoveredIncGst: 1069.2,
    effort: 8,
    reward: 6,
    status: "invoiced",
    details: [
      "Covers Adam/Info Microsoft Business Basic, Caley Exchange Plan 1, Eli Exchange Plan 1.",
      "Includes livecombatsports.com.au email hosting, admin and support from 1 Dec 2025.",
      "Includes Redirect Links website hosting at $350 per year.",
    ],
  },
  {
    id: "accounts-2025-domain-email",
    date: "2025-12-01",
    type: "Account",
    title: "Service ownership and migration exposure",
    source: "LCS Accounts 2025.xlsx / Domain Names & Apps",
    amountExGst: 697,
    recoveredIncGst: 0,
    effort: 7,
    reward: 1,
    status: "evidence",
    details: [
      "Google Developer Console: $25 in Digital Response account, transfer can be requested after LCS registers and pays Google.",
      "Cloudflare DNS and DDoS protection: $0 in Digital Response account; estimated $200 migration cost.",
      "livecombatsports.com.au domain: $50 in LCS account; login details supplied in the source workbook.",
      "Email hosting: $622 in Digital Response / Microsoft account; estimated $500 migration cost.",
      "Links/Redirects: $350 included with email in Digital Response / Microsoft account; estimated $350 migration cost and ongoing costs up to $50/month.",
    ],
  },
  {
    id: "invoice-1141-migration",
    date: "2025-10-21",
    type: "Invoice",
    title: "Invoice 1141: email, links, redirects and DNS migration work with 50% discount",
    source: "Invoice Live Combat Sports.xls",
    amountExGst: 500,
    amountIncGst: 550,
    recoveredIncGst: 550,
    discountIncGst: 550,
    effort: 9,
    reward: 3,
    status: "invoiced",
    details: [
      "Email migration to a new vendor.",
      "Links/Redirects site packaged and relocated to another web host.",
      "DNS migration to new vendor.",
      "50% discount applied.",
    ],
  },
  {
    id: "migration-options-2025",
    date: "2025-10-21",
    type: "Migration",
    title: "Email migration options and process",
    source: "LCS Accounts 2025.xlsx / Emails",
    amountExGst: 500,
    amountIncGst: 550,
    recoveredIncGst: 0,
    effort: 8,
    reward: 1,
    status: "option",
    details: [
      "Option 1: no change, $0 ex GST.",
      "Option 2: stay with Digital Response and migrate to LCS tenant, $500 ex GST.",
      "Option 3: migrate to another reseller such as VentraIP, Telstra or GoDaddy, $500 ex GST.",
      "Process includes PST export, new accounts, DNS changes, PST restore, new passwords and user verification.",
    ],
  },
  {
    id: "cyber-report-2025",
    date: "2025-11-09",
    type: "Evidence",
    title: "Cybersecurity report prepared at end of relationship",
    source: "Live Combat Sports - Cybersecurity Report v1.0.docx",
    recoveredIncGst: 0,
    effort: 7,
    reward: 0,
    status: "evidence",
    details: [
      "Client relationship close-out material exists in the LiveCombatSports End of relationship folder.",
      "Supports the pattern of risk, governance and handover work beyond basic hosting.",
    ],
  },
  {
    id: "invoice-1132-r1",
    date: "2025-02-12",
    type: "Invoice",
    title: "Invoice 1132 R1: hosting protection, vendor support, DNS, redirects and testing",
    source: "Invoice Live Combat Sports.pdf / Invoice Live Combat Sports-PB-ASUS.pdf",
    amountIncGst: 1283,
    recoveredIncGst: 1283,
    effort: 9,
    reward: 5,
    status: "invoiced",
    details: [
      "11 months website hosting protection, vendor support and tech support from 1 Feb 2025.",
      "11 months Microsoft 365 email hosting for fightcardpromotions.com.au.",
      "One month website hosting, maintenance and support from 1 Jan 2025.",
      "Updated DNS records for Castr OTT, redirected website traffic to design.com, updated protection, redirected apex traffic to www, and tested changes.",
      "Two duplicate PDF copies are available locally.",
    ],
  },
  {
    id: "invoice-1132-annual",
    date: "2025-01-05",
    type: "Invoice",
    title: "Invoice 001132: 12 months website hosting, maintenance, support and Microsoft 365",
    source: "Invoice 1131 - LCS 2025.pdf",
    amountIncGst: 1350,
    recoveredIncGst: 1350,
    effort: 7,
    reward: 5,
    status: "invoiced",
    details: [
      "12 months website hosting, maintenance and support for livecombatsports.com.au from 1 Jan 2025 at $100/month.",
      "12 months Microsoft 365 email hosting for fightcardpromotions.com.au at $12.50/month.",
    ],
  },
  {
    id: "invoice-1009-current",
    date: "2022-01-17",
    type: "Invoice",
    title: "Invoice 001009 current: annual hosting, support, maintenance and Office 365",
    source: "Archive / Invoice 1009-Adam current.pdf",
    amountIncGst: 1350,
    recoveredIncGst: 1350,
    discountIncGst: 250,
    effort: 7,
    reward: 5,
    status: "invoiced",
    details: [
      "1 Nov 2021 to 31 Dec 2022: one year TMD Fightcard and Live Combat Sports monthly website hosting, support and maintenance.",
      "Fightcard and Live Combat Sports Office 365 annual accounts at $12.50/month.",
      "Current version reduced from the before-discount invoice.",
    ],
  },
  {
    id: "invoice-1009-before-discount",
    date: "2022-01-17",
    type: "Invoice",
    title: "Invoice 001009 before discount",
    source: "Archive / Invoice 1009-Adam before discount.pdf",
    amountIncGst: 1600,
    recoveredIncGst: 0,
    effort: 7,
    reward: 0,
    status: "evidence",
    details: [
      "Before-discount version shows $1,600 due for annual hosting/support/maintenance and Office 365.",
      "Current invoice reduced the amount to $1,350, a $250 write-down.",
    ],
  },
  {
    id: "quote-155-r2",
    date: "2016-08-15",
    type: "Quote",
    title: "Quote 0155 R2: generic streaming site, Live Boxing enhancements and LCS rebrand",
    source: "Quote 155 - Generic Steaming and Live Combat Sports R2.docx/pdf",
    amountExGst: 5900,
    amountIncGst: 6490,
    recoveredIncGst: 0,
    effort: 10,
    reward: 0,
    status: "quoted",
    details: [
      "Generic streaming website: $2,950 ex GST.",
      "Past Shows enhancement: $1,450 ex GST.",
      "Events page converted to second free channel: $350 ex GST.",
      "Live Combat Sports rebrand: $450 ex GST.",
      "Annual website/email hosting and domain registration: $700 ex GST.",
    ],
  },
  {
    id: "quote-155-original",
    date: "2016-07-27",
    type: "Quote",
    title: "Quote 0155: earlier version of streaming and LCS rebrand scope",
    source: "Quote 155 - Generic Steaming and Live Combat Sports.pdf",
    amountExGst: 6600,
    amountIncGst: 7260,
    recoveredIncGst: 0,
    effort: 10,
    reward: 0,
    status: "evidence",
    details: [
      "Generic streaming website: $2,950 ex GST.",
      "Past Shows enhancement: $1,450 ex GST.",
      "Events page update: $700 ex GST.",
      "Live Combat Sports rebrand: $800 ex GST.",
      "Annual website/email hosting and domain registration: $700 ex GST.",
    ],
  },
  {
    id: "quote-126",
    date: "2014-09-17",
    type: "Quote",
    title: "Quote 0126: Live Combat Sports website and hosting",
    source: "Quote 126 - Live Combat Sports Website.docx",
    amountExGst: 2400,
    amountIncGst: 2640,
    recoveredIncGst: 0,
    discountIncGst: 1100,
    effort: 9,
    reward: 0,
    status: "quoted",
    details: [
      "Live Combat Sports website discounted to $1,850 ex GST from $2,850.",
      "Website and email hosting, monitoring and technical support: $550 ex GST.",
      "Scope included rebrand graphics, sponsor changes, contact graphics, mailing list, CMS, payment gateway, search engine submission, meetings and browser compliance.",
    ],
  },
] satisfies LcsPbRecord[];

export const lcsPbRecords: LcsPbRecord[] = [...rawLcsPbRecords].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export const lcsPbSummary = {
  quotedIncGst: lcsPbRecords
    .filter((record) => record.status === "quoted")
    .reduce((total, record) => total + (record.amountIncGst ?? 0), 0),
  invoicedIncGst: lcsPbRecords
    .filter((record) => record.status === "invoiced")
    .reduce((total, record) => total + (record.amountIncGst ?? 0), 0),
  recoveredIncGst: lcsPbRecords.reduce((total, record) => total + (record.recoveredIncGst ?? 0), 0),
  knownDiscountIncGst: lcsPbRecords.reduce((total, record) => total + (record.discountIncGst ?? 0), 0),
  migrationCostExGst: 200 + 500 + 350,
  ongoingKnownAnnualExGst: 25 + 50 + 622 + 350,
};
