import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, MapPin, Phone, Trophy } from "lucide-react"
import FeedbackForm from "@/components/feedback-form"
import WhatsAppButton from "@/components/whatsapp-button"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Team JJ Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Team JJ</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#sobre" className="text-sm font-medium hover:underline underline-offset-4">
              Sobre
            </Link>
            <Link href="#historia" className="text-sm font-medium hover:underline underline-offset-4">
              História
            </Link>
            <Link href="#aulas" className="text-sm font-medium hover:underline underline-offset-4">
              Aulas
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:underline underline-offset-4">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:underline underline-offset-4">
              Contato
            </Link>
          </nav>
          <WhatsAppButton className="hidden md:flex" />
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="relative h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1600')" }}
          >
            <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
              <Badge className="mb-4 bg-red-600 hover:bg-red-700">Jiu Jitsu Brasileiro</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Transforme sua vida através do Jiu Jitsu
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-gray-200">
                Aprenda com um professor experiente e dedicado. Aulas para todos os níveis, do iniciante ao avançado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Agende uma Aula Experimental
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Conheça Nossa Academia
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Professor */}
        <section id="sobre" className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Professor de Jiu Jitsu"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Professor Mestre</h2>
                <p className="text-gray-700 mb-4">
                  Faixa preta 3º grau com mais de 15 anos de experiência no ensino de Jiu Jitsu. Formado pela renomada
                  escola brasileira, com passagens por academias internacionais e diversos títulos em competições
                  nacionais e mundiais.
                </p>
                <p className="text-gray-700 mb-6">
                  Minha filosofia de ensino combina técnica tradicional com abordagens modernas, adaptadas para cada
                  aluno. Acredito que o Jiu Jitsu vai além do tatame - é uma ferramenta de transformação pessoal.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-red-600" />
                    <span>Campeão Brasileiro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-red-600" />
                    <span>Medalha Mundial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                    <span>Certificação CBJJ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                    <span>Formação Pedagógica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* História do Professor */}
        <section id="historia" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Minha Jornada no Jiu Jitsu</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Badge className="bg-red-600">2005</Badge>
                  <h3 className="ml-4 text-xl font-semibold">O Início da Jornada</h3>
                </div>
                <p className="text-gray-700">
                  Comecei a treinar Jiu Jitsu aos 15 anos, inspirado por meu tio que era praticante. Desde o primeiro
                  treino, senti uma conexão especial com a arte marcial que mudaria minha vida para sempre.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Badge className="bg-red-600">2010</Badge>
                  <h3 className="ml-4 text-xl font-semibold">Faixa Azul e Primeiras Competições</h3>
                </div>
                <p className="text-gray-700">
                  Após anos de dedicação, conquistei minha faixa azul e comecei a competir em torneios regionais. As
                  vitórias e derrotas moldaram meu caráter e aprimoraram minha técnica.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Badge className="bg-red-600">2015</Badge>
                  <h3 className="ml-4 text-xl font-semibold">Faixa Preta e Início da Docência</h3>
                </div>
                <p className="text-gray-700">
                  Recebi minha faixa preta das mãos do meu mestre e iniciei minha jornada como professor. Descobri minha
                  paixão por ensinar e transmitir não apenas técnicas, mas valores e filosofia do Jiu Jitsu.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Badge className="bg-red-600">2020</Badge>
                  <h3 className="ml-4 text-xl font-semibold">Fundação da Team JJ</h3>
                </div>
                <p className="text-gray-700">
                  Realizei o sonho de fundar minha própria academia. A Team JJ nasceu com a missão de formar não apenas
                  lutadores, mas cidadãos completos através dos ensinamentos do Jiu Jitsu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Aulas */}
        <section id="aulas" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Nossas Aulas</h2>
            <Tabs defaultValue="iniciantes" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="iniciantes">Iniciantes</TabsTrigger>
                <TabsTrigger value="intermediarios">Intermediários</TabsTrigger>
                <TabsTrigger value="avancados">Avançados</TabsTrigger>
              </TabsList>
              <TabsContent value="iniciantes" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Jiu Jitsu para Iniciantes</h3>
                    <p className="text-gray-700 mb-4">
                      Aulas focadas nos fundamentos básicos, posições e movimentos essenciais. Ambiente acolhedor e
                      seguro para quem está começando.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-red-600" />
                        <span>Segunda e Quarta - 19h</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-red-600" />
                        <span>Sábado - 10h</span>
                      </div>
                    </div>
                    <Button className="mt-6 bg-red-600 hover:bg-red-700">Agendar Aula Experimental</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="intermediarios" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Jiu Jitsu Intermediário</h3>
                    <p className="text-gray-700 mb-4">
                      Para praticantes com experiência prévia. Foco em aprimoramento técnico, estratégias de luta e
                      preparação para competições.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-red-600" />
                        <span>Terça e Quinta - 20h</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-red-600" />
                        <span>Sábado - 11h30</span>
                      </div>
                    </div>
                    <Button className="mt-6 bg-red-600 hover:bg-red-700">Agendar Aula</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="avancados" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Jiu Jitsu Avançado</h3>
                    <p className="text-gray-700 mb-4">
                      Treinamento de alto nível para faixas azuis e acima. Técnicas avançadas, drills específicos e
                      sparring intenso.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-red-600" />
                        <span>Segunda a Sexta - 6h</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-red-600" />
                        <span>Terça e Quinta - 21h30</span>
                      </div>
                    </div>
                    <Button className="mt-6 bg-red-600 hover:bg-red-700">Agendar Aula</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-4">Aulas Particulares</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Treinamento personalizado de acordo com seus objetivos específicos. Ideal para quem busca evolução
                acelerada ou preparação para competições.
              </p>
              <WhatsAppButton variant="default" size="lg" className="bg-red-600 hover:bg-red-700" />
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">O Que Dizem Nossos Alunos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                name="Carlos Silva"
                role="Aluno há 3 anos"
                content="O professor tem uma didática incrível. Consegue explicar movimentos complexos de forma simples e acessível. Minha evolução foi surpreendente desde que comecei a treinar aqui."
                rating={5}
              />
              <TestimonialCard
                name="Ana Oliveira"
                role="Aluna há 1 ano"
                content="Nunca imaginei que me adaptaria tão bem ao Jiu Jitsu. O ambiente é acolhedor e respeitoso, principalmente para mulheres. As aulas são desafiadoras e divertidas ao mesmo tempo."
                rating={5}
              />
              <TestimonialCard
                name="Pedro Santos"
                role="Aluno há 2 anos"
                content="As aulas particulares foram um divisor de águas na minha técnica. O professor identifica exatamente o que preciso melhorar e trabalha de forma personalizada. Recomendo muito!"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section id="feedback" className="py-16 bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Deixe Seu Feedback</h2>
              <FeedbackForm />
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-16 bg-gray-900 text-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Localização</h3>
                      <p className="text-gray-300">Av. Principal, 1234 - Centro</p>
                      <p className="text-gray-300">São Paulo, SP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Horário de Funcionamento</h3>
                      <p className="text-gray-300">Segunda a Sexta: 6h às 22h</p>
                      <p className="text-gray-300">Sábado: 9h às 14h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                      <p className="text-gray-300">(11) 99999-9999</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Agende uma Aula Particular</h3>
                  <p className="text-gray-300 mb-4">
                    Entre em contato via WhatsApp para agendar sua aula particular ou tirar dúvidas sobre nossos planos.
                  </p>
                  <WhatsAppButton size="lg" className="bg-green-600 hover:bg-green-700" />
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975893078223!2d-46.65429492528146!3d-23.56507236132402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1715161176121!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Academia"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-red-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Comece Sua Jornada no Jiu Jitsu Hoje</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transforme seu corpo e mente através da arte suave. Primeira aula gratuita!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Agende uma Aula Experimental
              </Button>
              <WhatsAppButton size="lg" variant="default" className="bg-green-600 hover:bg-green-700" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Team JJ Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-white">Team JJ</span>
              </div>
              <p className="mb-4">
                Academia de Jiu Jitsu com foco em desenvolvimento técnico e pessoal. Formando campeões no tatame e na
                vida.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#sobre" className="hover:text-white">
                  Sobre
                </Link>
                <Link href="#historia" className="hover:text-white">
                  História
                </Link>
                <Link href="#aulas" className="hover:text-white">
                  Aulas
                </Link>
                <Link href="#depoimentos" className="hover:text-white">
                  Depoimentos
                </Link>
                <Link href="#contato" className="hover:text-white">
                  Contato
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Horários de Aulas</h3>
              <div className="space-y-2">
                <p>Segunda e Quarta: 19h (Iniciantes)</p>
                <p>Terça e Quinta: 20h (Intermediários)</p>
                <p>Terça e Quinta: 21h30 (Avançados)</p>
                <p>Sábado: 10h (Iniciantes)</p>
                <p>Sábado: 11h30 (Intermediários)</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Team JJ. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
