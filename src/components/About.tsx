import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Linkedin, Lightbulb, Eye, Target, Zap, Award, TrendingUp, Users, Briefcase, Rocket, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { OrganizationSchema } from './seo/OrganizationSchema';
import { BreadcrumbListSchema } from './seo/BreadcrumbListSchema';

export function About() {
  const siteUrl = 'https://convertwise.site';
  const pageUrl = `${siteUrl}/about`;
  const title = 'About Us - ConvertWise | AI Sales Automation Platform';
  const description = 'Learn about ConvertWise founders Nilansh Gupta and Archit Dhir. We\'re transforming sales through AI-powered automation, helping businesses achieve 7x ROI and 150% more qualified leads with meeting intelligence software.';
  const keywords = 'ConvertWise founders, AI sales automation team, sales automation experts, meeting intelligence software creators, Nilansh Gupta, Archit Dhir';
  const ogImage = `${siteUrl}/og-image.jpg`;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ConvertWise" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@ConvertWise" />
        <meta name="twitter:site" content="@ConvertWise" />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbListSchema />
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        {/* 4 Moving gradient orbs */}
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 to-purple-100 rounded-full blur-[120px] opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-200 to-orange-100 rounded-full blur-[120px] opacity-35"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div 
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-pink-200 to-purple-100 rounded-full blur-[110px] opacity-30"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div 
          className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full blur-[100px] opacity-35"
          animate={{
            x: [0, 70, 0],
            y: [0, -50, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-br from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent leading-tight">
              About ConvertWise
            </h1>
            <p className="mb-8 text-xl sm:text-2xl text-gray-700">
              Transforming Sales Through AI-Powered Automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="mb-8 text-4xl sm:text-5xl bg-gradient-to-br from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                ConvertWise was born from a decade of real-world experience in digital marketing and sales automation. Our founders, Nilansh Gupta and Archit Dhir, built their expertise at Digital Patron, where they helped businesses achieve extraordinary results—driving 150% more qualified leads and up to 7x ROI for clients.
              </p>
              <p>
                Through years of managing campaigns and optimizing sales workflows, they identified a critical gap: businesses were losing countless opportunities due to manual, time-consuming sales processes. Sales teams spent hours on repetitive tasks—researching prospects, writing follow-ups, scheduling calls—instead of focusing on what they do best: closing deals.
              </p>
              <p>
                In 2024, armed with deep expertise in AI-driven marketing and a passion for innovation, they launched ConvertWise—an AI-powered sales automation platform that eliminates busywork and supercharges conversion rates.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-br from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
          </motion.div>

          <div className="images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <ImageWithFallback
                src="/assets/image1.jpg"
                alt="ConvertWise AI sales automation platform team working on meeting intelligence software"
                className="w-full h-full object-cover aspect-video"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <ImageWithFallback
                src="/assets/image2.jpg"
                alt="AI-powered sales automation tools helping businesses achieve 7x ROI and increased lead generation"
                className="w-full h-full object-cover aspect-video"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <ImageWithFallback
                src="/assets/image3.jpg"
                alt="Real-time meeting intelligence and sales coaching AI transforming business sales processes"
                className="w-full h-full object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-br from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
              Mission & Vision
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/60 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/80"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-3xl bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Mission
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower sales teams with AI technology that handles repetitive tasks, so they can focus on building relationships and closing deals. We believe every business deserves enterprise-grade sales automation, regardless of size or budget.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/60 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/80"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-3xl bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Vision
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the world's most trusted AI sales automation platform, transforming how businesses approach lead generation, nurturing, and conversion. We envision a future where AI handles the grunt work, and humans focus on strategic relationships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-br from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We constantly push boundaries to deliver cutting-edge AI solutions',
                color: 'purple'
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'Clear communication and honest metrics drive everything we do',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Customer Success',
                description: 'Your growth is our success—we\'re invested in your results',
                color: 'green'
              },
              {
                icon: Zap,
                title: 'Efficiency',
                description: 'We eliminate wasted time and effort through intelligent automation',
                color: 'orange'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We set high standards and consistently exceed expectations',
                color: 'purple'
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              const colorClasses = {
                purple: 'from-purple-600 to-purple-700',
                blue: 'from-blue-600 to-blue-700',
                green: 'from-green-600 to-green-700',
                orange: 'from-orange-500 to-orange-600'
              };

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/80 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[value.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4`}>
                    {IconComponent && <IconComponent className="text-white" size={24} />}
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-br from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
              By The Numbers
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '10+', label: 'Years Combined Experience', icon: Briefcase },
              { number: '200+', label: 'Businesses Transformed', icon: Users },
              { number: '7x', label: 'Average ROI Achieved', icon: TrendingUp },
              { number: '150%', label: 'More Qualified Leads', icon: Rocket }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/80 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="text-4xl sm:text-5xl mb-2 bg-gradient-to-br from-purple-600 to-orange-500 bg-clip-text text-transparent font-bold">
                    {stat.number}
                  </div>
                  <div className="text-gray-700">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-4xl sm:text-5xl bg-gradient-to-br from-gray-900 via-purple-900 to-purple-600 bg-clip-text text-transparent">
              Founding Team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Nilansh Gupta Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/60 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/80"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <ImageWithFallback
                    src="/assets/Nilansh.png"
                    alt="Nilansh Gupta"
                    className="w-32 h-32 rounded-full object-cover object-center border-4 border-purple-200 shadow-lg transition-transform duration-200 hover:scale-105"
                    style={{
                      aspectRatio: '1 / 1',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  {/* Fallback placeholder if image doesn't exist */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 border-4 border-purple-200 shadow-lg flex items-center justify-center opacity-0 pointer-events-none" id="nilansh-placeholder">
                    <User className="text-purple-600" size={48} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Nilansh Gupta</h3>
                <p className="text-purple-600 mb-4">Co-Founder & CEO</p>
                <a
                  href="https://www.linkedin.com/in/nilansh-gupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nilansh Gupta is the visionary co-founder of ConvertWise, bringing over a decade of expertise in digital marketing and AI-driven solutions. His relentless passion for innovation and client success fueled his work at Digital Patron, where he achieved impressive results—driving 150% more qualified leads and up to 7x ROI for clients. As a pioneering AI marketing expert, Nilansh identified the bottlenecks in traditional sales processes and envisioned ConvertWise as the solution.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  Compassionate Leader • Strategic Problem-Solver • AI Marketing Expert
                </p>
              </div>
            </motion.div>

            {/* Archit Dhir Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/60 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/80"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <ImageWithFallback
                    src="/assets/archit.png"
                    alt="Archit Dhir"
                    className="w-32 h-32 rounded-full object-cover object-center border-4 border-orange-200 shadow-lg transition-transform duration-200 hover:scale-105"
                    style={{
                      aspectRatio: '1 / 1',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  {/* Fallback placeholder if image doesn't exist */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 border-4 border-orange-200 shadow-lg flex items-center justify-center opacity-0 pointer-events-none" id="archit-placeholder">
                    <User className="text-orange-600" size={48} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Archit Dhir</h3>
                <p className="text-orange-600 mb-4">Co-Founder & CTO</p>
                <a
                  href="https://www.linkedin.com/in/archit-dhir-23420a321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Archit Dhir, the co-founder of ConvertWise, is a master technologist with an impressive background in PPC, email marketing, and marketing automation, backed by an MBA. His innovative and data-driven strategies have consistently boosted client revenue by 200% and achieved industry-leading conversion rates at Digital Patron. Archit's technical expertise ensures that ConvertWise delivers exceptional value and performance.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  Visionary Thinker • Technical Architect • Creative Problem-Solver
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

