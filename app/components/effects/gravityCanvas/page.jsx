// import React, { useRef, useEffect, useState } from "react";
// import Matter from "matter-js";
// import Two from "two.js";

// export const GravityCanvas = () => {
//   const canvasRef = useRef(null);
//   const entitiesRef = useRef([]);
//   const solverRef = useRef(null);
//   const mouseRef = useRef(null);
//   const twoRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     // Initialize dimensions once
//     const { width, height } = canvas.getBoundingClientRect();
//     if (width !== dimensions.width || height !== dimensions.height) {
//       setDimensions({ width, height });
//     }

//     // Initialize Two.js
//     const two = new Two({
//       type: Two.Types.canvas,
//       width: width,
//       height: height,
//       domElement: canvas,
//       autostart: true,
//     });
//     twoRef.current = two;

//     // Initialize Matter.js
//     const solver = Matter.Engine.create();
//     solver.world.gravity.y = 1;
//     solverRef.current = solver;

//     // Boundaries
//     const bounds = {
//       thickness: 50,
//       properties: {
//         isStatic: true,
//       },
//     };

//     const createBoundary = (x, y, boundaryWidth, boundaryHeight) => {
//       const rectangle = two.makeRectangle(x, y, boundaryWidth, boundaryHeight);
//       rectangle.visible = false;
//       const entity = Matter.Bodies.rectangle(
//         x,
//         y,
//         boundaryWidth,
//         boundaryHeight,
//         bounds.properties
//       );
//       entity.object = rectangle;
//       return entity;
//     };

//     const boundaries = {
//       left: createBoundary(
//         -bounds.thickness / 2,
//         height / 2,
//         bounds.thickness,
//         height
//       ),
//       right: createBoundary(
//         width + bounds.thickness / 2,
//         height / 2,
//         bounds.thickness,
//         height
//       ),
//       bottom: createBoundary(
//         width / 2,
//         height + bounds.thickness / 2,
//         width,
//         bounds.thickness
//       ),
//     };

//     Matter.World.add(solver.world, [
//       boundaries.left,
//       boundaries.right,
//       boundaries.bottom,
//     ]);

//     const addRectangles = () => {
//       const rectSize = width * 0.1; // Smaller size based on width

//       for (let i = 0; i < 20; i++) {
//         const x = Math.random() * (width - rectSize) + rectSize / 2;
//         const y = Math.random() * (height / 2);

//         const rectangle = two.makeRectangle(x, y, rectSize, rectSize);
//         rectangle.fill = `rgba(255, ${Math.floor(
//           Math.random() * 255
//         )}, ${Math.floor(Math.random() * 255)}, 0.85)`;
//         rectangle.noStroke();

//         const entity = Matter.Bodies.rectangle(x, y, rectSize, rectSize, {
//           density: 0.001,
//         });
//         entity.scale = new Two.Vector(rectSize, rectSize);
//         entity.object = rectangle;
//         entitiesRef.current.push(entity);
//       }

//       Matter.World.add(solver.world, entitiesRef.current);
//     };

//     const addMouseInteraction = () => {
//       const mouse = Matter.Mouse.create(canvas);
//       const mouseConstraint = Matter.MouseConstraint.create(solver, {
//         mouse: mouse,
//         constraint: {
//           stiffness: 0.2,
//           render: {
//             visible: false,
//           },
//         },
//       });

//       Matter.World.add(solver.world, mouseConstraint);
//       return mouseConstraint;
//     };

//     const mouse = addMouseInteraction();
//     mouseRef.current = mouse;

//     const update = () => {
//       Matter.Engine.update(solver);

//       const allBodies = Matter.Composite.allBodies(solver.world);
//       Matter.MouseConstraint.update(mouse, allBodies);
//       Matter.MouseConstraint._triggerEvents(mouse);

//       entitiesRef.current.forEach((entity) => {
//         entity.object.position.copy(entity.position);
//         entity.object.rotation = entity.angle;
//       });
//     };

//     addRectangles();
//     two.bind("update", update);

