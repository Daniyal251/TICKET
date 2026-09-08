import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-purple-900 to-accent-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight">
            TICKET
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Музыкальный лейбл нового поколения
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/artists"
              className="px-8 py-4 bg-white text-primary-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Наши артисты
            </Link>
            <Link 
              href="/releases"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Релизы
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Latest Releases */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Последние релизы
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary-400 to-accent-500" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2">Название релиза {item}</h3>
                  <p className="text-gray-600 dark:text-gray-400">Исполнитель</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Наши артисты
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-display text-xl font-bold">Артист {item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-display text-3xl font-bold mb-4">TICKET</h3>
          <p className="text-gray-400 mb-8">© 2024 TICKET Label. Все права защищены.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">VK</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Spotify</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
