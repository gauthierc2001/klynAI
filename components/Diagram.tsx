import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Database, Shield, Bot, RefreshCw } from 'lucide-react'

const Diagram: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const flowItems = [
    {
      id: 'sponsors',
      title: 'Task Sponsors',
      description: 'Define challenges and lock rewards',
      icon: Users,
      color: 'bg-klyn-beige text-klyn-dark',
      position: 'top-left'
    },
    {
      id: 'backend',
      title: 'Klyn Backend',
      description: 'Task registry and coordination',
      icon: Database,
      color: 'bg-klyn-medium text-klyn-sand',
      position: 'top-center'
    },
    {
      id: 'blockchain',
      title: 'Solana Blockchain',
      description: 'Escrow and payouts',
      icon: Shield,
      color: 'bg-klyn-medium text-klyn-sand',
      position: 'top-right'
    },
    {
      id: 'validators',
      title: 'Validators',
      description: 'Performance evaluation',
      icon: Shield,
      color: 'bg-klyn-grey text-klyn-sand',
      position: 'center'
    },
    {
      id: 'robots',
      title: 'Robots',
      description: 'Simulation and real-world testing',
      icon: Bot,
      color: 'bg-klyn-sand text-klyn-dark',
      position: 'bottom-center'
    },
    {
      id: 'improvement',
      title: 'Continuous Improvement',
      description: 'Benchmarks and evolution',
      icon: RefreshCw,
      color: 'bg-klyn-beige text-klyn-dark',
      position: 'bottom-center'
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >
        {/* Flow Diagram - Cleaner Layout */}
        <div className="space-y-12">
          {/* Top Row - Sponsors and Backend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants} 
              className="w-full"
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
            >
              <div className="bg-klyn-beige/10 border border-klyn-beige/20 rounded-2xl p-6 text-center hover:bg-klyn-beige/20 transition-all duration-300 shadow-lg hover:shadow-xl h-full cursor-pointer group">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Users className="w-12 h-12 text-klyn-beige mx-auto mb-4 group-hover:text-klyn-sand transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-klyn-sand mb-2 group-hover:text-klyn-beige transition-colors duration-300">Task Sponsors</h3>
                <p className="text-klyn-beige/80 text-sm group-hover:text-klyn-beige/90 transition-colors duration-300">Define challenges and lock rewards</p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="w-full"
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
            >
              <div className="bg-klyn-medium/10 border border-klyn-medium/20 rounded-2xl p-6 text-center hover:bg-klyn-medium/20 transition-all duration-300 shadow-lg hover:shadow-xl h-full cursor-pointer group">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Database className="w-12 h-12 text-klyn-medium mx-auto mb-4 group-hover:text-klyn-sand transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-klyn-sand mb-2 group-hover:text-klyn-beige transition-colors duration-300">Klyn Backend</h3>
                <p className="text-klyn-beige/80 text-sm group-hover:text-klyn-beige/90 transition-colors duration-300">Task registry and coordination</p>
              </div>
            </motion.div>
          </div>

          {/* Flow Arrow */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-klyn-beige/60 rotate-90" />
          </motion.div>

          {/* Middle Row - Validators */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-full max-w-sm">
              <div className="bg-klyn-grey/10 border border-klyn-grey/20 rounded-2xl p-6 text-center hover:bg-klyn-grey/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Shield className="w-12 h-12 text-klyn-grey mx-auto mb-4" />
                <h3 className="text-xl font-bold text-klyn-sand mb-2">Validators</h3>
                <p className="text-klyn-beige/80 text-sm">Performance evaluation and testing</p>
              </div>
            </div>
          </motion.div>

          {/* Flow Arrow */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <ArrowRight className="w-8 h-8 text-klyn-beige/60 rotate-90" />
          </motion.div>

          {/* Bottom Row - Robots and Improvement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="w-full">
              <div className="bg-klyn-sand/10 border border-klyn-sand/20 rounded-2xl p-6 text-center hover:bg-klyn-sand/20 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                <Bot className="w-12 h-12 text-klyn-sand mx-auto mb-4" />
                <h3 className="text-xl font-bold text-klyn-sand mb-2">Robots</h3>
                <p className="text-klyn-beige/80 text-sm">Simulation and real-world testing</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full">
              <div className="bg-klyn-beige/10 border border-klyn-beige/20 rounded-2xl p-6 text-center hover:bg-klyn-beige/20 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                <RefreshCw className="w-12 h-12 text-klyn-beige mx-auto mb-4" />
                <h3 className="text-xl font-bold text-klyn-sand mb-2">Continuous Improvement</h3>
                <p className="text-klyn-beige/80 text-sm">Benchmarks and evolution</p>
              </div>
            </motion.div>
          </div>

          {/* Blockchain Integration */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-full max-w-sm">
              <div className="bg-klyn-medium/10 border border-klyn-medium/20 rounded-2xl p-6 text-center hover:bg-klyn-medium/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Shield className="w-12 h-12 text-klyn-medium mx-auto mb-4" />
                <h3 className="text-xl font-bold text-klyn-sand mb-2">Solana Blockchain</h3>
                <p className="text-klyn-beige/80 text-sm">Escrow and payouts</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Flow Description */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="bg-klyn-medium/5 border border-klyn-beige/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-klyn-sand mb-4">
              Decentralized Robotics Ecosystem
            </h3>
            <p className="text-lg text-klyn-beige/90 max-w-4xl mx-auto leading-relaxed">
              Our platform creates a self-sustaining cycle where sponsors define challenges, 
              developers submit solutions, validators ensure quality and continuous improvement 
              drives innovation forward through blockchain incentives.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Diagram
