import S from "@sanity/desk-tool/structure-builder";
import { MdComputer } from "react-icons/md";
const allContent = () =>
  S.listItem()
    .title("ALL CONTENT")
    .icon(MdComputer)
    .child(S.list().title("ALL CONTENT").items(S.documentTypeListItems()));
export default allContent;
