"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kasrat@gmail.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7014380327",
    href: "tel:7014380327",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Amritsar",
    href: "https://www.google.com/search?q=amritsar&oq=amritsar&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyDQgCEAAYsQMYgAQYigUyCggDEAAYsQMYgAQyCggEEAAYsQMYgAQyEAgFEC4YrwEYxwEYsQMYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgxNzExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
  },
];
export function Location() {
  return (
    <section className="relative max-w-3xl mx-auto  overflow-hidden bg-background px-4 py-6 sm:py-10 md:py-14 lg:py-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="space-y-6 lg:space-y-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              <Card className="group relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-4 transition-all duration-300 hover:border-foreground/20 hover:shadow-md hover:-translate-y-1 backdrop-blur-sm sm:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <a
                  href={info.href}
                  className="relative z-10 flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {info.label}
                    </h3>
                    <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground/80">
                      {info.value}
                    </p>
                  </div>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
