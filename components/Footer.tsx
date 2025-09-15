import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Github, Mail, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

  return (
    <footer className="bg-klyn-medium/20 border-t border-klyn-beige/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.jpg" 
                  alt="Klyn Robotics" 
                  className="h-12 w-auto"
                />
                <h3 className="text-3xl font-bold text-gradient">
                  Klyn Robotics
                </h3>
              </div>
              <p className="text-klyn-beige/80 text-lg leading-relaxed mb-6 max-w-md">
                Accelerating embodied intelligence through decentralized robotics 
                coordination and on-chain incentives.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://x.com/KlynRobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-klyn-beige/10 hover:bg-klyn-beige/20 rounded-lg flex items-center justify-center text-klyn-beige transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/klynrobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-klyn-beige/10 hover:bg-klyn-beige/20 rounded-lg flex items-center justify-center text-klyn-beige transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:hello@klynrobotics.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-klyn-beige/10 hover:bg-klyn-beige/20 rounded-lg flex items-center justify-center text-klyn-beige transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-klyn-sand mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'How it Works', href: '#how-it-works' },
                  { name: 'Documentation', href: '/docs' },
                  { name: 'Whitepaper', href: '#' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-klyn-beige/80 hover:text-klyn-sand transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-klyn-sand mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Technical Docs', href: '#' },
                  { name: 'API Reference', href: '#' },
                  { name: 'Developer Guide', href: '#' },
                  { name: 'Community', href: '#' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-klyn-beige/80 hover:text-klyn-sand transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center py-12 border-t border-klyn-beige/10"
          >
            <h3 className="text-3xl font-bold text-klyn-sand mb-4">
              Be part of the future of robotics.
            </h3>
            <p className="text-lg text-klyn-beige/80 mb-8 max-w-2xl mx-auto">
              Join the decentralized robotics revolution. Follow us for updates 
              and be the first to know when we launch.
            </p>
            <motion.a
              href="https://x.com/KlynRobotics"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-klyn-beige text-klyn-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-klyn-sand transition-all duration-300 hover-lift"
            >
              <Twitter className="w-5 h-5" />
              Follow us on X
            </motion.a>
          </motion.div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-klyn-beige/10">
            <motion.p
              variants={itemVariants}
              className="text-klyn-beige/60 text-sm mb-4 md:mb-0"
            >
              © 2024 Klyn Robotics. All rights reserved.
            </motion.p>
            
            <motion.button
              variants={itemVariants}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-klyn-beige/60 hover:text-klyn-sand transition-colors duration-200"
            >
              <ArrowUp className="w-4 h-4" />
              Back to top
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