//     return () => {
//       two.unbind("update", update).pause();
//       two.clear();
//       Matter.World.clear(solver.world);
//       Matter.Engine.clear(solver);
//     };
//   }, [dimensions]);

//   return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
// };
import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";
import Two from "two.js";

export const GravityCanvas = () => {
  const canvasRef = useRef(null);
  const entitiesRef = useRef([]);
  const solverRef = useRef(null);
  const mouseRef = useRef(null);
  const twoRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;

    // Initialize dimensions once
    const { width, height } = canvas.getBoundingClientRect();
    if (width !== dimensions.width || height !== dimensions.height) {
      setDimensions({ width, height });
    }

    // Initialize Two.js
    const two = new Two({
      type: Two.Types.canvas,
      width: width,
      height: height,
      domElement: canvas,
      autostart: true,
    });
    twoRef.current = two;

    // Initialize Matter.js
    const solver = Matter.Engine.create();
    solver.world.gravity.y = 1;
    solverRef.current = solver;

    // Boundaries
    const bounds = {
      thickness: 50,
      properties: {
        isStatic: true,
      },
    };

    const createBoundary = (x, y, boundaryWidth, boundaryHeight) => {
      const rectangle = two.makeRectangle(x, y, boundaryWidth, boundaryHeight);
      rectangle.visible = false;
      const entity = Matter.Bodies.rectangle(
        x,
        y,
        boundaryWidth,
        boundaryHeight,
        bounds.properties
      );
      entity.object = rectangle;
      return entity;
    };

    const boundaries = {
      left: createBoundary(
        -bounds.thickness / 2,
        height / 2,
        bounds.thickness,
        height
      ),
      right: createBoundary(
        width + bounds.thickness / 2,
        height / 2,
        bounds.thickness,
        height
      ),
      bottom: createBoundary(
        width / 2,
        height + bounds.thickness / 2,
        width,
        bounds.thickness
      ),
    };

    Matter.World.add(solver.world, [
      boundaries.left,
      boundaries.right,
      boundaries.bottom,
    ]);

    const addRectangles = () => {
      const colors = [
        "#62bfad",
        "#19aad1",
        "#005397",
        "#fb9b2a",
        "#ff8788",
        "#e57066",
        "#f0cf61",
        "#aee0bc",
        "#efe8d8",
        "#ff8fa4",
        "#501718",
      ];

      const rectWidth = width * 0.1;
      const rectHeight = height * 0.05; // Adjust height to make them rectangles

      for (let i = 0; i < 10; i++) {
        const x = Math.random() * (width - rectWidth) + rectWidth / 2;
        const y = Math.random() * (height / 2);

        const rectangle = two.makeRectangle(x, y, rectWidth, rectHeight);
        rectangle.fill = colors[i % colors.length];
        rectangle.noStroke();

        const entity = Matter.Bodies.rectangle(x, y, rectWidth, rectHeight, {
          density: 0.001,
        });
        entity.object = rectangle;
        entitiesRef.current.push(entity);
      }

      Matter.World.add(solver.world, entitiesRef.current);
    };

    const addMouseInteraction = () => {
      const mouse = Matter.Mouse.create(canvas);
      const mouseConstraint = Matter.MouseConstraint.create(solver, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

      Matter.World.add(solver.world, mouseConstraint);
      return mouseConstraint;
    };

    const mouse = addMouseInteraction();
    mouseRef.current = mouse;

    const update = () => {
      Matter.Engine.update(solver);

      const allBodies = Matter.Composite.allBodies(solver.world);
      Matter.MouseConstraint.update(mouse, allBodies);
      Matter.MouseConstraint._triggerEvents(mouse);

      entitiesRef.current.forEach((entity) => {
        entity.object.position.set(entity.position.x, entity.position.y);
        entity.object.rotation = entity.angle;
      });
    };

    addRectangles();
    two.bind("update", update);

    return () => {
      two.unbind("update", update).pause();
      two.clear();
      Matter.World.clear(solver.world);
      Matter.Engine.clear(solver);
    };
  }, [dimensions]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};
