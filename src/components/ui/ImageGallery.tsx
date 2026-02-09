import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
  projectTitle?: string
}

export function ImageGallery({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  projectTitle,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsZoomed(false)
    setIsLoading(true)
  }, [images.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsZoomed(false)
    setIsLoading(true)
  }, [images.length])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowRight':
          goToNext()
          break
        case 'ArrowLeft':
          goToPrev()
          break
      }
    },
    [isOpen, onClose, goToNext, goToPrev]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  if (images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-industrial-900/95 backdrop-blur-md"
          />

          {/* Content */}
          <div
            className="relative z-10 w-full h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between px-4 py-3 bg-industrial-800/80 border-b border-industrial-600"
            >
              <div className="flex items-center gap-4">
                {projectTitle && (
                  <h3 className="text-white font-mono font-semibold">
                    {projectTitle}
                  </h3>
                )}
                <span className="text-sm text-gray-400 font-mono">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-industrial-700 rounded-lg transition-colors"
                  title={isZoomed ? 'Reducir' : 'Ampliar'}
                >
                  {isZoomed ? (
                    <ZoomOut className="w-5 h-5" />
                  ) : (
                    <ZoomIn className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-colors"
                  title="Cerrar (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Main Image Area */}
            <div className="flex-1 relative flex items-center justify-center px-4 py-6 overflow-hidden">
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={goToPrev}
                    className="absolute left-4 z-20 p-3 bg-industrial-800/80 hover:bg-accent-emerald/20 border border-industrial-600 hover:border-accent-emerald/50 rounded-full text-gray-300 hover:text-accent-emerald transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={goToNext}
                    className="absolute right-4 z-20 p-3 bg-industrial-800/80 hover:bg-accent-emerald/20 border border-industrial-600 hover:border-accent-emerald/50 rounded-full text-gray-300 hover:text-accent-emerald transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'relative max-w-full max-h-full transition-transform duration-300',
                    isZoomed ? 'cursor-zoom-out scale-150' : 'cursor-zoom-in'
                  )}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-accent-emerald border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    onLoad={() => setIsLoading(false)}
                    className={cn(
                      'max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl border border-industrial-600',
                      isLoading && 'opacity-0'
                    )}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Caption */}
              {currentImage.caption && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-industrial-800/90 border border-industrial-600 rounded-lg"
                >
                  <p className="text-sm text-gray-300 font-mono">
                    {currentImage.caption}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="px-4 py-3 bg-industrial-800/80 border-t border-industrial-600"
              >
                <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1">
                  {images.map((image, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setCurrentIndex(index)
                        setIsZoomed(false)
                        setIsLoading(true)
                      }}
                      className={cn(
                        'relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all',
                        currentIndex === index
                          ? 'border-accent-emerald shadow-lg shadow-accent-emerald/20'
                          : 'border-industrial-600 hover:border-gray-500 opacity-60 hover:opacity-100'
                      )}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      {currentIndex === index && (
                        <motion.div
                          layoutId="thumbnail-indicator"
                          className="absolute inset-0 bg-accent-emerald/10"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Keyboard hints */}
            <div className="absolute bottom-24 left-4 hidden md:flex items-center gap-4 text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-industrial-700 rounded">←</kbd>
                <kbd className="px-1.5 py-0.5 bg-industrial-700 rounded">→</kbd>
                navegar
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-industrial-700 rounded">ESC</kbd>
                cerrar
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
