"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Crown,
  ChevronRight,
  ArrowLeft,
  Calendar,
  ShieldAlert,
  UploadCloud,
  FileText,
  CheckCircle,
  Clock,
  Sparkles,
  Scissors,
  Check
} from "lucide-react";

export default function BookNow() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    petName: "",
    petBreed: "",
    petWeight: "",
    petAge: "",
    serviceType: "boarding", // boarding | daycare | grooming
    checkIn: "",
    checkOut: "",
    suiteType: "picket", // picket | queen | king
    groomingOption: "groom", // groom | bath | spa
    vaccineFile: null as File | null,
    vaccineFileName: "",
    vaccineUploadState: "idle", // idle | uploading | success
    bookingId: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        vaccineFile: file,
        vaccineFileName: file.name,
        vaccineUploadState: "uploading",
      }));

      try {
        const uploadData = new FormData();
        uploadData.append("vaccine", file);

        const response = await fetch("/api/vaccines", {
          method: "POST",
          body: uploadData,
        });

        if (response.ok) {
          setFormData((prev) => ({
            ...prev,
            vaccineUploadState: "success",
          }));
        } else {
          setFormData((prev) => ({
            ...prev,
            vaccineUploadState: "idle",
          }));
          setFormErrors((prev) => ({
            ...prev,
            vaccine: "Verification failed on upload.",
          }));
        }
      } catch (error) {
        setFormData((prev) => ({
          ...prev,
          vaccineUploadState: "idle",
        }));
        setFormErrors((prev) => ({
          ...prev,
          vaccine: "Network error during upload.",
        }));
      }
    }
  };

  const handleBookSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const res = await response.json();
        setFormData((prev) => ({ ...prev, bookingId: res.bookingId }));
        setStep(5);
      } else {
        setFormErrors({ booking: "Booking failed. Please try again." });
      }
    } catch (error) {
      setFormErrors({ booking: "Network connection error." });
    } finally {
      setIsSubmitting(false);
    }
  };


  const validateStep = (currentStep: number) => {
    const errors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.ownerName) errors.ownerName = "Owner name is required";
      if (!formData.email) errors.email = "Email is required";
      if (!formData.phone) errors.phone = "Phone number is required";
      if (!formData.petName) errors.petName = "Pet name is required";
      if (!formData.petBreed) errors.petBreed = "Breed is required";
      if (!formData.petWeight) errors.petWeight = "Weight is required";
    } else if (currentStep === 2) {
      if (formData.serviceType !== "grooming" && !formData.checkIn) {
        errors.checkIn = "Check-in date is required";
      }
      if (formData.serviceType === "boarding" && !formData.checkOut) {
        errors.checkOut = "Check-out date is required";
      }
      if (formData.serviceType === "grooming" && !formData.checkIn) {
        errors.checkIn = "Appointment date is required";
      }
    } else if (currentStep === 3) {
      if (formData.vaccineUploadState !== "success") {
        errors.vaccine = "Please upload immunization records to proceed";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="bg-brand-cream min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Logo and Intro */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="bg-gradient-gold p-1 rounded-lg">
              <Crown className="h-5 w-5 text-brand-navy" />
            </div>
            <span className="font-serif text-lg font-bold text-brand-navy">Furry Tales Boarding</span>
          </Link>
          <h1 className="font-serif text-3xl font-bold text-brand-navy">Royal Booking Portal</h1>
          <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
            Book instantly. Connected directly to our real-time calendar system to guarantee availability.
          </p>
        </div>

        {/* Step Progress Tracker */}
        {step <= 4 && (
          <div className="bg-white rounded-xl p-5 border border-brand-gold/10 shadow-sm mb-8 flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0 hidden sm:block mx-12" />
            {[
              { num: 1, name: "Pet Info" },
              { num: 2, name: "Dates & Services" },
              { num: 3, name: "Vaccinations" },
              { num: 4, name: "Review & Book" },
            ].map((s) => (
              <div key={s.num} className="relative z-10 flex flex-col items-center space-y-1.5 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    step >= s.num
                      ? "bg-brand-navy text-white ring-4 ring-brand-gold/20"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s.num}
                </div>
                <span
                  className={`text-[10px] sm:text-xs font-bold transition-colors duration-300 hidden sm:inline ${
                    step === s.num ? "text-brand-navy" : "text-gray-400"
                  }`}
                >
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-brand-gold/15 shadow-md p-6 sm:p-10 relative overflow-hidden">
          {/* Top Gold Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

          {/* STEP 1: Pet & Owner Profile */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl font-bold text-brand-navy border-b border-gray-100 pb-3">
                1. Owner & Pet Profile
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                    Owner's Full Name
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10 transition-colors"
                  />
                  {formErrors.ownerName && (
                    <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.ownerName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sarah@example.com"
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10 transition-colors"
                  />
                  {formErrors.email && (
                    <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. (423) 555-0199"
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10 transition-colors"
                  />
                  {formErrors.phone && (
                    <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                    Pet's Name
                  </label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleInputChange}
                    placeholder="e.g. Winston"
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10 transition-colors"
                  />
                  {formErrors.petName && (
                    <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.petName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                    Breed
                  </label>
                  <input
                    type="text"
                    name="petBreed"
                    value={formData.petBreed}
                    onChange={handleInputChange}
                    placeholder="e.g. Goldendoodle, Great Pyrenees"
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10 transition-colors"
                  />
                  {formErrors.petBreed && (
                    <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.petBreed}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                      Weight (lbs)
                    </label>
                    <input
                      type="number"
                      name="petWeight"
                      value={formData.petWeight}
                      onChange={handleInputChange}
                      placeholder="e.g. 45"
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10 transition-colors"
                    />
                    {formErrors.petWeight && (
                      <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.petWeight}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                      Age (years)
                    </label>
                    <input
                      type="number"
                      name="petAge"
                      value={formData.petAge}
                      onChange={handleInputChange}
                      placeholder="e.g. 3"
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10 transition-colors"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-100 flex justify-end">
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 text-xs font-bold px-8 py-3 rounded-full bg-brand-navy text-white hover:bg-brand-blue transition-all duration-300 cursor-pointer"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Dates & Services */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl font-bold text-brand-navy border-b border-gray-100 pb-3">
                2. Accommodation & Schedule
              </h2>

              {/* Service Selection Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { id: "boarding", label: "Boarding", desc: "Suites", icon: Crown },
                  { id: "daycare", label: "Daycare", desc: "Turf Play", icon: Sparkles },
                  { id: "grooming", label: "Grooming", desc: "Styling", icon: Scissors },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, serviceType: s.id }))
                      }
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 ${
                        formData.serviceType === s.id
                          ? "border-brand-gold bg-brand-cream/40 ring-1 ring-brand-gold/30 shadow-inner"
                          : "border-gray-200 hover:border-brand-gold/30 bg-white"
                      }`}
                    >
                      <Icon className={`h-6 w-6 mb-2 ${formData.serviceType === s.id ? "text-brand-gold" : "text-gray-400"}`} />
                      <span className="text-xs font-bold text-brand-navy">{s.label}</span>
                      <span className="text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">{s.desc}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Inputs based on Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {formData.serviceType === "boarding" && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                        Check-In Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10"
                      />
                      {formErrors.checkIn && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.checkIn}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                        Check-Out Date
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10"
                      />
                      {formErrors.checkOut && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.checkOut}</p>
                      )}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                        Suite Selection
                      </label>
                      <select
                        name="suiteType"
                        value={formData.suiteType}
                        onChange={handleInputChange}
                        className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10"
                      >
                        <option value="picket">Open-Top White Picket Fence Suite (Cage-Free Standard) - $48/night</option>
                        <option value="queen">Royal Queen Suite (Medium Breeds, Extra Cushions) - $58/night</option>
                        <option value="king">Imperial King Suite (Large Breeds, Private Patio) - $72/night</option>
                      </select>
                    </div>
                  </>
                )}

                {formData.serviceType === "daycare" && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                        Daycare Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10"
                      />
                      {formErrors.checkIn && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.checkIn}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                        Frequency
                      </label>
                      <select className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none bg-brand-cream/10">
                        <option>One-time trial day</option>
                        <option>Recurring Weekly package (Save 10%)</option>
                        <option>Recurring Monthly package (Save 15%)</option>
                      </select>
                    </div>
                  </>
                )}

                {formData.serviceType === "grooming" && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                        Requested Groom Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10"
                      />
                      {formErrors.checkIn && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.checkIn}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy mb-1.5 uppercase tracking-wide">
                        Style Level
                      </label>
                      <select
                        name="groomingOption"
                        value={formData.groomingOption}
                        onChange={handleInputChange}
                        className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-brand-gold bg-brand-cream/10"
                      >
                        <option value="bath">Bath & Brush Out Only</option>
                        <option value="groom">Full Precision Royal Groom (Scissor haircut)</option>
                        <option value="spa">Luxury Spa Treatment (Adds Blueberry facial & Mudmask)</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Navigation */}
              <div className="pt-6 border-t border-gray-100 flex justify-between">
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-1.5 text-xs font-bold text-gray-500 hover:text-brand-navy transition-colors py-3"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 text-xs font-bold px-8 py-3 rounded-full bg-brand-navy text-white hover:bg-brand-blue transition-all duration-300"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Secure Vaccine Upload */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-start space-x-3 bg-amber-50 border border-amber-200 p-4 rounded-xl">
                <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                    Mandatory Immunizations Required
                  </h4>
                  <p className="text-[11px] text-amber-700 leading-normal">
                    To maintain our high safety standards, all guests must possess active certificates for **Rabies, DHPP, and Bordetella** vaccinations. Please upload a clear photo or PDF document below.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-xl font-bold text-brand-navy border-b border-gray-100 pb-3">
                3. Upload Vaccination Records
              </h2>

              {/* File Drag and Drop Shell */}
              <div className="border-2 border-dashed border-gray-300 hover:border-brand-gold rounded-xl p-8 transition-colors text-center relative">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center">
                    <UploadCloud className="h-6 w-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">
                      Drag and drop your files here, or <span className="text-brand-gold underline">browse</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      Supports PDF, PNG, or JPG (Max size: 8MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Upload Status Card */}
              {formData.vaccineUploadState !== "idle" && (
                <div className="bg-brand-cream/50 rounded-xl p-4 border border-brand-gold/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-brand-navy" />
                    <div>
                      <p className="text-xs font-bold text-brand-navy truncate max-w-[200px] sm:max-w-md">
                        {formData.vaccineFileName}
                      </p>
                      {formData.vaccineUploadState === "uploading" ? (
                        <p className="text-[10px] text-gray-400 animate-pulse">Encrypting & uploading securely...</p>
                      ) : (
                        <p className="text-[10px] text-green-600 font-semibold flex items-center">
                          <Check className="h-3 w-3 mr-1" /> Document uploaded and verified
                        </p>
                      )}
                    </div>
                  </div>
                  {formData.vaccineUploadState === "uploading" ? (
                    <div className="w-5 h-5 rounded-full border-2 border-brand-gold border-t-transparent animate-spin" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                </div>
              )}
              {formErrors.vaccine && (
                <p className="text-[10px] text-red-500 font-bold">{formErrors.vaccine}</p>
              )}

              {/* Navigation */}
              <div className="pt-6 border-t border-gray-100 flex justify-between">
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-1.5 text-xs font-bold text-gray-500 hover:text-brand-navy transition-colors py-3"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 text-xs font-bold px-8 py-3 rounded-full bg-brand-navy text-white hover:bg-brand-blue transition-all duration-300"
                >
                  <span>Continue</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Review and Instant API Reservation */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-serif text-xl font-bold text-brand-navy border-b border-gray-100 pb-3">
                4. Review Your Royal Booking
              </h2>

              <div className="bg-brand-cream/40 rounded-xl p-5 border border-brand-gold/15 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-400 block uppercase font-bold text-[9px] tracking-wide">Owner</span>
                    <span className="font-bold text-brand-navy">{formData.ownerName}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase font-bold text-[9px] tracking-wide">Phone</span>
                    <span className="font-bold text-brand-navy">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase font-bold text-[9px] tracking-wide">Guest (Dog)</span>
                    <span className="font-bold text-brand-navy">
                      {formData.petName} ({formData.petBreed}, {formData.petWeight} lbs)
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase font-bold text-[9px] tracking-wide">Service Selected</span>
                    <span className="font-bold text-brand-navy capitalize">{formData.serviceType}</span>
                  </div>
                </div>

                <div className="border-t border-brand-gold/10 pt-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-gray-400 block uppercase font-bold text-[9px] tracking-wide">Schedule / Stay</span>
                    <span className="font-bold text-brand-navy">
                      {formData.checkIn} {formData.checkOut ? `to ${formData.checkOut}` : ""}
                    </span>
                  </div>
                  {formData.serviceType === "boarding" && (
                    <div className="text-right">
                      <span className="text-gray-400 block uppercase font-bold text-[9px] tracking-wide">Suite Tier</span>
                      <span className="font-bold text-brand-navy capitalize">{formData.suiteType} Suite</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-brand-gold/10 pt-4 flex items-center space-x-2 text-xs text-green-700">
                  <CheckCircle className="h-4.5 w-4.5 text-green-600 shrink-0" />
                  <span className="font-medium">Vaccination Records Encrypted and Attached</span>
                </div>
              </div>

              {/* API Integration Trust Seal */}
              <div className="border border-green-200 bg-green-50/50 p-4 rounded-xl flex items-center space-x-3 text-xs">
                <Clock className="h-5 w-5 text-green-600 shrink-0" />
                <div className="text-green-800">
                  <p className="font-bold">Live Integration Active</p>
                  <p className="text-[10px] text-green-700 mt-0.5">
                    Upon clicking confirm, your reservation is instantly synchronized with our real-time calendar system. No waiting or follow-up calls needed.
                  </p>
                </div>
              </div>

              {/* Actions */}
              {formErrors.booking && (
                <p className="text-xs text-red-500 font-bold text-center mb-3">{formErrors.booking}</p>
              )}
              <div className="pt-6 border-t border-gray-100 flex justify-between">
                <button
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="flex items-center space-x-1.5 text-xs font-bold text-gray-500 hover:text-brand-navy transition-colors py-3 disabled:opacity-55"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={handleBookSubmit}
                  disabled={isSubmitting}
                  className="flex items-center justify-center space-x-2 text-sm font-extrabold px-10 py-4 rounded-full bg-gradient-gold text-brand-navy hover:scale-[1.02] shadow-lg transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 rounded-full border-2 border-brand-navy border-t-transparent animate-spin mr-2" />
                  ) : null}
                  <span>Confirm Royal Reservation</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Success State */}
          {step === 5 && (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-bold text-brand-navy">Stay Secured!</h2>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  <span className="font-bold text-brand-navy">{formData.petName || "Winston"}</span>’s royal stay is officially confirmed (Reservation Code: <span className="font-mono font-bold text-brand-gold-dark">{formData.bookingId || "FT-9999"}</span>). A detailed reservation summary and welcome packet have been sent to <span className="font-semibold text-brand-navy">{formData.email}</span>.
                </p>
              </div>

              {/* Local SEO Details & Prep Instructions */}
              <div className="bg-brand-cream/50 rounded-xl p-6 border border-brand-gold/15 max-w-lg mx-auto text-left space-y-4">
                <h4 className="font-serif text-sm font-bold text-brand-navy border-b border-brand-gold/10 pb-2">
                  Drop-Off Location & Prep Checklist
                </h4>
                <div className="space-y-3 text-xs">
                  <p className="font-semibold text-brand-navy flex items-center space-x-1.5">
                    <span>📍 5035 Ooltewah Ringgold Rd, Ooltewah, TN</span>
                  </p>
                  <ul className="list-disc pl-4 space-y-1.5 text-gray-500">
                    <li>Bring your dog on a standard leash (no retractables).</li>
                    <li>Pack their regular dry kibble pre-portioned in zip-lock bags.</li>
                    <li>Drop off times: Mon-Fri between 7:00 AM and 10:00 AM.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-navy hover:text-brand-gold transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Return to Home</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
