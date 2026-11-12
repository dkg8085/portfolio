export const profile = {
  summary:
    'Full-Stack Software Developer with nearly 5 years of experience in designing, developing, and maintaining web applications and scalable backend systems. Strong expertise in PHP, Laravel, CodeIgniter, React.js, Node.js, REST API development, database management, and AWS cloud services. Experienced in building authentication systems, integrating third-party services, developing serverless applications, and delivering end-to-end software solutions. Familiar with Docker, CI/CD pipelines, and modern development practices.',
  email: 'dkg8085@gmail.com',
  phone: '+91 75099 03735',
  linkedIn: 'https://www.linkedin.com/in/dinesh-kumar-7425a3153?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  github: 'https://github.com/dkg8085',
}

export const skills = [
  { title: 'Programming', items: ['PHP', 'JavaScript', 'Node.js', 'Python (Basic)'] },
  { title: 'Frontend', items: ['HTML', 'React.js', 'CSS', 'jQuery', 'Bootstrap'] },
  { title: 'Backend', items: ['Laravel', 'CodeIgniter', 'NestJS', 'Django'] },
  { title: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'Cloud & services', items: ['AWS S3', 'Lambda', 'Step Functions', 'DynamoDB', 'API Gateway', 'Route 53', 'CloudFront', 'EC2', 'Lightsail', 'RDS', 'AWS IAM', 'Cognito', 'Secrets Manager', 'CloudWatch', 'REST APIs', 'Third-party APIs'] },
  { title: 'DevOps', items: ['Docker', 'CI/CD pipelines', 'Bitbucket', 'Jenkins', 'GitHub Actions', 'Bitbucket Pipelines'] },
  { title: 'Tools', items: ['Git', 'Postman', 'VS Code', 'Sublime'] },
]

