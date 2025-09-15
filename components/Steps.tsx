import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Steps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Define Tasks',
      description: 'Sponsors create robotics challenges and define success criteria',
    },
    {
      number: 2,
      title: 'Escrow Funds',
      description: 'Rewards are locked in smart contracts on Solana blockchain',
    },
    {
      number: 3,
      title: 'Broadcast Tasks',
      description: 'Challenges are distributed to the global developer community',
    },
    {
      number: 4,
      title: 'Submit Agents',
      description: 'Developers train and submit their robotics solutions',
    },
    {
      number: 5,
      title: 'Validate Performance',
      description: 'Validators test agents in simulation and real-world environments',
    },
    {
      number: 6,
      title: 'Return Results',
      description: 'Performance data and validation results are recorded',
    },
    {
      number: 7,
      title: 'Distribute Rewards',
      description: 'Successful agents receive payouts and leaderboard rankings',
    },
    {
      number: 8,
      title: 'Evolve Benchmarks',
      description: 'Continuous improvement updates tasks and evaluation criteria',
    },
  ]

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
    <div className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-8"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={itemVariants}
            className="relative"
          >
            <motion.div 
              className="flex items-start gap-6 p-4 rounded-xl hover:bg-klyn-medium/5 transition-all duration-300 cursor-pointer group"
              whileHover={{ 
                scale: 1.02, 
                x: 8,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-klyn-beige text-klyn-dark rounded-full flex items-center justify-center text-xl font-bold shadow-lg border-2 border-klyn-beige/30 group-hover:border-klyn-sand/50 transition-all duration-300"
                >
                  {step.number}
                </motion.div>
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-klyn-sand mb-2 group-hover:text-klyn-beige transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-klyn-beige/90 leading-relaxed group-hover:text-klyn-sand/90 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 p-8 bg-klyn-medium/10 rounded-2xl border border-klyn-beige/20 hover:bg-klyn-medium/15 transition-all duration-300"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="inline-block mb-4"
          >
            <CheckCircle className="w-12 h-12 text-klyn-beige mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-bold text-klyn-sand mb-4">
            Complete Decentralized Workflow
          </h3>
          <p className="text-lg text-klyn-beige/90 max-w-3xl mx-auto leading-relaxed">
            From task creation to continuous improvement, Klyn Robotics creates a 
            self-sustaining ecosystem where robotics innovation is rewarded and 
            accelerated through blockchain incentives.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Steps
