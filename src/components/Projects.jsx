import { Layers } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Government & Enterprise Systems (Myanmar / Singapore)',
      description:
        'Built multiple systems including quality management, HR & attendance, CRM, job recruitment platforms, and payment-enabled web apps. ',
      contribution:
        'Whole development lifecycle from requirement analysic to releasing product to production.',
      tech: ['Ruby on Rails', 'Angular', 'PostgresSQL', 'Heroku'],
    },
    {
      title: 'POS & Reservation System for Salons (Japan)',
      description:
        'Developed a salon management system including reservations, sales reports, staff management, and mobile APIs. ',
      contribution:
        'Involved in full lifecycle from design to testing and operations, and supported team members as a sub-leader.',
      tech: ['PHP', 'CakePHP', 'MySQL'],
    },
    {
      title: 'AI Voice Recognition Online Meeting System(Japan)',
      description:
        'Implemented user management, call history recording, reporting features, and Google API integration for speech data processing in an AI-based online meeting system.',
      contribution:
        'Whole development lifecycle from requirement analysic to releasing product to production.',
      tech: ['PHP', 'Ruby on Rails', 'MySQL', 'AWS', 'Ansible', 'Vue'],
    },
    {
      title: 'EC Platforms for Banking, University Co-ops & Real Estate(Japan)',
      description:
        'Lead development and maintenance of several EC systems, including banking and university co-op platforms. Built core features such as customer management, shopping carts, reservations, reporting, and batch processing.',
      contribution:
        'Involved in full lifecycle from design to testing and operations, and supported team members as a leader.',
      tech: ['PHP', 'Eccube', 'MySQL', 'AWS'],
    },
    {
      title: 'EC & Logistics Management Systems(Japan)',
      description:
        'Worked on multiple e-commerce and logistics systems, handling product management, order processing, delivery status, batch jobs, and payment integrations. ',
      contribution: 'Involved in task management, code reviews, and system maintenance.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'PHP', 'Next.js', 'Angular'],
    },
    {
      title: 'Barcode-Based Order Management System (Japan)',
      description:
        'Maintained and enhanced an order management system that uses barcode scanning to streamline order registration, confirmation, and completion. Focused on frontend development, API improvements, bug fixes, and operational support.',
      contribution: 'Involved in system maintenance.',
      tech: ['Ruby on Rails', 'React', 'MySQL', 'Docker', 'Monaca'],
    },
    {
      title: 'Workforce Order & Resource Management System (Japan)',
      description:
        'Developed a web-based system to manage orders, workforce allocation, approvals, cancellations, and evaluations for multiple user roles (admins, staff, clients). Designed screen flows, built REST APIs, batch jobs, and integrated external APIs to improve operational efficiency and data visibility.',
      contribution:
        'Involved in full lifecycle from design to testing and operations, and supported team members as a leader.',
      tech: ['Python', 'Django', 'React', 'MySQL', 'Docker', 'Monaca'],
    },
    {
      title: 'Logistics Matching & Driver Management System (Japan)',
      description:
        'Built a matching platform connecting shippers and truck drivers, covering the full workflow from job posting to delivery completion. Implemented distance-based matching using the Haversine formula and delivered both web and mobile applications.',
      contribution:
        'Involved in full lifecycle from design to testing and operations, and supported team members as a leader.',
      tech: ['Python', 'Django', 'React', 'React Native', 'ExpoGo', 'MySQL', 'Docker', 'Monaca'],
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-[#37474f]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Layers size={32} className="text-[#ff9800]" /> Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card group relative bg-[#455a64] border border-slate-500 rounded-2xl overflow-hidden hover:border-[#ff9800]/50"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <h3 className="text-xl font-bold text-white mb-2">Contribution</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.contribution}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-[#ff9800]/10 text-[#ff9800] border border-[#ff9800]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
