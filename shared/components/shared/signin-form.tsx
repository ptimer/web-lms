"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { 
  Button, 
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/components"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex flex-col w-full max-w-648">
        <h1 className="typo-heading-02 text-gray-900 text-center mb-10">Sign in to your account</h1>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-32">
              <div className="grid gap-18">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Email address" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                />
                <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Create password" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                  />
              </div>
              <Button type="submit">Sign In</Button>
            </form>
          </Form>
        </div>
    </div>
  )
}
