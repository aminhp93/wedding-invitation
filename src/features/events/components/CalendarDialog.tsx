import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface CalendarDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  event: {
    title: string
    time: string
    date: string
    address: string
  } | null
}

export function CalendarDialog({ open, onOpenChange, event }: CalendarDialogProps) {
  if (!event) return null

  const generateGoogleCalendarLink = () => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE"
    const text = encodeURIComponent(event.title)
    const location = encodeURIComponent(event.address)
    
    // Parse date 21 | 02 | 2026 -> 20260221
    const dateParts = event.date.split('|').map(p => p.trim())
    const day = dateParts[0]
    const month = dateParts[1]
    const year = dateParts[2]
    
    // Parse time 10:00 AM -> 100000 or 220000
    // Simplified for demo: assuming it's 2026MMDD
    const dateStr = `${year}${month}${day}`
    
    // Default 1 hour event
    const startTime = "080000"
    const endTime = "120000"
    
    const dates = `${dateStr}T${startTime}/${dateStr}T${endTime}`
    
    return `${baseUrl}&text=${text}&dates=${dates}&location=${location}`
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white border-none shadow-2xl p-0 overflow-hidden">
        <DialogHeader className="pt-12 pb-6 px-6 bg-stone-50 flex flex-col items-center">
            <DialogTitle className="text-4xl md:text-5xl font-serif italic text-stone-800 text-center">
                Sự kiện
            </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 bg-white space-y-4 text-center">
            <p className="text-stone-600 font-light italic mb-4">Thêm sự kiện "{event.title}" vào lịch của bạn.</p>
            
            <button 
                className="w-full flex items-center justify-center gap-4 p-4 hover:bg-stone-50 transition-colors border border-stone-100 rounded-lg text-left"
                onClick={() => {
                    const link = generateGoogleCalendarLink()
                    window.open(link, '_blank')
                    onOpenChange(false)
                }}
            >
                <Calendar size={24} className="text-blue-500" />
                <span className="text-stone-800 font-medium tracking-wide">Google Calendar</span>
            </button>
            
            <div className="pt-4">
                <Button 
                    variant="ghost"
                    onClick={() => onOpenChange(false)}
                    className="w-full text-stone-400 hover:text-stone-600 uppercase tracking-widest text-xs font-bold"
                >
                    Đóng
                </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
