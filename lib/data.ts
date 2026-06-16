import { IMAGES } from "./images";
import type {
  Stat,
  Course,
  Topper,
  FacultyMember,
  TimelineStep,
  Testimonial,
  Faq,
} from "./types";

export const HERO_STATS: Stat[] = [
  { label: "Students Trained", value: 1000, suffix: "+" },
  { label: "Success Rate", value: 95, suffix: "%" },
  { label: "Expert Faculty", value: 25, suffix: "+" },
  { label: "Years of Trust", value: 12, suffix: "+" },
];

export const ABOUT = {
  mission:
    "To make high-quality, structured education accessible to every student from Std. 1 to Std. 12 — building strong fundamentals, confidence and a lifelong love for learning.",
  vision:
    "To be the most trusted neighbourhood coaching institute known for academic excellence, personal attention and consistent, measurable student results.",
  values: [
    {
      title: "Academic Excellence",
      description:
        "A rigorous, board-aligned curriculum delivered by experienced teachers who care about every student's outcome.",
    },
    {
      title: "Discipline & Consistency",
      description:
        "Structured timetables, regular practice and continuous assessment that build strong, dependable study habits.",
    },
    {
      title: "Individual Attention",
      description:
        "Small batches ensure every child is seen, heard and guided according to their own pace and strengths.",
    },
    {
      title: "Integrity & Trust",
      description:
        "Honest progress reporting and open communication keep parents informed at every step of the journey.",
    },
  ],
  trustPoints: [
    "Over a decade of consistent board results",
    "Teaching across English, Marathi & Hindi mediums",
    "Support for CBSE, ICSE and State boards",
    "Transparent monthly progress reports for parents",
  ],
};

export const COURSES: Course[] = [
  {
    id: "primary",
    title: "Primary School",
    level: "Foundation",
    standards: "Std. 1 – 4",
    overview:
      "Joyful, activity-based learning that builds rock-solid fundamentals in language, numbers and reasoning.",
    subjects: ["English", "Mathematics", "EVS", "Marathi / Hindi", "Hand­writing & Reading"],
    benefits: [
      "Play & activity based methods",
      "Strong reading and writing base",
      "Caring, patient mentors",
    ],
    outcomes: [
      "Confident reading and number sense",
      "Healthy study routine from an early age",
    ],
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "middle",
    title: "Middle School",
    level: "Building",
    standards: "Std. 5 – 8",
    overview:
      "Concept-first teaching that bridges fundamentals into higher-order thinking, application and exam readiness.",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Second Language"],
    benefits: [
      "Concept clarity over rote learning",
      "Weekly practice & doubt sessions",
      "Foundation for board years",
    ],
    outcomes: [
      "Strong analytical & problem-solving skills",
      "Improved school exam performance",
    ],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "secondary",
    title: "Secondary School",
    level: "Board Years",
    standards: "Std. 9 – 10",
    overview:
      "Focused board preparation with chapter-wise tests, previous-year papers and personalised performance tracking.",
    subjects: ["Mathematics", "Science", "English", "Social Science", "Languages"],
    benefits: [
      "Board-pattern test series",
      "Targeted weak-area improvement",
      "Time-management & exam strategy",
    ],
    outcomes: [
      "Higher board percentages",
      "Exam confidence and discipline",
    ],
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "higher-secondary",
    title: "Higher Secondary",
    level: "Career Launch",
    standards: "Std. 11 – 12",
    overview:
      "Advanced subject mastery with career guidance, helping students excel in boards and competitive foundations.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Commerce & Accounts"],
    benefits: [
      "Stream-wise expert faculty",
      "Competitive exam foundation",
      "One-on-one career counselling",
    ],
    outcomes: [
      "Strong board & entrance readiness",
      "Clear direction for higher studies",
    ],
    color: "from-indigo-600 to-blue-700",
  },
];

export const WHY_US: { title: string; description: string; icon: string }[] = [
  { title: "Experienced Teachers", description: "A faculty of seasoned educators with proven subject expertise.", icon: "GraduationCap" },
  { title: "Small Batch Sizes", description: "Limited seats per batch so every student gets real attention.", icon: "Users" },
  { title: "Individual Attention", description: "Personalised guidance tuned to each student's pace.", icon: "UserCheck" },
  { title: "Regular Assessments", description: "Frequent, structured tests that track real progress.", icon: "ClipboardCheck" },
  { title: "Progress Tracking", description: "Clear performance reports for students and parents.", icon: "TrendingUp" },
  { title: "Parent Communication", description: "Regular updates and meetings keep families involved.", icon: "MessagesSquare" },
  { title: "Study Materials", description: "Curated notes, worksheets and practice papers.", icon: "BookOpen" },
  { title: "Digital Learning Support", description: "Smart-class content and online doubt support.", icon: "Laptop" },
  { title: "Doubt Solving Sessions", description: "Dedicated time slots to clear every doubt.", icon: "HelpCircle" },
  { title: "Proven Results", description: "A consistent track record of top board scores.", icon: "Award" },
];

