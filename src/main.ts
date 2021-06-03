import { FASTDesignSystemProvider } from "@microsoft/fast-components";

import { MyFastComponent } from "./components/myFastComponent";

/*
 * Ensure that tree-shaking doesn't remove these components from the bundle.
 * There are multiple ways to prevent tree shaking, of which this is one.
 */
FASTDesignSystemProvider;
MyFastComponent;
