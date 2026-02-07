import { Briefcase } from 'lucide-react'

const Experience = () => {
  const jobs = [
    {
      title: 'Senior Software Developer ',
      company: '株式会社Vision Create, Japan',
      period: 'Dec, 2024 - Dec,2025',
      desc: "Worked with a team of japanese engineers and Other countries' engineers,developed as senior developer -facing products used in Japan like DeliveryMatchingSystem.",
    },
    {
      title: 'Senior Software Developer ',
      company: '株式会社Mass Holdings, Japan',
      period: 'Apr, 2024 - Nov,2024',
      desc: 'Worked with a logistics management systems. I used technical stacks such as Java, Spring Boot Framework, NextJS, etc.',
    },
    {
      title: 'Senior Software Developer ',
      company: '株式会社Coremobile, Japan',
      period: 'Aug, 2022 - Jan,2024',
      desc: 'Worked with a variety of different EC-sites for banking systems and University Students and logistics management systems. I used technical stacks such as PHP, Eccube Framework, Vuejs etc.',
    },
    {
      title: 'Senior Software Developer ',
      company: 'Hmcomm株式会社（エイチエムコム）, Japan',
      period: 'Nov, 2019 - July, 2022',
      desc: 'Worked with AI customer service call center support system such as vcontact and developed online meeting system such as zmeeting. I used for those projects such as PHP, Ruby on Rails, Laravel etc.',
    },
    {
      title: 'Senior Software Developer ',
      company: 'STAR SE 株式会社, Japan',
      period: 'Nov, 2018 - Oct,2019',
      desc: 'Worked with a team of japanese engineers,developed as developer in two companies -facing products used in Japan.',
    },
    {
      title: 'Software Developer & Senior Software Developer ',
      company: 'Nexlabs Co.,Ltd, Myanmar',
      period: 'Dec, 2016 - Oct,2018',
      desc: 'Worked with a team of engineers, created and maintain innovative, high-performance web applications to build customer-facing products used in Myanmar and Singapore and developed with API.',
    },
    {
      title: 'Software Developer & Senior Software Developer',
      company: '株式会社AriseMyanmar, Myanmar & Japan',
      period: 'Jun, 2013 - Nov,2016',
      desc: 'Worked with a team of japanese engineers,developed as sub-leader -facing products used for Japan.',
    },
    {
      title: 'IT Engineer',
      company: 'Ayeyarwady Bank, Myanmar',
      period: 'Nov,2010 - May,2013',
      desc: 'Worked with a team of banking operation staffs and network engineers, supports IT solutions and created interal web portal.',
    },
  ]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Briefcase size={32} className="text-[#ff9800]" /> Career Journey
        </h2>
        <div className="space-y-12">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l-2 border-[#546e7a] hover:border-[#ff9800] transition-colors group"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#455a64] border-2 border-[#ff9800]"></div>
              <span className="text-[#ff9800] text-sm font-bold uppercase tracking-wider">
                {job.period}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#ff9800] transition-colors">
                {job.title}
              </h3>
              <p className="text-slate-300 font-medium mb-3">{job.company}</p>
              <p className="text-slate-400 leading-relaxed">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
