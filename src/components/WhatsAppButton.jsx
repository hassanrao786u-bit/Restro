import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'motion/react'

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/923186718114?text=Hi%2C%20I%20want%20to%20order%20from%20Restro" 
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="group fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg shadow-green-500/40"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></span>
      <FaWhatsapp size={28} color="white" className="relative" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  )
}

export default WhatsAppButton