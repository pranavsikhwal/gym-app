"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactBlock() {
  return (
    <section className="relative w-full overflow-hidden bg-background px-4 py-6 sm:py-12 md:py-16 lg:py-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base text-muted-foreground sm:text-lg">
            Have a question or ready to start your fitness journey? We'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-6 backdrop-blur-sm sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
              <form className="relative z-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-background/50 transition-colors focus:bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 transition-colors focus:bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="How can I help you?"
                    className="bg-background/50 transition-colors focus:bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none bg-background/50 transition-colors focus:bg-background"
                  />
                </div>

                <Button type="submit" className="w-full gap-2 text-base">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="rounded-xl border border-border/40 bg-background/60 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Working Hours
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">
                    6:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">
                    8:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
