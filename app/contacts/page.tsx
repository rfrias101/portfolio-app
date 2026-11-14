import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16 max-w-3xl w-full shadow-2xl">

          {/* Heading */}
          <section className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Interested in working together or have a question about my work?
              Send me a message and I&apos;ll get back to you as soon as I can.
            </p>
          </section>

          <div className="w-full h-px bg-[#333333] mb-10"></div>

          {/* Contact cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Gmail */}
            <a
              href="mailto:youremail@gmail.com"
              className="bg-[#1e1e1e]/50 border border-[#444444] rounded-xl p-6 hover:border-[#D4AF37] transition-colors text-center"
            >
              <div className="text-4xl mb-3">📧</div>
              <h2 className="text-lg font-bold mb-2 text-[#D4AF37]">Email</h2>
              <p className="text-gray-400 text-sm break-all">friasprinze@gmail.com</p>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/prinzeraiden.frias"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e1e1e]/50 border border-[#444444] rounded-xl p-6 hover:border-[#D4AF37] transition-colors text-center"
            >
              <div className="text-4xl mb-3">💬</div>
              <h2 className="text-lg font-bold mb-2 text-[#D4AF37]">Facebook</h2>
              <p className="text-gray-400 text-sm">Message me on Facebook</p>
            </a>

          </section>
        </div>
      </main>
    </div>
  );
}