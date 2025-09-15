import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, FileText, Code, Database, Shield, Bot, Users, Zap, Globe, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const DocsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('abstract')

  const sections = [
    { id: 'abstract', title: 'Abstract', icon: FileText },
    { id: 'introduction', title: 'Introduction', icon: Users },
    { id: 'architecture', title: 'System Architecture', icon: Database },
    { id: 'robotics', title: 'Robotics Stack', icon: Bot },
    { id: 'validators', title: 'Validator Protocol', icon: Shield },
    { id: 'blockchain', title: 'Blockchain Layer', icon: Zap },
    { id: 'incentives', title: 'Incentive Mechanisms', icon: Globe },
    { id: 'governance', title: 'Governance', icon: Users },
    { id: 'roadmap', title: 'Roadmap', icon: FileText },
    { id: 'conclusion', title: 'Conclusion', icon: FileText },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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


  const renderContent = () => {
    switch (activeSection) {
      case 'abstract':
        return (
          <div className="space-y-6">
            <p className="text-lg text-klyn-beige/90 leading-relaxed">
              Klyn Robotics is a decentralized robotics platform designed to accelerate the development of embodied intelligence by combining robotics middleware, simulation environments, physical robot testbeds, and blockchain-based incentives.
            </p>
            <p className="text-klyn-sand/80 leading-relaxed">
              The system provides a protocol where task sponsors can define challenges, developers can submit intelligent agents, and validators can test solutions in reproducible environments. Evaluations are conducted in both simulations and physical robots to ensure real-world reliability.
            </p>
            <div className="bg-klyn-medium/10 border border-klyn-beige/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-klyn-sand mb-3">Key Features</h4>
              <ul className="space-y-2 text-klyn-beige/80">
                <li>• Decentralized robotics coordination</li>
                <li>• ROS2 middleware integration</li>
                <li>• Multi-environment validation (simulation + physical)</li>
                <li>• Solana blockchain incentives</li>
                <li>• Transparent and reproducible results</li>
              </ul>
            </div>
          </div>
        )

      case 'introduction':
        return (
          <div className="space-y-6">
            <p className="text-lg text-klyn-beige/90 leading-relaxed">
              Embodied intelligence is the capacity of machines to perceive the environment, reason about it, and act effectively in the real world. Progress in this field has been slow compared to software-only domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-klyn-grey/10 border border-klyn-grey/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Current Challenges</h4>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Fragmented research efforts</li>
                  <li>• Limited reproducibility</li>
                  <li>• Misaligned incentives</li>
                  <li>• Expensive hardware access</li>
                  <li>• Isolated benchmarks</li>
                </ul>
              </div>
              <div className="bg-klyn-beige/10 border border-klyn-beige/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Klyn&apos;s Solution</h4>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Decentralized coordination</li>
                  <li>• Blockchain incentives</li>
                  <li>• ROS2 standardization</li>
                  <li>• Open access platform</li>
                  <li>• Collective innovation</li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 'architecture':
        return (
          <div className="space-y-6">
            <p className="text-lg text-klyn-beige/90 leading-relaxed">
              The architecture involves four primary actors working together to create a self-sustaining robotics ecosystem.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Task Sponsors',
                  description: 'Define challenges and provide funding',
                  icon: Users,
                  color: 'bg-klyn-beige/10 border-klyn-beige/20'
                },
                {
                  title: 'Developers (Miners)',
                  description: 'Create and submit intelligent agents',
                  icon: Code,
                  color: 'bg-klyn-sand/10 border-klyn-sand/20'
                },
                {
                  title: 'Validators',
                  description: 'Test solutions in simulation and hardware',
                  icon: Shield,
                  color: 'bg-klyn-grey/10 border-klyn-grey/20'
                },
                {
                  title: 'Solana Blockchain',
                  description: 'Secure escrow and automatic payouts',
                  icon: Zap,
                  color: 'bg-klyn-medium/10 border-klyn-medium/20'
                }
              ].map((actor, index) => (
                <motion.div
                  key={actor.title}
                  variants={itemVariants}
                  className={`${actor.color} border rounded-xl p-6 hover-lift`}
                >
                  <actor.icon className="w-8 h-8 text-klyn-beige mb-3" />
                  <h4 className="text-lg font-semibold text-klyn-sand mb-2">{actor.title}</h4>
                  <p className="text-klyn-beige/80 text-sm">{actor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'robotics':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-klyn-sand mb-4">ROS2 Middleware</h3>
              <p className="text-klyn-beige/90 leading-relaxed">
                Klyn uses ROS2 as the standard middleware across all submissions and evaluations. Developers implement agents as ROS2 nodes that interact through standard topics and services, ensuring interoperability across simulators and physical robots.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-klyn-sand mb-4">Simulation Environments</h4>
                <div className="space-y-4">
                  {[
                    { name: 'Gazebo Fortress', desc: 'Native ROS2 physics simulator' },
                    { name: 'NVIDIA Isaac Sim', desc: 'GPU-accelerated high-fidelity' },
                    { name: 'MuJoCo', desc: 'Lightweight continuous control' },
                    { name: 'CARLA', desc: 'Autonomous driving benchmarks' }
                  ].map((env) => (
                    <div key={env.name} className="bg-klyn-medium/10 border border-klyn-medium/20 rounded-lg p-4">
                      <h5 className="font-semibold text-klyn-sand">{env.name}</h5>
                      <p className="text-klyn-beige/80 text-sm">{env.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-klyn-sand mb-4">Physical Robots</h4>
                <div className="space-y-4">
                  {[
                    { name: 'Manipulation', desc: 'Franka Panda, UR5e, Kinova arms' },
                    { name: 'Navigation', desc: 'Turtlebot3, Clearpath Jackal' },
                    { name: 'Locomotion', desc: 'Unitree Go1, Boston Dynamics Spot' }
                  ].map((robot) => (
                    <div key={robot.name} className="bg-klyn-sand/10 border border-klyn-sand/20 rounded-lg p-4">
                      <h5 className="font-semibold text-klyn-sand">{robot.name}</h5>
                      <p className="text-klyn-beige/80 text-sm">{robot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'validators':
        return (
          <div className="space-y-6">
            <p className="text-lg text-klyn-beige/90 leading-relaxed">
              Validators are the backbone of Klyn Robotics, ensuring fairness and reproducibility through standardized evaluation protocols.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-klyn-grey/10 border border-klyn-grey/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Evaluation Process</h4>
                <ol className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>1. Pull submissions into Docker containers</li>
                  <li>2. Run in simulation environments</li>
                  <li>3. Deploy on physical robots when available</li>
                  <li>4. Collect performance metrics</li>
                  <li>5. Log data in rosbag files</li>
                  <li>6. Sign results cryptographically</li>
                </ol>
              </div>

              <div className="bg-klyn-beige/10 border border-klyn-beige/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Performance Metrics</h4>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Task success rate</li>
                  <li>• Execution time</li>
                  <li>• Trajectory efficiency</li>
                  <li>• Energy consumption</li>
                  <li>• Safety violations</li>
                  <li>• Collision detection</li>
                </ul>
              </div>
            </div>

            <div className="bg-klyn-medium/10 border border-klyn-beige/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-klyn-sand mb-3">Reproducibility & Security</h4>
              <p className="text-klyn-beige/80 leading-relaxed">
                All evaluation data is logged in standardized rosbag files and signed with validator private keys. 
                This ensures results cannot be forged and can be independently verified. Validators are rewarded 
                for accuracy and face reputation penalties for dishonest behavior.
              </p>
            </div>
          </div>
        )

      case 'blockchain':
        return (
          <div className="space-y-6">
            <p className="text-lg text-klyn-beige/90 leading-relaxed">
              Klyn uses Solana smart contracts for secure escrow, automatic payouts, and reputation management.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-klyn-medium/10 border border-klyn-medium/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Escrow System</h4>
                <p className="text-klyn-beige/80 text-sm">Sponsors deposit funds before tasks are broadcast, ensuring payment security.</p>
              </div>

              <div className="bg-klyn-beige/10 border border-klyn-beige/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Reputation System</h4>
                <p className="text-klyn-beige/80 text-sm">Developers and validators build credibility through consistent performance.</p>
              </div>

              <div className="bg-klyn-sand/10 border border-klyn-sand/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Dispute Resolution</h4>
                <p className="text-klyn-beige/80 text-sm">Community-weighted voting handles contested results transparently.</p>
              </div>
            </div>

            <div className="bg-klyn-grey/10 border border-klyn-grey/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-klyn-sand mb-3">Smart Contract Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Automatic payout execution</li>
                  <li>• Performance-based rewards</li>
                  <li>• Validator compensation</li>
                </ul>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Reputation tracking</li>
                  <li>• Governance participation</li>
                  <li>• Dispute mechanisms</li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 'incentives':
        return (
          <div className="space-y-6">
            <p className="text-lg text-klyn-beige/90 leading-relaxed">
              The incentive design ensures all actors are motivated to participate honestly and contribute to the ecosystem&apos;s success.
            </p>

            <div className="bg-klyn-medium/10 border border-klyn-beige/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-klyn-sand mb-4">Payout Formula</h4>
              <div className="bg-klyn-dark/50 rounded-lg p-4 font-mono text-klyn-sand">
                <div className="text-sm text-klyn-beige/60 mb-2">Base Payout for Developer:</div>
                <div className="text-lg">Payout = B × (Sdev / Sall) + Reputation Bonus</div>
                <div className="text-sm text-klyn-beige/60 mt-2">
                  Where B = total bounty, Sdev = developer score, Sall = sum of all scores
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-klyn-beige/10 border border-klyn-beige/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Developer Incentives</h4>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Performance-based rewards</li>
                  <li>• Reputation building</li>
                  <li>• Long-term bonuses</li>
                  <li>• Governance participation</li>
                </ul>
              </div>

              <div className="bg-klyn-sand/10 border border-klyn-sand/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Validator Incentives</h4>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Base evaluation rewards</li>
                  <li>• Accuracy multipliers</li>
                  <li>• Timeliness bonuses</li>
                  <li>• Reputation maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 'governance':
        return (
          <div className="space-y-6">
            <p className="text-lg text-klyn-beige/90 leading-relaxed">
              Klyn will evolve into a community-governed protocol where stakeholders collectively decide on platform evolution and dispute resolution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-klyn-grey/10 border border-klyn-grey/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Governance Mechanisms</h4>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Benchmark voting</li>
                  <li>• Environment additions</li>
                  <li>• Robot integrations</li>
                  <li>• Protocol upgrades</li>
                </ul>
              </div>

              <div className="bg-klyn-beige/10 border border-klyn-beige/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Voting Weight</h4>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Validator reputation scores</li>
                  <li>• Developer contribution history</li>
                  <li>• Sponsor stake size</li>
                  <li>• Community participation</li>
                </ul>
              </div>
            </div>

            <div className="bg-klyn-medium/10 border border-klyn-beige/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-klyn-sand mb-3">Living Benchmarks</h4>
              <p className="text-klyn-beige/80 leading-relaxed">
                Benchmarks are not static but evolve with the platform. As agents improve, new variations and harder tasks are added through community proposals and voting. This ensures continuous improvement and relevance of the platform.
              </p>
            </div>
          </div>
        )

      case 'roadmap':
        return (
          <div className="space-y-6">
            <p className="text-lg text-klyn-beige/90 leading-relaxed">
              Klyn&apos;s development is structured in five phases, each building upon the previous to create a fully decentralized robotics protocol.
            </p>

            <div className="space-y-6">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Core Infrastructure',
                  description: 'Launch Solana contracts, backend, and simulation validators',
                  features: ['Gazebo integration', 'MuJoCo support', 'Basic smart contracts']
                },
                {
                  phase: 'Phase 2',
                  title: 'Expanded Validation',
                  description: 'Add more environments and grow validator network',
                  features: ['Isaac Sim support', 'CARLA integration', 'Validator scaling']
                },
                {
                  phase: 'Phase 3',
                  title: 'Physical Robots',
                  description: 'Introduce hardware validators with standardized containers',
                  features: ['ROS2 Docker images', 'Hardware testbeds', 'Real-world validation']
                },
                {
                  phase: 'Phase 4',
                  title: 'Decentralized Governance',
                  description: 'Launch community governance and benchmark marketplace',
                  features: ['Community voting', 'Benchmark marketplace', 'Dispute resolution']
                },
                {
                  phase: 'Phase 5',
                  title: 'Global Protocol',
                  description: 'Fully decentralized robotics protocol at global scale',
                  features: ['Global deployment', 'Advanced AI integration', 'Ecosystem maturity']
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  variants={itemVariants}
                  className="bg-klyn-medium/10 border border-klyn-beige/20 rounded-xl p-6 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-klyn-beige text-klyn-dark rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-klyn-sand mb-2">{phase.phase}: {phase.title}</h4>
                      <p className="text-klyn-beige/80 mb-3">{phase.description}</p>
                      <ul className="flex flex-wrap gap-2">
                        {phase.features.map((feature) => (
                          <span key={feature} className="bg-klyn-grey/20 text-klyn-sand text-xs px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'conclusion':
        return (
          <div className="space-y-6">
            <p className="text-lg text-klyn-beige/90 leading-relaxed">
              Klyn Robotics represents a new paradigm for advancing embodied intelligence through decentralized coordination and verifiable evaluation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-klyn-beige/10 border border-klyn-beige/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Technical Foundation</h4>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• ROS2 integration</li>
                  <li>• Containerized validators</li>
                  <li>• Solana smart contracts</li>
                  <li>• Trustless evaluation</li>
                </ul>
              </div>

              <div className="bg-klyn-sand/10 border border-klyn-sand/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-klyn-sand mb-3">Ecosystem Benefits</h4>
                <ul className="space-y-2 text-klyn-beige/80 text-sm">
                  <li>• Fair incentive alignment</li>
                  <li>• Adaptive governance</li>
                  <li>• Transparent collaboration</li>
                  <li>• Accelerated innovation</li>
                </ul>
              </div>
            </div>

            <div className="bg-klyn-medium/10 border border-klyn-beige/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-klyn-sand mb-4">The Future of Robotics</h3>
              <p className="text-lg text-klyn-beige/80 leading-relaxed max-w-4xl mx-auto">
                Klyn establishes the infrastructure where robotics progress is not siloed but accelerated through transparent collaboration and decentralized coordination. This creates a system where innovation in robotics can compound collectively, rather than being locked within isolated laboratories.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      <Head>
        <title>Technical Documentation - Klyn Robotics</title>
        <meta name="description" content="Complete technical documentation for Klyn Robotics platform including architecture, protocols, and implementation details." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <div className="min-h-screen bg-klyn-dark">
        <Navbar />
        
        <main className="pt-16">
          {/* Header */}
          <div className="bg-klyn-medium/10 border-b border-klyn-beige/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link 
                    href="/"
                    className="flex items-center gap-2 text-klyn-beige/80 hover:text-klyn-sand transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                  </Link>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-klyn-sand mt-6">Technical Documentation</h1>
              <p className="text-xl text-klyn-beige/80 mt-2">Complete technical specifications and architecture details</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-4 gap-8"
            >
              {/* Sidebar Navigation */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-xl font-bold text-klyn-sand mb-6">Documentation</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          activeSection === section.id
                            ? 'bg-klyn-beige text-klyn-dark'
                            : 'text-klyn-beige/80 hover:bg-klyn-medium/10 hover:text-klyn-sand'
                        }`}
                      >
                        <section.icon className="w-5 h-5 flex-shrink-0" />
                        <span className="font-medium">{section.title}</span>
                        {activeSection === section.id ? (
                          <ChevronDown className="w-4 h-4 ml-auto" />
                        ) : (
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        )}
                      </button>
                    ))}
                  </nav>
                </div>
              </motion.div>

              {/* Main Content */}
              <motion.div variants={itemVariants} className="lg:col-span-3">
                <div id="docs-content" className="bg-klyn-medium/5 border border-klyn-beige/10 rounded-2xl p-8 min-h-[600px]">
                  {renderContent()}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default DocsPage
