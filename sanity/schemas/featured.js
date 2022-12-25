export default {
  name: "featured",
  type: "document",
  title: "Categorias em destaque",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Categorias em destaque",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_desc",
      type: "string",
      title: "Descrição curta",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
