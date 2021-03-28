// const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");

// require("enzyme").configure({ adapter: new Adapter() });

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });
