"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, SearchSlashIcon } from "lucide-react";

const faqs = [
  {
    id: 1,
    title: "What is the membership fee?",
    content:
      "We offer flexible plans starting from ₹999/month. Contact us for the full pricing breakdown.",
  },
  {
    id: 2,
    title: "Is there a free trial?",
    content:
      "Yes! We offer a free 1-day trial so you can experience Kasrat before committing.",
  },
  {
    id: 3,
    title: "Do you offer personal training?",
    content:
      "Absolutely. Our certified trainers offer 1-on-1 sessions tailored to your goals.",
  },
  {
    id: 4,
    title: "What should I bring on my first visit?",
    content:
      "Just comfortable workout clothes and a water bottle — we handle the rest.",
  },
  {
    id: 5,
    title: "Are nutrition plans included?",
    content:
      "Basic guidance is included in all memberships. Detailed diet plans are available as an add-on.",
  },
];

export function FaqsSection() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filtered = faqs.filter(
    (faq) =>
      faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl md:border-x">
      <div className="px-4 py-10 lg:px-6">
        <h1 className="mb-4 font-semibold text-3xl md:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Find answers to common questions about Kasrat. Can't find what you're
          looking for? Our support team is here to help.
        </p>

        <InputGroup className="max-w-sm">
          <InputGroupInput
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs..."
            value={searchTerm}
          />
          <InputGroupAddon>
            <SearchIcon data-icon="inline-start" />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <Accordion
        className="space-y-2 border-0! px-4 py-6 lg:px-6"
        collapsible
        type="single"
      >
        {filtered.map((faq) => (
          <AccordionItem
            className="rounded-lg border px-4 shadow-xs"
            key={faq.id}
            value={faq.id.toString()}
          >
            <AccordionTrigger className="hover:no-underline">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 text-muted-foreground">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {filtered.length === 0 && (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchIcon />
            </EmptyMedia>
            <EmptyTitle>No FAQs found matching your search.</EmptyTitle>
          </EmptyHeader>
          <EmptyContent>
            <Button onClick={() => setSearchTerm("")} variant="outline">
              <SearchSlashIcon data-icon="inline-start" />
              Clear search
            </Button>
          </EmptyContent>
        </Empty>
      )}

      <div className="flex items-center px-4 py-6 lg:px-6">
        <p className="text-muted-foreground">
          Can't find what you're looking for?{" "}
          <a className="text-primary hover:underline" href="/contact">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}
