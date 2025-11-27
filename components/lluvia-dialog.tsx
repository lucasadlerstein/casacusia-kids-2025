'use client'

import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export function RainNoticeDialog() {
  const [open, setOpen] = React.useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            🌧️✨ Casacusia Kids se reprograma por lluvia
          </DialogTitle>
          <DialogDescription className="space-y-3 text-left text-base">
            <p>
              Para cuidar la experiencia de los chicos y de las familias, y
              viendo el pronóstico de estos días, decidimos reprogramar
              Casacusia Kids.
            </p>
            <p>
              <strong>📅 Nueva fecha:</strong> domingo 14 de diciembre
              <br />
              <strong>🕑 Horario:</strong> de 14 a 18 h
              <br />
              <strong>📍 Lugar:</strong> Parque de la Innovación (CABA)
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}