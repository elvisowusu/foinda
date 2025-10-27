"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ✅ Updated schema with "required" messages first
const contactSchema = z.object({
  name: z.string().nonempty("Name is required").min(2, "Name is too short"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  subject: z
    .string()
    .nonempty("Subject is required")
    .min(3, "Subject is too short"),
  message: z
    .string()
    .nonempty("Message is required")
    .min(10, "Message must be at least 10 characters"),
  type: z.string().nonempty("Please select a message type"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      type: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred while sending your message.");
      console.error(error);
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#F97316]/5 to-[#74CBE3]/5">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Send us a Message
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-white p-6 rounded-2xl shadow"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name")}
                className={`w-full p-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-orange-500 outline-none`}
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className={`w-full p-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-orange-500 outline-none`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Dropdown */}
          <div>
            <Select
              onValueChange={(value) =>
                setValue("type", value, { shouldValidate: true })
              }
            >
              <SelectTrigger
                className={`w-full p-3 rounded-lg border ${
                  errors.type ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-orange-500 outline-none`}
              >
                <SelectValue placeholder="Select Message Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="business">Business Partnership</SelectItem>
                <SelectItem value="media">Media Inquiry</SelectItem>
              </SelectContent>
            </Select>
            {errors.type && (
              <p className="text-sm text-red-600 mt-1">{errors.type.message}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              placeholder="Subject"
              {...register("subject")}
              className={`w-full p-3 rounded-lg border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-orange-500 outline-none`}
            />
            {errors.subject && (
              <p className="text-sm text-red-600 mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message")}
              placeholder="Your Message"
              rows={6}
              className={`w-full p-3 rounded-lg border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-orange-500 outline-none resize-none`}
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white hover:bg-orange-600 py-3"
          >
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
