const projects = [
  {
    id: 1,
    title: 'GoDaddy Hub',
    short: 'Tools for Professional Web Developers',
    type: 'web application',
    description: 'Hub is a new experience for professional web developers which allows pro users to manage their clients, projects, invoicing and more.  I have supported the product since the October 2020 launch with various contributions such as cross product integration, REST API development, and UI changes.',
    image: 'hub-godaddy.jpg',
    url: 'https://hub.godaddy.com',
    tech: ['React', 'Node', 'Webpack'],
  },
  {
    id: 2,
    title: 'GoDaddy Productivity Panel',
    type: 'web application',
    short: 'Small Business Email',
    description: 'Productivity panel allows customers to purchase and manage their email accounts directly from a GoDaddy branded experience.  I\'ve worked on large features such as alias management and email setup flows.',
    image: 'productivity-godaddy.jpg',
    ur: 'https://productivity.godaddy.com',
    tech: ['React', 'PHP', 'Node', 'Redux'],
  },
  {
    id: 3,
    title: 'Quick Activator',
    short: 'React email activator component',
    type: 'package',
    description: 'React based drop in component to allow any GoDaddy application to activate email.  This included various CORS compatible REST API endpoints to check eligibility and provision the email account.',
    image: 'package.jpg',
    tech: ['React', 'NPM'],
  },
  {
    id: 4,
    title: 'Mini Paint',
    short: 'Package to track minature paint colors and brands',
    type: 'package',
    description: 'Package to help track miniature painting brands. I created this to use in a side project called Paint Gist which is currently in development.',
    image: 'package.jpg',
    tech: ['React', 'NPM'],
  },
  {
    id: 5,
    title: 'Arizona Federal Credit Union',
    short: 'Company marketing site',
    type: 'web application',
    description: 'The site provided members and potential members with information about the credit union. It also featured various interactive pages such as a landing page which rendered an animation showing a member\'s yearly bonus payout.',
    image: 'arizona-federal.png',
    tech: ['PHP', 'Vue', 'Laravel'],
  },
  {
    id: 6,
    title: 'Membership Application',
    short: 'Arizona Federal Online membership',
    type: 'web application',
    description: 'An online membership application for potential members to submit applications.  This included various features such a promo code tracking, image upload, and a back-end application to process apps.',
    image: 'arizona-federal-join.png',
    tech: ['PHP', 'Vue', 'Laravel', 'S3'],
  },
];

export default projects;