export const experience = [
  {
    title: 'Software Developer',
    company: 'Techera Business Software Solutions Pvt Ltd',
    location: 'Indore',
    period: 'Dec 2024 — Present',
    current: true,
    highlights: [
      'Develop and maintain scalable applications using PHP, Laravel, Node.js, NestJS, React.js, and JavaScript.',
      'Build REST APIs, backend services, business logic, authentication systems, and third-party integrations.',
      'Create responsive, reusable frontend components using React.js, HTML, CSS, Bootstrap, and JavaScript.',
      'Design and optimize database schemas and queries across MySQL, PostgreSQL, and MongoDB.',
      'Deploy and manage AWS infrastructure, including EC2, S3, Lambda, API Gateway, DynamoDB, RDS, CloudFront, and Route 53.',
    ],
  },
  {
    title: 'Laravel Developer',
    company: 'Dream Cyber Infoway',
    location: 'Indore',
    period: 'Jul 2023 — Dec 2024',
    highlights: [
      'Manage the software lifecycle from requirements and technical planning through development, deployment, and maintenance.',
      'Develop scalable web applications with PHP, Laravel, and MVC architecture.',
      'Build REST APIs, backend services, authentication, and third-party integrations.',
      'Design database structures, migrations, relationships, and optimized queries for MySQL and PostgreSQL.',
      'Implement role-based access control, permissions, middleware, and secure authentication.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'P&P Infotech Applying Solutions',
    location: 'Indore',
    period: 'Dec 2021 — May 2023',
    highlights: [
      'Develop web applications using PHP, Laravel, CodeIgniter, and MVC architecture.',
      'Build backend functionality, business logic, and reusable application components.',
      'Create REST APIs for frontend applications and third-party integrations.',
      'Work with MySQL queries, relationships, joins, and CRUD operations.',
      'Develop dynamic interfaces using HTML, CSS, JavaScript, jQuery, and Bootstrap.',
    ],
  },
]

export const projects = [
  {
    name: 'Boomsite',
    type: 'Creator platform',
    stack: 'React.js · PHP',
    url: 'https://boomsite.fm/',
    points: [
      'Developed and maintained a digital content platform designed for radio broadcasters, podcasters, internet radio stations, and independent content creators.',
      'Worked on a centralized content platform that brings audio clips, news, entertainment, comedy, and show-preparation resources together.',
      'Contributed to features supporting content discovery, management, and customization for different broadcasting formats.',
      'Worked on frontend functionality and backend integration to support a seamless content management experience.',
      'Supported platform enhancements, application maintenance, and improvements to overall functionality.',
    ],
  },
  {
    name: 'Liendraw',
    type: 'Construction',
    stack: 'Technologies: Python, Django, Flutter, AWS Cognito, PostgreSQL',
    url: 'https://admin.liendraw.com/',
    points: [
      'Developed and maintained features for construction lien management, project management, and draw package workflows.',
      'Implemented Lien Viewer functionality to access, manage, and review lien-related documents and project information.',
      'Developed Draw Package Management features to create, manage, track, and process construction draw packages.',
      'Implemented role-based access control (RBAC) for administrators, financial teams, title teams, companies, homeowners, contractors, and vendors.',
      'Developed backend APIs and business logic for project management, user management, document handling, and draw workflows.',
      'Implemented digital signature workflows for document signing and approval processes.',
      'Integrated AWS Cognito for user authentication, invitations, and access management.',
      'Worked on Flutter Web frontend integration with Django backend APIs.',
    ],
  },
  {
    name: 'AI Boomsite',
    type: 'AI & cloud',
    stack: 'React.js · PHP · AWS Lambda · Amazon S3 · DynamoDB · ChatGPT API',
    url: 'https://ai.boomsite.fm/',
    points: [
      'Developed and maintained an AI-powered news platform that automates news collection, content processing, classification, and rewriting.',
      'Integrated AI capabilities using ChatGPT API to transform collected news articles into rewritten and structured content.',
      'Implemented automated news-processing workflows to collect and process articles from multiple US-based news sources.',
      'Utilized AWS Lambda for serverless processing and Amazon S3 and DynamoDB for content storage and data management.',
      'Worked on backend functionality, API integrations, and frontend components to support automated content-generation workflows.',
      'Contributed to application maintenance, debugging, and improvements to the overall processing workflow.',
    ],
  },
  {
    name: 'Xamplifier',
    type: 'Platform',
    stack: 'Laravel · MongoDB · MySQL',
    url: 'https://www.xamplifier.com/',
    points: [
      'Contributed to the Layline product, including user profiles, settings, admin dashboards, and dashboard APIs.',
      'Built REST APIs for managing users, content, and system configuration.',
      'Implemented cookie-based single sign-on across products and improved backend modules through debugging and performance work.',
    ],
  },
  {
    name: 'Phantom Producer',
    type: 'Radio production',
    stack: 'Laravel · Amazon S3 · Web & mobile platform',
    url: 'https://phantomproducer.com/',
    points: [
      'Contributed to the development and maintenance of a web-based radio production platform for creating customized audio promos and station imaging.',
      'Worked on audio production workflows that combine voiceovers, music tracks, jingles, and station branding.',
      'A platform for creating custom radio promos and sweepers using station voice tracks, music, and branding.',
      'Supports creating and syncing productions across desktop and mobile.',
    ],
  },
  {
    name: 'Your Weekend',
    type: 'Local events',
    stack: 'Technologies: Next.js, PostgreSQL, AWS S3',
    url: 'https://yourweekend.info/ridgefield',
    description:
      'A web-based local events discovery platform that helps users explore community events, discover local activities, and stay updated with upcoming weekend events through curated content, images, and videos.',
    points: [
      'Developed and maintained a web application using Next.js to provide a responsive and user-friendly experience for discovering local events and activities.',
      'Implemented backend functionality and database operations using PostgreSQL to manage events, categories, content, and related information.',
      'Integrated AWS S3 for storing and managing media assets, including event images and videos.',
      'Developed dynamic event listing pages and content sections to display upcoming events, local activities, and community updates.',
      'Optimized frontend performance, page rendering, and application responsiveness across desktop and mobile devices.',
      'Performed application debugging, maintenance, and feature enhancements to improve overall platform functionality.',
    ],
  },
]

export const education = [
  {
    title: 'B.Tech, Computer Science & Engineering',
    institution: 'Govt. Jabalpur Engineering College, Jabalpur',
    period: '2015 — 2018',
    grade: 'GPA 6.5 / 10',
  },
  {
    title: 'Polytechnic Diploma, Computer Science & Engineering',
    institution: 'Govt. Polytechnic College, Morena',
    period: '2012 — 2015',
    grade: 'GPA 7.04 / 10',
  },
  {
    title: '10th Grade',
    institution: 'Govt. High School, Nalkheda',
    period: '2011 — 2012',
    grade: '65.83%',
  },
]

export const interests = ['Playing and watching cricket', 'Traveling and exploring new places']
