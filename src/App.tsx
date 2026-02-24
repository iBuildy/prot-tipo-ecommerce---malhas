/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, User, Search, Menu, X, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

// --- Types ---
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

// --- Mock Data ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Cardigan de Tricot Marfim",
    price: "R$ 890,00",
    image: "https://picsum.photos/seed/knit1/800/1200",
    category: "Essenciais"
  },
  {
    id: 2,
    name: "Blazer Camel Estruturado",
    price: "R$ 1.250,00",
    image: "https://picsum.photos/seed/blazer1/800/1200",
    category: "Alfaiataria"
  },
  {
    id: 3,
    name: "Gola Alta em Mix de Seda",
    price: "R$ 640,00",
    image: "https://picsum.photos/seed/silk1/800/1200",
    category: "Essenciais"
  },
  {
    id: 4,
    name: "Conjunto Lounge de Cashmere",
    price: "R$ 2.100,00",
    image: "https://picsum.photos/seed/cashmere1/800/1200",
    category: "Luxo"
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 flex items-center justify-between ${
        isScrolled ? 'bg-bone/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
        <a href="#" className="hover:text-taupe transition-colors">Loja</a>
        <a href="#" className="hover:text-taupe transition-colors">Coleções</a>
        <a href="#" className="hover:text-taupe transition-colors">Legado</a>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-3xl font-serif tracking-tighter font-semibold">
          MALHAS IRMA
        </h1>
      </div>

      <div className="flex items-center space-x-6">
        <button className="hidden md:block hover:text-taupe transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="hover:text-taupe transition-colors">
          <User className="w-5 h-5" />
        </button>
        <button className="hover:text-taupe transition-colors relative">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-taupe text-bone text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bone z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col space-y-8 mt-12 text-3xl font-serif">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Loja</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Coleções</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Legado</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Sustentabilidade</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/vogue-hero/1920/1080" 
          alt="Malhas Irma Hero" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-bone max-w-4xl px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-medium"
        >
          Desde 1984
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif mb-10 leading-tight italic"
        >
          Tradição encontra Tendência
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#collection" 
            className="inline-flex items-center space-x-4 border border-bone px-10 py-4 text-sm uppercase tracking-widest hover:bg-bone hover:text-charcoal transition-all duration-500 group"
          >
            <span>Explorar a Coleção</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-bone flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-70">Rolar</span>
        <div className="w-[1px] h-12 bg-bone/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-bone animate-scroll-line" />
        </div>
      </motion.div>
    </section>
  );
};

const FeaturedSection = () => {
  return (
    <section id="collection" className="py-24 px-6 md:px-12 bg-bone">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-taupe text-xs uppercase tracking-widest mb-4 block font-semibold">O Editorial</span>
              <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                Texturas Curadas para a Mulher Moderna
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-10 max-w-md">
                Nossa última coleção foca na experiência tátil do tricot premium. 
                Cada peça é um testemunho de nossa herança artesanal, desenhada para 
                elevar o cotidiano com sofisticação sem esforço.
              </p>
              <button className="text-charcoal text-sm uppercase tracking-widest font-semibold border-b border-charcoal pb-2 hover:text-taupe hover:border-taupe transition-all">
                Ver Editorial
              </button>
            </motion.div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="aspect-[3/4] overflow-hidden"
              >
                <img 
                  src="https://picsum.photos/seed/detail1/800/1200" 
                  alt="Detalhe 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="aspect-[3/4] overflow-hidden mt-12"
              >
                <img 
                  src="https://picsum.photos/seed/detail2/800/1200" 
                  alt="Detalhe 2" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductGrid = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif">Lançamentos</h2>
            <p className="text-taupe mt-2 uppercase tracking-widest text-xs font-medium">Compre as últimas peças</p>
          </div>
          <div className="flex space-x-8 text-xs uppercase tracking-widest font-medium">
            <button className="text-charcoal border-b border-charcoal pb-1">Tudo</button>
            <button className="text-charcoal/40 hover:text-charcoal transition-colors">Tricot</button>
            <button className="text-charcoal/40 hover:text-charcoal transition-colors">Alfaiataria</button>
            <button className="text-charcoal/40 hover:text-charcoal transition-colors">Acessórios</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-bone">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-bone text-charcoal px-6 py-3 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 font-semibold">
                  Adicionar
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-taupe font-bold">{product.category}</p>
                <h4 className="text-lg font-serif group-hover:text-taupe transition-colors">{product.name}</h4>
                <p className="text-sm font-light">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="border border-charcoal px-12 py-4 text-xs uppercase tracking-widest hover:bg-charcoal hover:text-bone transition-all duration-500">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

const HeritageSection = () => {
  return (
    <section className="py-24 bg-charcoal text-bone overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://picsum.photos/seed/heritage/1200/800" 
              alt="Legado" 
              className="w-full aspect-[4/3] object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <span className="text-taupe text-xs uppercase tracking-[0.3em] font-semibold">Nosso Legado</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight italic">
              Criando Elegância Desde 1984
            </h2>
            <p className="text-bone/60 leading-relaxed font-light">
              Fundada no coração do Brasil, a Malhas Irma começou com uma única máquina de tricô 
              e a visão de redefinir o tricot de luxo. Hoje, continuamos a misturar técnicas 
              tradicionais com design contemporâneo, garantindo que cada ponto conte uma 
              história de qualidade e paixão.
            </p>
            <div className="pt-4">
              <button className="inline-flex items-center space-x-4 text-sm uppercase tracking-widest border-b border-bone/30 pb-2 hover:border-bone transition-all">
                <span>Descubra Nossa História</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bone pt-24 pb-12 px-6 md:px-12 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif mb-8 tracking-tighter font-bold">MALHAS IRMA</h3>
            <p className="text-sm text-charcoal/60 leading-relaxed mb-8">
              Elevando a arte do tricot através de design atemporal e artesanato excepcional.
            </p>
            <div className="flex space-x-6">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-taupe transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-taupe transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-taupe transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Loja</h4>
            <ul className="space-y-4 text-sm text-charcoal/60 font-light">
              <li className="hover:text-charcoal cursor-pointer transition-colors">Lançamentos</li>
              <li className="hover:text-charcoal cursor-pointer transition-colors">Coleções</li>
              <li className="hover:text-charcoal cursor-pointer transition-colors">Mais Vendidos</li>
              <li className="hover:text-charcoal cursor-pointer transition-colors">Sale</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Empresa</h4>
            <ul className="space-y-4 text-sm text-charcoal/60 font-light">
              <li className="hover:text-charcoal cursor-pointer transition-colors">Nossa História</li>
              <li className="hover:text-charcoal cursor-pointer transition-colors">Sustentabilidade</li>
              <li className="hover:text-charcoal cursor-pointer transition-colors">Carreiras</li>
              <li className="hover:text-charcoal cursor-pointer transition-colors">Imprensa</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Newsletter</h4>
            <p className="text-sm text-charcoal/60 mb-6 font-light">
              Assine nossa lista para prévias exclusivas e conteúdo editorial.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Endereço de E-mail" 
                className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm focus:outline-none focus:border-charcoal transition-colors"
              />
              <button className="absolute right-0 bottom-3 text-xs uppercase tracking-widest font-bold">
                Assinar
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-charcoal/5 space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest text-charcoal/40">
            © 2024 Malhas Irma. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-charcoal/40">
            <span className="hover:text-charcoal cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-charcoal cursor-pointer transition-colors">Termos de Serviço</span>
            <span className="hover:text-charcoal cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-taupe selection:text-bone">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
        <ProductGrid />
        <HeritageSection />
      </main>
      <Footer />
    </div>
  );
}
