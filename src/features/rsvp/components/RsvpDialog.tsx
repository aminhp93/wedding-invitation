import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

import { supabase } from "@/lib/supabase"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Vui lòng nhập tên của bạn"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  partySize: z.string().min(1, "Vui lòng chọn số người đi cùng"),
})

interface RsvpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  eventType?: string
  eventDateLabel?: string
}

export function RsvpDialog({ 
  open, 
  onOpenChange, 
  eventType = "wedding", 
  eventDateLabel = "Tiệc rượu chung vui — 11h00, 07/03/2026" 
}: RsvpDialogProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      partySize: "1",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const { error } = await supabase
        .from('rsvp')
        .insert([
          { 
            name: values.name, 
            phone: values.phone, 
            party_size: values.partySize,
            event_type: eventType
          }
        ])

      if (error) throw error

      alert("Cảm ơn bạn đã xác nhận tham dự!")
      form.reset()
      onOpenChange(false)
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      alert("Đã có lỗi xảy ra. Vui lòng thử lại sau!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#FCF9F6] border-none shadow-2xl p-0 overflow-hidden">
        <DialogHeader className="pt-12 pb-6 px-6 bg-white flex flex-col items-center">
          <DialogTitle className="text-4xl md:text-5xl font-serif italic text-[#A03D1A] text-center mb-2">
            Xác nhận tham dự
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-8 bg-white">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-stone-500 font-light text-xs uppercase tracking-widest pl-2">Tên của bạn *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Nhập tên của bạn" 
                        className="bg-stone-50 border-stone-100 rounded-none h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-stone-500 font-light text-xs uppercase tracking-widest pl-2">Số điện thoại của bạn *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Nhập số điện thoại" 
                        className="bg-stone-50 border-stone-100 rounded-none h-12" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4 pt-2 pb-4">
                  <p className="text-stone-600 font-medium text-sm text-center">Sự kiện bạn sẽ tham gia</p>
                  <p className="text-[#A03D1A] font-serif italic text-center text-sm md:text-base">{eventDateLabel}</p>
              </div>

              <FormField
                control={form.control}
                name="partySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-stone-500 font-light text-xs uppercase tracking-widest pl-2">Bạn đi cùng ai?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-stone-50 border-stone-100 rounded-none h-12 text-stone-600">
                          <SelectValue placeholder="Chọn số lượng" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        <SelectItem value="1">Đi một mình</SelectItem>
                        <SelectItem value="2">Đi 2 người</SelectItem>
                        <SelectItem value="3">Đi cùng gia đình</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4 pt-6">
                <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => onOpenChange(false)}
                    className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-none py-6 h-auto uppercase tracking-widest text-xs"
                >
                    Đóng
                </Button>
                <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#A03D1A] hover:bg-[#8B3516] text-white rounded-none py-6 h-auto uppercase tracking-widest text-xs shadow-lg"
                >
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Xác nhận
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
