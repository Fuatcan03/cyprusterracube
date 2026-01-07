"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"

interface Project {
  id: string
  name: string
  imageCount: number
}

function getProjectImages(projectId: string, imageCount: number, projectName: string) {
  const imagePaths: { [key: string]: string[] } = {
    "bedri-artug-cetiner": Array.from(
      { length: 4 },
      (_, i) => `/Prof.-Dr.-Bedri-Artug-Cetiner/Prof.-Dr.-Bedri-Artug-Cetiner${i + 1}.jpeg`,
    ),
    "salahi-atalar": Array.from({ length: 7 }, (_, i) => `/Salahi-Atalar/Salahi-Atalar${i + 1}.jpeg`),
    "terracube-ofis": Array.from({ length: 5 }, (_, i) => `/Terracube-Ofis/Terracube-Ofis${i + 1}.jpeg`),
    "mehmet-ali-tuncbilek": [
      "/Dr. Mehmet Ali Tunçbilek 'e Ait Butik Otel/Dr. Mehmet Ali Tunçbilek 'e Ait Butik Otel-1.jpg",
      "/Dr. Mehmet Ali Tunçbilek 'e Ait Butik Otel/Dr. Mehmet Ali Tunçbilek 'e Ait Butik Otel-2.jpg",
      "/Dr. Mehmet Ali Tunçbilek 'e Ait Butik Otel/Dr. Mehmet Ali Tunçbilek 'e Ait Butik Otel-3.jpg",
      "/Dr. Mehmet Ali Tunçbilek 'e Ait Butik Otel/Dr. Mehmet Ali Tunçbilek 'e Ait Butik Otel-4.jpg",
    ],
    "oyap-akdeniz": [
      "/Oyap Akdeniz Ekolojik Tatil Köyü/Oyap Akdeniz Ekolojik Tatil Köyü-1.jpg",
      "/Oyap Akdeniz Ekolojik Tatil Köyü/Oyap Akdeniz Ekolojik Tatil Köyü-2.jpg",
      "/Oyap Akdeniz Ekolojik Tatil Köyü/Oyap Akdeniz Ekolojik Tatil Köyü-3.jpg",
      "/Oyap Akdeniz Ekolojik Tatil Köyü/Oyap Akdeniz Ekolojik Tatil Köyü-4.jpg",
    ],
  }

  return imagePaths[projectId] || []
}

export function ProjectGallery({ project, lang }: { project: Project; lang: Locale }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const imagePaths = getProjectImages(project.id, project.imageCount, project.name)
  const images = imagePaths.map((path, i) => ({
    src: path,
    alt: `${project.name} - ${lang === "tr" ? "Fotoğraf" : "Photo"} ${i + 1}`,
  }))

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold">{project.name}</h3>

      {/* Mobile: Single image with navigation */}
      <div className="md:hidden">
        <div className="relative h-[400px] rounded-xl overflow-hidden bg-muted">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => setShowLightbox(true)}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-center justify-between">
            <Button size="icon" variant="secondary" onClick={prevImage} className="bg-white/90 hover:bg-white">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <span className="text-white font-semibold">
              {currentIndex + 1} / {images.length}
            </span>
            <Button size="icon" variant="secondary" onClick={nextImage} className="bg-white/90 hover:bg-white">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop: Scrollable grid */}
      <div className="hidden md:block">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-80 rounded-xl overflow-hidden snap-start cursor-pointer hover:ring-2 hover:ring-primary transition-all"
              onClick={() => {
                setCurrentIndex(index)
                setShowLightbox(true)
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setShowLightbox(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-semibold">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}
