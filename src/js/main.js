import { loadHeaderFooter } from "./utils.js";
import Admin from "./admin.js";

const myAdmin = new Admin("main");
myAdmin.showLogin();
loadHeaderFooter();
