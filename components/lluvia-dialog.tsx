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
            ✨ Casacusia Kids 2026
          </DialogTitle>
          <DialogDescription className="space-y-3 text-left text-base">
            <p>
              Tu entrada del 2025 no es válida, debes sacar una nueva en esta web.
            </p>
            <p>
              <strong>📅 Nueva fecha:</strong> Sábado 28 de marzo de 2026
              <strong>Gracias</strong> por el apoyo y nos vemos pronto!!
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}