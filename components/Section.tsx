import React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  background?: 'dark' | 'medium' | 'light'
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  background = 'dark'
}) => {
  const backgroundClasses = {
    dark: 'bg-klyn-dark',
    medium: 'bg-klyn-medium/10',
    light: 'bg-klyn-grey/5'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id={id}
      className={`py-24 lg:py-36 ${backgroundClasses[background]} ${className} relative overflow-hidden`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-klyn-beige/10 via-transparent to-klyn-sand/10"></div>
        
        {/* Floating particles */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-klyn-beige/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            rotate: [360, 0, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-klyn-sand/40 rounded-full"
        />
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [15, -15, 15],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-klyn-medium/30 rounded-full"
        />
        
        {/* Geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/3 w-4 h-4 border border-klyn-beige/20 transform rotate-45"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/5 w-3 h-3 bg-klyn-sand/20 rounded-full"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-20"
        >
          {/* Section Header */}
          {(title || subtitle) && (
            <motion.div
              variants={itemVariants}
              className="text-center max-w-5xl mx-auto"
            >
              {title && (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-klyn-sand mb-8 leading-tight">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-xl md:text-2xl text-klyn-beige/90 leading-relaxed font-medium">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}

          {/* Section Content */}
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Section
