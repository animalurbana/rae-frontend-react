This react app is a simple rae definitions display and definitions can be copied to clipboard. The frontend do an api get request and then display the definitions with react components.

This app use a package called @jodacame/raejs in the backend. I try to use it in the reactjs framework, but it gave me an error about webpack. After I tried a lot of fixes on the frontend, among them I tried different packages but they all had the same issue, the most efficient way to resolve it and continue with the project, because this was intented to be a html/css/js practice project, was to create an express backend api with only a get.

The rae packages has some issues: 1. If the world ends in a vowel with accent mark it doesn't recoginize the world 2. It doesn't bring all the combination of the sayings definitions with that world. 3. It doesn't decode the strings 4. it does not show the conjugations of the verbs  5. it doen't recoginize capital letters

The backend use cors package and he package for decode the unicode response that all package hadn't resolve as well.

