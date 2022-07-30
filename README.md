# dynamic-react-three-fiber-example
## Managing the dynamic adding and removing of React Three Fiber meshes and bodies

Having worked with React and Three.js, I was intrigued by the idea of a React approach to 3D web apps. 

I am specifically interested in Three.js + cannon physics and the react-three developer's [examples are pretty impressive](https://cannon.pmnd.rs/).

Looking through the various projects, I couldn't find an instance of dynamically creating/destroying a collection of objects. 
There are demos [where fix number of objects are created/destroyed](https://cannon.pmnd.rs/#/demo/CubeHeap) but I was looking for an example 
where a specific item could be removed based on some criteria (like a collision event). In this scenario, the total amount of objects would grow and shrink over time.

In this example, a ball is created every second. When a ball collides with a wall, it is removed...

![dynamic-react-three-fiber_1080x703](https://user-images.githubusercontent.com/42591798/181865083-630fad5f-cbb0-49f3-becb-883b7b45718f.gif)

As with React, using a hooked-based state-management solution will promote loose coupling and centralized logic. I recommend [zustand](https://www.npmjs.com/package/zustand), brought to you by the
@react-three [collective of open-source developers](https://pmnd.rs/).


## View In Sandbox
[codesandbox.io/s/managing-dynamic-react-three-cannon-bodies](https://codesandbox.io/s/managing-dynamic-react-three-cannon-bodies-ic9zl8)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/patrick-s-young/dynamic-three-cannon-example.git # or clone your own fork
cd dynamic-three-cannon-example
npm install
npm start
```


## Built With
* [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber) - React renderer for three.js.
* [@react-three/cannon](https://www.npmjs.com/package/@react-three/cannon) - React hooks for cannon-es, a rigid body physics engine.
* [zustand](https://www.npmjs.com/package/zustand) - state-management solution that uses simplified flux principles.
* [@react-three/drei](https://www.npmjs.com/package/@react-three/drei) - Helper library for @react-three/fiber.
* [webpack](https://webpack.js.org/) - static module builder.

## Authors

* **Patrick Young** - [Patrick Young](https://github.com/patrick-s-young)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
