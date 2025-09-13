"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone as PhoneIcon, User, Loader2, CheckCircle2 } from "lucide-react";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<FormInputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onTouched", // Validate on blur
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset(); // Clear the form
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="relative border border-gray-200 shadow-2xl p-0 overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Accent bar */}
      <div className="h-2 w-full bg-gradient-to-r from-green-500 via-blue-400 to-green-400 rounded-t-2xl mb-0" />
      <div className="p-6 sm:p-8">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight drop-shadow-sm">Book your free site consultation</h3>

  {submitSuccess ? (
  <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 via-white to-green-100 p-6 shadow-md">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5" />
            <div>
              <h4 className="text-green-900 font-bold text-xl">Thank you for your request!</h4>
              <p className="text-green-800 mt-1 text-base">
                We've received your site visit request and will contact you shortly to schedule your consultation.
              </p>
              <Button
                variant="secondary"
                className="mt-4 px-6 py-2 rounded-lg shadow-sm hover:bg-green-100 transition-colors"
                onClick={() => setSubmitSuccess(false)}
              >
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl shadow-sm">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                rules={{ 
                  required: "Name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" },
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Name should only contain letters and spaces"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          {...field}
                          placeholder="Enter your full name"
                          className="pl-9 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^(?:\+91|0)?[6789]\d{9}$/,
                    message: "Please enter a valid Indian phone number",
                  },
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits"
                  },
                  maxLength: {
                    value: 13,
                    message: "Phone number cannot exceed 13 characters"
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          {...field}
                          type="tel"
                          inputMode="tel"
                          placeholder="Enter your phone number"
                          className="pl-9 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
                validate: {
                  notEmpty: (value) => value.trim().length > 0 || "Email cannot be empty",
                  validDomain: (value) => {
                    const domain = value.split('@')[1];
                    return !domain || domain.indexOf('.') !== -1 || "Email must have a valid domain";
                  }
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        {...field}
                        type="email"
                        inputMode="email"
                        placeholder="Enter your email"
                        className="pl-9 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              rules={{
                maxLength: {
                  value: 500,
                  message: "Message cannot exceed 500 characters"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={4}
                      placeholder="Tell us about your requirements or any questions you have"
                      className="focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" disabled={isSubmitting} className="w-full py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-md transition-all duration-200">
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
                  </span>
                ) : (
                  "Request Free Site Visit"
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              By submitting this form, you agree to be contacted by our team regarding your solar installation inquiry.
            </p>
          </form>
        </Form>
      )}
      </div>
    </Card>
  );
}
