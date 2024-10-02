'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, BookOpen, Users, ArrowRight } from 'lucide-react'

export default function ModernGreenEduPlatform() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden py-24 sm:py-32"
      >
        
        <div className="absolute inset-0 bg-[url('/abstract-green-pattern.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >

              <h1 className="text-4xl font-bold flex items-center tracking-tight text-green-600 sm:text-6xl">
              <img 
                src="./logo.png" 
                alt="logo aprova" 
                className='w-24 h-26 '/>
              Aprova UFC
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Cursinho popular dedicado ao ENEM e busca atender a comunidade Russana com aulas realizadas pelos alunos da Universidade Federal do Ceará - Campus Russas.
              </p>
              
              <div className="mt-10 flex items-center gap-x-6">
                {/*<Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
                  Inscreva-se Agora
                </Button>*/}
                <Button 
                variant="link" 
                className="text-green-600 hover:text-green-700 flex items-center" 
                onClick={() => window.open( "https://www.instagram.com/aprovaufc/", "_blank")}
                //formTarget='_blank'
                >
                  Conheça nosso Instagram <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              
              <div className="w-72 h-[600px] bg-gray-800 rounded-[60px] border-[14px] border-gray-800 shadow-xl">
                <div className="w-full h-full bg-white rounded-[48px] overflow-hidden">
                  <div className="w-40 h-6 bg-gray-800 rounded-b-3xl mx-auto"></div>
                  <div className="p-6 space-y-6">
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-green-600 pointer-events-none">Questão 1</div>
                      <div className="text-sm text-gray-600 pointer-events-none">Qual é o principal benefício da energia solar?</div>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-green-50 rounded-lg text-sm text-gray-700 pointer-events-none">A. Baixo custo de instalação</div>
                      <div className="p-2 bg-green-50 rounded-lg text-sm text-gray-700 pointer-events-none">B. Fonte de energia renovável</div>
                      <div className="p-2 bg-green-50 rounded-lg text-sm text-gray-700 pointer-events-none">C. Funcionamento noturno</div>
                      <div className="p-2 bg-green-50 rounded-lg text-sm text-gray-700 pointer-events-none">D. Alta eficiência em dias nublados</div>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white ">Próxima Questão</Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="py-24 sm:py-32 pointer-events-none">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Evolua sua Nota</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Descubra como o Aprova UFC pode transformar seu aprendizado.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  icon: <Users className="h-8 w-8 text-green-600" />,
                  title: "Alunos Professores",
                  description: "As aulas serão todas adminstradas pelos próprios alunos da UFC"
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-green-600" />,
                  title: "Redação",
                  description: "Adquira seu melhor desempenho com aulas voltadas a escrever redações, como adquirir suas referências e como usar os textos motivadores adequedamente."
                },
                {
                  icon: <Leaf className="h-8 w-8 text-green-600" />,
                  title: "Inscrição Gratuita",
                  description: "Não será necessario pagar taxa de inscrição, todo o curso será totalmente gratuito."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                >
                  <Card className="h-full border-green-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex flex-col h-full p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold leading-7 text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-base leading-7 text-gray-600 flex-grow">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </main>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="py-24 sm:py-32 bg-green-50"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pronto para ter o melhor Desempenho no ENEM</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Junte-se a nós nesta jornada com o Aprova UFC e eleve seu aprendizado a novos patamares de excelência e responsabilidade.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" onClick={()=> window.open('https://aprovaufc.vercel.app/', '_blank')}>
                Realize sua inscrição
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

   
    </div>
  )
}
