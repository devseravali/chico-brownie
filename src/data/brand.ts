// ⚠️ EDITE: confirme estes dados nos canais oficiais antes de publicar.
export const brand = {
  name: 'Chico Brownie',
  founded: 2015,
  instagram: 'https://www.instagram.com/chicobrownie/',
  whatsappNumber: '5511962933305',
  whatsappMessage: 'Olá, Chico Brownie! Gostaria de fazer um pedido.',
  orderChannels: [
    {
      label: 'Pedir pelo iFood',
      url: 'https://www.ifood.com.br/delivery/sao-paulo-sp/chico-brownie---brownies-e-doces-vegan-santa-teresinha/f0b0ce61-05ee-4323-8282-ba68003a12de',
    },
  ],
  orderInfo: 'Atendimento e encomendas pelo WhatsApp.', // TODO: prazos, retirada e entrega reais
};
export const waLink = (text = brand.whatsappMessage) =>
  `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(text)}`;
