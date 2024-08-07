import React, { useRef, useEffect } from "react";
import Matter from "matter-js";
import Two from "two.js";

export const GravityCanvas = () => {
  const canvasRef = useRef(null);
  const entitiesRef = useRef([]);
  const solverRef = useRef(null);
  const mouseRef = useRef(null);
  const twoRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Initialize Two.js
    const two = new Two({
      type: Two.Types.canvas,
      width: canvas.clientWidth,
      height: canvas.clientHeight,
      autostart: true,
    }).appendTo(canvas);
    twoRef.current = two;

    // Initialize Matter.js
    const solver = Matter.Engine.create();
    solver.world.gravity.y = 1;
    solverRef.current = solver;

    // Boundaries
    const bounds = {
      length: two.height,
      thickness: 50,
    };

    const createBoundary = (x, y, width, height) => {
      const rectangle = two.makeRectangle(x, y, width, height);
      rectangle.visible = false;
      rectangle.entity = Matter.Bodies.rectangle(x, y, width, height, {
        isStatic: true,
      });
      return rectangle;
    };

    const boundaries = {
      left: createBoundary(
        -bounds.thickness / 2,
        two.height / 2,
        bounds.thickness,
        two.height
      ),
      right: createBoundary(
        two.width + bounds.thickness / 2,
        two.height / 2,
        bounds.thickness,
        two.height
      ),
      bottom: createBoundary(
        two.width / 2,
        two.height + bounds.thickness / 2,
        two.width,
        bounds.thickness
      ),
    };

    Matter.World.add(solver.world, [
      boundaries.left.entity,
      boundaries.right.entity,
      boundaries.bottom.entity,
    ]);

    const addRectangles = () => {
      const rectWidth = 100;
      const rectHeight = 50;
      let x = rectWidth / 2;
      let y = -rectHeight / 2;

      for (let i = 0; i < 10; i++) {
        const rectangle = new Two.Rectangle(x, y, rectWidth, rectHeight);
        rectangle.fill = `rgba(255, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.85)`;
        rectangle.noStroke();
        rectangle.visible = true;

        const entity = Matter.Bodies.rectangle(x, y, rectWidth, rectHeight);
        entity.object = rectangle;
        entitiesRef.current.push(entity);

        two.add(rectangle);

        x += rectWidth + 10;
        if (x + rectWidth / 2 > two.width) {
          x = rectWidth / 2;
          y -= rectHeight + 10;
        }
      }

      Matter.World.add(solver.world, entitiesRef.current);
    };

    const resize = () => {
      const thickness = bounds.thickness;

      Matter.Body.setPosition(boundaries.bottom.entity, {
        x: two.width / 2,
        y: two.height + thickness / 2,
      });
      Matter.Body.setPosition(boundaries.left.entity, {
        x: -thickness / 2,
        y: two.height / 2,
      });
      Matter.Body.setPosition(boundaries.right.entity, {
        x: two.width + thickness / 2,
        y: two.height / 2,
      });
    };

    const addMouseInteraction = () => {
      const mouse = Matter.Mouse.create(canvas);
      const mouseConstraint = Matter.MouseConstraint.create(solver, {
        mouse: mouse,
        constraint: { stiffness: 0.2 },
      });

      Matter.World.add(solver.world, mouseConstraint);
      return mouseConstraint;
    };

    const mouse = addMouseInteraction();
    mouseRef.current = mouse;

    const update = () => {
      Matter.Engine.update(solver);
      entitiesRef.current.forEach((entity) => {
        entity.object.position.copy(entity.position);
        entity.object.rotation = entity.angle;
      });
    };

    addRectangles();
    two.bind("resize", resize).bind("update", update);

    return () => {
      two.unbind("resize", resize).unbind("update", update).pause();
      two.clear();
      Matter.World.clear(solver.world);
      Matter.Engine.clear(solver);
    };
  }, []);

  return <div ref={canvasRef} style={{ width: "100%", height: "500px" }} />;
};
