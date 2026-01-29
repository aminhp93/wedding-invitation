import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, Apple, Mail, MessageSquare } from "lucide-react"

interface CalendarDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const calendarPlatforms = [
    { name: "Apple", icon: <Apple size={20} />, color: "text-black" },
    { name: "Google", icon: <Calendar size={20} className="text-blue-500" />, color: "text-blue-600" },
    { name: "Outlook.com", icon: <Mail size={20} className="text-sky-500" />, color: "text-sky-600" },
    { name: "Microsoft 365", icon: <Mail size={20} className="text-red-500" />, color: "text-red-600" },
    { name: "Microsoft Teams", icon: <MessageSquare size={20} className="text-indigo-500" />, color: "text-indigo-600" },
]

export function CalendarDialog({ open, onOpenChange }: CalendarDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white border-none shadow-2xl p-0 overflow-hidden">
        <DialogHeader className="pt-12 pb-6 px-6 bg-stone-50 flex flex-col items-center">
            <DialogTitle className="text-4xl md:text-5xl font-serif italic text-stone-800 text-center">
                Sự kiện
            </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 bg-white space-y-2">
            {calendarPlatforms.map((platform) => (
                <button 
                    key={platform.name}
                    className="w-full flex items-center gap-4 p-4 hover:bg-stone-50 transition-colors border-b border-stone-50 last:border-0 text-left"
                    onClick={() => {
                        alert(`Thêm vào ${platform.name} (Demo)`)
                        onOpenChange(false)
                    }}
                >
                    <span className={platform.color}>{platform.icon}</span>
                    <span className="text-stone-600 font-light text-sm tracking-wide">{platform.name}</span>
                </button>
            ))}
            
            <div className="pt-6">
                <Button 
                    variant="destructive"
                    onClick={() => onOpenChange(false)}
                    className="w-full bg-[#FF4B4B] hover:bg-[#E04444] text-white rounded-md py-4 h-auto uppercase tracking-widest text-xs font-bold"
                >
                    Close
                </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
