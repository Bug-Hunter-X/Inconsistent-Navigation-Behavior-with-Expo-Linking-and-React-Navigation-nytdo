# Inconsistent Navigation Behavior with Expo Linking and React Navigation

This repository demonstrates a bug related to the integration of Expo's `Linking` API with React Navigation.  When a deep link is opened, the navigation within the app sometimes fails to update correctly.  The issue manifests as inconsistent or delayed navigation updates despite successful triggering of the `Linking.addEventListener`.

The `bug.js` file shows the code exhibiting the problem. The `bugSolution.js` provides a solution that addresses this inconsistency.

## Reproducing the Bug

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` or `yarn install`.
4. Run `expo start`.
5. Open a deep link in your browser (replace with actual deep link URL) to see the erratic behavior.

## Solution

The solution implemented in `bugSolution.js` involves using a more robust approach to handle the navigation after the deep link is detected. This helps to ensure that the navigation updates reliably even in the case of race conditions or other inconsistencies.