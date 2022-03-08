// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import mainSite from "./desks/mainSite";
import raceForLife from "./desks/raceForLife";
import standUpToCancer from "./desks/standUpToCancer";
import allContent from "./desks/allContent";
export default () =>
  S.list()
    .title("Websites")
    .items([mainSite(), raceForLife(), standUpToCancer(), allContent()]);
