import React from "react";
import "./Container.css";
import SlideComponent from "../../components/SlideComponent/SlideComponent";
import ChisiamoComponent from "../../components/ChisiamoComponent/ChisiamoComponent";
import YellowCpmponent from "../../components/YellowComponent/YellowCpmponent";
import Escursioni from "../../components/Escursioni/Escursioni";
import Squadra from "../../components/Squadra/Squadra";
import TestimonianzaComponent from "../../components/TestimonianzaComponent/TestimonianzaComponent";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Advantages from "../../components/Advantages/Advantages";

const Container = () => {
  return (
    <div>
      <SlideComponent />
      <ChisiamoComponent />
      <Advantages />
      <YellowCpmponent />
      <Escursioni />
      <Squadra />
      <TestimonianzaComponent />
      <GetInTouch />
    </div>
  );
};

export default Container;
