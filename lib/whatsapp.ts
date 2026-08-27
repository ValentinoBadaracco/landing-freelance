
const WHATSAPP_NUMBER = "5493435037024" 

type MessageType = "landing" | "catalogo" | "consulta" | "otro"

const messages: Record<MessageType, string> = {
  landing: "Hola! Quiero consultar sobre una landing page para mi negocio.",
  catalogo: "Hola! Quiero consultar sobre un catálogo web para mi negocio.",
  consulta: "Hola! Quiero hacer una consulta sobre sus servicios.",
  otro: "Hola! Necesito un sistema web diferente.",
}

export function getWhatsappLink(type: MessageType): string {
  const encodedMessage = encodeURIComponent(messages[type])
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}