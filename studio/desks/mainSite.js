import S from "@sanity/desk-tool/structure-builder";
import {
  MdComputer,
  MdContentCopy,
  MdDashboard,
  MdDock,
  MdEdit,
  MdHomeFilled,
  MdList,
  MdStorage,
  MdMenu,
  MdMenuOpen,
  MdTune,
  MdPerson,
  MdSettings,
} from "react-icons/md";
const mainSite = () =>
  S.listItem()
    .title("Main site")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Main site")
        .items([
          S.listItem()
            .title("Navigation")
            .icon(MdMenu)
            .child(
              S.documentList()
                .title("Navigation sections")
                .filter('_type == "section"')
            ),
          S.listItem()
            .title("Homepage")
            .icon(MdHomeFilled)
            .child(S.document().schemaType("homepage").documentId("homepage")),
          S.listItem()
            .title("Content")
            .icon(MdMenuOpen)
            .child(
              S.documentList()
                .schemaType("section")
                .title("Main site sections")
                .showIcons(false)
                .filter('_type == "section"')
                .child((sectionId) =>
                  S.documentList()
                    .title("Pages")
                    .filter(
                      '(_type == "page" && $sectionId == section._ref) || (_type == "section" && $sectionId == section._id)'
                    )
                    .params({ sectionId })
                )
            ),
          S.listItem()
            .title("All Content")
            .icon(MdContentCopy)
            .child(
              S.documentList()
                .title("All mainsite pages")
                .filter('(_type == "page")')
            ),

          S.divider(),
          S.listItem()
            .title("Settings")
            .icon(MdSettings)
            .child(
              S.list()
                .title("Settings Documents")
                .items([
                  S.listItem()
                    .title("Metadata")
                    .child(
                      S.document()
                        .schemaType("siteSettings")
                        .documentId("siteSettings")
                    ),
                  S.listItem()
                    .title("Site Colors")
                    .child(
                      S.document().schemaType("colours").documentId("colours")
                    ),
                ])
            ),
        ])
    );
export default mainSite;
