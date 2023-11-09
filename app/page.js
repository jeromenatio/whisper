"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"



export default function Home() {
  const [files, setFiles] = useState();

  const onSubmit = (e)=>{
    e.preventDefault();
    if(files.length && files.length > 0){
      console.log(files);
    }
  }
  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Mes fichiers</CardTitle>
                  <CardDescription className="text-xs">Gérer mes fichiers</CardDescription>                  
                    <form onSubmit={onSubmit}>
                      <div className="flex w-full max-w-sm items-center space-x-2">
                          <Input type="file" placeholder="Choisir fichier(s)" multiple className="text-xs h-8 py-1 px-2"  onChange={(e)=>{e.target.files && setFiles(e.target.files)}}/>
                          <Button type="submit" className="text-xs h-8 py-1 px-2">Envoyer</Button>
                      </div>
                    </form>
                </CardHeader>
                <CardContent>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
