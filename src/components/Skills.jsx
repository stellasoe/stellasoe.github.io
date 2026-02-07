import { FaCode } from 'react-icons/fa'

const Skills = () => {
  const categories = [
    { title: 'Languages', skills: ['JavaScript', 'Ruby', 'Python', 'PHP', 'SQL', 'TypeScript'] },
    { title: 'Frontend', skills: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'Angular', 'Vue'] },
    { title: 'Backend', skills: ['Ruby on Rails', 'Laravel', 'Eccube', 'Django'] },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'Figma', 'AWS', 'Heroku', 'GCP', 'Mysql', 'PostgresSQL', 'Sidekiq'],
    },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
          <FaCode size={32} className="text-[#ff9800]" /> Tech Stack
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-[#ff9800] font-bold text-sm uppercase tracking-widest">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-4 py-2 rounded-xl text-slate-200 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
