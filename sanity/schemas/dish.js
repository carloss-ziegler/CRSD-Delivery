export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nome do prato",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_desc",
      type: "string",
      title: "Descrição do prato",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Valor do prato",
    },
    {
      name: "image",
      type: "image",
      title: "Imagem do prato",
    },
  ],
};
