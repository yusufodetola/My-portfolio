// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   BookOpen,
//   BrainCircuit,
//   CarFront,
//   CheckCircle2,
//   GraduationCap,
//   Layers3,
//   Workflow,
// } from "lucide-react";

// const features = [
//   {
//     icon: GraduationCap,
//     title: "Structured Learning",
//     description:
//       "Organised automotive courses designed to guide learners from beginner to advanced levels.",
//   },
//   {
//     icon: BookOpen,
//     title: "Interactive Modules",
//     description:
//       "Structured lessons that make automotive concepts easier to explore and understand.",
//   },
//   {
//     icon: BrainCircuit,
//     title: "AutoMentor AI",
//     description:
//       "An AI-powered learning assistant designed to support explanations and learner guidance.",
//   },
//   {
//     icon: CarFront,
//     title: "Interactive Anatomy Lab",
//     description:
//       "Explore automotive components and understand how vehicle systems work.",
//   },
//   {
//     icon: Workflow,
//     title: "Diagnostic Practice",
//     description:
//       "Practical learning experiences focused on automotive troubleshooting and diagnostics.",
//   },
//   {
//     icon: Layers3,
//     title: "Learning Progression",
//     description:
//       "A progressive learning journey from beginner technician to professional technician.",
//   },
// ];

// const technologies = [
//   "Next.js",
//   "React",
//   "JavaScript",
//   "Tailwind CSS",
//   "AI Integration",
// ];

// export default function CaseStudy() {
//   return (
//     <section
//       id="case-study"
//       className="relative overflow-hidden py-24 md:py-32"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_40%)]" />

//       <div className="container-custom relative z-10">
//         {/* SECTION HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <p className="section-eyebrow">Featured Case Study</p>

//           <h2 className="section-title mt-4">
//             From Concept to Product.
//             <span className="block text-blue-400">Building MECHLAB.</span>
//           </h2>

//           <p className="section-subtitle mt-6">
//             An interactive automotive learning platform designed to make
//             technical education more accessible through structured courses,
//             practical exploration and AI-assisted learning.
//           </p>
//         </motion.div>

//         {/* PROJECT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1428] p-3 md:p-5"
//         >
//           <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#070B1A]">
//             <Image
//               src="/images/mechlab.png"
//               alt="MECHLAB automotive learning platform homepage"
//               fill
//               priority={false}
//               sizes="(max-width: 768px) 100vw, 1200px"
//               className="object-contain"
//             />
//           </div>
//         </motion.div>

//         {/* PROJECT OVERVIEW */}
//         <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="section-eyebrow">The Project</p>

//             <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
//               Rethinking Automotive Technical Education
//             </h3>

//             <p className="mt-6 leading-8 text-slate-400">
//               MECHLAB is an interactive automotive learning platform created to
//               bring structured technical education, automotive exploration and
//               practical learning resources into one digital environment.
//             </p>

//             <p className="mt-5 leading-8 text-slate-400">
//               The platform combines organised learning pathways, automotive
//               modules, interactive learning experiences and AI-assisted guidance
//               to help learners develop their technical knowledge progressively.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               {technologies.map((technology) => (
//                 <span
//                   key={technology}
//                   className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
//                 >
//                   {technology}
//                 </span>
//               ))}
//             </div>

//             <a
//               href="https://mechlab-seven.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn-primary mt-9 inline-flex"
//             >
//               Explore MECHLAB
//               <ArrowUpRight size={18} />
//             </a>
//           </motion.div>

//           {/* PROJECT DETAILS */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="glass p-7 md:p-9"
//           >
//             <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
//               Project Highlights
//             </p>

//             <div className="mt-7 space-y-6">
//               {[
//                 "End-to-end product development",
//                 "Structured automotive learning pathways",
//                 "Interactive course and lesson experiences",
//                 "AI-assisted learning support",
//                 "Responsive digital interface",
//                 "Live deployment",
//               ].map((item) => (
//                 <div key={item} className="flex gap-3">
//                   <CheckCircle2
//                     size={20}
//                     className="mt-1 shrink-0 text-cyan-400"
//                   />
//                   <p className="text-slate-300">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* FEATURES */}
//         <div className="mt-24">
//           <div className="max-w-2xl">
//             <p className="section-eyebrow">Platform Capabilities</p>

//             <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
//               What Makes MECHLAB Different?
//             </h3>
//           </div>

//           <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;

//               return (
//                 <motion.article
//                   key={feature.title}
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.6,
//                     delay: index * 0.08,
//                   }}
//                   className="glass p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
//                     <Icon size={24} />
//                   </div>

//                   <h4 className="mt-6 text-xl font-bold text-white">
//                     {feature.title}
//                   </h4>

//                   <p className="mt-4 leading-7 text-slate-400">
//                     {feature.description}
//                   </p>
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
