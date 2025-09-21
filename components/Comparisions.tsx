"use client";

import React from "react";
import TypewriterCycle from "./TypeWriterCycle";
import { Table } from "./Table";

const Comparisions:React.FC = () => {
  const sentences = ["Are We Different?", "We Compare?", "We Stand Out?"];
  return (
    <section>
      <span>
        <TypewriterCycle sentences={sentences} />
      </span>
      <Table className="my-10"/>
    </section>
  );
};

export default Comparisions;
