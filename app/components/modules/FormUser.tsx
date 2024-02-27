"use client"

import { useState, useContext } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Send, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from 'date-fns';
import SuccessAnimation from '@/components/widgets/SuccessAnimation';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { userFormSchema, ProfileFormValues } from "@/schema/userform.schema"
import { AppContext } from "@/contexts/AppContext";

const defaultValues: Partial<ProfileFormValues> = {}

export function FormUser() {
  const { selectedDate, selectedTime, resetForm } = useContext(AppContext);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const finishSchedule = async () => {
    setTimeout(() => {
      setShowAnimation(false)
      resetForm()
    }, 5000)
  }

  const onSubmit = async (data: ProfileFormValues) => {
    toast(`Hi ${data.name}, your appointment was made successfully.`, {
      description: `Check your email ${data.email} and get the link`
    })
    setShowAnimation(true)
    await finishSchedule()
  }

  return (
    <>
      <div className="flex justify-between mb-5 ml-2">
        <h3 className="text-xl font-bold text-left">Enter Details</h3>
        {selectedDate && <small className="flex items-center gap-1"><Calendar size={16} /> {format(selectedDate, 'EEEE, dd MMMM')}</small>}
        {selectedTime && <small className="flex items-center gap-1"><Clock size={16} /> {selectedTime}</small>}
      </div>
      <div className="md:flex space-y-10 md:space-y-0 relative">
        {showAnimation ? 
          <div className="flex flex-col items-center justify-center w-full h-full m-auto">
            <SuccessAnimation />
            <p>Check your email and get the generated link</p>
          </div> : 
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <Input placeholder="Enter your best email" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please share anything that will help prepare for our meeting.</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="You can @mention other users and organizations to link to them."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      By proceeding, you confirm that you have read and agree to <span className="text-blue-500">Courtly</span> Terms of Use and Privacy Notice.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                variant="success" 
                type="submit"
                disabled={!form.formState.isValid}
                className="gap-3 flex"
              >
                <Send size={16} />
                Schedule Event
              </Button>
            </form>
          </Form>
        }
      </div>
    </>
  )
}