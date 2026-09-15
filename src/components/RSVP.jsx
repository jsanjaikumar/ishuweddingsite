// import { useState } from "react";
// import SectionWrapper from "./SectionWrapper";
// import SectionHeading from "./SectionHeading";

// function Field({ label, id, name, type = "text", required, value, onChange }) {
//   return (
//     <div className="flex flex-col gap-1.5 w-full">
//       <label
//         htmlFor={id}
//         className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7f7667] font-medium"
//       >
//         {label} {required && <span className="text-[#c5a059]">*</span>}
//       </label>
//       <input
//         id={id}
//         name={name}
//         type={type}
//         required={required}
//         value={value}
//         onChange={onChange}
//         autoComplete="off"
//         className="w-full min-h-[48px] bg-[#fff8f3]/60 border border-[#d1c5b4] rounded-lg px-4 py-3 font-sans text-sm text-[#1f1b15] outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] hover:border-[#c5a059]/50 transition-all duration-300 placeholder:text-[#d1c5b4]"
//         placeholder={`Enter ${label.toLowerCase()}`}
//       />
//     </div>
//   );
// }

// export default function RSVP() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     attending: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const onChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   const onSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <SectionWrapper id="rsvp" className="bg-[#fff8f3]">
//       <SectionHeading
//         eyebrow="Prescribe Your Blessings"
//         title="Send Your RSVP"
//         subtitle="With heartfelt love, Dr. Iswariya & Dr. Vigneswaran"
//       />

//       <div data-reveal className="w-full max-w-[42rem] mx-auto">
//         {submitted ? (
//           <div className="text-center py-12 sm:py-16 px-6 sm:px-10 rounded-2xl border border-[#c5a059]/50 bg-[#fffdfa] shadow-[0_8px_30px_rgba(119,90,25,0.06)]">
//             <div
//               className="text-[#c5a059] text-4xl sm:text-5xl mb-4 select-none"
//               aria-hidden="true"
//             >
//               ♡
//             </div>
//             <h3 className="font-serif text-2xl sm:text-3xl text-[#775a19] mb-3 font-medium">
//               Prescription Received!
//             </h3>
//             <p className="font-sans text-sm text-[#4e4639] leading-relaxed max-w-md mx-auto">
//               Your prescription of blessings has reached our hearts.
//               <br className="hidden sm:block" />
//               We look forward to celebrating this unforgettable milestone with you!
//             </p>
//           </div>
//         ) : (
//           <div className="rounded-2xl bg-[#fffdfa] border border-[#c5a059]/45 p-6 sm:p-8 md:p-10 shadow-[0_10px_32px_rgba(119,90,25,0.06)] relative overflow-hidden">
//             {/* Subtle heart pulse decoration */}
//             <div className="flex items-center justify-center gap-3 -mt-2 mb-5 opacity-70" aria-hidden="true">
//               <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />
//               <svg viewBox="0 0 24 24" className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#c5a059] fill-current animate-heartbeat-soft">
//                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//               </svg>
//               <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
//             </div>
//             <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
//                 <Field
//                   label="Full Name"
//                   id="name"
//                   name="name"
//                   required
//                   value={form.name}
//                   onChange={onChange}
//                 />
//                 <Field
//                   label="Email Address"
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={form.email}
//                   onChange={onChange}
//                 />
//               </div>

