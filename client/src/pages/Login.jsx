import { AppWindowIcon, CodeIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const Login= ()=> {
  const [signupInput, setSignupInput] = useState({name:"", email:"", password:""});
  const [loginInput, setLoginInput] = useState({email:"", password:""});
 
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
               Create a new account and click signup when you're done
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input  type="text" placeholder="eg.rahul" required="true"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Email</Label>
                <Input  type="email" placeholder="eg.rahul"  required="true"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">password</Label>
                <Input  type="password" placeholder="eg.@123"  required="true"/>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here.After signup, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="new">Email</Label>
                <Input  type="email" placeholder="Eg.rahul@gmail.com" required="true" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="new"> Password</Label>
                <Input type="password" placeholder="Eg. xyz" required="true"/>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  )
}

export default Login;
