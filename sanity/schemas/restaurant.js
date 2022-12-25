export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_desc",
      type: "string",
      title: "Short desc",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Lat of the restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "longitude of the restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Endereço",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Avaliação do restaurante",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Valor entre 1 e 5"),
    },
    {
      name: "type",
      title: "Categoria",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Pratos",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