export const TOPPERS: Topper[] = [
  { id: "t1", name: "Aarav Sharma", standard: "Std. 10 — CBSE", percentage: "98.2%", achievement: "School Topper", image: IMAGES.topper("Aarav Sharma") },
  { id: "t2", name: "Saanvi Patil", standard: "Std. 12 — Science", percentage: "96.8%", achievement: "District Rank 3", image: IMAGES.topper("Saanvi Patil") },
  { id: "t3", name: "Rohan Deshmukh", standard: "Std. 10 — State Board", percentage: "97.4%", achievement: "Distinction", image: IMAGES.topper("Rohan Deshmukh") },
  { id: "t4", name: "Isha Kulkarni", standard: "Std. 12 — Commerce", percentage: "95.6%", achievement: "Stream Topper", image: IMAGES.topper("Isha Kulkarni") },
  { id: "t5", name: "Vivaan Joshi", standard: "Std. 10 — ICSE", percentage: "96.0%", achievement: "Maths Centum", image: IMAGES.topper("Vivaan Joshi") },
  { id: "t6", name: "Ananya Gokhale", standard: "Std. 12 — Science", percentage: "94.9%", achievement: "Physics Topper", image: IMAGES.topper("Ananya Gokhale") },
  { id: "t7", name: "Kabir Mehta", standard: "Std. 10 — CBSE", percentage: "95.8%", achievement: "All-Rounder", image: IMAGES.topper("Kabir Mehta") },
  { id: "t8", name: "Riya Naik", standard: "Std. 12 — Commerce", percentage: "93.7%", achievement: "Accounts Topper", image: IMAGES.topper("Riya Naik") },
];

export const FACULTY: FacultyMember[] = [
  { id: "f1", name: "Mr. Sanjay Kulkarni", subject: "Mathematics", experience: "18+ years", bio: "Makes complex maths intuitive with a step-by-step, fundamentals-first approach loved by students.", image: IMAGES.faculty("Sanjay Kulkarni") },
  { id: "f2", name: "Mrs. Priya Deshpande", subject: "Science", experience: "14+ years", bio: "Turns physics and chemistry into everyday stories, building deep conceptual clarity.", image: IMAGES.faculty("Priya Deshpande") },
  { id: "f3", name: "Mr. Aman Verma", subject: "English", experience: "12+ years", bio: "Specialises in grammar, comprehension and confident communication for board success.", image: IMAGES.faculty("Aman Verma") },
  { id: "f4", name: "Mrs. Sneha Patil", subject: "Marathi & Hindi", experience: "15+ years", bio: "Brings languages alive with literature, writing skill and exam-focused practice.", image: IMAGES.faculty("Sneha Patil") },
  { id: "f5", name: "Mr. Rahul Jadhav", subject: "Social Studies", experience: "10+ years", bio: "Connects history, civics and geography to the real world for lasting understanding.", image: IMAGES.faculty("Rahul Jadhav") },
  { id: "f6", name: "Mrs. Meera Iyer", subject: "Accounts & Commerce", experience: "13+ years", bio: "Guides commerce students with practical, application-driven teaching and care.", image: IMAGES.faculty("Meera Iyer") },
];

export const FACILITIES: { title: string; description: string; icon: string }[] = [
  { title: "Smart Classrooms", description: "Digital boards and visual learning aids.", icon: "MonitorPlay" },
  { title: "Library Support", description: "Reference books and curated reading.", icon: "Library" },
  { title: "Regular Assessments", description: "Structured weekly & monthly tests.", icon: "ClipboardList" },
  { title: "Study Material", description: "Comprehensive notes and worksheets.", icon: "FileText" },
  { title: "Parent Meetings", description: "Scheduled progress discussions.", icon: "Users" },
  { title: "Career Guidance", description: "Stream and career counselling.", icon: "Compass" },
  { title: "Scholarship Support", description: "Merit support for deserving students.", icon: "BadgeIndianRupee" },
  { title: "Doubt Solving Sessions", description: "Dedicated one-on-one doubt slots.", icon: "HelpCircle" },
];

