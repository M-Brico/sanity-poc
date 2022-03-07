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
const standUpToCancer = () =>
  S.listItem()
    .title("Standup to Cancer")
    .icon(MdComputer)
    .child(
      S.list()
        .title("Standup to Cancer")
        .items([
          S.listItem()
            .title("Homepage")
            .icon(MdHomeFilled)
            .child(S.document().schemaType("homepage").documentId("homepage")),
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
export default standUpToCancer;
