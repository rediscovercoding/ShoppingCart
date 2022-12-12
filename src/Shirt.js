import { Clone, Html, Text, Text3D } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DoubleSide } from "three";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import Cart from "./Cart";
import { Bought } from "./Shop";

export default function Shirt() {
  //loading the shirt file with Draco compression
  const shirtDraco = useLoader(GLTFLoader, "./shirt4.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  const shirt2Ref = useRef();

  // function handleclick(e) {
  //   let value = e.target?.className;
  //   console.log(value);
  //   useRef(() => {
  //     console.log("value has changed");
  //   }, [value]);
  // }
  //animate the shirts
  useFrame(() => {
    shirt2Ref.current.rotation.y += 0.0053;
  });
  // console.log(shirtDraco);
  return (
    <>
      <primitive
        ref={shirt2Ref}
        object={shirtDraco.scene}
        position={[-5, -3, 0]}
        scale={0.5}
      >
        <Html
          position={[0, 5, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
        >
          <button className="Shirt1">Buy Me</button>
        </Html>
      </primitive>

      {/* <Clone
        ref={shirt1Ref}
        object={shirtDraco.scene}
        position={[-4, -3, 0]}
        inject={<meshMatcapMaterial side={DoubleSide} matcap={matcap} />}
      >
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          color="red"
          position-y={3}
          height={4}
          maxWidth={3}
          textAlign="center"
        >
          Shirt 1
        </Text>
      </Clone>*/}
    </>
  );
}

export function Shirt2() {
  //loading the shirt file with Draco compression
  const shirtDraco = useLoader(GLTFLoader, "./shirt5.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  const shirt2Ref = useRef();

  //animate the shirts
  useFrame(() => {
    shirt2Ref.current.rotation.y += 0.0053;
  });
  // console.log(shirtDraco);
  return (
    <>
      <primitive
        ref={shirt2Ref}
        object={shirtDraco.scene}
        position={[0, -3, 0]}
        scale={0.5}
      >
        <Html
          position={[0, 5, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
        >
          <button className="Shirt2">Buy Me</button>
        </Html>
      </primitive>
    </>
  );
}
export function Shirt3() {
  //loading the shirt file with Draco compression
  const shirtDraco = useLoader(GLTFLoader, "./shirt6.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    loader.setDRACOLoader(dracoLoader);
  });

  const shirt2Ref = useRef();

  //animate the shirts
  useFrame(() => {
    shirt2Ref.current.rotation.y += 0.0053;
  });
  // console.log(shirtDraco);
  return (
    <>
      <primitive
        ref={shirt2Ref}
        object={shirtDraco.scene}
        position={[5, -3, 0]}
        scale={0.5}
      >
        <Html
          position={[0, 5, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
        >
          <button className="Shirt3">Buy Me</button>
        </Html>
      </primitive>

      <ambientLight intensity={1.5} />
    </>
  );
}
