import React from "react";
import Navbar from "./navbar";

const members = [
  { name: "Dr.G Radhakrishnan", role: "Chairman", category: "leadership" },
  { name: "Sridhar", role: "Co-Chairman", category: "leadership" },
  { name: "Beena", role: "Secretary", category: "leadership" },
  { name: "Gnana Sekar", role: "Co-Secretary", category: "leadership" },
  { name: "Vishwanathan", role: "Treasurer", category: "leadership" },
  { name: "Ramya", role: "Member", category: "member" },
  { name: "Deepa", role: "Member", category: "member" },
  { name: "Babu BA.BL", role: "Member", category: "member" },
  { name: "Killis Babu (Navy)", role: "Member", category: "member" },
  { name: "Rajan", role: "Member", category: "member" },
  { name: "Jayakumar", role: "Member", category: "member" },
  { name: "Janardhan", role: "Member", category: "member" },
];

const MemberCard = ({ name, role, category }) => {
  const isLeadership = category === "leadership";
  
  return (
    <div className={`p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
      isLeadership 
        ? "bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-lg border border-indigo-500/30" 
        : "bg-white text-slate-800 shadow-md border border-slate-100 hover:border-indigo-200"
    }`}>
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Avatar Placeholder */}
        <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold shadow-inner ${
          isLeadership 
            ? "bg-indigo-800/50 text-indigo-200" 
            : "bg-slate-100 text-slate-400"
        }`}>
          {name.charAt(0)}
        </div>
        <div>
          <h3 className={`text-xl font-bold mb-1 ${isLeadership ? "text-indigo-50" : "text-slate-800"}`}>
            {name}
          </h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isLeadership 
              ? "bg-indigo-500/20 text-indigo-300" 
              : "bg-indigo-50 text-indigo-600"
          }`}>
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
    const leadership = members.filter(m => m.category === "leadership");
    const generalMembers = members.filter(m => m.category === "member");

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />
            
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6366f1] to-[#38bdf8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
                         style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Trust Members</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
                        Dedicated individuals working together to make a lasting impact in our community.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24 space-y-20">
                
                {/* Leadership Section */}
                <section>
                    <div className="border-b border-slate-200 pb-5 mb-10 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Board of Trustees</h2>
                        <p className="mt-2 text-lg text-slate-500">The visionary leaders guiding our mission.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leadership.map((member, index) => (
                            <MemberCard key={index} {...member} />
                        ))}
                    </div>
                </section>

                {/* Members Section */}
                <section>
                    <div className="border-b border-slate-200 pb-5 mb-10 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Executive Members</h2>
                        <p className="mt-2 text-lg text-slate-500">The driving force behind our initiatives.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {generalMembers.map((member, index) => (
                            <MemberCard key={index} {...member} />
                        ))}
                    </div>
                </section>
            </div>
            
        </div>
    )
}

export default AboutUs;