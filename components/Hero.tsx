import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Twitter } from 'lucide-react'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-klyn-dark">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-klyn-medium/20 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-20 w-24 h-24 bg-klyn-beige/10 rounded-full blur-lg"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-klyn-sand/5 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-klyn-grey/15 rounded-full blur-lg"
        />
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="text-gradient">Accelerating</span>
            <br />
            <span className="text-klyn-sand">Embodied Intelligence</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-klyn-beige max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Klyn Robotics builds the future of robotics coordination and training.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-klyn-sand/90 max-w-3xl mx-auto leading-relaxed"
          >
            We align sponsors, developers, validators and robots to accelerate 
            embodied intelligence with on-chain incentives and decentralized coordination.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.a
              href="/docs"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-klyn-beige text-klyn-dark px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-klyn-sand transition-all duration-300 hover-lift shadow-lg"
            >
              Read the Docs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="https://x.com/KlynRobotics"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-klyn-beige text-klyn-beige px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-klyn-beige hover:text-klyn-dark transition-all duration-300 hover-lift"
            >
              <Twitter className="w-5 h-5" />
              Follow us on X
            </motion.a>
          </motion.div>

          {/* Stats or Additional Info */}
          <motion.div
            variants={itemVariants}
            className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="text-center p-6 bg-klyn-medium/5 rounded-xl border border-klyn-beige/10 hover:bg-klyn-medium/10 transition-all duration-300 hover:border-klyn-beige/30 cursor-pointer group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-3xl md:text-4xl font-bold text-klyn-beige mb-2 group-hover:text-klyn-sand transition-colors duration-300"
              >
                Decentralized
              </motion.div>
              <div className="text-klyn-sand/80 font-medium group-hover:text-klyn-sand/90 transition-colors duration-300">
                On-chain coordination and incentives
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="text-center p-6 bg-klyn-medium/5 rounded-xl border border-klyn-beige/10 hover:bg-klyn-medium/10 transition-all duration-300 hover:border-klyn-beige/30 cursor-pointer group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-3xl md:text-4xl font-bold text-klyn-beige mb-2 group-hover:text-klyn-sand transition-colors duration-300"
              >
                Validated
              </motion.div>
              <div className="text-klyn-sand/80 font-medium group-hover:text-klyn-sand/90 transition-colors duration-300">
                Simulation and real-world testing
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="text-center p-6 bg-klyn-medium/5 rounded-xl border border-klyn-beige/10 hover:bg-klyn-medium/10 transition-all duration-300 hover:border-klyn-beige/30 cursor-pointer group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-3xl md:text-4xl font-bold text-klyn-beige mb-2 group-hover:text-klyn-sand transition-colors duration-300"
              >
                Evolving
              </motion.div>
              <div className="text-klyn-sand/80 font-medium group-hover:text-klyn-sand/90 transition-colors duration-300">
                Continuous improvement and benchmarks
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-klyn-beige/50 rounded-full flex justify-center hover:border-klyn-beige/80 transition-colors duration-300 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-klyn-beige rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-klyn-beige/60 text-sm mt-2 text-center"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
