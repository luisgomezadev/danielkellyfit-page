export interface Strategy {
    title: string;
    duration: string;
    priceCop: string;
    priceUsdEur: string;
    savingsText?: string;
    isPopular?: boolean;
    whatsappPlanName: string;
    features: string[];
}

export const strategies = [
    {
        title: "ESTRATEGIA PREMIUM ONLINE",
        duration: "4 semanas",
        priceCop: "$259.000",
        priceUsdEur: "$82 USD  ·  €71 EUR",
        whatsappPlanName: "ESTRATEGIA PREMIUM ONLINE (4 semanas)",
        features: [
            "Plan de entrenamiento",
            "Plan de alimentación",
            "Guía en suplementación",
            "Estructurado para tu nivel y necesidad",
            "Actualización cada 2 semanas",
        ],
    },
    {
        title: "ESTRATEGIA PERSEVERANTE ONLINE",
        duration: "12 semanas",
        priceCop: "$668.000",
        priceUsdEur: "$212 USD  ·  €183 EUR",
        savingsText: "Ahorras $100.000 COP vs. pagar mes a mes",
        isPopular: true,
        whatsappPlanName: "ESTRATEGIA PERSEVERANTE ONLINE (12 semanas)",
        features: [
            "Plan de entrenamiento",
            "Plan de alimentación",
            "Guía en suplementación",
            "Estructurado para tu nivel y necesidad",
            "Actualización cada 2 semanas",
            "1 videollamada semanal de seguimiento",
            "1 videollamada semanal entrenando en vivo",
            "Progresión estructural de 12 semanas (1 trimestre)",
        ],
    },
    {
        title: "ESTRATEGIA 1-1 PRESENCIAL",
        duration: "4 semanas",
        priceCop: "$349.000",
        priceUsdEur: "$110 USD  ·  €95 EUR",
        whatsappPlanName: "ESTRATEGIA 1-1 PRESENCIAL (4 semanas)",
        features: [
            "Entrenamiento presencial en el gimnasio",
            "Me tendrás frente a frente guiando tu entrenamiento",
            "Plan de entrenamiento",
            "Plan de alimentación",
            "Guía en suplementación",
            "Estructurado para tu nivel y necesidad",
            "Actualización cada 2 semanas",
        ],
    },
] as Strategy[];