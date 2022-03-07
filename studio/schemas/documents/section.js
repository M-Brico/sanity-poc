import { MdLink} from "react-icons/md";

export default {
  name: "section",
  type: "document",
  title: "Section",
  icon: MdLink,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "section",
      type: "reference",
      description: "Select the parent section.",
      to: [
        {
          type: "section",
        },
      ],
    },
    {
      name: "page",
      type: "reference",
      description: "Select the landing page for this section.",
      to: [
        {
          type: "page",
        },
      ],
    },
  ],
};
