export default function FeaturesComp() {

    const featuresArray = [
        { title: "Organização", desc: "Tenha todos os seus produtos listados de forma prática." },
        { title: "Monitoramento", desc: "Acompanhe a quantidade de itens em estoque em tempo real." },
        { title: "Filtros e busca", desc: "Encontre qualquer item facilmente com busca inteligente." },
    ]
    return (
        <section className="bg-white pb-6">
            <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-x-8 gap-y-5">
                {featuresArray.map((featureItem, index) => (
                    <div key={index} className="p-6 rounded-xl shadow bg-gray-50 border border-[#2F80ED]">
                        <h3 className="text-xl font-semibold mb-2">{featureItem.title}</h3>
                        <p className="text-gray-600">{featureItem.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}