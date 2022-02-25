import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "../config/particles-config";

export default function ParticleBackground() {
  return (
    <Particles width="100%" height="100vh" params={ParticleConfig}></Particles>
  );
}
