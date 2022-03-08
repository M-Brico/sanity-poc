export default {
  name: "researcher",
  title: "Researcher",
  type: "document",
  fields: [
    {
      name: "section",
      title: "Section",
      type: "reference",
      to: [{ type: "section" }],
      description:
        "Where in the site will this be? Which section does this belong in?",
    },
    {
      name: "profilePicture",
      title: "Profile Picture",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "researchProject",
      title: "Research Project",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "website",
      title: "Website",
      type: "url",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "researchAreas",
      title: "Research Areas",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Drug discovery", value: "drug-discovery" },
          { title: "Cancer biology", value: "cancer-biology" },
          { title: "Immunology", value: "immunology" },
          { title: "Immunotherapy", value: "immunotherapy" },
          { title: "Clinical trials", value: "clinical-trials" },
          { title: "Cancer prevention", value: "cancer-prevention" },
          { title: "Imaging research", value: "imaging-research" },
        ],
      },
    },
  ],
};