//               <div className="flex flex-col gap-2">
//                 <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7f7667] font-medium">
//                   Will You Attend? <span className="text-[#c5a059]">*</span>
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   {["Joyfully Yes", "Unable to Attend"].map((opt) => {
//                     const isChecked = form.attending === opt;
//                     return (
//                       <label
//                         key={opt}
//                         className={`flex items-center gap-3 p-3.5 rounded-xl border min-h-[48px] cursor-pointer transition-all duration-300 select-none ${
//                           isChecked
//                             ? "border-[#c5a059] bg-[#c5a059]/10 shadow-sm"
//                             : "border-[#d1c5b4]/70 hover:border-[#c5a059]/60 bg-[#fff8f3]/30"
//                         }`}
//                       >
//                         <input
//                           type="radio"
//                           name="attending"
//                           value={opt}
//                           required
//                           checked={isChecked}
//                           onChange={onChange}
//                           className="sr-only"
//                         />
//                         <span
//                           className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
//                             isChecked
//                               ? "border-[#c5a059] bg-[#c5a059]"
//                               : "border-[#d1c5b4]"
//                           }`}
//                         >
//                           {isChecked && (
//                             <span className="w-1.5 h-1.5 rounded-full bg-white block" />
//                           )}
//                         </span>
//                         <span className="font-sans text-sm text-[#4e4639]">
//                           {opt}
//                         </span>
//                       </label>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="flex flex-col gap-1.5">
//                 <label
//                   htmlFor="message"
//                   className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7f7667] font-medium"
//                 >
//                   Your Blessings &amp; Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   value={form.message}
//                   onChange={onChange}
//                   className="w-full min-h-[110px] bg-[#fff8f3]/60 border border-[#d1c5b4] rounded-lg px-4 py-3 font-sans text-sm text-[#1f1b15] outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] hover:border-[#c5a059]/50 transition-all duration-300 resize-none placeholder:text-[#d1c5b4]"
//                   placeholder="Write your heartfelt blessings here..."
//                 />
//               </div>

//               <div className="flex justify-center pt-2">
//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium bg-[#c5a059] hover:bg-[#775a19] text-white px-10 sm:px-14 min-h-[48px] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md"
//                 >
//                   Submit RSVP
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </SectionWrapper>
//   );
// }

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

function Field({
  label,
  id,
  name,
  type = "text",
  required,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={id}
        className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7f7667] font-medium"
      >
        {label} {required && <span className="text-[#c5a059]">*</span>}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="w-full min-h-[48px] bg-[#fff8f3]/60 border border-[#d1c5b4] rounded-lg px-4 py-3 font-sans text-sm text-[#1f1b15] outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] hover:border-[#c5a059]/50 transition-all duration-300 placeholder:text-[#d1c5b4]"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    attending: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to send RSVP.");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("RSVP submission failed:", error);
      setError("Unable to send your RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="rsvp" className="bg-[#fff8f3]">
      <SectionHeading
        eyebrow="Prescribe Your Blessings"
        title="Send Your RSVP"
        subtitle="With heartfelt love, Dr. Iswariya & Dr. Vigneswaran"
      />

      <div data-reveal className="w-full max-w-[42rem] mx-auto">
        {submitted ? (
          <div className="text-center py-12 sm:py-16 px-6 sm:px-10 rounded-2xl border border-[#c5a059]/50 bg-[#fffdfa] shadow-[0_8px_30px_rgba(119,90,25,0.06)]">
            <div
              className="text-[#c5a059] text-4xl sm:text-5xl mb-4 select-none"
              aria-hidden="true"
            >
              ♡
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#775a19] mb-3 font-medium">
              Prescription Received!
            </h3>

            <p className="font-sans text-sm text-[#4e4639] leading-relaxed max-w-md mx-auto">
              Your prescription of blessings has reached our hearts.
              <br className="hidden sm:block" />
              We look forward to celebrating this unforgettable milestone with
              you!
            </p>
          </div>
        ) : (
          <div className="rounded-2xl bg-[#fffdfa] border border-[#c5a059]/45 p-6 sm:p-8 md:p-10 shadow-[0_10px_32px_rgba(119,90,25,0.06)] relative overflow-hidden">
            {/* Subtle heart pulse decoration */}
            <div
              className="flex items-center justify-center gap-3 -mt-2 mb-5 opacity-70"
              aria-hidden="true"
            >
              <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#c5a059]" />

              <svg
                viewBox="0 0 24 24"
                className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#c5a059] fill-current animate-heartbeat-soft"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>

              <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>

            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-5 sm:gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <Field
                  label="Full Name"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                />

                <Field
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7f7667] font-medium">
                  Will You Attend?{" "}
                  <span className="text-[#c5a059]">*</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Joyfully Yes", "Unable to Attend"].map((opt) => {
                    const isChecked = form.attending === opt;

                    return (
                      <label
                        key={opt}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border min-h-[48px] cursor-pointer transition-all duration-300 select-none ${
                          isChecked
                            ? "border-[#c5a059] bg-[#c5a059]/10 shadow-sm"
                            : "border-[#d1c5b4]/70 hover:border-[#c5a059]/60 bg-[#fff8f3]/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="attending"
                          value={opt}
                          required
                          checked={isChecked}
                          onChange={onChange}
                          className="sr-only"
                        />

                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                            isChecked
                              ? "border-[#c5a059] bg-[#c5a059]"
                              : "border-[#d1c5b4]"
                          }`}
                        >
                          {isChecked && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                          )}
                        </span>

                        <span className="font-sans text-sm text-[#4e4639]">
                          {opt}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#7f7667] font-medium"
                >
                  Your Blessings &amp; Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className="w-full min-h-[110px] bg-[#fff8f3]/60 border border-[#d1c5b4] rounded-lg px-4 py-3 font-sans text-sm text-[#1f1b15] outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] hover:border-[#c5a059]/50 transition-all duration-300 resize-none placeholder:text-[#d1c5b4]"
                  placeholder="Write your heartfelt blessings here..."
                />
              </div>

              {error && (
                <p className="text-center font-sans text-sm text-red-600">
                  {error}
                </p>
              )}

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium bg-[#c5a059] hover:bg-[#775a19] text-white px-10 sm:px-14 min-h-[48px] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit RSVP"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}