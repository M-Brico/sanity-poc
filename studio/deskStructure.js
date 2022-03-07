// deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import mainSite from "./desks/mainSite";
import raceForLife from "./desks/raceForLife";
import standUpToCancer from "./desks/standUpToCancer";
export default () =>
  S.list()
    .title("Websites")
    .items([mainSite(), raceForLife(), standUpToCancer()]);
