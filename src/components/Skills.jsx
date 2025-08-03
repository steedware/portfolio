import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage.jsx';

const Skills = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillCategories = [
    {
      key: 'backend',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      key: 'databases',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
    {
      key: 'tools',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    {
      key: 'additional',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const skills = t('skills.skillsList') || {};

  // Define skill levels for animation (mock data - you can adjust based on actual proficiency)
  const skillLevels = {
    'Java 9+': 85,
    'Spring Boot': 90,
    'Spring Security': 80,
    'Spring Data JPA': 85,
    'Hibernate': 80,
    'REST API': 90,
    'JWT': 75,
    'WebSocket': 70,
    'JUnit': 75,
    'Mockito': 70,
    'PostgreSQL': 85,
    'MySQL': 80,
    'H2': 75,
    'PostGIS': 60,
    'SQL Optimization': 70,
    'Redis': 60,
    'Maven': 80,
    'Docker': 75,
    'Git': 85,
    'Thymeleaf': 70,
    'Bootstrap': 75,
    'Swagger': 80,
    'IntelliJ IDEA': 90,
    'Postman': 85,
    'PHP': 65,
    'Python': 70,
    'API Integration': 80,
    'PDF Generation': 75,
    'Stripe': 65,
    'JSON': 85,
    'XML': 75,
    'Microservices': 60
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
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
              {t('skills.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                className="bg-white rounded-2xl shadow-lg p-8"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {t(`skills.categories.${category.key}`)}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skills[category.key]?.map((skill, skillIndex) => {
                    const level = skillLevels[skill] || 70;
                    return (
                      <motion.div
                        key={skillIndex}
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 font-medium">{skill}</span>
                          <span className="text-gray-500 text-sm">{level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            className="mt-16 bg-white rounded-2xl shadow-lg p-8"
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('skills.overview.title')}</h3>
              <p className="text-gray-600">{t('skills.overview.subtitle')}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
                <div className="text-gray-600 text-sm">{t('skills.overview.backendTechnologies')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">6+</div>
                <div className="text-gray-600 text-sm">{t('skills.overview.databaseSystems')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
                <div className="text-gray-600 text-sm">{t('skills.overview.developmentTools')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
                <div className="text-gray-600 text-sm">{t('skills.overview.additionalSkills')}</div>
              </div>
            </div>
          </motion.div>

          {/* Skill Badges - Most Important */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{t('skills.overview.coreCompetencies')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Docker', 'Git'].map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
