
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Grilo Signal Lab</h1>
          <Button className="bg-orange-600 hover:bg-orange-700">Ative o modo Grilo</Button>
        </div>
      </header>

      <section className="bg-white text-center py-24 px-6">
        <h2 className="text-4xl font-extrabold mb-4">Transformamos sinais em estratégia</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Insights de negócio e foresight para empresas que não esperam o futuro acontecer.
        </p>
      </section>

      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">Sobre o Grilo</h3>
          <p className="text-gray-800 mb-4">
            O Grilo nasceu para captar o que a maioria não ouve. Um laboratório que transforma dados,
            comportamento e contexto em oportunidades reais para produtos, negócios e decisões estratégicas.
          </p>
          <ul className="text-gray-700 list-disc list-inside">
            <li><strong>Missão:</strong> Ajudar empresas a enxergar antes. E agir com inteligência.</li>
            <li><strong>Visão:</strong> Ser o laboratório mais influente de foresight aplicado à estratégia e inovação no Brasil.</li>
            <li><strong>Valores:</strong> Clareza, Curiosidade, Ética, Impacto, Inteligência.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">O que fazemos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Coolhunting e Foresight</h4>
                <p>Identificamos tendências, sinais e oportunidades emergentes com precisão.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Reposicionamento de Produtos</h4>
                <p>Unimos dados, comportamento e estratégia para criar soluções relevantes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Inteligência de Mercado</h4>
                <p>Mapas de oportunidade e insights sob medida para seu contexto.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Projetos sob Demanda</h4>
                <p>Análises personalizadas para perguntas que ninguém está fazendo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Vamos conversar?</h3>
          <p className="text-gray-800 mb-6">Toda mudança começa com uma escuta atenta.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Nome" className="w-full p-3 border rounded" />
            <input type="email" placeholder="E-mail" className="w-full p-3 border rounded" />
            <textarea placeholder="Mensagem" rows={4} className="w-full p-3 border rounded" />
            <Button className="bg-orange-600 hover:bg-orange-700">Enviar mensagem</Button>
          </form>
        </div>
      </section>

      <footer className="bg-blue-600 text-white text-center py-6">
        <p className="mb-2">christianelopesdemoraes@gmail.com | São Paulo - SP</p>
        <p className="text-sm">Modo Grilo ativado.</p>
      </footer>
    </div>
  );
}
