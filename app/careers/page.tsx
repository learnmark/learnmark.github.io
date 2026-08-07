import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
  title: 'Careers',
  description: 'Join Learnmark and help teams deliver AI products, cloud platforms, and reliable modern software systems.',
  path: '/careers',
  keywords: ['Learnmark careers', 'AI consulting jobs', 'cloud consulting jobs', 'remote software roles'],
})

  const stats = [
    { name: 'Roles are hiring', value: '5' },
    { name: 'Locations worldwide', value: '3' },
    { name: 'Work from home', value: 'All time' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]

  const openRoles = [
    { name: 'Software Engineer', href: '#software-engineer' },
    { name: 'Solutions Consultant', href: '#solutions-consultant' },
    { name: 'Regional Marketing Manager', href: '#regional-marketing-manager' },
    { name: 'Key Account Manager', href: '#key-account-manager' },
    { name: 'Senior Sales Manager', href: '#senior-sales-manager' },
  ]

  const jobDescriptions = [
    {
      title: 'Software Engineer',
      href: 'software-engineer',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Design, develop, and maintain software applications and systems',
        'Collaborate with other team members to ensure that software meets customer needs',
        'Write clean, maintainable code that is scalable and secure',
        'Perform code reviews to ensure that software is of high quality',
        'Identify and address technical debt and other areas for improvement',
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or related field',
        '2+ years of experience in software development',
        'Proficiency in one or more programming languages, such as Java, Python, or JavaScript',
        'Experience with web development frameworks, such as React or Angular',
        'Strong problem-solving and analytical skills',
      ],
    },
    {
      title: 'Solutions Consultant',
      href: 'solutions-consultant',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Work with customers to understand their business needs',
        'Develop solutions that meet customer requirements',
        'Collaborate with sales team to ensure that solutions are aligned with customer needs',
        'Provide technical expertise and guidance to customers',
        'Deliver product demonstrations and presentations to customers',
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or related field',
        '2+ years of experience in solutions consulting or related field',
        'Experience working with customers to understand business needs',
        'Strong problem-solving and analytical skills',
        'Excellent communication and presentation skills',
      ],
    },
    {
      title: 'Regional Marketing Manager',
      href: 'regional-marketing-manager',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Develop and execute marketing strategies to drive growth in your region',
        'Collaborate with sales and product teams to align marketing initiatives with business objectives',
        'Analyze market trends and customer needs to identify opportunities for growth',
        'Manage marketing campaigns and events to generate leads and drive sales',
        'Provide guidance and support to marketing team members',
      ],
      qualifications: [
        'Bachelor’s degree in Marketing or related field',
        '5+ years of experience in marketing',
        'Experience developing and executing marketing strategies',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership skills',
      ],
    },
    {
      title: 'Key Account Manager',
      href: 'key-account-manager',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Manage relationships with key customers to drive growth in your accounts',
        'Collaborate with sales and product teams to ensure that customer needs are met',
        'Develop account plans and strategies to achieve business objectives',
        'Identify opportunities for growth and expansion in your accounts',
        'Provide guidance and support to sales team members',
      ],
      qualifications: [
        'Bachelor’s degree in Business or related field',
        '5+ years of experience in account management',
        'Experience managing relationships with key customers',
        'Strong problem-solving and analytical skills',
        'Excellent communication and negotiation skills',
      ],
    },
    {
      title: 'Senior Sales Manager',
      href: 'senior-sales-manager',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Lead sales team to achieve sales objectives',
        'Develop sales strategies to drive growth in your region',
        'Collaborate with marketing and product teams to align sales initiatives with business objectives',
        'Provide guidance and support to sales team members',
        'Analyze sales data and market trends to identify opportunities for growth',
      ],
      qualifications: [
        'Bachelor’s degree in Business or related field',
        '5+ years of experience in sales management',
        'Experience developing and executing sales strategies',
        'Strong problem-solving and analytical skills',
        'Excellent communication and leadership skills',
      ],
    },
  ]
  
  export default function Careers() {
    return (
      <main className="site-section site-page bg-transparent">
        <div className="site-container">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Join our team</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We invite you to embark on an exciting professional journey by working with us. Collaborate with a talented and diverse team, contribute to innovative projects, and develop your skills in a dynamic and supportive environment.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse pl-4 border-l-4 border-primary-600">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          <div className="mt-24 border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" id="open-roles">
              Open Roles
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We are looking for talented individuals to join our team. If you are passionate about technology and want to work on exciting projects, we would love to hear from you.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              {openRoles.map((role) => (
                <a 
                  key={role.name} 
                  href={role.href}
                  className="rounded-full bg-primary-50 px-4 py-2.5 text-sm font-semibold text-primary-700 shadow-sm hover:bg-primary-100 transition-colors duration-200"
                >
                  {role.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-20">
            {jobDescriptions.map((job) => (
              <div key={job.title} id={job.href} className="scroll-mt-24 rounded-lg bg-gray-50 p-8 sm:p-10 ring-1 ring-gray-900/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-x-4 text-sm">
                    <span className="inline-flex items-center rounded-md bg-white px-2 py-1 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {job.location}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-white px-2 py-1 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {job.employmentType}
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-600"></span>
                      Responsibilities
                    </h4>
                    <ul className="mt-4 space-y-3 text-gray-600">
                      {job.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3">
                          <span className="text-primary-600">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-600"></span>
                      Qualifications
                    </h4>
                    <ul className="mt-4 space-y-3 text-gray-600">
                      {job.qualifications.map((qualification) => (
                        <li key={qualification} className="flex gap-3">
                          <span className="text-primary-600">•</span>
                          <span>{qualification}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200/60">
                  <a 
                    href={`mailto:hr@learnmark.com?subject=Application for ${job.title}`}
                    className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                  >
                    Apply for this role <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-2xl bg-primary-900 px-6 py-16 sm:p-16 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Don't see a role that fits?
              </h2>
              <p className="mt-4 text-lg text-primary-100">
                We are always looking for talented individuals. Send us your resume and we'll keep you in mind for future openings.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="mailto:hr@learnmark.com"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-900 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Email HR
              </a>
            </div>
          </div>
            
        </div>
      </main>
    )
  }
  