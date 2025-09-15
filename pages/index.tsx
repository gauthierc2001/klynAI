import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Diagram from '@/components/Diagram'
import Steps from '@/components/Steps'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const HomePage: React.FC = () => {

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
    <>
      <Head>
        <title>Klyn Robotics - Accelerating Embodied Intelligence</title>
        <meta name="description" content="Klyn Robotics builds the future of robotics coordination and training through decentralized platforms and on-chain incentives." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <div className="min-h-screen bg-klyn-dark">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <Section
            id="about"
            title="What is Klyn Robotics?"
            subtitle="A decentralized platform for robotics training and evaluation"
            background="medium"
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <motion.div variants={itemVariants} className="space-y-6">
                  <p className="text-xl text-klyn-beige/90 leading-relaxed">
                    Klyn Robotics is a decentralized platform for robotics training and evaluation. 
                    We align sponsors, developers, validators and robots to accelerate embodied 
                    intelligence with on-chain incentives.
                  </p>
                  <p className="text-lg text-klyn-sand/80 leading-relaxed">
                    Our platform creates a self-sustaining ecosystem where robotics innovation 
                    is rewarded through blockchain technology, enabling continuous improvement 
                    and breakthrough discoveries in embodied AI.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-6">
                    <div className="bg-klyn-beige/10 border border-klyn-beige/20 px-6 py-3 rounded-lg hover:bg-klyn-beige/20 transition-all duration-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-klyn-beige rounded-full"></div>
                      <span className="text-klyn-beige font-semibold">Decentralized</span>
                    </div>
                    <div className="bg-klyn-beige/10 border border-klyn-beige/20 px-6 py-3 rounded-lg hover:bg-klyn-beige/20 transition-all duration-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-klyn-beige rounded-full"></div>
                      <span className="text-klyn-beige font-semibold">On-chain Rewards</span>
                    </div>
                    <div className="bg-klyn-beige/10 border border-klyn-beige/20 px-6 py-3 rounded-lg hover:bg-klyn-beige/20 transition-all duration-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-klyn-beige rounded-full"></div>
                      <span className="text-klyn-beige font-semibold">Real-world Testing</span>
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <motion.a
                      href="/docs"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-klyn-medium/20 border border-klyn-beige/30 text-klyn-beige px-6 py-3 rounded-lg font-semibold hover:bg-klyn-medium/30 hover:border-klyn-beige/50 transition-all duration-300"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Diagram />
                </motion.div>
              </motion.div>
            </div>
          </Section>

          {/* How it Works Section */}
          <Section
            id="how-it-works"
            title="How it Works"
            subtitle="From task creation to continuous improvement"
            background="dark"
          >
            <div className="max-w-6xl mx-auto">
              <Steps />
            </div>
          </Section>

        </main>

        <Footer />
      </div>
    </>
  )
}

export default HomePage
