import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen w=full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Experience</h1>
      <div className="flex flex-wrap gap-0i md:flex-nowrap md:gap-10">

        <div className='flex-1'>
          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Prismforce Inc.</h3>
            <p className='font-light text-lg text-gray-600'>Devops Intern</p>
            <p className='font-light text-lg text-gray-400'>Jan-2024 to April-2024</p>
            <p className='text-sm text-gray-600'>Developed a console based Role-Based Access Control (RBAC) system for AWS management using Go, containerized that application with Docker, and implemented GitHub Actions for Continuous Integration and Continuous Delivery (CI/CD).</p>
            <p className='text-sm text-gray-600'>Authored comprehensive technical documentation on various DevOps topics including Infrastructure as Code (IaC), Observability with Grafana, Prometheus, and Loki, and Terraform infrastructure repository, significantly reducing probation period for new employee.</p>
            <p className='text-sm text-gray-600'>Created detailed technical documentation and presentations on Continuous Integration (CI) systems.</p>
            <p className='text-sm text-gray-600'>Contributed to the Terraform infrastructure repository by writing README.md files, bug fixes and code contributions.</p>
            <p className='text-sm text-gray-600'>Automated the tagging of AWS resources (EC2 instances, volumes, snapshots, S3 buckets, and SQS queues) using Python scripts.</p>
            <p className='text-sm text-gray-600'>Wrote and executed Jenkins jobs using Groovy scripts for automated build and deployment processes.</p>
            <p className='text-sm text-gray-600'>Gained in-depth understanding of kubernetes, Continuous Integration and Continuous Deployment (CI/CD) concepts.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500' ></span>
          </div>

          <div className='relative space-y-1 border-l-2 p-8 text-left'>
            <h3 className='text-xl font-semibold md:text-2xl'>Aeronox Technologies PVT. LTD.</h3>
            <p className='font-light text-lg text-gray-600'>UX Designer</p>
            <p className='font-light text-lg text-gray-400'>Jan-2024 to April-2024</p>
            <p className='text-sm text-gray-600'>Designed and constructed a fully responsive website using WordPress, CSS and Elementor for the company, employing analytical skills to enhance user experience and functionality.</p>
            <p className='text-sm text-gray-600'>Communicated with stakeholders and company executives, to present and discuss investment strategies also authored detailed investment proposals.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500' ></span>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Experience