export const TIMELINE: TimelineStep[] = [
  { step: 1, title: "Admission", description: "Simple enquiry and enrolment with a guidance session for the right batch." },
  { step: 2, title: "Orientation", description: "Students and parents meet faculty and understand the learning plan." },
  { step: 3, title: "Daily Learning", description: "Structured, concept-first classes with active participation." },
  { step: 4, title: "Weekly Practice", description: "Regular worksheets and practice to reinforce every concept." },
  { step: 5, title: "Monthly Assessment", description: "Board-pattern tests that measure real, ongoing progress." },
  { step: 6, title: "Parent Review", description: "Transparent reports and meetings to keep families involved." },
  { step: 7, title: "Exam Preparation", description: "Focused revision, previous-year papers and exam strategy." },
  { step: 8, title: "Academic Excellence", description: "Confident students achieving their best possible results." },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "p1", type: "parent", name: "Mr. Suresh Pawar", role: "Parent of Std. 10 student", rating: 5, quote: "The personal attention my son receives is remarkable. His confidence and marks have improved dramatically.", image: IMAGES.testimonial("Suresh Pawar") },
  { id: "p2", type: "parent", name: "Mrs. Kavita Shah", role: "Parent of Std. 8 student", rating: 5, quote: "Regular updates and honest feedback from the teachers keep us truly involved in our daughter's progress.", image: IMAGES.testimonial("Kavita Shah") },
  { id: "p3", type: "parent", name: "Mr. Imran Sheikh", role: "Parent of Std. 12 student", rating: 5, quote: "Excellent faculty and discipline. The board preparation here is genuinely thorough and well-structured.", image: IMAGES.testimonial("Imran Sheikh") },
  { id: "p4", type: "parent", name: "Mrs. Anjali Rao", role: "Parent of Std. 5 student", rating: 5, quote: "My child actually looks forward to classes now. The teachers make learning joyful and stress-free.", image: IMAGES.testimonial("Anjali Rao") },
  { id: "p5", type: "parent", name: "Mr. Deepak Gupta", role: "Parent of Std. 9 student", rating: 5, quote: "Small batches make a huge difference. Every doubt is cleared and no student is ever left behind.", image: IMAGES.testimonial("Deepak Gupta") },
  { id: "p6", type: "parent", name: "Mrs. Sunita More", role: "Parent of Std. 11 student", rating: 5, quote: "Trustworthy, professional and result-oriented. We recommend Modern Classes to every parent we know.", image: IMAGES.testimonial("Sunita More") },
  { id: "s1", type: "student", name: "Aarav Sharma", role: "Std. 10 — Scored 98.2%", rating: 5, quote: "The teachers explain every concept until it clicks. The test series prepared me perfectly for my boards.", image: IMAGES.testimonial("Aarav Sharma") },
  { id: "s2", type: "student", name: "Saanvi Patil", role: "Std. 12 — Scored 96.8%", rating: 5, quote: "Doubt-solving sessions were a game changer. I always felt supported and never afraid to ask questions.", image: IMAGES.testimonial("Saanvi Patil") },
  { id: "s3", type: "student", name: "Rohan Deshmukh", role: "Std. 10 — Scored 97.4%", rating: 5, quote: "The study material and weekly practice made revision so easy. I walked into my exams fully confident.", image: IMAGES.testimonial("Rohan Deshmukh") },
  { id: "s4", type: "student", name: "Isha Kulkarni", role: "Std. 12 — Scored 95.6%", rating: 5, quote: "Friendly mentors who genuinely care. Modern Classes felt like a second home throughout my journey.", image: IMAGES.testimonial("Isha Kulkarni") },
];

export const FAQS: Faq[] = [
  { question: "Which standards do you teach?", answer: "We offer structured coaching for all students from Std. 1 to Std. 12, covering Primary, Middle, Secondary and Higher Secondary levels." },
  { question: "Which mediums and boards do you support?", answer: "We teach across English, Marathi and Hindi mediums and support CBSE, ICSE and State boards, with subject-specialist faculty for each." },
  { question: "Do you provide study material?", answer: "Yes. Every student receives comprehensive, board-aligned notes, worksheets, and practice papers as part of the program at no extra cost." },
  { question: "Are there regular tests?", answer: "Absolutely. We conduct weekly practice tests and monthly board-pattern assessments so students and parents can track real progress." },
  { question: "How big are the batches?", answer: "We deliberately keep batches small so that every student receives individual attention and personalised guidance from the teacher." },
  { question: "How are parents kept updated?", answer: "Parents receive regular progress reports and are invited to scheduled parent-teacher meetings, with open communication whenever needed." },
  { question: "Do you offer doubt-solving sessions?", answer: "Yes. Dedicated doubt-solving slots are part of the weekly timetable, plus one-on-one support for students who need extra help." },
  { question: "Is there support for competitive exams?", answer: "Our Higher Secondary program builds a strong foundation for competitive and entrance exams alongside thorough board preparation." },
  { question: "Do you provide scholarships?", answer: "We offer merit-based scholarship support for deserving students. Please contact us to learn about current eligibility and criteria." },
  { question: "How do I enrol my child?", answer: "Simply fill the enquiry form on this page or call us. We'll guide you through a short counselling session and the right batch for your child." },
];
