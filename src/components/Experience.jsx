import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage.jsx';

const Experience = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const jobs = t('experience.jobs') || [];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('experience.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>

            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <motion.div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                          {job.period}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {job.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-700 font-medium">
                        {job.company}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {job.description.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Used */}
                    {index === 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-2">{t('experience.keyTechnologies')}</p>
                        <div className="flex flex-wrap gap-1">
                          {['Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'REST API', 'Spring Security', 'JWT'].map((tech, techIdx) => (
                            <span key={techIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-2">{t('experience.keyTechnologies')}</p>
                        <div className="flex flex-wrap gap-1">
                          {['SQL', 'PHP', 'Python', 'Database Optimization'].map((tech, techIdx) => (
                            <span key={techIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs text-gray-500 mb-2">{t('experience.keyTechnologies')}</p>
                        <div className="flex flex-wrap gap-1">
                          {['Database Design', 'Data Migration', 'Backup Systems'].map((tech, techIdx) => (
                            <span key={techIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            className="mt-16 bg-white rounded-2xl shadow-lg p-8"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">6+</div>
                <div className="text-gray-600">{t('experience.stats.monthsExperience')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-gray-600">{t('experience.stats.internshipPositions')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
                <div className="text-gray-600">{t('experience.stats.company')}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
