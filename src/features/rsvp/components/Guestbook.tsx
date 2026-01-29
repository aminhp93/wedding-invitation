import * as React from "react"
import { supabase } from "@/lib/supabase"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, "Vui lòng nhập tên của bạn"),
  message: z.string().min(1, "Vui lòng nhập lời chúc"),
})

export function Guestbook() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const { error } = await supabase
        .from('guestbook')
        .insert([
          { 
            name: values.name, 
            message: values.message
          }
        ])

      if (error) throw error

      alert("Cảm ơn bạn đã gửi lời chúc!")
      form.reset()
    } catch (error) {
      console.error('Error submitting guestbook:', error)
      alert("Đã có lỗi xảy ra. Vui lòng thử lại sau!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="guestbook" className="py-32 bg-white relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 max-w-2xl text-center"
      >
        <h2 className="text-5xl md:text-7xl font-serif mb-12 text-[#8B4513] italic">Sổ lưu bút</h2>
        
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                            placeholder="Tên của bạn (tối đa 160 ký tự) *" 
                            className="bg-transparent border-stone-400 rounded-none h-14 placeholder:text-stone-400 placeholder:italic text-center"
                            {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                            <Textarea 
                                placeholder="Nhập lời chúc của bạn (tối đa 3000 ký tự) *" 
                                className="bg-transparent border-stone-400 rounded-none min-h-[160px] placeholder:text-stone-400 placeholder:italic p-6 text-center"
                                {...field} 
                            />
                            {/* Simple emoji/icon indicators from UI */}
                            <div className="absolute bottom-4 right-4 flex gap-2 text-stone-300">
                                <span className="w-4 h-4 rounded-full border border-current"></span>
                                <span className="w-4 h-4 rounded-full border border-current"></span>
                            </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center pt-8">
                    <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-[#A03D1A] hover:bg-[#8B3516] text-white px-16 py-8 rounded-full text-xl uppercase tracking-widest shadow-lg"
                    >
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        GỬI LỜI CHÚC
                    </Button>
                </div>
            </form>
        </Form>

        <div className="mt-20 border-t border-stone-800 pt-12 text-left italic">
            <h4 className="font-bold text-stone-900 not-italic mb-2">Huy Thanh Jewelry</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
                Huy Thanh rất vui khi được đồng hành cùng hai bạn trong chặng đường hạnh phúc. Dù sông có đối núi có dời, chúc hai bạn vẫn một đời thương nhau &lt;3
            </p>
            <div className="mt-8 border-t border-dotted border-stone-300"></div>
        </div>
      </motion.div>
    </section>
  )
}
