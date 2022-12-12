import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Shirt from "./Shirt";
import { Shirt2, Shirt3 } from "./Shirt";
import { Suspense, useRef, useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";

export default function Shop() {
  return (
    <>
      <div className="shopPage">
        <div className="window1">
          <Canvas className="content">
            <OrbitControls />
            <Suspense
              fallback={
                <mesh>
                  <sphereGeometry />
                  <meshBasicMaterial wireframe color="red" />
                </mesh>
              }
            >
              <Shirt />

              <Shirt2 />
              <Shirt3 />
            </Suspense>
          </Canvas>

          <Cart />
        </div>

        {/* <div className="window1">
          <Canvas className="content">
            <OrbitControls />
            <Shirt2 />
          </Canvas>
        </div>
        <div className="window1">
          <Canvas className="content">
            <OrbitControls />
            <Shirt3 />
          </Canvas>
        </div> */}
      </div>
    </>
  );
}
